import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Linking, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebViewNavigation } from 'react-native-webview';
import WebviewScreen, { WebviewScreenRef } from '../components/WebviewScreen';
import { DEPLOY_URL } from '../shared/const/url';

/**
 * HomeScreen 컴포넌트
 * 메인 웹 페이지를 WebView로 표시하고 카카오 OAuth 딥링크를 처리합니다.
 *
 * 주요 기능:
 * 1. WebView를 통한 웹 앱 표시
 * 2. 카카오 OAuth 딥링크 수신 및 처리
 * 3. 인증 코드를 WebView로 전달하여 로그인 완료 처리
 * 4. 로그인 상태 추적 및 사용자 피드백 제공
 */
const HomeScreen = () => {
	const insets = useSafeAreaInsets(); // Safe Area 영역 정보 (상태바, 노치 등)
	const webViewRef = useRef<WebviewScreenRef>(null); // WebView 제어를 위한 ref
	const [isLoginProcessing, setIsLoginProcessing] = useState(false); // 로그인 진행 상태 관리

	useEffect(() => {
		/**
		 * 딥링크 URL을 처리하는 핵심 함수
		 * 카카오 OAuth 인증 완료 후 리다이렉트되는 딥링크를 처리합니다.
		 *
		 * 처리 플로우:
		 * 1. 카카오 로그인 완료 → graypick://oauth/kakao?code=AUTH_CODE로 리다이렉트
		 * 2. 앱이 딥링크를 수신하면 이 함수가 호출됨
		 * 3. URL에서 인증 코드 추출
		 * 4. WebView로 인증 코드 전달
		 * 5. 웹 페이지에서 로그인 처리 완료
		 *
		 * @param url - 수신된 딥링크 URL
		 */
		const handleDeepLink = (url: string | null) => {
			if (!url) return;

			console.log('Received deep link:', url);

			// 카카오 OAuth 딥링크인지 확인 (예: graypick://oauth/kakao?code=AUTH_CODE)
			if (url.includes('graypick://oauth/kakao')) {
				// 로그인 처리 상태를 해제하여 "로그인 처리 중" 화면에서 벗어나도록 함
				setIsLoginProcessing(false);

				try {
					// URL 객체로 파싱하여 쿼리 파라미터 안전하게 추출
					const urlObj = new URL(url);
					const code = urlObj.searchParams.get('code'); // 인증 코드
					const error = urlObj.searchParams.get('error'); // 에러 정보

					// 인증 코드가 있는 경우 (로그인 성공)
					if (code && webViewRef.current) {
						console.log('Auth code received:', code);

						/**
						 * WebView로 JavaScript 코드를 주입하여 인증 코드 전달
						 * 이 스크립트는 웹 페이지에서 실행되어 로그인 처리를 완료합니다.
						 *
						 * 실행 순서:
						 * 1. window.postMessage로 인증 코드 전송
						 * 2. 웹 페이지에 handleKakaoAuthCode 함수가 있다면 호출
						 * 3. 없다면 대시보드 페이지로 리다이렉트
						 */
						const script = `
              // 웹 페이지로 인증 성공 메시지 전송
              window.postMessage(JSON.stringify({
                type: 'kakao-auth-success',
                code: '${code}'
              }), '*');
              
              // 웹 페이지에 카카오 인증 코드 처리 함수가 있다면 호출
              if (window.handleKakaoAuthCode) {
                window.handleKakaoAuthCode('${code}');
              } else {
                // 처리 함수가 없다면 대시보드로 리다이렉트
                window.location.href = '/dashboard';
              }
              true; // JavaScript 주입 성공 표시
            `;
						webViewRef.current.injectJavaScript(script);

						// 사용자에게 로그인 성공 알림
						Alert.alert('로그인 성공', '카카오 로그인이 완료되었습니다.');
					} else if (error) {
						// OAuth 에러가 있는 경우 (사용자 취소, 권한 거부 등)
						console.error('OAuth error:', error);
						Alert.alert('로그인 실패', `오류: ${error}`);
					} else {
						// 인증 코드도 에러도 없는 경우 (비정상적인 상황)
						console.error('No auth code or error found in URL');
						Alert.alert('로그인 실패', '인증 정보를 찾을 수 없습니다.');
					}
				} catch (parseError) {
					// URL 파싱 실패 (잘못된 형식의 딥링크)
					console.error('Failed to parse deep link URL:', parseError);
					Alert.alert('로그인 실패', 'URL 파싱 오류가 발생했습니다.');
				}
			}
		};

		/**
		 * 딥링크 이벤트 리스너 설정
		 * React Native의 Linking API를 사용하여 두 가지 딥링크 시나리오를 처리합니다:
		 *
		 * 1. 앱이 실행 중일 때 딥링크 수신 (addEventListener)
		 * 2. 앱이 종료 상태에서 딥링크로 시작될 때 (getInitialURL)
		 */

		// 시나리오 1: 앱이 이미 실행 중일 때 딥링크 처리
		// 카카오 로그인 후 앱으로 돌아올 때 이 리스너가 호출됨
		const linkingListener = Linking.addEventListener('url', (e) => {
			handleDeepLink(e.url);
		});

		// 시나리오 2: 앱이 종료된 상태에서 딥링크로 시작될 때 처리
		// 예: 앱이 완전히 종료된 상태에서 카카오 로그인 완료 후 딥링크로 앱 실행
		Linking.getInitialURL().then((url) => {
			handleDeepLink(url);
		});

		// 컴포넌트 언마운트 시 리스너 정리
		return () => {
			linkingListener.remove();
		};
	}, []);

	/**
	 * WebView 네비게이션 상태 변경 핸들러
	 * 사용자가 웹 페이지를 탐색할 때마다 호출되어 로그인 상태를 추적합니다.
	 *
	 * 추적하는 상태:
	 * 1. 카카오 로그인 페이지 진입 → 로그인 처리 중 상태로 변경
	 * 2. 콜백 페이지 진입 → 로그인 처리 중 상태 유지
	 * 3. 메인 페이지 복귀 → 로그인 처리 완료 상태로 변경
	 *
	 * @param navState - WebView의 현재 네비게이션 상태 (URL, 로딩 여부 등)
	 */
	const handleNavigationStateChange = (navState: WebViewNavigation) => {
		const { url, loading } = navState;

		console.log('Navigation state changed:', { url, loading });

		// 카카오 OAuth 관련 페이지로 이동 시 로그인 처리 상태로 설정
		// 1. kauth.kakao.com: 카카오 로그인 페이지
		// 2. /api/auth/callback/kakao: 로그인 완료 후 콜백 페이지 ("로그인 처리 중" 표시)
		if (url.includes('kauth.kakao.com') || url.includes('/api/auth/callback/kakao')) {
			setIsLoginProcessing(true);
		}

		// 로그인 처리 완료 후 메인 페이지로 돌아온 경우 상태 해제
		// 딥링크 처리 외에 일반적인 웹 네비게이션으로도 상태를 정리
		if (url === DEPLOY_URL && isLoginProcessing) {
			setIsLoginProcessing(false);
		}
	};

	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
			{/* 
        WebviewScreen 컴포넌트:
        - uri: 초기 로드할 웹 페이지 URL
        - ref: WebView 제어를 위한 참조 (JavaScript 주입 등)
        - onNavigationStateChange: 페이지 이동 시 로그인 상태 추적
      */}
			<WebviewScreen uri={DEPLOY_URL} ref={webViewRef} onNavigationStateChange={handleNavigationStateChange} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default HomeScreen;

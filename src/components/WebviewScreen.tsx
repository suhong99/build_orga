import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import WebView, { WebViewNavigation } from 'react-native-webview';
import type { WebViewErrorEvent, WebViewHttpErrorEvent } from 'react-native-webview/lib/WebViewTypes';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';
import { Linking, Platform } from 'react-native';

// WebviewScreen 컴포넌트의 props 타입 정의
interface WebviewScreenProps {
	uri: string; // WebView에 로드할 초기 URL
	onNavigationStateChange?: (navState: WebViewNavigation) => void; // 네비게이션 상태 변경 콜백
}

// WebviewScreen 컴포넌트의 ref로 노출할 메서드들
export interface WebviewScreenRef {
	injectJavaScript: (script: string) => void; // JavaScript 코드를 WebView에 주입
	goBack: () => void; // 이전 페이지로 이동
	reload: () => void; // 현재 페이지 새로고침
}

// forwardRef를 사용하여 부모 컴포넌트에서 WebView 제어 가능하도록 함
const WebviewScreen = forwardRef<WebviewScreenRef, WebviewScreenProps>(({ uri, onNavigationStateChange }, ref) => {
	const webViewRef = useRef<WebView>(null);

	// useImperativeHandle을 통해 부모 컴포넌트에서 사용할 수 있는 메서드 노출
	// 이를 통해 부모에서 WebView를 직접 제어할 수 있음
	useImperativeHandle(ref, () => ({
		// WebView에 JavaScript 코드 주입 메서드
		// 딥링크 수신 후 인증 코드를 웹 페이지로 전달할 때 사용
		injectJavaScript: (script: string) => {
			webViewRef.current?.injectJavaScript(script);
		},
		// 이전 페이지로 이동
		goBack: () => {
			webViewRef.current?.goBack();
		},
		// 현재 페이지 새로고침
		reload: () => {
			webViewRef.current?.reload();
		},
	}));

	/**
	 * WebView가 새로운 URL을 로드하기 전에 호출되는 핸들러
	 * 딥링크 URL을 감지하여 WebView 대신 앱에서 처리하도록 함
	 *
	 * @param request - 로드하려는 URL 정보를 담은 객체
	 * @returns false면 WebView 로딩 중단, true면 계속 진행
	 */
	const handleShouldStartLoadWithRequest = (request: ShouldStartLoadRequest): boolean => {
		const { url } = request;

		// 카카오 OAuth 인증 완료 후 리다이렉트되는 딥링크 URL 감지
		// 예: graypick://oauth/kakao?code=AUTH_CODE
		if (url.includes('graypick://oauth/kakao')) {
			// 딥링크를 네이티브 앱에서 처리하도록 전환
			// 이렇게 하면 HomeScreen의 딥링크 리스너가 이 URL을 수신함
			Linking.openURL(url).catch((err) => {
				console.error('Failed to open deep link:', err);
			});
			// WebView에서 해당 URL 로딩을 중단하여
			// "로그인 처리 중입니다" 화면에 머물지 않도록 함
			return false;
		}

		// 일반 URL(http/https)은 WebView에서 정상적으로 로드
		return true;
	};

	/**
	 * WebView의 네비게이션 상태가 변경될 때마다 호출되는 핸들러
	 * Android에서는 onShouldStartLoadWithRequest가 작동하지 않을 수 있어
	 * 이 핸들러에서 추가로 딥링크를 처리함
	 *
	 * @param navState - 현재 URL, 로딩 상태 등의 정보를 담은 객체
	 */
	const handleNavigationStateChange = (navState: WebViewNavigation) => {
		const { url } = navState;

		// Android 플랫폼에서 딥링크 처리
		// Android에서는 onShouldStartLoadWithRequest가 일부 상황에서
		// 호출되지 않을 수 있어 여기서 한 번 더 체크
		if (Platform.OS === 'android' && url.includes('graypick://oauth/kakao')) {
			Linking.openURL(url).catch((err) => {
				console.error('Failed to open deep link:', err);
			});
		}

		// 부모 컴포넌트(HomeScreen)로 상태 변경 전달
		// 로그인 진행 상태를 추적하기 위해 사용됨
		onNavigationStateChange?.(navState);
	};

	return (
		<WebView
			ref={webViewRef}
			source={{ uri }}
			// iOS에서 주로 작동하는 URL 로딩 인터셉터
			onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
			// 네비게이션 상태 변경 감지 (Android 딥링크 처리 포함)
			onNavigationStateChange={handleNavigationStateChange}
			// JavaScript 실행 허용 (postMessage, 인증 코드 처리 등에 필요)
			javaScriptEnabled={true}
			// DOM Storage 허용 (웹 앱의 로컬 스토리지 사용)
			domStorageEnabled={true}
			// 로딩 중 인디케이터 표시
			startInLoadingState={true}
			// iOS에서 스와이프로 뒤로/앞으로 이동 허용
			allowsBackForwardNavigationGestures={true}
			// HTTP/HTTPS 혼합 콘텐츠 허용
			mixedContentMode="always"
			// 모든 origin 허용 (딥링크 포함)
			originWhitelist={['*']}
			// WebView 에러 발생 시 로깅
			onError={(syntheticEvent: WebViewErrorEvent) => {
				const { nativeEvent } = syntheticEvent;
				console.error('WebView error: ', nativeEvent);
			}}
			// HTTP 에러 발생 시 로깅
			onHttpError={(syntheticEvent: WebViewHttpErrorEvent) => {
				const { nativeEvent } = syntheticEvent;
				console.error('WebView HTTP error: ', nativeEvent);
			}}
		/>
	);
});

WebviewScreen.displayName = 'WebviewScreen';

export default WebviewScreen;

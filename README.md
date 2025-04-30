# 그래, 이 픽

로컬 실행

```bash
npm run dev
```

스토리북 실행

```bash
npm run storybook
```

## 폴더구조

FSD를 간소화 시킨 폴더 구조 사용

- **규칙**
  1.  pages, features, shared 세 가지 레이어를 사용
  2.  next.js 특성상 pages는 app으로 대체
  3.  하위 레이어에서 상위 레이어를 import 금지
  4.  동일 레이어끼리는 import 가능
  5.  지엽적인 상수나 타입은 컴퍼넌트 내부, 피쳐 혹은 공용 상수나 타입은 hooks 및 types 폴더에서 관리

```
📦src
┣ 📂app / # next.js 페이지 컴퍼넌트
┣ 📂features / # feature 단위 컴퍼넌트
┃ ┗ 📂layout / # feature 명
┃ ┃ ┣ 📂const / # 상수
┃ ┃ ┣ 📂hooks / # 훅
┃ ┃ ┣ 📂types / # 타입
┃ ┃ ┣ 📜layout.css / # 관련 css
┃ ┃ ┗ 📜Header.tsx / # 관련 컴퍼넌트
┣ 📂shared / # shared 레이어 파일
┃ ┗ 📂components / # 컴퍼넌트
┃ ┃ ┣ 📜SolidBtn.stories.ts / # 공용 컴퍼넌트의 경우 스토리 작성
┃ ┃ ┗ 📜SolidBtn.tsx
┃ ┣ 📂const / # 상수
┃ ┣ 📂hooks / # 훅
┃ ┣ 📂styles / # css
┃ ┣ 📂svg / # svg컴퍼넌트
┣ ┗ 📂types / # 타입
┣ 📂stories / # 스토리 관련 mdx 파일
┃ ┗ 📜index.mdx
```

## 컨벤션

- **네이밍 컨벤션**

| 대상                           | 명명법                           | 예시                                                 |
| ------------------------------ | -------------------------------- | ---------------------------------------------------- |
| 폴더                           | 케밥 케이스                      | user-profile                                         |
| tsx 컴포넌트                   | 파스칼 케이스 , index.tsx는 예외 | Header.tsx                                           |
| 파일                           | 카멜 케이스                      | useLogin.ts                                          |
| 변수 및 함수                   | 카멜 케이스                      | userProfile                                          |
| 매개변수                       | 카멜 케이스                      | userNum                                              |
| boolean타입의 변수 및 반환함수 | is, has, can으로 시작            | isLoading                                            |
| 상수                           | 스크리밍 스네이크 케이스         | USER_PROFILE                                         |
| 타입                           | 파스칼 케이스                    | ProfileProps                                         |
| 배열 변수                      | 접미사로 List                    | const [userList, setUserList] = useState<User[]>([]) |
| 이벤트핸들러                   | handle 접두사                    | const handleLogin=()=>{}                             |
| 번역시 어렵거나 복잡한 용어    | 한글                             | 발의법안                                             |

- **축약어**
  | 원어 | 축약어 | 원어 | 축약어 |
  |--------------|--------|----------------|--------|
  | button | btn | color | clr |
  | image | img | property | prop |
  | input | inp | parameter | param |
  | navigation | nav | configuration | config |
  | section | sec | information | info |
  | background | bg |foreground | fg |
  | number | num | temporary | tmp |
  | message | msg | error | err |

- **prettier**

  ```json
  {
  	"printWidth": 150,
  	"tabWidth": 2,
  	"singleQuote": true,
  	"trailingComma": "all",
  	"bracketSpacing": true,
  	"semi": true,
  	"useTabs": true,
  	"arrowParens": "always"
  }
  ```

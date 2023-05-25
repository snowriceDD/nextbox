This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


-------


## 왜 Next를 쓰는가?

CSR → 구글 검색 노출 낮음, 초기 페이지 로딩 속도 낮음

SSR → 해당 문제에 대한 보완적

SSR로 웹 사이트를 구성하면?

→ useState, 상태관리, useEffect, Ajax, 비동기, props, react-query, redux의 의존도를 줄일 수 있음

Next.js를 사용하는 이유?

- React 문법 유지하며, 풀스택 개발이 가능
- 파일과 디렉토리만 잘 생성해도, 라우터 기능 구현 가능
- auth 구현도 비교적 쉬워짐
- 부분적으로 CSR 구현 가능
- 서버 데이터 캐싱 가능
- 이미지 최적화 가능

단점

- 디렉토리 기반 라우팅으로 프로젝트가 커지면 복잡해짐
- 리액트 미완성 기능이 구현되어 있음
- Client Component와 Server Component의 구분된 구성을 해야 함
- websocket, webRTC를 쓰려면 서버 구성을 하나 더 해야함
- 

## 개발환경 셋팅13.2.4

- **node 버전 관리**
    
    macOS 환경에서 Node.js 버전을 관리하려면 nvm(노드 버전 관리자)과 같은 버전 관리자를 사용할 수 있습니다. Node.js 버전을 설정하고 관리하는 방법은 다음과 같습니다.
    
    1. nvm 설치:
        - 터미널을 엽니다.
        - 다음 명령을 실행하여 nvm을 설치합니다.
            
            ```
            bashCopy code
            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
            
            ```
            
    2. 변경 사항이 적용되도록 터미널을 닫았다가 다시 열거나 다음 명령을 실행하여 nvm을 로드합니다.
        
        ```
        bashCopy code
        source ~/.nvm/nvm.sh
        
        ```
        
    3. 다음을 실행하여 nvm이 올바르게 설치되었는지 확인합니다.
        
        ```
        cssCopy code
        nvm --version
        
        ```
        
    4. nvm을 사용하여 특정 Node.js 버전을 설치합니다.
        - 최신 LTS(장기 지원) 버전을 설치하려면 다음을 실행합니다.
            
            ```
            cssCopy code
            nvm install --lts
            
            ```
            
        - 특정 Node.js 버전을 설치하려면 다음을 실행하세요.
            
            ```
            phpCopy code
            nvm install <version>
            
            ```
            
            `<버전>`을 "14.17.0" 또는 "16.13.0"과 같은 원하는 버전으로 바꿉니다. `nvm ls-remote`를 실행하여 사용 가능한 버전을 찾을 수 있습니다.
            
    5. Node.js 버전 간 전환:
        - 현재 터미널 세션에서 특정 Node.js 버전을 사용하려면 다음을 실행합니다.
            
            ```
            perlCopy code
            nvm use <version>
            
            ```
            
            `<버전>`을 사용하려는 버전으로 바꿉니다.
            
        - 새 터미널 세션에 대한 기본 Node.js 버전을 설정하려면 다음을 실행합니다.
            
            ```
            csharpCopy code
            nvm alias default <version>
            
            ```
            
            `<버전>`을 기본값으로 설정하려는 버전으로 바꿉니다.
            
    6. Node.js 버전을 확인합니다.
        - 다음 명령을 실행하여 현재 활성 Node.js 버전을 확인하십시오.
            
            ```
            cssCopy code
            node --version
            
            ```
            
    
    nvm을 사용하면 다양한 Node.js 버전 간에 쉽게 전환하고 요구 사항에 따라 관리할 수 있습니다.
    

### 파일 설명

- page.js :
- layout.js : page.js를 감싸는 파일, head tag 내에 작성되는 것들 등
- globals.css : 글로벌 스타일
- page.module.css : 특정 페이지 스타일 (page 부분만 바꿔가며 사용하면 됨)
- api 디렉토리 : 서버기능 구현
- node_modules: 설치한 라이브러리 보관
- public: 이미지 등 잡다한 파일 보관(소스 코드 외)
- package.json : 설치한 라이브러리 버전 기록, 터미널 명령어 기록

## 기초

- Next는 react jsx 문법을 사용
- JSX basic 1. HTML 표현 : 꼭 대표하는 하나의 html 태그로 시작해서 감싸주고 끝나기
    
    ```tsx
    return (
    	<div>
    		<p />
    	</div>
    )
    ```
    
- html 안에 변수는 { … }
    
    ```tsx
    <p>{변수명}</p>
    <div style={{ 변수명(color : 'red') }}>스타일에도 변수 가능</div> //object 자료형식
    ```
    

## 라우팅

- Next.js는 라우팅을 디렉토리와 파일로 자동 구현해줌

1. app 디렉토리 안에 새 디렉토리(원하는 path 명으로)를 만듬
2. 새 디렉토리 안에 page.js 파일을 만들고 JSX 문법에 맞게 작성해주면 자동으로 url과 페이지가 생성.
3. 중첩라우팅은 새 디렉토리 안에 또 새새 디렉토리를 만들면 됨.

**한 레이아웃으로 묶이는 페이지에 모두 적용되는 ui를 만들려면?**

ex) navbar, ads 등

1. 해당 컴포넌트를 layout.js 파일에 넣어줌.
2. 모든 페이지에 원하면 최상위 layout.js 파일에 컴포넌트를 넣어줌.

**nextree**

[app] = ‘/’

- layout.js
- page.js
- [sub1] = ‘/sub1’
    - [subDetails] = ’sub1/subDetails’
        - page.js
    - page.js
- [sub2] = ‘/sub2’
    - [subDetails] = ’sub2/subDetails’
        - page.js
    - layout.js
    - page.js

## 이미지 넣는 법

- `**<img />**` - 기존 html 문법을 쓴다.
    - 기존 방식 그대로, query 사용하기 좋음
- `**<Image />**` -  next component를 사용한다.
    - lazy loading, 사이즈 최적화, layout shift 방지하는 기능을 가짐
    - import 문으로 image 파일도 가져와줘야 함.
    - 데이터에 따라 변칙적으로 바뀌어야 할 이미지에 대해서는 조금 고민을..

---

## Component 화

1. 함수 만들기(camel case)
2. 리액트 문법대로 리턴문에 원하는 UI 작성
3. <Component />

모든 요소를 컴포넌트화 할 필요까진 없다.

### Next Components

1. server component : html 상에 JS 기능을 넣을 수 없음
    1. default 
    2. 로드가 빠름
    3. SEO 이점
2. client component : React hook, html - JS 기능을 넣을 수 있음
    1. ‘use client’를 써야.
    2. 로딩 속도가 느림
    3. hydration을 걸침

**목적**

1. 제품 별로 +, - 수량을 변경할 수 있는 기능을 구현하고자 함.
2. 제품 별로 상태 값이 분리되어 변경되어야 함.

**발생한 문제**

1. map으로 생성된 다른 개체의 상태 값도 같이 변경됨.

**해결 방법**

1. onClick 함수 사용을 위해 ‘use client’ 선언
2. onClick 함수 내, `스프레드 연산자`를 사용하여 상태 값을 복사
3. 복사된 상태값의 특정 인덱스에 연산 처리
4. 복사된 상태값과 진짜 상태값을 비교하여 업데이트 실행

```
let [num, setNum] = useState([0, 0, 0]);

return (<>
{product.map((e, i)=> {
          return (<div className="food" key={i}>
            <img src={`/food${i}.png`} alt={`food${i} 식품 이미지`}/>
            <h4>{e[0]} ${e[1]}</h4>

            **<button onClick={() => {
              let cloneNum = [...num] //배열 복사용 spread oprt
              cloneNum[i]-=1; //배열의 특정 인덱스 값에 연산처리
              setNum(cloneNum) //재렌더링을 위한 비교실행
            }}> - </button>

            <span> {num[i]} </span>

            <button onClick={() => {
              let cloneNum = [...num]
              cloneNum[i]+=1;
              setNum(cloneNum)
            }}> + </button>**

          </div>)
</>);
```

---
### Next.js with Database

**DB 종류**

- 관계형 데이터베이스
    - 데이터를 엑셀처럼 표에 저장
    - SQL 언어를 사용하여 데이터 입출력을 관리
    - 스키마 정의 필요
    - 데이터 중복 저장을 피하기 위한 정규화 필요
- 비관계형 데이터베이스
    - 비교적 자유로운 형식으로 저장
    - SQL, 스키마 정의, 정규화가 필수되지 않음
    - 분산처리에 용이

**MongoDB 데이터 저장 방식**

*(여담인데, 전에 면접에서 질문이 나왔었다)*

collection을 개설하고, 그 안에 document를 만들어 데이터를 기록하는 방식으로 데이터를 저장

```json
{ dataName1 : value1, dataName2 : value2, ... }
```

document에 데이터를 기록할 때는 JS의 object 자료형과 같은 방식으로 저장

**예시**

- **게시판**
    - 게시판글 collection
        - document(글 제목, 글쓴이, 글 내용 등)
        - document(글 제목, 글쓴이, 글 내용 등)
        - document(글 제목, 글쓴이, 글 내용 등)

mongodb → Database → browse collection → 

**await**

- js에서 처리가 늦게되는 코드에 대해 기다려주기 위해, 제껴두고 다음 줄을 실행시키는 코드
- promise를 리턴하는 코드에만 가능

**next의 server component와 client component 구분?**

1. server component에는 상호작용성이 없음(hook, browser API 등)
2. server component에는 상태관리나 생애주기를 필요로 하지 않음
3. next의 기본값은 server component, ‘use client’를 명시해주면 client component
4. 터미널 창에 로그(server), 브라우저 콘솔 탭(client)

**next가 기본적으로 SSR 셋팅**

⇒ server to client의 Javascript 양을 줄여 초기 페이지 로드를 빠르게 하기 위해.

**최상위 page component(page.js)를 ‘use client’ 해버리면?**

⇒ next.js를 사용하는 의미가 없어짐.(페이지 로드가 CSR처럼)

---

**상세페이지**

1. 글 클릭 ⇒ 상세페이지 이동
2. 클릭될 글의 objectId를 상태관리 ⇒ 상세페이지에서 해당 objectId를 사용하도록
3. 상세페이지 (DB로 부터 html 렌더링)
4. 

## Router

---

### server component

중첩 라우트 디테일 페이지 ⇒ **dynamic route**

⇒ 디렉토리 명을 **[디렉토리]** 형식으로

⇒ url의 이 부분에 입력된 값이 parmas로 발생

*ex) /detail/[id] ⇒ /detail/123456789*

*component* - **Link**

```jsx
<Link href = {'/'}></Link>
```

이 컴포넌트는 *prefetch기능을 제공하는 <a>의 HTML 요소.*

클라이언트 사이드에서의 경로를 탐색해줌.

Link 컴포넌트는 아래와 같은 속성을 지님(대표적인 3가지만)

- **href** : 탐색할 경로 또는 url를 입력하는 곳
- **replace :** *(default: false)* ****true인 경우 `Link`는 브라우저의 히스토리 스택에 새 URL을 추가하는 대신 현재 히스토리 상태를 대체
- **prefetch :** *(default: true)* 백그라운드에서 페이지(href로 표시됨)를 미리 가져 옴. 이는 클라이언트 측 탐색의 성능을 개선하는 데 유용

[Routing: Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)

[Components: <Link>](https://nextjs.org/docs/pages/api-reference/components/link)

---

### client component

*function*- **useRouter()**

*상호작용에서 사용*

```jsx
'use client'
import { useRouter } from ...;

function DetailRoute() {
	let router = useRouter();

	return (
		<button onClick={()=>{ router.push('/') }>button</button> //(.../) 으로 이동
		<button onClick={()=>{ router.back() }>button</button> //뒤로가기(아마 history)
		<button onClick={()=>{ router.forward() }>button</button> //앞으로 가기
		<button onClick={()=>{ router.refresh() }>button</button> //바뀐 부분만 새로고침
		<button onClick={()=>{ router.prefetch('/') }>button</button>
			//해당 path의 내용을 미리 로드 => 사용자 경험에서 유리
	)
}
```

[Functions: useRouter](https://nextjs.org/docs/pages/api-reference/functions/use-router)
    
--- 

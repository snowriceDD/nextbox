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

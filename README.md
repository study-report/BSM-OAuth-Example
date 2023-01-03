Bsm Oauth의 흐름입니다.
1. 가장 먼저 [Bsm Oauth 클라이언트](https://auth.bssm.kro.kr/oauth/manage)에서 나만의 프로젝트를 만듭니다.
2. 프로젝트를 생성한 후, 자세히 보기를 누릅니다. 
3. [[BE]](https://github.com/study-report/BSM-OAuth-Example/blob/main/pages/api/handleAuth.ts) 자세히 보기를 누른 후, `클라이언트 시크릿`, `클라이언트 ID`를 잘 확인하고 프로젝트 예제 코드에 넣습니다.
4. [[FE]](https://github.com/study-report/BSM-OAuth-Example/blob/main/pages/oauth/bsm.tsx) 그리고 [예제 코드](https://github.com/leehj050211/bsm-oauth-js#typescript)를 따라서 인가받은 정보를 확인합니다. (자동으로 `/oauth/bsm?code=어쩌구` 로 redirecting 됨)

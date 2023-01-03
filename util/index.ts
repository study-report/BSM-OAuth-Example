import { NextRouter } from "next/router";

export const moveToOauth = (router: NextRouter) => {
  router.push(
    "https://auth.bssm.kro.kr/oauth?clientId=e7f2af3c&redirectURI=http://localhost:3000/oauth/bsm"
  );
};

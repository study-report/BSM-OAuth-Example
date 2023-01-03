import { postAuth } from "../model/oauth";

const useBsmOauth = async (
  authCode: string,
  BSM_AUTH_CLIENT_ID: string,
  BSM_AUTH_CLIENT_SECRET: string
) => {
  if (authCode !== "undefined") {
    const data = await postAuth({
      authCode: authCode,
      BSM_AUTH_CLIENT_ID: BSM_AUTH_CLIENT_ID,
      BSM_AUTH_CLIENT_SECRET: BSM_AUTH_CLIENT_SECRET,
    });
    return data;
  }
};

export default useBsmOauth;

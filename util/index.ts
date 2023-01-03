import { NextRouter } from "next/router";
import { env } from "../config";

export const moveToOauth = (router: NextRouter) => {
  router.push(env.BSM_OAUTH_REDIRECT_URL!);
};

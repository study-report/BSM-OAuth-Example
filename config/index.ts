import { Env } from "./../interface/config.type";

const env: Env = {
  BSM_CLIENT_SECRET: process.env.BSM_CLIENT_SECRET!,
  BSM_CLIENT_ID: process.env.BSM_CLIENT_ID!,
  BSM_OAUTH_REDIRECT_URL: process.env.BSM_OAUTH_REDIRECT_URL,
};
export { env };

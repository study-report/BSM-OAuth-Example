import instance from "../../lib/instance";

interface BodyData {
  authCode: string;
  BSM_AUTH_CLIENT_ID: string;
  BSM_AUTH_CLIENT_SECRET: string;
}

export const postAuth = async (bodyData: BodyData) => {
  try {
    const { data } = await instance.post("/handleAuth", bodyData);
    return data;
  } catch (error) {
    throw error;
  }
};

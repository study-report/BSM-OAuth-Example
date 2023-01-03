import { BodyData } from "../../interface/auth.type";
import instance from "../../lib/instance";

export const postAuth = async (bodyData: BodyData) => {
  try {
    const { data } = await instance.post("/handleAuth", bodyData);
    return data;
  } catch (error) {
    throw error;
  }
};

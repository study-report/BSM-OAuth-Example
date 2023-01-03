import { NextApiRequest, NextApiResponse } from "next";
import BsmOauth, {
  BsmOauthError,
  BsmOauthErrorType,
  StudentResource,
  TeacherResource,
} from "bsm-oauth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authCode = req.body.authCode;
  const BSM_AUTH_CLIENT_ID = req.body.BSM_AUTH_CLIENT_ID;
  const BSM_AUTH_CLIENT_SECRET = req.body.BSM_AUTH_CLIENT_SECRET;

  // BSM OAuth 객체 초기화
  const bsmOauth: BsmOauth = new BsmOauth(
    BSM_AUTH_CLIENT_ID,
    BSM_AUTH_CLIENT_SECRET
  );

  let data;

  try {
    // 인증코드로 토큰 발급
    const token: string = await bsmOauth.getToken(authCode);

    // 토큰으로 유저 정보 가져오기
    const resource: StudentResource | TeacherResource =
      await bsmOauth.getResource(token);
    data = resource;

    // 가져온 유저 정보 확인
  } catch (error) {
    if (error instanceof BsmOauthError) {
      switch (error.type) {
        case BsmOauthErrorType.INVALID_CLIENT: {
          res.status(400);
          break;
        }
        case BsmOauthErrorType.AUTH_CODE_NOT_FOUND: {
          res.status(400);
          break;
        }
        case BsmOauthErrorType.TOKEN_NOT_FOUND: {
          res.status(400);
          break;
        }
      }
    }
  }
  return res.status(200).json(data);
}

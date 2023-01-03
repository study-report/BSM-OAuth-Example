import { useRouter } from "next/router";
import React from "react";
import useAsyncEffect from "use-async-effect";
import BsmButton from "../../components/BsmButton";
import useBsmOauth from "../../hooks/useBsmOAuth";
import { BsmOauthUser } from "../../interface/bsm.type";
import { moveToOauth } from "../../util";

export default function OAuthPage() {
  const router = useRouter();
  const authCode = String(router.query.code); // redirect 되면서 알아서 들어가는 코드
  const [bsmUserData, setBsmUserData] = React.useState<BsmOauthUser>();

  // useBsmOauth hooks 호출해서 서버에 OAuth 요청 넣음
  const authClient = useBsmOauth(
    authCode,
    process.env.BSM_CLIENT_ID!,
    process.env.BSM_CLIENT_SECRET!
  );

  useAsyncEffect(async () => {
    const bsmOauth = await authClient; // 비동기로 bsmOauth 정보 받아와서
    try {
      setBsmUserData(await bsmOauth); // 저장하고 보여줌
      if (bsmOauth != null) {
        console.log("Bsm 유저 정보", bsmOauth);
        alert(
          "정보를 불러왔습니다. \n모든 정보를 확인하시려면 console을 참고해주세요."
        );
      }
    } catch (error) {
      throw error;
    }
  }, [authCode]);

  return (
    <div className="mt-8">
      <h2 className="font-bold text-5xl text-center">BSM 유저 정보</h2>
      <div className="m-[2rem_auto] w-[720px] border-2 border-white rounded-lg p-8 [&>li]:p-2 [&>p]:p-2">
        <li>유저코드 : {bsmUserData?.userCode}</li>
        <li>닉네임 : {bsmUserData?.nickname}</li>
        <li>이메일 : {bsmUserData?.email}</li>
        <p>이 이외의 정보는 console을 참고해주세요.</p>
        <BsmButton
          className="flex bg-white text-black p-4 rounded-lg mt-2"
          onClick={() => {
            moveToOauth(router);
          }}
        >
          <span className="ml-4 block">
            만약 정보가 보이지 않는다면 이 버튼을 눌러 처음부터 다시 해주세요
          </span>
        </BsmButton>
      </div>
    </div>
  );
}

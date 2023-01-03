import { useRouter } from "next/router";
import React from "react";
import useAsyncEffect from "use-async-effect";
import useBsmOauth from "../../hooks/useBsmOAuth";
import { BsmOauthUser } from "../../interface/bsm.type";

export default function OAuthPage() {
  const router = useRouter();
  const authCode = String(router.query.code);
  const [bsmUserData, setBsmUserData] = React.useState<BsmOauthUser>();

  useAsyncEffect(async () => {
    try {
      const data = await useBsmOauth(
        authCode,
        "e7f2af3c",
        "a790b4eb04620023c690529c59741bd1"
      );
      setBsmUserData(data);
      if (data != null) {
        console.log("Bsm 유저 정보", data);
        alert(
          "정보를 불러왔습니다. \n모든 정보를 확인하시려면 console을 참고해주세요."
        );
      }
    } catch (error) {
      throw error;
    }
  }, [authCode]);

  return (
    <div>
      오엇스 정보확인
      <p>{bsmUserData?.userCode}</p>
      <p>{bsmUserData?.nickname}</p>
      <p>{bsmUserData?.email}</p>
      <p>{bsmUserData?.role}</p>
    </div>
  );
}

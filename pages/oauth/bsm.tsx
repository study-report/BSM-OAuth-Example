import { StudentResource, TeacherResource } from "bsm-oauth";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useAsyncEffect from "use-async-effect";
import BsmButton from "../../components/BsmButton";
import useBsmOauth from "../../hooks/useBsmOAuth";

export interface BsmOauthUser {
  email: string;
  nickname: string;
  role: string;
  student: {
    name: string;
    enrolledAt: number;
    grade: number;
    classNo: number;
    studentNo: number;
  };
  userCode: number;
}

export interface Teacher {
  email: "test@bssm.kro.kr";
  nickname: "테스트";
  role: "TEACHER";
  teacher: { name: "테스트" };
  name: "테스트";
  userCode: 0;
}

export default function OAuthPage() {
  const router = useRouter();
  const authCode = String(router.query.code); // redirect 되면서 알아서 들어가는 코드
  const [bsmUserData, setBsmUserData] = React.useState<StudentResource | TeacherResource>();
  const [status, setStatus] = React.useState("정보를 불러오는 중 입니다..");
  const authClient = useBsmOauth(
    authCode,
    "e7f2af3c",
    "a790b4eb04620023c690529c59741bd1"
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
        setStatus(
          "정보가 보이지 않는다면 이 버튼을 눌러 처음부터 다시 해주세요"
        );
      }
    } catch (error) {
      throw error;
    }
  }, [authCode]);

  return (
    <>
      <Head>
        <title>BSM 계정 정보</title>
      </Head>
      <div className="mt-8">
        <h2 className="font-bold text-5xl text-center">BSM 유저 정보</h2>
        <div className="m-[2rem_auto] w-[720px] border-2 border-white rounded-lg p-8 [&>li]:p-2 [&>p]:p-2">
          {bsmUserData?.role === "STUDENT" ? (
            <ul>
              <p>학생</p>
              <li>
                학번 : {bsmUserData?.student.grade}
                {bsmUserData?.student.classNo}
                {bsmUserData?.student.studentNo}
              </li>
              <li>이름 : {bsmUserData?.student.name}</li>
            </ul>
          ) : (
            <ul>
              <p>선생님</p>
              <li>이름 : {bsmUserData?.teacher.name}</li>
            </ul>
          )}

          <li>닉네임 : {bsmUserData?.nickname}</li>
          <li>이메일 : {bsmUserData?.email}</li>
          <p>이 이외의 정보는 console을 참고해주세요.</p>
          <BsmButton
            className="flex bg-white text-black p-4 rounded-lg mt-2"
            onClick={() => {
              router.push("/");
            }}
          >
            <span className="ml-4 block">{status}</span>
          </BsmButton>
        </div>
      </div>
    </>
  );
}

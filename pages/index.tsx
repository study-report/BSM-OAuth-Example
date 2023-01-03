import { useRouter } from "next/router";
import BsmButton from "../components/BsmButton";
import { env } from "../config";
import { moveToOauth } from "../util";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-[45vh]">
      <BsmButton
        onClick={() => {
          router.push("https://auth.bssm.kro.kr/oauth?clientId=e7f2af3c&redirectURI=https://bsm-oauth-example.vercel.app/oauth/bsm")
        }}
        className="flex rounded-lg bg-white text-black p-4"
      >
        <p className="font-bold ml-2">눌러서 Bsm Oauth 체험하기</p>
      </BsmButton>
    </div>
  );
}

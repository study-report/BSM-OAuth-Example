import Link from "next/link";

export default function AuthPage() {
  return (
    <div>
      <Link href="https://auth.bssm.kro.kr/oauth?clientId=e7f2af3c&redirectURI=http://localhost:3000/oauth/bsm">
        눌럿
      </Link>
    </div>
  );
}

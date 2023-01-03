import Image from "next/image";
import React from "react";

interface BsmButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

export default function BsmButton({
  type = "button",
  children,
  onClick,
  className,
}: BsmButton) {
  return (
    <button type={type} className={className} onClick={onClick}>
      <Image
        src="https://bgit.bssm.kro.kr/icons/bsm-icon.png"
        alt=""
        width={50}
        height={30}
      />
      {children}
    </button>
  );
}

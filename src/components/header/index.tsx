"use client";

import * as S from "./styles";
import Image from "next/image";
import logo from "public/assets/logo.png";

export const Header = () => {
  return (
    <S.Header>
      <Image src={logo} width={70} alt="EMR SVG Converter logo" />
    </S.Header>
  );
};

import { useTheme } from "styled-components";
import { SVGPreviewProps } from "./types";
import { convertEMRThemeToHex } from "@/.scripts/convertEMRThemeToHex";
import React from "react";
import * as S from "./styles";

export function SVGPreview({ svgTags, fallback }: SVGPreviewProps) {
  const theme = useTheme();

  return svgTags ? (
    <S.Container>
      <S.Title>PRÉ-VISUALIZAÇÃO</S.Title>
      <S.Content
        dangerouslySetInnerHTML={{
          __html: convertEMRThemeToHex(svgTags, theme),
        }}
      />
    </S.Container>
  ) : (
    <S.Container>
      <S.Title>PRÉ-VISUALIZAÇÃO</S.Title>
      <S.EmptyContainer>SEM VISUALIZAÇÃO</S.EmptyContainer>
    </S.Container>
  );
}

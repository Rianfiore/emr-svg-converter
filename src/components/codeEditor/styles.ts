'use client'

import styled, { css } from 'styled-components';

export const AceEditorStyled = styled.div(({theme}) => css`
width: 100%;
height: 100%;
border: 2px solid ${theme.colors.brand.pure};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 8px 8px 8px rgba(0,0,0,0.2);

  .ace_content {
    font-family: "Poppins";
    font-size: 12px;
  }
`)

export const Title = styled.h1(({theme}) => css`

  width: 100%;
  padding: ${theme.spacing.xxsmall};
  background-color: ${theme.colors.brand.pure};
  border-bottom: 8px solid ${theme.colors.interface.grey600};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.semibold};
  color: ${theme.colors.interface.white000}
`)
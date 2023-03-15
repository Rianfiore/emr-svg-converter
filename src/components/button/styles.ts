import styled, { css } from "styled-components";

export const Button = styled.button(({theme}) => css`
  border: none;
  border-radius: 0px;
  background-color: ${theme.colors.brand.pure};
  color: ${theme.colors.interface.grey500};
  width: 125px;
  height: 30px;
  line-height: ${theme.font.lineHeight.large};
  transition: all .1s ease-in-out;

  :hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    color: ${theme.colors.interface.grey500};
    background-color: ${theme.colors.brand.light200};
  }

  :active {
    background-color: ${theme.colors.brand.dark000};
    transform: scale(0.98);
  }
`)
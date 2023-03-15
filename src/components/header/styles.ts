"use client"

import styled, { css } from "styled-components";

export const Header = styled.header(({theme}) => css`
background-color: ${theme.colors.brand.pure};
display: flex;
align-items: center;
justify-content: center;
padding: ${theme.spacing.xxsmall};
height: 60px;
`)
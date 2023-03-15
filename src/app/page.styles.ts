"use client"

import styled, { css } from "styled-components";

export const Main = styled.main(({theme}) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 60px);
  background-color: ${theme.colors.interface.grey500};
  justify-content: center;
  padding: ${theme.spacing.small};
  gap: ${theme.spacing.small};
  `)

export const Interface = styled.div(({theme}) => css`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${theme.spacing.small};

`)
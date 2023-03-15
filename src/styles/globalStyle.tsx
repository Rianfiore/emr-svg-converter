"use client";

import { createGlobalStyle } from "styled-components";

import { defaultTheme as theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;

    .Toastify__toast-container {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.semibold};
      text-align: center;

      .Toastify__toast-body {
        min-height: 12rem;
        color: ${theme.colors.interface.white000};
      }

      .Toastify__toast--success {
        background: ${theme.colors.brand.dark000};

        .Toastify__progress-bar {
          background: ${theme.colors.brand.light100};
        }
      }

      .Toastify__toast--error {
        background: ${theme.colors.status.red200};

        .Toastify__progress-bar {
          background: ${theme.colors.status.red000};
        }
      }

      .Toastify__toast--warning {
        background: ${theme.colors.status.yellow200};

        .Toastify__progress-bar {
          background: ${theme.colors.status.yellow100};
        }
      }
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

  }

  body {
    font-size: 16px;
    background-color:${theme.colors.interface.grey100};

  }

  h1 {
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.regular};
    line-height: ${theme.font.lineHeight.medium};
  }

  h2 {
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semibold};
    line-height: ${theme.font.lineHeight.medium};
  }

  h3, button {
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.semibold};
    line-height: ${theme.font.lineHeight.medium};
  }

  button, input {
    border-radius: ${theme.borderRadius.medium};
  }

  button {
    cursor: pointer;
  }

  p {
    font-weight: ${theme.font.regular};
    line-height: ${theme.font.lineHeight.large};
    font-size: ${theme.font.sizes.large};
  }
`;

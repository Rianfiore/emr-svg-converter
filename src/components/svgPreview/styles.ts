import styled, { css } from "styled-components";

export const Title = styled.span(
  ({ theme }) => css`
    background: ${theme.colors.brand.pure};
    text-align: center;
    color: ${theme.colors.interface.white000};
    font-weight: ${theme.font.semibold};
    padding: ${theme.spacing.xxsmall};
  `
);

export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.interface.grey100};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${theme.colors.brand.pure};
    min-width: 400px;
    min-height: 200px;
  `
);

export const EmptyContainer = styled.div(
  ({ theme }) => css`
    background: ${theme.colors.interface.grey600};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid ${theme.colors.brand.pure};
    color: white;
    font-weight: ${theme.font.semibold};
    min-width: 400px;
    min-height: 200px;
  `
);

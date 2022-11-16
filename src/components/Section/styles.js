import styled from "styled-components";

export const Container =  styled.section`

  margin: 28px 0 28px;

  > h2 {
    font-family: 'Roboto Slab', serif;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;


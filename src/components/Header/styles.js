import styled from "styled-components";

export const Container = styled.header `
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex; 
  justify-content: space-between;
  padding: 0 80px;

`;

export const Profile = styled.button `
  display: flex;
  align-items: center;
  background: none;
  border: none;
  text-align: start;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  
    span {
      font-family: 'Roboto Slab', serif;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-family: 'Roboto Slab', serif;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Logout = styled.button `
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }

`
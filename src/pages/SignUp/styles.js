import backgroundImg from "../../assets/background.png";
import styled from "styled-components";
import { ButtonLink } from "../../components/ButtonLink";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 344;
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > h2 {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 4.8rem 0;
  }
`;

export const Anchor = styled(ButtonLink)`
  margin-top: 4.8rem;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

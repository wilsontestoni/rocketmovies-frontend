import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.main`
  max-width: 112rem;
  margin: 4.6rem auto 8.5rem;
`;

export const Form = styled.form`
  height: 52rem;
  overflow-y: auto;
  margin: 2.4rem 0 4rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-bottom: 4rem;
  }

  &::-webkit-scrollbar {
    width: 22px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.COLORS.PINK};
    border: solid 7px transparent;
    border-radius: 20px;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4rem 0 2.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > div:nth-child(2) {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  > div:nth-child(5) {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    border-radius: 8px;
    padding: 1.6rem;

    flex-wrap: wrap;

    gap: 2.4rem;
    margin-bottom: 4rem;
  }

  > div:nth-child(6) {
    width: 100%;
    padding: 1.6;
    display: flex;
    gap: 2.4rem;
    margin-bottom: 4rem;
  }
`;

export const ResetButton = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.PINK};

  &:hover {
    background-color: #34343a;
  }
`;

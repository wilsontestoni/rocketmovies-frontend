import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-bottom: 4.5rem;

  > header {
    height: 14.4rem;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.CARDS_BACKGROUND};
    display: flex;
    padding: 0 14.4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 34rem;
  margin: 0 auto;

  // VERIFICAR ESSA PARTE DEPOIS, MUITO CONFUSA
  div:nth-child(2) > input,
  div:nth-child(3) > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div:nth-child(3) {
    margin-bottom: 2.4rem;
  }

  > div:nth-child(5) {
    margin-bottom: 1.8rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;
  margin: -9.8rem 0 6.4rem;

  > img {
    width: 18.6rem;
    border-radius: 50%;
    margin-bottom: 6.4rem;
  }

  > input {
    display: none;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
    transition: background-color 0.2s ease;

    > svg {
      height: 20px;
      width: 20px;
      position: absolute;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  > label:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;

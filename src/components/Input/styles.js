import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 1rem;
  margin-bottom: 0.8rem;

  > input {
    font-size: 1.6rem;
    font-family: "Roboto Slab", serif;
    width: 100%;
    height: 5.6rem;

    padding: 1.6rem;

    outline: none;
    border: 0;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > svg {
    margin-left: 1.6rem;
  }
`;

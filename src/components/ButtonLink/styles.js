import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
  text-decoration: none;
  align-self: center;
  border: none;
  background: transparent;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;

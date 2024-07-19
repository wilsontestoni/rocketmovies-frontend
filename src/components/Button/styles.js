import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  margin-top: 0.8rem;

  font-weight: 600;
  font-size: 1.6rem;

  cursor: pointer;
  transition: background-color 0.2s ease;

  > svg {
    padding-right: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`;

import styled from "styled-components";

export const Container = styled.li`
  font-size: 1.4rem;
  list-style: none;

  padding: 0.5rem 1.6rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE_600};
`;

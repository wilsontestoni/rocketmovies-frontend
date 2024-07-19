import styled from "styled-components";
import { FiStar } from "react-icons/fi";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
export const Star = styled(FiStar)`
  fill: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const EmptyStar = styled(FiStar)`
  fill: transparent;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

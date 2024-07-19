import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderFullWidth = styled.header`
  width: 100%;
  border-bottom: 0.2rem solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Container = styled.div`
  max-width: 112rem;
  height: 11.6rem;
  margin: auto;

  display: flex;
  align-items: center;
  gap: 6.4rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > a > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 2.4rem;

    button {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      cursor: pointer;

      transition: color 0.2s ease;
    }

    button:hover {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    strong {
      white-space: nowrap;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logo = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  text-decoration: none;

  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const LinkWithoutStyle = styled(Link)`
  text-decoration: none;
`;

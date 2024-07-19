import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  margin: 4.6rem auto 8.5rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > main {
    margin: 2.4rem 0 4rem;

    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};

    max-height: 47rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 22px;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.COLORS.PINK};
      border: solid 7px transparent;
      border-radius: 20px;
    }

    p {
      white-space: pre-wrap;
      text-align: justify;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const SubtitleContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 1.4rem;
  font-size: 1.6rem;

  > div:nth-child(1) {
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  > div:nth-child(2) {
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > div:nth-child(1) > img {
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }
`;

export const Tags = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin: 4rem 0;
`;

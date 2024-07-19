import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 3.2rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.CARDS_BACKGROUND};

  &:hover {
    cursor: pointer;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    line-height: 19px;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box; /* necessário para compatibilidade com alguns navegadores */
    -webkit-line-clamp: 2; /* número de linhas antes de cortar o texto */
    -webkit-box-orient: vertical; /* orientação das linhas */
  }

  > ul {
    margin-top: 2.5rem;
    display: flex;
    gap: 0.8rem;
  }
`;

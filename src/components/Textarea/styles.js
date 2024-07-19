import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27rem;
  

  font-size: 1.6rem;
  font-family: "Roboto Slab", serif;

  resize: none;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 1.6rem;

  outline: none;
  border: 0;
  border-radius: 1rem;

  
  &::-webkit-scrollbar {
    width: 22px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.COLORS.PINK};
    border: solid 7px transparent;
    border-radius: 20px;
  }
`;

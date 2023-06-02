import styled from 'styled-components';

export const Container = styled.button`
  height: 5.6rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  opacity: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.SECOND};
    opacity: 0.5;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }

  > svg {
    color: red;
  }
`;

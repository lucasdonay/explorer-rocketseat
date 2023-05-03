import styled from 'styled-components';

export const Container = styled.div`
  max-width: 630px;
  width: 100%;
  background: #262529;
  margin-bottom: 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  > input {
    height: 56px;
    width: 100%;
    border: none;
    padding: 12px;
    background-color: transparent;
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin: 0 15px;
  }

  @media (max-width: 700px) {
    > input {
      width: 200px;
    }
  }
`;

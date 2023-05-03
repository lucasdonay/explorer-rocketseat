import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100px;
  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  @media (max-width: 700px) {
    padding: 5px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .sair {
    font-weight: 400;
  }

  img {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;

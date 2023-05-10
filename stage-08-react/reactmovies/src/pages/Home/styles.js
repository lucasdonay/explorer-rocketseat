import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;

    width: 100%;
    max-width: 1682px;
    margin: 48px auto;
    padding-inline: 5px;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 38px;

      h1 {
        font-weight: 400;
      }
    }
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 297px);
  overflow-y: auto;
  display: flex;
  gap: 24px;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  width: 250px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 14.5px 30px;
  border-radius: 8px;
  transition: 0.3s ease-in-out;

  > svg {
    margin-top: 2px;
  }

  :hover {
    color: white;
  }
`;

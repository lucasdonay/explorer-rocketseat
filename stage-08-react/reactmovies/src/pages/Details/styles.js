import styled from 'styled-components';

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
    padding-inline: 20px;
    width: 100%;
    max-width: 1657px;
    margin: 40px auto;

    header {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      h1 {
        font-weight: 500;
        font-size: 36px;
        margin-right: 19px;
      }

      div {
        display: flex;
        align-items: center;
      }

      .movie-info {
        gap: 8px;
        margin-top: 24px;

        p:nth-child(1),
        div {
          display: flex;
          align-items: center;
          gap: 8px;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }

          svg {
            color: ${({ theme }) => theme.COLORS.PRIMARY};
          }
        }
      }
    }

    span {
      background: ${({ theme }) => theme.COLORS.SECOND};
    }

    > .text-content {
      overflow-y: auto;
      p {
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-top: 40px;
        max-width: calc(100% - 8px);
        overflow-y: auto;
        line-height: 21px;
        max-height: 480px;
        padding-right: 20px;
      }

      p::-webkit-scrollbar {
        width: 8px;
      }
      p::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 8px;
      }
    }
  }
`;

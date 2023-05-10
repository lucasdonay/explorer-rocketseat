import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.COLORS.SECOND};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;
  height: 222.85px;
  border-radius: 16px;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

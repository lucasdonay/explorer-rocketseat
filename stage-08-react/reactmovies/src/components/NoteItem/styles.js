import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_300};
  color: ${({ theme, isNew }) => (isNew ? 'white' : theme.COLORS.GRAY_300)};
  border: ${({ theme, isNew }) =>
    isNew ? '2px dashed #948F99' : theme.COLORS.GRAY_300};
  border-radius: 10px;
  margin-bottom: 8px;
  height: 56px;
  padding: 12px;
  max-width: ${({ isNew }) => (isNew ? '190px' : '130px')};

  > button {
    width: 22px;
    height: 22px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  > input {
    width: 100%;
    height: 56px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  cursor: pointer;
`;

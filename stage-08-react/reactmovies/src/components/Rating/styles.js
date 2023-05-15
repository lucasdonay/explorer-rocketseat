import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ isBigSize }) => (isBigSize ? '10px' : '6px')};

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? '20px' : '18px')};
    stroke: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

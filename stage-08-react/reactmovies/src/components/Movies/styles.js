import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  border: none;
  background-color: ${({ theme }) => theme.COLORS.SECOND};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 32px;
  gap: 15px;
  height: 237.85px;
  border-radius: 16px;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin: 2px 0;
    max-height: 53px;

    line-height: 19px;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1px;
  }

  cursor: pointer;
  transition: all 0.6s ease-in;

  &:hover {
    filter: brightness(1.05);
    background-color: ${({ theme }) => theme.COLORS.THIRD};
    opacity: 0.9;
  }

  &:hover p {
    color: white;
  }

  &:hover svg {
    fill: white;
    stroke: white;
  }
`;

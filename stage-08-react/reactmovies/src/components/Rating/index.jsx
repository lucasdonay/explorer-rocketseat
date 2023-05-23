import { Container } from './styles';

import { IoStarSharp, IoStarOutline } from 'react-icons/io5';

export function Rating({ grade, isBigSize }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      stars.push(<IoStarSharp key={i} />);
    } else {
      stars.push(<IoStarOutline key={i} />);
    }
  }

  return <Container isBigSize={isBigSize}>{stars}</Container>;
}

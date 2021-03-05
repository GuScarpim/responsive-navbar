import React, { useEffect } from 'react'
import * as S from './styles';
// import Logo from '../../assets/logo.png';

type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <S.Ul open={props.open}>
      <S.LogoUl src={'../../assets/logo.png'} alt={'Gustavo Scarpim'} />

      <a href="#">
        <li>Menu 1</li>
      </a>
      <a href="#">
        <li>Menu 2</li>
      </a>
      <a href="#">
        <li>Menu 3</li>
      </a>
      <a href="#">
        <li>Menu 4</li>
      </a>
    </S.Ul>
  )
}

export default RightNav

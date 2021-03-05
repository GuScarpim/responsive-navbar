import React from 'react';
import * as S from './styles';

// import Logo from '../../assets/logo.png';
import Burger from './Burger';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={'../../assets/logo.png'} alt="Etio Soluções" />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}
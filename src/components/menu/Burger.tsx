import { useState } from 'react';
import * as S from './styles';

import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <S.Menus open={open} />
        <S.Menus open={open} />
        <S.Menus open={open} />
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;

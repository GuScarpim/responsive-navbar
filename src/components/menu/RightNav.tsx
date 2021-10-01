import * as S from './styles';

import Logo from '../../assets/logo.png';
import IconReact from '../../assets/react.svg';
import IconMegamen from '../../assets/megamen.png';
import IconMario from '../../assets/mario.png';
import IconTurtle from '../../assets/turtle.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} />

        <NavLink
          to='/menu1'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Menu 1</S.Li>
        </NavLink>
        <NavLink
          to='/menu2'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Menu 2</S.Li>
        </NavLink>
        <NavLink
          to='/menu3'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Menu 3</S.Li>
        </NavLink>
        <NavLink
          to='/menu4'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Menu 4</S.Li>
        </NavLink>
      </S.Ul>

      <Switch>
        <Route exact path='/menu1'>
          <S.Icon>
            <S.Image src={IconReact} alt='React' />
          </S.Icon>
        </Route>
        <Route exact path='/menu2'>
          <S.Icon>
            <S.Image src={IconMegamen} alt='Megamen' />
          </S.Icon>
        </Route>
        <Route exact path='/menu3'>
          <S.Icon>
            <S.Image src={IconMario} alt='Mario' />
          </S.Icon>
        </Route>
        <Route exact path='/menu4'>
          <S.Icon>
            <S.Image src={IconTurtle} alt='Turtle' />
          </S.Icon>
        </Route>

        <Redirect to='/menu1' />
      </Switch>
    </Router>
  );
}

export default RightNav;

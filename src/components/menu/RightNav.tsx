import { Ul, Li, LogoUl, Icon, Image } from './styles'

import Logo from '../../assets/logo.png'
import IconReact from '../../assets/react.svg'
import IconMegamen from '../../assets/megamen.png'
import IconMario from '../../assets/mario.png'
import IconTurtle from '../../assets/turtle.png'
import IconLion from '../../assets/lion.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom'

type Props = {
  open: boolean
}

function RightNav(props: Props) {
  return (
    <Router>
      <Ul open={props.open}>
        <LogoUl src={Logo} alt={'Gustavo Scarpim'} />

        <NavLink
          to='/menu1'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <Li>Menu 1</Li>
        </NavLink>
        <NavLink
          to='/menu2'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <Li>Menu 2</Li>
        </NavLink>
        <NavLink
          to='/menu3'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
            backgroundColor: 'black'
          }}
        >
          <Li>Menu 3</Li>
        </NavLink>
        <NavLink
          to='/menu4'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <Li>Menu 4</Li>
        </NavLink>
        <NavLink
          to='/menu5'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <Li>Menu 5</Li>
        </NavLink>
      </Ul>

      <Switch>
        <Route exact path='/menu1'>
          <Icon>
            <Image src={IconReact} alt='React' />
          </Icon>
        </Route>
        <Route exact path='/menu2'>
          <Icon>
            <Image src={IconMegamen} alt='Megamen' />
          </Icon>
        </Route>
        <Route exact path='/menu3'>
          <Icon>
            <Image src={IconMario} alt='Mario' />
          </Icon>
        </Route>
        <Route exact path='/menu4'>
          <Icon>
            <Image src={IconTurtle} alt='Turtle' />
          </Icon>
        </Route>
        <Route exact path='/menu5'>
          <Icon>
            <Image src={IconLion} alt='Turtle' />
          </Icon>
        </Route>

        <Redirect to='/menu1' />
      </Switch>
    </Router>
  )
}

export default RightNav

import { Nav, Logo } from './styles'

import IcLogo from '../../assets/logo.png'
import Burger from './Burger'

type Props = {
  children?: ChildNode
}

export default function Navbar(props: Props) {
  return (
    <>
      <Nav>
        <Logo src={IcLogo} alt='Gustavo Scarpim' />
      </Nav>
      <Burger />
      {props.children}
    </>
  )
}

import { Ul, Li, LogoUl, Icon, Image } from './styles';
import Logo from '../../assets/logo.png';
import IconReact from '../../assets/react.svg';
import IconMegamen from '../../assets/megamen.png';
import IconMario from '../../assets/mario.png';
import IconTurtle from '../../assets/turtle.png';
import IconLion from '../../assets/lion.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

type Props = {
  open: boolean;
};

const menuItems = [
  { path: '/menu1', label: 'Menu 1', icon: IconReact, alt: 'React' },
  { path: '/menu2', label: 'Menu 2', icon: IconMegamen, alt: 'Megamen' },
  { path: '/menu3', label: 'Menu 3', icon: IconMario, alt: 'Mario' },
  { path: '/menu4', label: 'Menu 4', icon: IconTurtle, alt: 'Turtle' },
  { path: '/menu5', label: 'Menu 5', icon: IconLion, alt: 'Lion' },
];

function RightNav({ open }: Props) {
  return (
    <Router>
      <Ul open={open}>
        <LogoUl src={Logo} alt='Gustavo Scarpim' />
        {menuItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#0DADEA' : '#000',
            })}
          >
            <Li>{label}</Li>
          </NavLink>
        ))}
      </Ul>

      <Routes>
        {menuItems.map(({ path, icon, alt }) => (
          <Route
            key={path}
            path={path}
            element={
              <Icon>
                <Image src={icon} alt={alt} />
              </Icon>
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/menu1" />} />
      </Routes>
    </Router>
  );
}

export default RightNav;

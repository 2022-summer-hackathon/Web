import {
  NavBarContainer,
  NavBarIcon,
  NavBarItem,
  NavBarItemIcon,
  NavBarItemWrap,
} from "./style";
import Logo from "../../assets/icon/logo.svg";
import { NAVBAR_ITEMS } from "../../../constants/common/navBar/navBar.constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [section, setSection] = useState<string>("/");

  return (
    <NavBarContainer>
      <NavBarIcon src={Logo} />
      <NavBarItemWrap>
        {NAVBAR_ITEMS.map((item) => (
          <NavBarItem
            onClick={() => {
              setSection(item.link);
              navigate(item.link);
            }}
            isSelected={section === item.link}
          >
            <NavBarItemIcon isSelected={section === item.link}>
              <item.icon />
            </NavBarItemIcon>
          </NavBarItem>
        ))}
      </NavBarItemWrap>
    </NavBarContainer>
  );
};

export default NavBar;

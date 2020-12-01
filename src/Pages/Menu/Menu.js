import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SmallContents from "../../Components/Contents/SmallContents";

function Menu(props) {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const BaseURL = "https://sanghunlee-711.github.io/communityFashion";
    fetch(`${BaseURL}/data/data.json`, {})
      .then((res) => res.json())
      .then((res) => setMenuData(res["main-data"]));
  }, []);

  return (
    <MenuContainer>
      <MenuTitle>
        <span>{props.match.params.menuKey}</span>
        <span> Of</span>
        <span>
          {props.match.params.menuId === undefined ||
          props.match.params.menuId === null
            ? "Total"
            : props.match.params.menuId}
        </span>
      </MenuTitle>
      <MenuSmallContentsWrapper>
        {menuData["small-data"]?.map((el, index) => (
          <SmallContents smallData={el} key={el.title + index} />
        ))}
      </MenuSmallContentsWrapper>
    </MenuContainer>
  );
}

const MenuContainer = styled.main`
  width: 80vw;
  margin: 0 auto;
`;

const MenuTitle = styled.title`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin: 1vh 0;
`;

const MenuSmallContentsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Menu;

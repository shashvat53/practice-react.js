import React, { useState } from "react";
import "./Restro.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
// console.log(uniqueList);

const Restro = () => {
  const [Menudata, setMenuData] = useState(Menu);
  const [MenuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} MenuList={MenuList} />
      <MenuCard Menudata={Menudata} />
    </>
  );
};

export default Restro;

import React from "react";

//assets
import "../../assets/styles/containers/header.scss"
import "../../elements/Buttons/ButtonYellow"
import "../../elements/Buttons/ButtonGreen"

function Header() {

  
  return (
    <header className="lsn-header">
      <button className="lsn-button-yellow"></button>
      <p className="lsn-header__text">Blog name</p>
      <div className="lsn-button-block">
        <button className="lsn-button-green"></button>
        <button className="lsn-button-green"></button>
        <button className="lsn-button-green"></button>
        <button className="lsn-button-green"></button>
        <button className="lsn-button-green"></button>
      </div>
    </header>
  );
}

export default Header;

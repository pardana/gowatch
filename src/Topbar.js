import React from "react";
import classes from './Topbar.module.css'

export default function Topbar() {
  return (
    <header className="App-header">
    <nav className={classes.Topbar}>
      <img
        src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png"
        alt="Amazon Logo"
      />
    </nav>
    </header>
  );
}

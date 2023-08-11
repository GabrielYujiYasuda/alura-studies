import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{ text: string }> {
  render() {
    const isActive = false;

    const styles = {
      backgroundColor: isActive ? "green" : "red",
    };

    return <button className={style.botao}>{this.props.text}</button>;
  }
}

export default Button;

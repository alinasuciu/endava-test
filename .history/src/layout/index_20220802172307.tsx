import React, { Component } from "react";
import Header from "./Header";

import "./styles.scss";
interface IProps {
  darkLogo?: Boolean;
  bgImage?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
class Layout extends Component<IProps> {
  renderBgImage = () => {
    if (this.props.bgImage && this.props.bgImage.length > 0) {
      return `url(${this.props.bgImage}`;
    } else {
      return "none";
    }
  };
  render() {
    const { darkLogo, children, bgImage } = this.props;
    const bgImg = this.renderBgImage();

    return (
      <div className="app-layout" style={{ backgroundImage: bgImg }}>
        <Header darkLogo={darkLogo} />
        <div className="content content--public">{children}</div>
      </div>
    );
  }
}

export default Layout;

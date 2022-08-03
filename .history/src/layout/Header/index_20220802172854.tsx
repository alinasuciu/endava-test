import React, { Component } from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import MenuTrigger from "../MenuTrigger";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {
  darkLogo?: Boolean;
}

interface IState {
  open: Boolean;
}

class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { open: false };
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  componentDidUpdate(prevProps: IProps) {
    let {
      location: { pathname },
    } = this.props;

    if (prevProps.location.pathname !== pathname) {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <header className=''>
        <div className="header__content">
            Head
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

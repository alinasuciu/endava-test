// ErrorNotification.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideError } from "actions";
import { Error } from "types/error";
import { AppActions } from "types/actions";
import { AppState } from "store";
import { ThunkDispatch } from "redux-thunk";
import "./styles.scss";

interface IProps {}

type Props = IProps & stateToProps & dispatchToProps;

class ErrorNotification extends Component<Props> {
  handleClose = () => {
    window.location.replace("/not-found");
    this.props.hideError();
  };
  render() {
    const { isOpen, error } = this.props;
    return (
      <>
        {isOpen && error && (
          <div className="error-notification">
            <div>
              <span>{error}</span>
              <span onClick={this.handleClose} className="close">
                X
              </span>
            </div>
          </div>
        )}
      </>
    );
  }
}

interface stateToProps {
  isOpen: boolean;
  error: any;
}

interface dispatchToProps {
  hideError: () => void;
}

const mapStateToProps = (state: AppState) => ({
  isOpen: state.errorReducer.isOpen,
  error: state.errorReducer.error,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  hideError: bindActionCreators(hideError, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);

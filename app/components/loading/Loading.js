import React from "react";

const PropTypes = React.PropTypes;

const style = {
  alignItems: "center",
  background: "linear-gradient(moccasin	,Bisque,pink)",
  // background: "linear-gradient(moccasin	,orange,pink)",
  color: "SteelBlue",
  display: "flex",
  fontSize: "36px",
  fontWeight: "bold",
  height: "50vh",
  justifyContent: "center",
  width: "100%"
};

const propTypes = {
  loadingMsg: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired
};


const defaultProps = {
  loadingMsg: "Loading",
  styles: "loading loading--block-md"
};

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.msg = this.props.loadingMsg;
    this.state = {
      msg: this.msg,
      isMounted: false
    };
  }
  componentDidMount() {
    // debugger
    this.setState({isMounted:true});

    if(this.state.isMounted) {
      this.intervalId = setInterval(() => {
        this.setState((prevState, props) => {
          if(prevState.msg.length === 13) {
            return {msg: this.msg};
          }
          return {msg: prevState.msg + "."};
        });
      },500);
    }
  }
  componentWillUnMount() {
    this.setState({isMounted:false});
    console.log("clear Loading",this);
    clearInterval(this.intervalId);

  }

  render() {
    return (
      <div className={this.props.styles}>{this.state.msg}</div>
    );
  }
}
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
export default Loading;

import React from "react";
import buyCake from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer (props) {
  return (
    <div>
      <h2>number of cakes -{props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
}

// 1. state
// 2. setState() => dispatcher
// 3. connect redux => react

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
// at here two props are added to component =>
// 1. props.numberOfCakes 2.props.buyCake


export  default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
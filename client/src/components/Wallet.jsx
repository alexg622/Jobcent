import React from 'react';
import { connect } from 'react-redux';
// const ncentSDK = require('ncent-sdk-public');

class Wallet extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
      return (
        <div> sup </div>
      )
  }

}

const mapStateToProps = (state, ownProps) => {
  // let sdk = new ncentSDK();
  let wallet = null;
  // const onResolve = (response) => {
  //   wallet = response;
  // };
  //
  // const onReject = (error) => {
  //   console.log(error);
  // };
  // sdk.getAllBalances(state.auth.user.wallet, onResolve, onReject);
  return {
    wallet: wallet
  }
}

export default connect(mapStateToProps)(Wallet);

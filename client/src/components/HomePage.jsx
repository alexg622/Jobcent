import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div className="container">
          <div className = "background-image">
            <div className="title">Find your next incentive</div>
            <img className="ncent-logo" src="https://icodrops.com/wp-content/uploads/2018/06/Ncent-Logo-2.jpg"></img>
          </div>
        </div>
      )
    }
}

export default HomePage;

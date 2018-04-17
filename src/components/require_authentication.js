import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component {

    //defining a property on the actual class Authentication
    static contextTypes = {
      router: React.PropTypes.object
    }

    //being able to access the router with context
    componentWillMount(){
      if (!this.props.authenticated){
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        this.context.router.push('/');
      }
    }

    render(){
      return <ComposedComponent {...this.props } />
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}

// // In some other location.. not in this file.. we want to use this HOC
// import Authentication // This is my HOC
// import Resources // this is the component that i want to wrap
//
//
// //HOC is a function that is called with our existing component
// const ComposedComponent = Authentication(Resources);
//
// // in some render method..
// //rendering an instance of Authentication that is wrapped around our component
// <ComposedComponent />


// we can only access properties on context if you declared the need to beforehand

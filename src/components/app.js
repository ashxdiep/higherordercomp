import React, { Component } from 'react';

import Header from './header';
// import { connect } from 'react-redux';

// class App extends Component {
//   render() {
//     return (
//       <div>React simple starter</div>
//     );
//   }
// }
//
// function mapStateToProps(state){
//   return { posts: state.posts };
// }
//
//
// //this connection function is a higher order component
// //call connect, and then invoke again with teh component
// //this is AN EXAMPLE
// export default connect(mapStateToProps)(App);

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
     </div>
    );
  }
}

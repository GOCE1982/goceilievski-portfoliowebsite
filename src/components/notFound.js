import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div style={{display: 'grid', fontFamily: 'monspace', justifyContent: 'center'}}>
        <h1>404 Page Not Found</h1>
        <p style={{fontSize: '20px', textAlign: 'center'}}>The requested page is not found</p>
      </div>
    )
  }
}

export default NotFound;

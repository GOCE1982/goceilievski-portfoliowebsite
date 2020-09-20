import React, { Component } from 'react'
import { init } from 'ityped'

class Hello extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: true, startDelay: 50, backDelay: 1000, typeSpeed: 100, backSpeed: 50, strings: ['Hi, my name is Goce.', 'I build web apps with ReactJS.' ] })
  }
  render(){
    return <div><span id="myElement" className="banner-text" style={{fontSize: '2.5rem', color: 'white', textAlign: 'left', fontFamily: 'monospace', lineHeight: '2'}}></span></div>
  }
}

export default Hello;
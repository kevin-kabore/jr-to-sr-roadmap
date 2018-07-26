import React, { Component } from 'react';
import './App.css';

import AsyncComponent from './components/AsyncComponent';
import Page1 from './components/Page1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null 
    }
  }
// Code splitting to conditional load components
  onRouteChange = (route) => {
    // No Code splitting or code splitting with HOC: 
    this.setState({route: route})
    // With Code splitting:
    // if (route === 'page1') {
    //   this.setState({route: route})
    //  } else if (route === 'page2') {
    //   import('./components/Page2').then(Page2 => {
    //     this.setState({route: route, component: Page2.default})
    //   })
    // } else if (route === 'page3') {
    //   import('./components/Page3').then(Page3 => {
    //     this.setState({route: route, component: Page3.default})
    //   })
    // }

  }
  render() {
    // No Code splitting: 
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page2') {
    //   return <Page2 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page3') {
    //   return  <Page3 onRouteChange={this.onRouteChange}/>
    // }

    // Code Splitting:
    // if (this.state.route === 'page1') {
    //   return  <Page1 onRouteChange={this.onRouteChange}/>
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange}/>
    // }

    // Code splitting with Higher Order Component: 
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else if (this.state.route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange}/>
    } else if (this.state.route === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return  <AsyncPage3 onRouteChange={this.onRouteChange}/>
    }


  }
}

export default App;

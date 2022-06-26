import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import Router from "./menu/Router"

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, errorInfo) {
    if(errorInfo.componentStack.split("@").length>0)
      this.setState({hasError:true,errorDetails:error.message,errorComponent : errorInfo.componentStack.split("@")[0]});
    else
      this.setState({hasError:true,errorDetails:error.message,errorComponent : "Pas de componsant"});
  }

  render()
  {

    if(this.state.hasError)return <div>
      <div>An error occurred while rendering the page</div>
      <div>You can reload the page, and if the problem persists, contact customer service.<br/>If you are using the google translate plugin, try disabling it and reloading the page</div>
      <div>Error détails : {this.state.errorDetails}<br/>In the component : {this.state.errorComponent.split("\n").map(x => <>{x}<br/></>)}</div>
    </div>

    return <Router/>
  }
}

console.log("test");

if(document.readyState == 'complete')
{
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<App/>);
}
else window.addEventListener("load",() => {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<App/>);
});

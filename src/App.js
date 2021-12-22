/* eslint-disable no-useless-constructor */
import { Component } from "react/cjs/react.production.min";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;

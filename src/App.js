import { Component } from "react/cjs/react.production.min";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu  from "./components/MenuComponent"
import { DISHES } from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render () {
    return (
      <div>
        <Navbar dark color="secondary" >
          <div className="container">
            <NavbarBrand href="/" >
              Ecstacy
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;

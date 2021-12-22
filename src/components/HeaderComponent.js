import React, { Component, Fragment } from "react";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/" >
                        Ecstacy
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ecstacy</h1>
                                <p>We take inspiration from the world's best cuisines and create a fusion that will melt your taste buds!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </Fragment>
        )
    }
}

export default Header;
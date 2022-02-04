import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import {Loading} from "./LoadingComponent";

const RenderMenuItem = ({ dish }) => (
    <Card key={dish.id}>
        <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.image}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>
);

const Menu = (props) => {
const menu = props.dishes.dishes.map((dish) => (
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} />
        </div>
    ))

    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
};

export default Menu;
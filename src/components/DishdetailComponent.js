import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


function RenderDish({dish}){
    return dish !== null ? (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.image}/>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    ) : (
        <div />
    );
}

function RenderComments({comments}){
    return comments ? (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map((comment) => (
                    <ul key={comment.id} className="list-unstyled">
                        <li><p>{comment.comment}</p></li>
                        <li><p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</p></li>
                    </ul>
            ))}
        </div>
    ) : (
        <div />
    );
}

const DishDetail = (props) => props.dish ? (
    <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr/>
            </div>
        </div>
        <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments comments={props.comments}/>
        </div>
    </div>
) : <div />;

export default DishDetail;
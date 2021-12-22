import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";


function RenderDish({dish}){
    if(dish != null) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.image}/>
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
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({comments}){
    if(comments) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((comment) => (
                    <ul key={comment.id} className="list-unstyled">
                        <li><p>{comment.comment}</p></li>
                        <li><p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</p></li>
                    </ul>
                ))}
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.selectedDish) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish}/>
                    <RenderComments comments={props.selectedDish.comments}/>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }

};

export default DishDetail;
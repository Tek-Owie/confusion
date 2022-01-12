/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader, Button, Row, Label, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";

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
            <CommentForm/>
        </div>
    ) : (
        <div />
    );
}

//Create CommentForm class component
class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleClick() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log(`Current state is: ${JSON.stringify(values)}`);
        alert(`Current state is: ${JSON.stringify(values)}`);
    }

    render() {
        const required = (val) => val?.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return (
            <div>
                <Button outline onClick={this.handleClick} >
                    <span className="fa fa-pencil fa-lg"/> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleClick}>
                    <ModalHeader toggle={this.handleClick}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select type="select" model=".rating" id="rating" name="rating" className="form-control">
                                    <option defaultValue>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>    
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }}
                                />
                            </FormGroup>    
                            <FormGroup>
                                <Label htmlFor="comment" >Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows={6}
                                    className="form-control"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </FormGroup>    
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

//Add a button to the view

//Add a modal that will be toggled by the button

//Include the button in the RenderComments component

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
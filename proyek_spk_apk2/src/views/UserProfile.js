/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/abbiyu.jpg")}
                      />
                      <h5 className="title">Alfarizqi Abiyyu</h5>
                    </a>
                    <p className="description">1741720143/TI4E</p>
                  </div>
                 
                </CardBody>
               
              </Card>
              
              
            </Col>

            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/kris.jpg")}
                      />
                      <h5 className="title">Kris Aditya</h5>
                    </a>
                    <p className="description">1741720162/TI4E</p>
                  </div>
                 
                </CardBody>
               
              </Card>
              
              
            </Col>

            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/daffa.jpeg")}
                      />
                     <h5 className="title">Muhammad Daffa Attariq</h5>
                    </a>
                    <p className="description">1741720025/TI4E</p>
                  </div>
                 
                </CardBody>
               
              </Card>
              
              
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;

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
import axios from 'axios';
import RecordKriteriaList from './RecordKriteriaList'
import {Provider} from './Context';

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table
} from "reactstrap";

class Tambah_Kriteria extends React.Component {

  //deklarasi variabel
  constructor(props){
    super(props);
    this.onChangeNama_Kriteria = this.onChangeNama_Kriteria.bind(this);
    this.onChangeBobot = this.onChangeBobot.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //deklarasi view data
    this.state = { users: [] };

    this.state = {
      nama_kriteria:'',
      bobot:'',
      status:''
    }
  }

  //tambah data
    onChangeNama_Kriteria(e)
    {
      this.setState(
        {
          nama_kriteria: e.target.value
        }
      )
    }

    onChangeBobot(e)
    {
      this.setState(
        {
          bobot: e.target.value
        }
      )
    }

    onChangeStatus(e)
    {
      this.setState(
        {
          status: e.target.value
        }
      )
    }

    onSubmit(e)
    {
      e.preventDefault();

      const obj = {
          nama_kriteria: this.state.nama_kriteria,
          bobot: this.state.bobot,
          status: this.state.status
      };

      // var config = {
      //   headers: {'Content-Type': 'admin/Tambah_Kriteria'}
      //   };

      
      axios.post('http://localhost/back_end_proyek_spk/add-kriteria.php',obj
    )
      .then(res => console.log(res.data))

      console.log(obj);

      this.setState ({
        nama_kriteria:'',
        bobot:'',
        status:''
      })
      
    }

   

  render() {

        //deklarasi variabel
        const contextValue = {
          new_user:this.state.new_user
          // addNewUser:this.addNewUser,
          // post_show:this.postShow
      }
    
        //view data
        let showUsers;
        showUsers = (
          <Table className="data_kriteria" responsive>
              <thead className="text-primary">
                  <tr>
                      <th className="text-center">No ID</th>
                      <th className="text-center">Nama Kriteria</th>
                      <th className="text-center">Bobot</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <RecordKriteriaList/>
              </tbody>
          </Table>
      );

    return (
      <>
      <Provider value={contextValue}>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Tambah Kriteria</h5>
                </CardHeader>
                <CardBody>
                <form onSubmit={this.onSubmit}>
                  
                    
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Nama Kriteria</label>
                          <Input                            
                            placeholder="Kriteria"
                            type="text"
                            value={this.state.nama_kriteria}
                            onChange={this.onChangeNama_Kriteria}
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col md="5">
                        <FormGroup>
                          <label>Bobot</label>
                          <Input                            
                            placeholder="Bobot"
                            type="number"
                            value={this.state.bobot}
                            onChange={this.onChangeBobot}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="5">
                        <FormGroup>
                          <label>Status</label>
                          <Input                            
                            placeholder="Status"
                            type="text"
                            value={this.state.status}
                            onChange={this.onChangeStatus}
                          />
                        </FormGroup>
                      </Col>
                    </Row>    

                    <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>               
                  </form> 
                                   
                
                </CardBody>
                
              </Card>

              
              <Card>
              
                <CardHeader>
                  <CardTitle tag="h4">Data Kriteria</CardTitle>
                </CardHeader>
                <CardBody>
                  {showUsers}
                </CardBody>
              </Card>            


            </Col>
            
          </Row>
        </div>
        </Provider>
      </>
    );
  }
}

export default Tambah_Kriteria;

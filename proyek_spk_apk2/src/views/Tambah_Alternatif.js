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
import RecordAlternatifList from './RecordAlternatifList'
import {Provider} from './Context';


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
  Col,
  CardTitle,
  Table
} from "reactstrap";
import { object } from "prop-types";

class Tambah_Alternatif extends React.Component {

  //deklarasi variable
  constructor(props){
    super(props);
    this.onChangeNama_ID_Alternatif = this.onChangeNama_ID_Alternatif.bind(this);
    this.onChangeNIK = this.onChangeNIK.bind(this);
    this.onChangeNama_Alternatif = this.onChangeNama_Alternatif.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
      //deklarasi view data
    this.state = { users: [] };

    this.state = {
      nama_id_alternatif:'',
      nik:'',
      nama_alternatif:''


    }
  }


  

  
  

  //tambah data
 
  onChangeNama_ID_Alternatif(e)
  {
    this.setState(
      {
        nama_id_alternatif: e.target.value
      }
    )
  }   

  onChangeNIK(e)
  {
    this.setState(
      {
        nik: e.target.value
      }
    )
  }   

  onChangeNama_Alternatif(e)
    {
      this.setState(
        {
          nama_alternatif: e.target.value
        }
      )
    }   

    onSubmit(e)
    {
      e.preventDefault();

      const obj = {
        nama_id_alternatif: this.state.nama_id_alternatif,
        nik: this.state.nik,
        nama_alternatif: this.state.nama_alternatif          
      };

      // var config = {
      //   headers: {'Content-Type': 'admin/Tambah_Kriteria'}
      //   };

      
      axios.post('http://localhost/back_end_proyek_spk/add-alternatif.php',obj
    )
      .then(res => console.log(res.data))

      console.log(obj);

      this.setState ({
        nama_id_alternatif:'',
        nik:'',
        nama_alternatif:''
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
      <Table className="data_alternatif" responsive>
          <thead className="text-primary">
              <tr>
                  <th className="text-center">No ID</th>
                  <th className="text-center">Nama Id Alternatif</th>
                  <th className="text-center">NIK</th>
                  <th className="text-center">Nama Alternatif</th>
                  <th className="text-center">Actions</th>
              </tr>
          </thead>
          <tbody>
              <RecordAlternatifList/>
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
                  <h5 className="title">Tambah Alternatif</h5>
                </CardHeader>
                <CardBody>
                <form onSubmit={this.onSubmit}>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Nama ID Alternatif</label>
                          <Input
                            placeholder="ID Nama Alternatif"           
                            type="text"
                            value={this.state.nama_id_alternatif}
                            onChange={this.onChangeNama_ID_Alternatif}
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>NIK</label>
                          <Input
                            placeholder="NIK"             
                            type="number"
                            value={this.state.nik}
                            onChange={this.onChangeNIK}
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Nama Alternatif</label>
                          <Input                            
                            placeholder="Alternatif"
                            type="text"
                            value={this.state.nama_alternatif}
                            onChange={this.onChangeNama_Alternatif}
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
                <CardTitle tag="h4">Data Alternatif</CardTitle>
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

export default Tambah_Alternatif;

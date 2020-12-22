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
    this.onChangeNama_Alternatif = this.onChangeNama_Alternatif.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { users: [] };

    this.state = {
      nama_alternatif:'',
      users:[]

    }
  }

  //view data
  

  fetchUsers = () => {
      fetch('http://localhost/back_end_proyek_spk/all-alternatif.php')
      .then(response => {
          response.json().then(function(data) {
              if(data.success === 1){
                  this.setState({
                      users:data.users.reverse()
                  });
              } 
              else{
                  this.context.post_show(false);
              }    
              console.log(this.users);           
          }.bind(this));
      })
      .catch(error => {
          console.log(error);
      });
  }



  componentDidMount(){
      // this.fetchUsers();
      axios.get('http://localhost/back_end_proyek_spk/all-alternatif.php')
      .then(response => {
        this.setState({ users: response.data  });
      })
      .catch(function (error){
        console.log(error);
      })
  }

  alternatif_list(){
    return this.state.users.map(function(object, i) {
      return <RecordAlternatifList obj={object} key={i} />;
    });
  }
  

  //tambah data
 

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
        nama_alternatif: this.state.nama_alternatif,          
      };

      // var config = {
      //   headers: {'Content-Type': 'admin/Tambah_Kriteria'}
      //   };

      
      axios.post('http://localhost/back_end_proyek_spk/add-alternatif.php',obj
    )
      .then(res => console.log(res.data))

      console.log(obj);

      this.setState ({
        nama_alternatif:''
      })
      
    }

   


  render() {
    return (
      <>
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
                          <label>ID Alternatif</label>
                          <Input
                            
                            disabled
                            
                            type="text"
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
                <Table className="data_alternatif" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>No</th>
                      <th>Nama Alternatif</th>
                      <th className="text-center" style={{color:"red"}}>Aksi</th>                                          
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    {this.alternatif_list()}
                  </tr>
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>            

            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default Tambah_Alternatif;

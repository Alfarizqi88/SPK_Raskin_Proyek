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
import RecordSubKriteriaList from './RecordSubKriteriaList'
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

class Tambah_Sub_Kriteria extends React.Component {

  constructor(props){
    super(props);
    this.onChangeNama_Kriteria = this.onChangeNama_Kriteria.bind(this);
    this.onChangeNama_Sub_Kriteria = this.onChangeNama_Sub_Kriteria.bind(this);
    this.onChangeNilai_Sub_Kriteria = this.onChangeNilai_Sub_Kriteria.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //deklarasi view data
    this.state = { users: [] };

    this.state = {
      nama_kriteria:'',
      nama_sub_kriteria:'',
      nilai_sub_kriteria:''
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

   onChangeNama_Sub_Kriteria(e)
   {
     this.setState(
       {
         nama_sub_kriteria: e.target.value
       }
     )
   }

   onChangeNilai_Sub_Kriteria(e)
   {
     this.setState(
       {
         nilai_sub_kriteria: e.target.value
       }
     )
   }

   onSubmit(e)
   {
     e.preventDefault();

     const obj = {
         nama_kriteria: this.state.nama_kriteria,
         nama_sub_kriteria: this.state.nama_sub_kriteria,
         nilai_sub_kriteria: this.state.nilai_sub_kriteria
     };

     axios.post('http://localhost/back_end_proyek_spk/add-sub-kriteria.php',obj
     )
       .then(res => console.log(res.data))
 
       console.log(obj);
 
       this.setState ({
        nama_kriteria:'',
        nama_sub_kriteria:'',
        nilai_sub_kriteria:''
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
      <Table className="data_sub_kriteria" responsive>
          <thead className="text-primary">
              <tr>
                  <th className="text-center">No ID</th>
                  <th className="text-center">Nama Kriteria</th>
                  <th className="text-center">Nama Sub Kriteria</th>
                  <th className="text-center">Nilai Sub Kriteria</th>
                  <th className="text-center">Actions</th>
              </tr>
          </thead>
          <tbody>
              <RecordSubKriteriaList/>
          </tbody>
      </Table>
  );

    return (
      <>
      <Provider value={contextValue}>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Tambah Sub Kriteria</h5>
                </CardHeader>
                <CardBody>
                <form onSubmit={this.onSubmit}>
                   
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                        <label>Pilih Nama Kriteria </label>
                        <br></br>
                        <select value={this.state.nama_kriteria} onChange={this.onChangeNama_Kriteria} >
                            <option value="kosong" >--pilih dibawah ini--</option>
                            <option value="pendidikan" >Pendidikan</option>
                            <option value="pekerjaan">Pekerjaan</option>
                            <option value="penghasilan">Penghasilan</option>
                            <option value="anggota keluarga">Anggota Keluarga</option>
                        </select>
                        <br></br>

 
                        </FormGroup>
                      </Col>                     
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                        <br></br>
                          <label>Nama Sub Kriteria</label>
                          <Input                            
                            placeholder="Sub Kriteria"
                            type="text"
                            value={this.state.nama_sub_kriteria}
                            onChange={this.onChangeNama_Sub_Kriteria}
                          />
                        </FormGroup>
                      </Col>     
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Nilai Sub Kriteria</label>
                          <Input                            
                            placeholder="Nilai"
                            type="number"
                            value={this.state.nilai_sub_kriteria}
                            onChange={this.onChangeNilai_Sub_Kriteria}
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
                <CardTitle tag="h4">Data Sub Kriteria</CardTitle>
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

export default Tambah_Sub_Kriteria;

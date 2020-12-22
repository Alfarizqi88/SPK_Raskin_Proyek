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
import RecordDataAwalList from './RecordDataAwalList'
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

class Tambah_Data_Awal extends React.Component {

  constructor(props){
    super(props);
    this.onChangeNama_ID_Alternatif = this.onChangeNama_ID_Alternatif.bind(this);
    this.onChangePendidikan = this.onChangePendidikan.bind(this);
    this.onChangePekerjaan = this.onChangePekerjaan.bind(this);
    this.onChangePenghasilan = this.onChangePenghasilan.bind(this);
    this.onChangeAnggota_Keluarga = this.onChangeAnggota_Keluarga.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //deklarasi view data
    this.state = { users: [] };

    this.state = {
      nama_id_alternatif:'',
      pendidikan:'',
      pekerjaan:'',
      penghasilan:'',
      anggota_keluarga:''
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

   onChangePendidikan(e)
   {
     this.setState(
       {
         pendidikan: e.target.value
       }
     )
   }

   onChangePekerjaan(e)
   {
     this.setState(
       {
         pekerjaan: e.target.value
       }
     )
   }
   
   onChangePenghasilan(e)
   {
     this.setState(
       {
        penghasilan: e.target.value
       }
     )
   }

   onChangeAnggota_Keluarga(e)
   {
     this.setState(
       {
         anggota_keluarga: e.target.value
       }
     )
   }

   onSubmit(e)
   {
     e.preventDefault();

     const obj = {
         nama_id_alternatif: this.state.nama_id_alternatif,
         pendidikan: this.state.pendidikan,
         pekerjaan: this.state.pekerjaan,
         penghasilan: this.state.penghasilan,
         anggota_keluarga: this.state.anggota_keluarga,

     };

     axios.post('http://localhost/back_end_proyek_spk/add-data-awal.php',obj
     )
       .then(res => console.log(res.data))
 
       console.log(obj);
 
       this.setState ({
        nama_id_alternatif:'',
        pendidikan:'',
        pekerjaan:'',
        penghasilan:'',
        anggota_keluarga:''
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
      <Table className="data_awal" responsive>
          <thead className="text-primary">
              <tr>
                  <th align="center">No ID</th>                  
                  <th className="text-center">Nama ID Alternatif</th>
                  <th className="text-center">Pendidikan</th>
                  <th className="text-center">Pekerjaan</th>
                  <th className="text-center">Penghasilan</th>
                  <th className="text-center">Anggota Keluarga</th>
                  <th className="text-center">Actions</th>
              </tr>
          </thead>
          <tbody>
              <RecordDataAwalList/>
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
                  <h5 className="title">Tambah Data Awal</h5>
                </CardHeader>
                <CardBody>
                <form onSubmit={this.onSubmit}>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Nama ID Alternatif</label>
                          <Input                           
                            placeholder="Nama ID ALternatif"
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
                        <label>Pilih Pendidikan </label>
                        <br></br>
                        <select value={this.state.pendidikan} onChange={this.onChangePendidikan} >
                            <option value="0" >--pilih dibawah ini--</option>
                            <option value="1" >DV/Setara S1</option>
                            <option value="2">SLTA/Sederajat</option>
                            <option value="3">SLTP/Sederajat</option>
                            <option value="4">Tamat SD</option>
                            <option value="5">Tidak Tamat SD</option>
                        </select>
                        <br></br>

 
                        </FormGroup>
                      </Col>                     
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                        <label>Pilih Pekerjaan </label>
                        <br></br>
                        <select value={this.state.pekerjaan} onChange={this.onChangePekerjaan} >
                            <option value="0" >--pilih dibawah ini--</option>
                            <option value="1" >PNS</option>
                            <option value="2">Pedagang</option>
                            <option value="3">Karyawan Swasta</option>
                            <option value="4">Wiraswasta</option>
                            <option value="5">Petani/Pekebun</option>
                        </select>
                        <br></br>

 
                        </FormGroup>
                      </Col>                     
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                        <label>Pilih Penghasilan </label>
                        <br></br>
                        <select value={this.state.penghasilan} onChange={this.onChangePenghasilan} >
                            <option value="0" >--pilih dibawah ini--</option>
                            <option value="1" >lebih dari 2.000.000</option>
                            <option value="2">1.500.000 - 2.000.000</option>
                            <option value="3">1.000.0000-1.500.000</option>
                            <option value="4">500.000 - 1.000.000</option>
                            <option value="5">0 - 500.000</option>
                        </select>
                        <br></br>

 
                        </FormGroup>
                      </Col>                     
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                        <label>Pilih Anggota Keluarga </label>
                        <br></br>
                        <select value={this.state.anggota_keluarga} onChange={this.onChangeAnggota_Keluarga} >
                            <option value="0" >--pilih dibawah ini--</option>
                            <option value="1" >1-2</option>
                            <option value="2">3-4</option>
                            <option value="3">5-6</option>
                            <option value="4">7-8</option>
                            <option value="5">9-10</option>
                        </select>
                        <br></br>

 
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
                <CardTitle tag="h4">Data Awal</CardTitle>
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

export default Tambah_Data_Awal;

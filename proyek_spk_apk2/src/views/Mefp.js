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
import RecordDataRangeList from './RecordDataRangeList'
import RecordDataPertamaList from './RecordDataPertamaList'
import RecordDataRangeFinalMefp from './RecordDataRangeFinalMefpList'
import RecordFinalMefp from './RecordFinalMefp'
import {Provider} from './Context';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Mefp extends React.Component {
  //deklarasi variabel
  constructor(props){
    super(props);

    this.state = { users: [] };
    this.state = { data_pertama: [] };
    this.state = { data_range_final_mefp: [] };
    this.state = { data_final_mefp: [] };
  }



  render() {

    const contextValue = {
      new_user:this.state.new_user,
      new_data_pertama:this.state.new_data_pertama,
      new_data_range_final_mefp:this.state.new_data_range_final_mefp,
      new_data_final_mefp:this.state.new_data_final_mefp
    }

    let showUsers;
    showUsers = (
      <Table className="data_awal" responsive>
          <thead className="text-primary">
              <tr>
                                  
                  <th className="text-center">Nama ID Alternatif</th>
                  <th className="text-center">Pendidikan</th>
                  <th className="text-center">Pekerjaan</th>
                  <th className="text-center">Penghasilan</th>
                  <th className="text-center">Anggota Keluarga</th>
                  
              </tr>
          </thead>
          <tbody>
              <RecordDataRangeList/>
          </tbody>
      </Table>
  );

  let showDataPertama;
  showDataPertama = (
      <Table className="data_pertama" responsive>
          <thead className="text-primary">
              <tr>
                                  
                  <th className="text-center">Nama ID Alternatif</th>
                  <th className="text-center">Pendidikan</th>
                  <th className="text-center">Pekerjaan</th>
                  <th className="text-center">Penghasilan</th>
                  <th className="text-center">Anggota Keluarga</th>
                  
              </tr>
          </thead>
          <tbody>
              <RecordDataPertamaList/>
          </tbody>
      </Table>
  );

  let showDataRangeFinalMefp;
  showDataRangeFinalMefp = (
      <Table className="data_range_final_mefp" responsive>
          <thead className="text-primary">
              <tr>
                                  
                  <th className="text-center">Nama ID Alternatif</th>
                  <th className="text-center">Pendidikan</th>
                  <th className="text-center">Pekerjaan</th>
                  <th className="text-center">Penghasilan</th>
                  <th className="text-center">Anggota Keluarga</th>
                  
              </tr>
          </thead>
          <tbody>
              <RecordDataRangeFinalMefp/>
          </tbody>
      </Table>
  );

  let showFinalMefp;
  showFinalMefp = (
      <Table className="final_mefp" responsive>
          <thead className="text-primary">
              <tr>
                                  
                  <th className="text-center">Nama ID Alternatif</th>
                  <th className="text-center">Total</th>
                  {/* <th className="text-center">Rangking</th> */}                
              </tr>
          </thead>
          <tbody>
              <RecordFinalMefp/>
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
                  <CardTitle tag="h1"><center>Perhitungan MFEP</center></CardTitle>
                </CardHeader>
                <CardHeader>
                  <CardTitle tag="h4">Penentuan Data Awal</CardTitle>
                </CardHeader>
                <CardBody>
                 {showDataPertama}
                  
                </CardBody>
              </Card>

              <Card>
              
                <CardHeader>
                  <CardTitle tag="h4">Nilai Alternatif</CardTitle>
                </CardHeader>
                <CardBody>
                {showUsers}
                </CardBody>
              </Card>                              

            <Card>
              
              <CardHeader>
                <CardTitle tag="h4">Normalisasi MFEP</CardTitle>
              </CardHeader>
              <CardBody>
                {showDataRangeFinalMefp}                
              </CardBody>
            </Card>            

            <Card>
              
              <CardHeader>
                <CardTitle tag="h4">Rangking</CardTitle>
              </CardHeader>
              <CardBody>
                {showFinalMefp}
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

export default Mefp;

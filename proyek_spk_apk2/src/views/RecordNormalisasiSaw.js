import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

class RecordNormalisasiSaw extends Component{
    static contextType = AppContext;   
    
    state = {
        data_normalisasi_saw:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/back_end_proyek_spk/hitung-data-normalisasi-saw.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        data_normalisasi_saw:data.data_normalisasi_saw.reverse()
                    });
                } 
                else{
                    this.context.post_show(false);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchUsers();
    }

    

    render(){

        let allNormalisasiSaw = this.state.data_normalisasi_saw.map(({id_data_awal,nama_id_alternatif,pendidikan,pekerjaan,penghasilan,anggota_keluarga}, index) => {
            
            return  (   
            
                <tr key={id_data_awal}>
                    
                    <td className="text-center">{nama_id_alternatif}</td>   
                    <td className="text-center">{pendidikan}</td>   
                    <td className="text-center">{pekerjaan}</td>                    
                    <td className="text-center">{penghasilan}</td>     
                    <td className="text-center">{anggota_keluarga}</td>

                </tr>
            );
        });
        

        

        return(
            <>
            {allNormalisasiSaw}
            </>
        );
        
    }
}

export default RecordNormalisasiSaw;

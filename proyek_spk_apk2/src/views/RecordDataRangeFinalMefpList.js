import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

class RecordDataRangeFinalMefp extends Component{
    static contextType = AppContext;   
    
    state = {
        data_range_final_mefp:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/back_end_proyek_spk/hitung-data-range-final-mefp.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        data_range_final_mefp:data.data_range_final_mefp.reverse()
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

        let allDataRangeFinalMefp = this.state.data_range_final_mefp.map(({id_data_awal,nama_id_alternatif,pendidikan,pekerjaan,penghasilan,anggota_keluarga}, index) => {
            
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
            {allDataRangeFinalMefp}
            </>
        );
        
    }
}

export default RecordDataRangeFinalMefp;

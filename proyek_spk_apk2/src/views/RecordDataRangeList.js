import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class RecordDataRangeList extends Component{
    static contextType = AppContext;   
    
    state = {
        users:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/back_end_proyek_spk/all-data-awal.php')
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

        let allUsers = this.state.users.map(({id_data_awal,nama_id_alternatif,pendidikan,pekerjaan,penghasilan,anggota_keluarga}, index) => {
            
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
            {allUsers}
            </>
        );
        
    }
}

export default RecordDataRangeList;

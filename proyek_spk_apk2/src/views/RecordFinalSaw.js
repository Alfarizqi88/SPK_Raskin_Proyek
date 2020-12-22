import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

class RecordFinalSaw extends Component{
    static contextType = AppContext;   
    
    state = {
        data_final_saw:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/back_end_proyek_spk/hitung-data-rangking-saw.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        data_final_saw:data.data_final_saw.reverse()
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

        let allFinalSaw = this.state.data_final_saw.map(({id_data_awal,nama_id_alternatif,total}, index) => {
            
            return  (   
            
                <tr key={id_data_awal}>
                    
                    <td className="text-center">{nama_id_alternatif}</td>   
                    <td className="text-center">{total}</td>      

                </tr>
            );
        });
        

        

        return(
            <>
            {allFinalSaw}
            </>
        );
        
    }
}

export default RecordFinalSaw;

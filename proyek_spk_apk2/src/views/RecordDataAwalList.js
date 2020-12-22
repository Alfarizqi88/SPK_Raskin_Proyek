import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class RecordDataAwalList extends Component{
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

    handleUpdate = (id) => {
        Axios.post('http://localhost/back_end_proyek_spk/update-data-awal.php',
        {
            id_data_awal:id,
            nama_id_alternatif:this.item_nama_id_alternatif.value,
            pendidikan:this.item_pendidikan.value,
            pekerjaan:this.item_pekerjaan.value,
            penghasilan:this.item_penghasilan.value,
            anggota_keluarga:this.item_anggota_keluarga.value
            
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id_data_awal === id){
                        user.nama_id_alternatif = this.item_nama_id_alternatif.value; 
                        user.pendidikan = this.item_pendidikan.value;  
                        user.pekerjaan = this.item_pekerjaan.value;  
                        user.penghasilan = this.item_penghasilan.value;                        
                        user.anggota_keluarga = this.item_anggota_keluarga.value;                        
                        user.isEditing = false;
                        return user;
                    }
                    return user; 
                });
                this.setState({
                    users
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    editMode = (id) => {
        let users = this.state.users.map(user => {
            if(user.id_data_awal === id){
                user.isEditing = true;
                return user;
            }
            user.isEditing = false;
            // console.log(user.isEditing)
            return user;
            
        });
        

        this.setState({
            users
        });       
    }

    cancleEdit = (id) => {
        let users = this.state.users.map(user => {
            if(user.id_data_awal === id){
                user.isEditing = false;
                return user;
            }
            return user
            
        });
        this.setState({
            users
        });
    }

    handleDelete = (id) => {
        let deleteUser = this.state.users.filter(user => {
            return user.id !== id;
        });
        
        Axios.post('http://localhost/back_end_proyek_spk/delete-data-awal.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate(){
        let newUser = this.context.new_user;
        if(newUser){ 
            this.setState({
                users:[
                    newUser,
                    ...this.state.users
                    
                ]
            });          
            this.context.new_user = false;
        }        
    }

    render(){

        let allUsers = this.state.users.map(({id_data_awal,nama_id_alternatif,pendidikan,pekerjaan,penghasilan,anggota_keluarga,isEditing}, index) => {
            
            return isEditing === true ? (   
            <tr key={id_data_awal}>
                <td><input className="form-control" type="text"  defaultValue={id_data_awal} disabled/></td>  
                <td><input className="form-control" type="text" ref={(item) => this.item_nama_id_alternatif = item} defaultValue={nama_id_alternatif}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_pendidikan = item} defaultValue={pendidikan}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_pekerjaan = item} defaultValue={pekerjaan}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_penghasilan = item} defaultValue={penghasilan}/></td>   
                <td><input className="form-control" type="text" ref={(item) => this.item_anggota_keluarga = item} defaultValue={anggota_keluarga}/></td>   
                <td className="text-center">
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id_data_awal)}>Save</button>
                    <button onClick={() => this.cancleEdit(id_data_awal)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ):
            ( 
                <tr key={id_data_awal}>
                    <td className="text-center">{id_data_awal}</td>
                    <td className="text-center">{nama_id_alternatif}</td>   
                    <td className="text-center">{pendidikan}</td>   
                    <td className="text-center">{pekerjaan}</td>                    
                    <td className="text-center">{penghasilan}</td>     
                    <td className="text-center">{anggota_keluarga}</td>     
                    <td className="text-center">
                        <button className="btn btn-dark mr-2" onClick={() => this.editMode(id_data_awal)}>Edit</button>
                        <button onClick={() => this.handleDelete(id_data_awal)} className="btn btn-danger">Delete</button>
                    </td>
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

export default RecordDataAwalList;

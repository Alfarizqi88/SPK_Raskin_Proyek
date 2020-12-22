import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class RecordAlternatifList extends Component{
    static contextType = AppContext;   
    
    state = {
        users:[]
    }
    
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
        Axios.post('http://localhost/back_end_proyek_spk/update-alternatif.php',
        {
            id_alternatif:id,
            nama_id_alternatif:this.item_nama_id_alternatif.value,
            nik:this.item_nik.value,
            nama_alternatif:this.item_nama_alternatif.value
            
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id_alternatif === id){
                        user.nama_id_alternatif = this.item_nama_id_alternatif.value;  
                        user.nik = this.item_nik.value;  
                        user.nama_alternatif = this.item_nama_alternatif.value;                        
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
            if(user.id_alternatif === id){
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
            if(user.id_alternatif === id){
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
        
        Axios.post('http://localhost/back_end_proyek_spk/delete-alternatif.php',{
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

        let allUsers = this.state.users.map(({id_alternatif,nama_id_alternatif,nik,nama_alternatif,isEditing}, index) => {
            
            return isEditing === true ? (   
            <tr key={id_alternatif}>
                <td><input className="form-control" type="text"  defaultValue={id_alternatif} disabled/></td>  
                <td><input className="form-control" type="text" ref={(item) => this.item_nama_id_alternatif = item} defaultValue={nama_id_alternatif}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_nik = item} defaultValue={nik}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_nama_alternatif = item} defaultValue={nama_alternatif}/></td>                
                <td className="text-center">
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id_alternatif)}>Save</button>
                    <button onClick={() => this.cancleEdit(id_alternatif)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ):
            ( 
                <tr key={id_alternatif}>
                    <td className="text-center">{id_alternatif}</td>
                    <td className="text-center">{nama_id_alternatif}</td>   
                    <td className="text-center">{nik}</td>   
                    <td className="text-center">{nama_alternatif}</td>                    
                    <td className="text-center">
                        <button className="btn btn-dark mr-2" onClick={() => this.editMode(id_alternatif)}>Edit</button>
                        <button onClick={() => this.handleDelete(id_alternatif)} className="btn btn-danger">Delete</button>
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

export default RecordAlternatifList;

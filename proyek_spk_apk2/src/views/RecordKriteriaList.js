import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class RecordKriteriaList extends Component{
    static contextType = AppContext;   
    
    state = {
        users:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/back_end_proyek_spk/all-kriteria.php')
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
        Axios.post('http://localhost/back_end_proyek_spk/update-kriteria.php',
        {
            id_kriteria:id,
            nama_kriteria:this.item_nama_kriteria.value,
            bobot:this.item_bobot.value,
            status:this.item_status.value,
            
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id_kriteria === id){
                        user.nama_kriteria = this.item_nama_kriteria.value;                        
                        user.bobot = this.item_bobot.value;                        
                        user.status = this.item_status.value;                        
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
            if(user.id_kriteria === id){
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
            if(user.id_kriteria === id){
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
        
        Axios.post('http://localhost/back_end_proyek_spk/delete-kriteria.php',{
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

        let allUsers = this.state.users.map(({id_kriteria,nama_kriteria,bobot,status,isEditing}, index) => {
            
            return isEditing === true ? (   
            <tr key={id_kriteria}>
                <td><input className="form-control" type="text"  defaultValue={id_kriteria} disabled/></td>  
                <td><input className="form-control" type="text" ref={(item) => this.item_nama_kriteria = item} defaultValue={nama_kriteria}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_bobot = item} defaultValue={bobot}/></td>                
                <td><input className="form-control" type="text" ref={(item) => this.item_status= item} defaultValue={status}/></td>                
                <td className="text-center">
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id_kriteria)}>Save</button>
                    <button onClick={() => this.cancleEdit(id_kriteria)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ):
            ( 
                <tr key={id_kriteria}>
                    <td className="text-center">{id_kriteria}</td>
                    <td className="text-center">{nama_kriteria}</td>                    
                    <td className="text-center">{bobot}</td>   
                    <td className="text-center">{status}</td>   
                    <td className="text-center">
                        <button className="btn btn-dark mr-2" onClick={() => this.editMode(id_kriteria)}>Edit</button>
                        <button onClick={() => this.handleDelete(id_kriteria)} className="btn btn-danger">Delete</button>
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

export default RecordKriteriaList;

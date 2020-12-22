import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class RecordSubKriteriaList extends Component{
    static contextType = AppContext;   
    
    state = {
        users:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/back_end_proyek_spk/all-sub-kriteria.php')
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
        Axios.post('http://localhost/back_end_proyek_spk/update-sub-kriteria.php',
        {
            id_sub_kriteria:id,
            nama_kriteria:this.item_nama_kriteria.value,
            nama_sub_kriteria:this.item_nama_sub_kriteria.value,
            nilai_sub_kriteria:this.item_nilai_sub_kriteria.value
            
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id_sub_kriteria === id){
                        user.nama_kriteria = this.item_nama_kriteria.value;                        
                        user.nama_sub_kriteria = this.item_nama_sub_kriteria.value;                        
                        user.nilai_sub_kriteria = this.item_nilai_sub_kriteria.value;                        
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
            if(user.id_sub_kriteria === id){
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
            if(user.id_sub_kriteria === id){
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
        
        Axios.post('http://localhost/back_end_proyek_spk/delete-sub-kriteria.php',{
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

        let allUsers = this.state.users.map(({id_sub_kriteria,nama_kriteria,nama_sub_kriteria,nilai_sub_kriteria,isEditing}, index) => {
            
            return isEditing === true ? (   
            <tr key={id_sub_kriteria}>
                <td className="text-center"><input className="form-control" type="text"  defaultValue={id_sub_kriteria} disabled/></td>  
                <td className="text-center"><input className="form-control" type="text" ref={(item) => this.item_nama_kriteria = item} defaultValue={nama_kriteria}/></td>                
                <td className="text-center"><input className="form-control" type="text" ref={(item) => this.item_nama_sub_kriteria = item} defaultValue={nama_sub_kriteria}/></td>                
                <td className="text-center"><input className="form-control" type="text" ref={(item) => this.item_nilai_sub_kriteria= item} defaultValue={nilai_sub_kriteria}/></td>                
                <td className="text-center">
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id_sub_kriteria)}>Save</button>
                    <button onClick={() => this.cancleEdit(id_sub_kriteria)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ):
            ( 
                <tr key={id_sub_kriteria}>
                    <td className="text-center">{id_sub_kriteria}</td>
                    <td className="text-center">{nama_kriteria}</td>                    
                    <td className="text-center">{nama_sub_kriteria}</td>   
                    <td className="text-center">{nilai_sub_kriteria}</td>   
                    <td className="text-center">
                        <button className="btn btn-dark mr-2" onClick={() => this.editMode(id_sub_kriteria)}>Edit</button>
                        <button onClick={() => this.handleDelete(id_sub_kriteria)} className="btn btn-danger">Delete</button>
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

export default RecordSubKriteriaList;

import React, {Component} from 'react';
import AuthService from 'views/auth.service';
import axios, {post} from 'axios'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)

    }
      onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(e.target.value);
      }
      // onChangePassword(e) {
      //   this.setState({
      //     password:e.target.value
      //   });
      //   // console.log(e.target.value);
      // }

      // handleLogin(e){
      //   e.preventDefault();
      //   this.setState({
      //     message:""
      //   });
      //   AuthService.login(this.state.username, this.state.password).then(
      //     () => {
      //       this.props.history.push("/");
      //       window.location.reload();
      //     },
      //     error => {
      //       console.log(error.response);
      //     }
      //   )
      // }
    handleSubmit = e => {
        e.preventDefault()

        const data = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('/admin/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.result)
                console.log(res)
                this.props.history.push(`/admin/dashboard`)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br><br></br><br></br><br></br><br></br>
                        <h2><center>Login Sistem</center></h2>

                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">

                                    <label >Username </label>
                                     <input type="username"
                                            className="form-control"
                                            name="username"
                                            placeholder="Masukkan Username"
                                            value={this.state.username}
                                            onChange={this.onChange} required/>
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password"
                                           name="password"
                                           className="form-control"
                                           placeholder="Masukkan Password"
                                           value={this.state.password}
                                           onChange={this.onChange} required/>
                                </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                            </form>
                        </div>
                </div>
            </div>
         );
    }
}

export default Login ;

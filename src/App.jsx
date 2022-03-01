import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            userName: '',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this);
        this.changeuserName=this.changeuserName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeFullName(e) {
        this.setState({
            fullName:e.target.value
        })
    }
    changeuserName(e) {
        this.setState({
            userName:e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email:e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password:e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const registered = {
            fullName:this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(result => console.log(result.data))

        this.setState({
            fullName:'',
            userName:'',
            password:'',
            email:''
        });
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text" placeholder="Full Name" onChange={this.changeFullName} value={this.state.fullName} className='form-control form-group'/>
                            <input type="text" placeholder="User Name" onChange={this.changeuserName} value={this.state.userName} className='form-control form-group'/>
                            <input type="email" placeholder="example@gmail.com" onChange={this.changeEmail} value={this.state.email} className='form-control form-group'/>
                            <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} className='form-control form-group'/>
                            <input type="submit" className="btn btn-danger btn-block" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
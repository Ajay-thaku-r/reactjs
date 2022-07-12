import React from "react";

class Home extends React.Component {
    state = {
        username: '',
        password: ''
    }
     addData = (e) => {
        e.preventDefault()
        if(this.state.username === "" || this.state.password === ""){
            alert("All Fields Are Mandatory")
            return;
        }
        this.props.addUserHandler(this.state)
        this.setState({username:"",password:""})
    }
   
    render(){
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center" style={{height:"70vh"}}>
                    <div className="col d-flex justify-content-center">
                        <div className="col-3 col-form">
                            <form onSubmit={ this.addData } className="text-center the-form">
                                <input type="text" name="username" value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})}placeholder="Set UserName" className="form-input"/><br></br>
                                Your Username is {this.state.username}
                                <br></br><br></br>
                                <input type="password" name="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} placeholder="Set password" className="form-input"/><br></br>
                                <br></br>
                                <input type="submit" value="Sign Up" className="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
export default Home;
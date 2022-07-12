import React from "react";

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center" style={{height:"70vh"}}>
                    <div className="col d-flex justify-content-center">
                        <div className="col-3 col-form">
                            <form className="text-center the-form">
                                <input type="text" name="username" value="" placeholder="Set UserName" className="form-input"/><br></br><br></br>
                                <input type="password" name="password" value="" placeholder="Set password" className="form-input"/><br></br><br></br>
                                <input type="submit" value="Sign Up" className="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
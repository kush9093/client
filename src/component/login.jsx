import { useRef } from "react";

function Login({handleLogin}) {

    const email = useRef();
    const password = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(email.current.value,password.current.value)
    }


    return (<>
        <div style={{marginTop:"15%",marginLeft:"10%",marginRight:"10%"}}>
            <div className="h1" style={{textAlign:"center",marginBottom:"5%"}}>𝓂ℴ𝓃ℯ𝓎𝒷ℴℴ𝓀</div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3 mt-3 ml-3 mr-3">
                    <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" ref={email} required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control" id="password" placeholder="Enter password" name="password" ref={password} required />
                    <label htmlFor="pwd">Password</label>
                </div>
                <div className="d-grid mb-3 mt-3">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    </>);
}

export default Login;
import { useRef, useState } from "react";
import {useNavigate} from "react-router-dom";


function Login({accountAPI,setLogon}) {

    // const {accountAPI,setLogon} = props;
    const [error,setError] = useState(false);
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        accountAPI.auth(email.current.value,password.current.value)
        .then(received=>{
            console.log(received);
            if(received.result){
                setLogon(true);
                console.log(received.token); // 어딘가? 에 저장
                localStorage.setItem("token",received.token);
                localStorage.setItem("email",email.current.value);
                navigate("/")
                setError(false);
            } else {
                setError(true);
            }
        })
    }


    return (<>
        <div style={{marginTop:"15%",marginLeft:"10%",marginRight:"10%"}}>
            <div className="h1" style={{textAlign:"center",marginBottom:"5%",color:"white"}}>𝓂ℴ𝓃ℯ𝓎𝒷ℴℴ𝓀</div>
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
                    <button type="submit" className="btn btn-outline-light btn-block">Submit</button>
                </div>
            </form>
        </div>
    </>);
}

export default Login;
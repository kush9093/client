import { useRef } from "react";
import {useNavigate} from "react-router-dom";

function Register({accountAPI}) {

    const year = [];
    for(let i = new Date(Date.now()).getFullYear();i>=1930;i--){
        year.push(i);
    }
    const birth = year.map((elm)=>{
       return <option key={elm} value={elm}>{elm}</option>
    })
    const emailref = useRef();
    const pwdref = useRef();
    const nameref = useRef();
    const genderref = useRef();
    const birthref = useRef();
    const navigate = useNavigate();

    const handleRegister = (evt) =>{
        evt.preventDefault();
        const body = {
            email:emailref.current.value,
            password:pwdref.current.value,
            name:nameref.current.value,
            gender:genderref.current.value,
            birth:birthref.current.value
        }
        accountAPI.register(body).then(()=>{
            navigate("/")
        })
    } 




    return (<>
        <div className="mt-5" style={{marginLeft:"20%",marginRight:"20%"}}>
            <form className="row g-3" onSubmit={handleRegister}>
                <div>
                    <input type="email" ref={emailref} name="email" className="form-control" placeholder="Email"/>
                </div>
                <div>
                    <input type="password" ref={pwdref} name="password" className="form-control"  placeholder="Password"/>
                </div>
                <div>
                    <input type="text" ref={nameref} name="name" className="form-control" placeholder="Name"/>
                </div>
                <div>
                <label className="form-label" style={{color:"white"}}>gender</label>
                    <select name="gender" ref={genderref} className="form-select">
                        <option key="nondisclosure" value="nondisclosure">미공개</option>
                        <option key="male" value="male">남자</option>
                        <option key="female" value="female">여자</option>
                    </select>
                </div>
                <div>
                <label className="form-label" style={{color:"white"}}>birth</label>
                    <select name="birth" ref={birthref} className="form-select">
                        {birth}
                    </select>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-outline-light">register</button>
                </div>
            </form>
        </div>
    </>);
}

export default Register;
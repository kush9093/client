import { useRef } from "react";


function Register() {

    

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

    const handleRegister = (evt) =>{
        evt.preventDefault();
        fetch("http://localhost:8080/api/account/register",{
            method:"POST",
            headers:{
                "content-type":"application/json",

            },
            body:JSON.stringify({
                email:emailref.current.value,
                password:pwdref.current.value,
                name:nameref.current.value,
                gender:genderref.current.value,
                birth:birthref.current.value
            })
        }).then((response)=>response.json())
        .then(json => {
            if(json.result){
                window.location.href = "http://localhost:3000"
            }
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
                <label className="form-label">gender</label>
                    <select name="gender" ref={genderref} className="form-select">
                        <option key="nondisclosure" value="nondisclosure">미공개</option>
                        <option key="male" value="male">남자</option>
                        <option key="female" value="female">여자</option>
                    </select>
                </div>
                <div>
                <label className="form-label">birth</label>
                    <select name="birth" ref={birthref} className="form-select">
                        {birth}
                    </select>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">register</button>
                </div>
            </form>
        </div>
    </>);
}

export default Register;
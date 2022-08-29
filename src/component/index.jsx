
import { useNavigate } from 'react-router-dom';

function Index() {
    const navigate = useNavigate();
    const moveLogin = (evt) =>{
        // evt.preventDefault();
      navigate("/history")
    }

    return (<div className="card mt-5" >
        <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a onClick={moveLogin} className="btn btn-primary">인덱스</a>
        </div>
        <img className="card-img-top" style={{width:"400px",height:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjGa79CnPYpOD_WDG_5xGlAUkOTv5QqShsA&usqp=CAU" alt="Card image" />
    </div>);
}

export default Index;
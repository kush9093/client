import { useEffect, useRef, useState } from "react";
import HistoryBar from "./historybar";
import HistoryItem from "./historyitem";
import Write from "./write";


function History({ datas, historyAPI, logon }) {
    const monthref = useRef();
    const payref = useRef();
    const cateref = useRef();
    const [items, setItems] = useState([]);
    const [graph, setGraph] = useState(true);

    useEffect(() => {
        itemsUPdate();
    }, [logon])
    const itemsUPdate = () => {
        const month = new Date().toISOString().slice(0, 7);
        monthref.current.value = month
        historyAPI.history(month).then(received => {
            if (received.result) {
                setItems(received.datas)
            }
        })
    }
    // const monthChange = () => {
    //     historyAPI.history(monthref.current.value)
    //         .then(received => {
    //             if (received.result) {
    //                 setItems(received.datas)
    //             }
    //         })
    // }
    const payment = () => {
        historyAPI.payment(monthref.current.value, payref.current.value, cateref.current.value)
            .then(received => {
                if (received.result) {
                    setItems(received.datas)
                }
            })
    }
    const ched = (evt) => {
        let r = document.querySelectorAll("input[type='checkbox']")
        r.forEach((elm) => {
            elm.checked = evt.target.checked
        })
    }

    const deleteSelector = () => {
        let r = document.querySelectorAll("input[type='checkbox']")
        const arr = [];
        r.forEach((elm) => {
            if (elm.checked && elm.value !== "on") {
                arr.push(elm.value);
            }
        })
        historyAPI.delete(arr).then(() => {
            historyAPI.payment(monthref.current.value, payref.current.value, cateref.current.value)
                .then(received => {
                    if (received.result) {
                        setItems(received.datas)
                    }
                })
        })
    }

    const option = ["모두", "미분류", "식비", "주거/통신", "생활용품", "의복/미용", "건강/문화", "교통/차량", "용돈/기타"]
        .map((elm) => {
            return <option key={elm} value={elm}>{elm}</option>
        })

    return (<div className="mt-2">
        <div>
            <div className="form-floating mb-3">
                <input type="month" className="form-control" id="itemDate" ref={monthref} onChange={payment} />
                <label htmlFor="itemDate">해당 월 검색</label>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" ref={payref} onChange={payment}>
                            <option>모두</option>
                            <option value="cashAmt">현금</option>
                            <option value="cardAmt">카드</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">결제방식</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" ref={cateref} onChange={payment}>
                            {option}
                        </select>
                        <label htmlFor="floatingSelectGrid">카테고리</label>
                    </div>
                </div>
            </div>
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color:"white"}}>그래프</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={graph} onChange={(evt)=>{
                            setGraph(evt.target.checked)
                        }} />
                    </div>
            {
                graph && <HistoryBar datas={items} />
            }
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-light" onClick={deleteSelector}>
                    <i className="bi bi-trash"></i>
                </button>
                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#write">
                    <i className="bi bi-pencil"></i>
                </button></div>
        </div>
        <div id="write" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <Write historyAPI={historyAPI} handleItem={payment} />
                    </div>
                </div>
            </div>
        </div>



        <table className="table table-hover table-light mt-3">
            <thead>
                <tr>
                    <th scope="col"><input type="checkbox" name="" id="" onClick={ched} /></th>
                    <th scope="col">소비날짜</th>
                    <th scope="col">사용내역</th>
                    <th scope="col">현금</th>
                    <th scope="col">카드</th>
                    <th scope="col">카테고리</th>
                    <th scope="col">태그</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(one => {
                        return <HistoryItem data={one} key={one._id} />
                    })
                }
            </tbody>
        </table>
    </div>

    );
}

export default History;
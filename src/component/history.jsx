import { useEffect, useRef } from "react";
import Write from "./write";


function History({ datas }) {
    const monthref = useRef();

    useEffect(() => {
        const month = new Date().toISOString().slice(0, 7);
        monthref.current.value = month
    }, [])

    return (<div className="mt-2">
        <div>
            <div className="form-floating mb-3">
                <input type="month" className="form-control" id="itemDate" ref={monthref} />
                <label htmlFor="itemDate">해당 월 검색</label>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#write">
                    <i className="bi bi-pencil"></i>
                </button></div>
        </div>
        <div id="write" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <Write />
                    </div>
                </div>
            </div>
        </div>
        
        <table className="table table-hover table-light mt-3">
            <thead>
                <tr>
                    <th scope="col">소비날짜</th>
                    <th scope="col">사용내역</th>
                    <th scope="col">현금</th>
                    <th scope="col">카드</th>
                    <th scope="col">카테고리</th>
                    <th scope="col">태그</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">2022-08-26</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>

            </tbody>
        </table>
    </div>

    );
}

export default History;
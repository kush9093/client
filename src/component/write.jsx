import { useRef } from "react";

function Write() {
    const subref = useRef({});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(subref.current);

    }

    const option = ["미분류","식비","주거/통신","생활용품","의복/미용","건강/문화","교통/차량","용돈/기타"]
    .map((elm)=>{
        return <option key={elm} value={elm}>{elm}</option>
    })

    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="h5">소비내역기입</div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" name="itemDate" ref={(elm)=>{
                    subref.current["itemDate"] = elm;
                }} id="itemDate" />
                <label htmlFor="itemDate">소비날짜</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="useDesc" name="useDesc" ref={(elm)=>{
                    subref.current["useDesc"] = elm;
                }} />
                <label htmlFor="useDesc">사용내역</label>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="cashAmt" name="cashAmt" ref={(elm)=>{
                    subref.current["cashAmt"] = elm;
                }} />
                        <label htmlFor="cashAmt">현금</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="cardAmt" name="cardAmt" ref={(elm)=>{
                    subref.current["cardAmt"] = elm;
                }} />
                        <label htmlFor="cardAmt">카드</label>
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <select type="text" className="form-control" id="cateroy" name="cateroy" ref={(elm)=>{
                    subref.current["cateroy"] = elm;
                }} >
                    {option}
                </select>
                <label htmlFor="cateroy">카테고리</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="tag" name="tag" ref={(elm)=>{
                    subref.current["tag"] = elm;
                }} />
                <label htmlFor="tag">태그</label>
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-success">작성</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">취소</button>
            </div>
        </form>
    );
}

export default Write;
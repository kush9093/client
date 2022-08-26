
function Write() {

    const handleSubmit = (evt) => {
        evt.preventDefault();

    }


    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="h5">소비내역기입</div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="itemDate" />
                <label htmlFor="itemDate">소비날짜</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="useDesc" />
                <label htmlFor="useDesc">사용내역</label>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="cashAmt" />
                        <label htmlFor="cashAmt">현금</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="cardAmt" />
                        <label htmlFor="cardAmt">카드</label>
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <select type="text" className="form-control" id="cateroy" >

                </select>
                <label htmlFor="cateroy">카테고리</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="tag" />
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
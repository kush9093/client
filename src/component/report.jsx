import { useEffect, useRef, useState } from "react";
import Doughnutbar from "./doughnutbar";
import Reportrange from "./reportrange";

function Report({ historyAPI }) {
    let today = new Date().toISOString().slice(0, 10)
    let dday = new Date(Date.now() - (1000 * 60 * 60 * 24 * 30)).toISOString().slice(0, 10);
    const [range, setRange] = useState([]);
    let ddayRef = useRef()
    let todayRef = useRef()

    const report = () => {
        historyAPI.dayRange(ddayRef.current.value, todayRef.current.value)
            .then(received => {
                setRange([...received.datas])
            })
    }
    useEffect(() => {
        report()
    }, [])
    return (<>
        <div>
            <div style={{ textAlign: "center" }}>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" defaultValue={dday} ref={ddayRef} onChange={report} style={{textAlign:"center"}} />
                            <label htmlFor="floatingInputGrid">시작일</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" defaultValue={today} ref={todayRef} onChange={report} style={{textAlign:"center"}} />
                            <label htmlFor="floatingSelectGrid">끝일</label>
                        </div>
                    </div>
                </div>

            </div>
            <Reportrange datas={range} />
        </div>
        <Doughnutbar datas={range} />

    </>);
}

export default Report;
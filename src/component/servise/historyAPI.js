

class HistoryAPI {
    constructor(baseURL) {
        const token = localStorage.getItem("token");
        this.baseURL = baseURL;
        this.getOption = {
            method:"get",
            headers : {
                "authorization" : "Bearer "+token
            }
        }
        this.postOption = {
            method:"post",
            headers:{
                "content-type":"application/json",
                "authorization" : "Bearer "+token
            }
        }
    }

    refreshToken(){
        this.postOption.headers.authorization = "Bearer "+localStorage.getItem("token")
        this.getOption.headers.authorization = "Bearer "+localStorage.getItem("token")
    }

    // 특정달의 데이터를 조회
    async history(month) {
        this.refreshToken()
        const response = await fetch(this.baseURL+"/api/history?month="+month,{
            ...this.getOption,
        })
        return await response.json();
    }
    // 데이터를 추가
    async write(itemDate,useDesc,cashAmt,cardAmt,category,tag){
        this.refreshToken()
        const response = await fetch(this.baseURL+"/api/history/write",{
            ...this.postOption,
            body : JSON.stringify({itemDate,useDesc,cashAmt,cardAmt,category,tag})
        })
        return await response.json();
    }

    async delete(id){
        console.log(...id);
        const response = await fetch(this.baseURL+"/api/history/delete",{
            ...this.postOption,
            body:JSON.stringify({id})
        })
        return await response.json();
    }
    async payment(month,pay,cate) {
        this.refreshToken()
        const response = await fetch(this.baseURL+"/api/history/payment?month="+month+"&payment="+pay+"&category="+cate,{
            ...this.getOption,
        })
        return await response.json();
    }
}

export default HistoryAPI;
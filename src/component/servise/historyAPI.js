

class HistoryAPI {
    constructor(baseURL) {
        const token = localStorage.getItem("token");
        this.baseURL = baseURL;
        this.getOption = {
            method:"get",
            headers : {
                "authrization" : "Bearer "+token
            }
        }
        this.postOption = {
            method:"post",
            headers:{
                "content-type":"application/json",
                "authrization" : "Bearer "+token
            }
        }
    }

    async history(dateMonth) {
        const response = await fetch(this.baseURL+"/api/history",{
            ...this.postOption,
            body : JSON.stringify({dateMonth})
        })
        return await response.json();
    }

}

export default HistoryAPI;
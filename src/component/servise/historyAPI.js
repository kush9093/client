

class HistoryAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.getOption = {
            method:"get"
        }
        this.postOption = {
            method:"post",
            headers:{
                "content-type":"application/json"
            }
        }
    }

}

export default HistoryAPI;
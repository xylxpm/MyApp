
const Request = {
    get:(url, successCallBack, failCallBack) =>{
        return fetch(url)
            .then((response) =>response.json())
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            })
    },
}

export default Request;


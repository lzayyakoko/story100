import {useState , useEffect} from "react";

const FetchingData=()=>{
    const [ datas, setDatas] = useState();
    useEffect(()=>{
        return(
           fetch("https://sheetdb.io/api/v1/wih4m5n79mofd") 
           .then(res=>{
               return res.json();
           })
           .then(data=>{
               setDatas(data);
           })
        )
    },[])
    return { datas }
}
export default FetchingData;
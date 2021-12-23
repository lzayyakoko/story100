import React, {useState, useEffect } from "react";
import Navigation from "./routes/Navigation";
import NetInfo from '@react-native-community/netinfo';
import NoInternet from "./screens/NoInternet";

const App=()=>{
  const [ cheackingNet, setCheackingNet] = useState(false);

  useEffect(()=>{
    return(
      NetInfo.fetch().then(res => {
        setCheackingNet(res.isConnected);
      })
    )
  },[])

  return(
    cheackingNet? <Navigation/>:<NoInternet/>
  );
}

export default App;
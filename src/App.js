import "./styles.css";
import {useState} from "react";
export default function App() {
  var [password,setPassword] = useState("")
  var [confirmPassword,setConfirmPassword] = useState("")
  var [output,setOutput]=useState("")
  function checkPassword(){
    if(password.length >= 8){
     if(password===confirmPassword){
  setOutput("verified")
}else{
  setOutput("not verfied")
} 
    }else{
      setOutput("password should be greater than 8 words")
    }

  }
  return (

    <div className="App">
  <input onChange ={(event)=>setPassword(event.target.value)}></input>
  <input onChange = {(event)=>setConfirmPassword(event.target.value)}></input>
  <button onClick = {checkPassword}>checkPassword</button>
  <h1>{output}</h1>
    </div>
  );
}

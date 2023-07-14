import axios from "axios"
import {useEffect, useState } from "react";


function App() {

  /*
  npm install axios 설치
  */

  const[data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 똑같다.
   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response=> setData(response.data) )
    
  }

  //이데이터를 화면에 로드될때 axios로 select태그의 옵션으로 처리해보세용~~
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json
  
  const[data2, setData2] = useState([]);
  
  useEffect (()=>{
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    .then(response => setData2(response.data))

  },[])

  const list = data2.map((item, index)=> <option key={index}>{item.value}</option>)

  

  return(
    <div>
      <h3>엑시오스 사용하기</h3>
      <button onClick={handleClick}>데이터가져오기</button>
    
      <p>
        {data.userId}<br/>
        {data.userPw}<br/>
        {data.userName}
      </p>
    
      <select>
        {list}
      </select>
        
    </div>
  )


}
export default App
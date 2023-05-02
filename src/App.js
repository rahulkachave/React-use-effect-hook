
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
function App() {
  const [state ,setState]=useState(1);
  const [data ,setData]=useState([]);

  
    useEffect(()=>{
      async function getData(){
        const get =await fetch (`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
        
        const res = await get.json();
        setData(res);
       console.log(res);
      }
      getData();

      document.title=`(${state}) EmployeeList`// its for a title in  (after click change the value)
    },[state])//[state] is a depandancy
  
  return (
  <div>  <div className="App">
   <Header/></div>
   <button onClick={()=> setState(state+1)}>click me{state}</button>
    {
      data.map((element,index)=>{     //mapping the data
        return(
          <div className='data' key={index}>
             <h4>{element.firstName} </h4>
             <h4>{element.lastName}</h4>
             <h4>{element.email}</h4>
             </div>
        )
      })
    }
    </div>
  );
}

export default App;

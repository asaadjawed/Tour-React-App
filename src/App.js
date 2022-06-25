import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";
import { useEffect, useState } from "react";
import axios from "axios";
const url = 'https://course-api.com/react-tours-project'


function App() {

  const [loading,setloading] = useState(true)
  const [tours,setTours] = useState([])

  useEffect(()=> {
    fetchData();
  },[])

  const removeTour = (id)=> {
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour)
  }

  const fetchData = ()=> {
    
    axios.get('https://course-api.com/react-tours-project')
    .then(res=> {
      setloading(false);
      setTours(res.data)
    })
    .catch(err=>{
      setloading(false);
      console.log('err',err)
    })
  }

  console.log(tours, 'final')


  if(loading) {
    return(
      <div>
        <Loading />
      </div>
    )
  }

  if(tours.length==0){
    return(
      <div className="No-tour-left">
          <h1>No tours left</h1>
          <button onClick={()=> fetchData() }>Refresh</button>
      </div>
    )
  }
  

return(
  <div>
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  </div>
)
   
}

export default App;

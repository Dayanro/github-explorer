import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../redux/actions/user";

import './App.css';

const App = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => {
    console.log("APP-state",state);
  })

  // React.useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch])

  //dispatch(getUsers("gcpglobal")); 
  dispatch(getUsers("DayanRo"));

  
  return (
    <div className="App">
     <h1>USERS</h1>
    </div>
  );
}

export default App;

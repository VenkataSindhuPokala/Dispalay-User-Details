
import './App.css';
import MyTable from './table.js';
// import Search from './Search.js';
import Search from './search';
import { useState } from 'react';
import user from './data.js';
function App() {
  const [filteredArray,setfilteredArray]=useState(user)
  return (
    <div>
      <h1>Users_data</h1>
      
        {/* {search()} */}
        <Search  filteredArray={filteredArray} setfilteredArray={setfilteredArray}/>
      <MyTable user={filteredArray} />
    </div>
  );
}

export default App;

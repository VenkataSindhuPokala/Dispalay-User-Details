import { useState } from "react";
// import filteredArray from "./data";

 function Search(props){
    const [inputValue,setinputValue]=useState('')
    const change=(e)=>{
        setinputValue(e.target.value);
        var pattern = new RegExp(inputValue);
       // console.log("p",pattern)
        const afterFilter = props.filteredArray.filter((item)=>{
            if(pattern.test(item.first_name))
                return item;
        });
        console.log(afterFilter)
        // filteredArray=[...afterFilter]
        props.setfilteredArray(afterFilter)
        
    }
    // var inputValue=document.getElementById("search").value;
    
    return(
    <div class="seraching">
    <input type="text" placeholder="Search.." name="search" id="search"onChange={(e)=>change(e)}/>
    <button type="submit">Search</button>
    </div> 
    );
}
export default Search;
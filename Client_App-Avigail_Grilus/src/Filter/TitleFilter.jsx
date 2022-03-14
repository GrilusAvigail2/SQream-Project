import React, { useState,useEffect,useRef } from "react";
import BookContext from '../BooksList/Books';
import TopicFilter from "./TopicFilter";
import Filter from './Filter';
import '../BooksList/Books.css';

//filter books by title
function TitleFilter({completeList,list,onListChange}) {

    const [booksList,setBooksList] = useState();
    const [value,setValue] = useState("");

    useEffect(() => {
        debugger;
        setBooksList(list);
        console.log('effect-filter:',booksList);
    },[list]);

    //filtered the books with the title that includes the typed query, when the input query changed
    const handleOnChange =(val)=>{
        setValue(val);
        debugger;
        //if the value is empty
        if(val==" "){
            //send the complete list of books
            onListChange(list);
        }
        else{ // if not- send the filtered list
            let filteredList = completeList.filter(item=>item.title.toLowerCase().includes(val));
            console.log('change-filter:',filteredList);
            onListChange(filteredList);
            setBooksList(list);
        }   
    };

    
    return(     
      <div className="col-xs-6">
          <div className="input-group mb-3">
                <button className="btn btn-secondary" type="button" aria-expanded="false">Filter by Title</button>              
                <input type="text" className="form-control-xs-4" aria-label="Text input with dropdown button" onKeyDown={e=>handleOnChange(e.target.value)}/>
          </div> 
     </div>
     );
}

export default TitleFilter;
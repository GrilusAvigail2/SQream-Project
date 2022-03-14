import React, { useState,useEffect,useContext } from "react";
import BookContext from './Books';
import ShowBook from "./ShowBook";
import ShowBookDetails from './ShowBookDetails';

//display the list recived from the Books function 
function ShowBooksList({completeList,list,onListChange}) {
    const [bookslist, setBooksList] = useState(list);

    useEffect(() => {
        setBooksList(list);
    },[list]);

    //remove the book who clicked on it
    const handleRemove = (id) =>{
        const newList = bookslist.filter(item => item.id != id);
        setBooksList(newList);
    }
    
    return(
        <div className="container">
         {console.log('show:',bookslist)}
        <div className="row">
            {!(Object.keys(bookslist).length === 0)&&bookslist.map(item => <ShowBook key={item.id} item={item} onRemove={handleRemove}/>)}
        </div>
        <br></br>
        {!(Object.keys(bookslist).length === 0)&&<button type="button" className="btn btn-light btn-xs position-absolute end-10 start-50" onClick={()=>onListChange(completeList)}>Show all books</button>}
        <br></br>
        <br></br>
        </div>
    );
}
export default ShowBooksList;
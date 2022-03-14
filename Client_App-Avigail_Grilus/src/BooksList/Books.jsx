import React, { useState,useEffect,createContext, useCallback } from "react";
import ShowBooksList from './ShowBooksList';
import Filter from "../Filter/Filter";
import './Books.css';


const BookContext = createContext();

function Books() {

  // const [booksList, setBooksList] = useState([{id:1,title:"funny bunny"},{id:2,title:"smile"},{id:3,title:"yes you can"},{id:4,title:"sparkels"}]);

  //list to display the current list according to the delete and the filtering
  const [booksList, setBooksList] = useState(
    [{
      "id": Number,
      "title": "",
      "subjects": [],
      "authors": [{name: "", birth_year: Number,death_year: Number}],
      "translators": [],
      "bookshelves": [],
      "languages": [],
      "copyright": Boolean,
      "media_type": "",
      "formats": {},
      "download_count": ""
    }
  ]);
  const [completeList, setCompleteList] = useState(
    [{
      "id": Number,
      "title": "",
      "subjects": [],
      "authors": [{name: "", birth_year: Number,death_year: Number}],
      "translators": [],
      "bookshelves": [],
      "languages": [],
      "copyright": Boolean,
      "media_type": "",
      "formats": {},
      "download_count": ""
    }
  ]);

  useEffect(() => {
    getAllBooksFromAPI();
    console.log('effect-books:',booksList);
  },[]);

  // get the books list from the server
  const getAllBooksFromAPI = async ()=>{
    let list = [...booksList];
    await fetch("http://localhost:9000/books")
     .then(res=>res.json())
     .then((json)=>{
       debugger;
       json.map((obj,index)=>{
        list[index] =
        {
            id: obj.id,
            title:obj.title  ,
            subjects: obj.subjects,
            authors: obj.authors ,
            translators: obj.translators ,
            bookshelves: obj.bookshelves,
            languages: obj.languages  ,
            copyright: obj.copyright,
            media_type: obj.media_type,
            formats: obj.formats,
            download_count: obj.download_count 
        };})
      })
      setBooksList(list);
      setCompleteList(list);
  };

  //update the books list for display
  const onListChange = (newList)=>{
    setBooksList(newList);
  };

  return (
    <div>
      <h2>Gutenberg Books</h2>
      {console.log('render:',booksList)}
      {<>
        <Filter completeList={completeList} list={booksList} onListChange={onListChange}/>
        <ShowBooksList completeList={completeList} list={booksList} onListChange={onListChange}/>
      </>}
    </div>
  );
}
export default Books;
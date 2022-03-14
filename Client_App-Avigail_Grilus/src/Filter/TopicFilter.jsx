import React, { useState } from "react";

//filter books by topic
function TopicFilter({completeList,list,onListChange}) {

    const [value,setValue] = useState(" ");
    const [bookslist, setBookslist] = useState(completeList);

    //get books with topic that contains the input text
    const getBooksByTopic = async ()=>{
        let newList = [...list];
        await fetch("http://localhost:9000/books?topic="+ value)
         .then(res=>res.json())
         .then((json)=>{
           debugger;
           json.map((obj,index)=>{
            newList[index] =
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
          setBookslist(newList);
      };

    //update the value from the input box
    const handleOnChange = (val) => {
        debugger;
        setValue(val);
    };

    //get the books filtered by topic and update the list for display
    const handleOnClick = () =>{
        getBooksByTopic();
        debugger;
        onListChange(bookslist);
        console.log('effect-topic:',bookslist);
    }

    return(
        <div className="col-xs-6">
           <div className="input-group mb-3">
              <input type="text" className="form-control-xs-4" aria-label="Text input with dropdown button" onKeyDown={(e)=>handleOnChange(e.target.value)}/>
              <button className="btn btn-secondary" type="button" aria-expanded="false" onClick={()=>handleOnClick()}>Filter by Topic</button>
          </div> 
        </div>
    );

}

export default TopicFilter;

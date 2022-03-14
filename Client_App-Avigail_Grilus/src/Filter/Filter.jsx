import React, { useState,useEffect,useRef } from "react";
import TopicFilter from './TopicFilter';
import TitleFilter from './TitleFilter';
import '../BooksList/Books.css';

//display the inputs to filter books by topic and by title
function Filter({completeList,list,onListChange}) {
    
    return(     
        <div className="input-group justify-content-center">
            <TitleFilter completeList={completeList} list={list} onListChange={onListChange}/>
            <TopicFilter completeList={completeList} list={list} onListChange={onListChange}/>
        </div>
     );
}

export default Filter;
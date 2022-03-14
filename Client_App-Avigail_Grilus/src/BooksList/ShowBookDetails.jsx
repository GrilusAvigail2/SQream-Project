import React, { useState,useEffect,useContext } from "react";
import BookContext from '../BooksList/Books';

//display the selected book with its details
function ShowBookDetails({item}) {
    
    return(
        <div className="container justify-content-center">
           <div className="row">
            <span>id: {item.id}</span>
            <span>title: {item.title}</span>
            <span>subjects: {item.subjects.map(s=><span>{s},</span>)}</span>
            <span>authors: {item.authors.map((a,i)=><span>{i}. name:{a.name}</span>)}</span>
            <span>translators: {item.translators.map(t=><span>{t},</span>)}</span>
            <span>bookshelves: {item.bookshelves.map(b=><span>{b},</span>)}</span>
            <span>languages: {item.languages.map(l=><span>{l},</span>)}</span>
            <span>copyright: {item.copyright}</span>
            <span>media_type: {item.media_type}</span>
            <span>download_count: {item.download_count}</span>
           </div>
           <a href="/">back to home page</a>
        </div>
    );
}

export default ShowBookDetails;
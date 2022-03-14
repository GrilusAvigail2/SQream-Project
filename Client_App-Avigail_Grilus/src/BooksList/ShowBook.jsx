import React, { useState,useEffect,useContext } from "react";
// import {Switch,Link,Route,Router} from "react-router-dom";
import ShowBookDetails from "./ShowBookDetails";
import './Books.css';

//display each book from the list 
function ShowBook({item,onRemove}) {
    
    return(
        <div>
          {/*when clicking on the title book the ShowBookDetails function will display the book details */}
          {/* <Router>
            <Link to='/details'> */}
            {item.title!==" "&&
                <div className="col-sm-4 border">
                        <span>{item.title}</span>
                        <div className="d-flex justify-content-end"> <button type="button" className="btn btn-secondary btn-sm" onClick={() => onRemove(item.id)}><i className="bi bi-trash"></i></button></div>
                </div>}
            {/* </Link>
            <Switch>
                <Route exact path="/">
                   <Books />
                </Route>
                <Route path="/details">
                   <ShowBookDetails item={item} />
                </Route>
            </Switch>
          </Router> */}
        </div>
    );
}

export default ShowBook;
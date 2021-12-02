//import {Button} from 'react-bootstrap';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Button} from 'react-bootstrap';
import styled from "styled-components";
import React from "react"


class StarButton extends React.Component { 
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            isFav: false,
        }
        this.state.isFav=getBookmark(id)
    } 
    render() {
      return (
        <a  onClick={updateBookmark((this.state.id))}>
          { this.state.isFav
            ? <AiFillStar/>
            : <AiOutlineStar/>
          }
        </a>
      );
    }
}
  
function updateBookmark(id) {
    return (this.state.isFav == false )
}

  
export default function AddBookmark() {
    return (
        <div>
            <body className="body"> 
                <StarButton/>
            </body>
        </div>
    )
}

  
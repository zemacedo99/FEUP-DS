import React from 'react';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";


class Bookmark extends React.Component {
    constructor(props) {
        super(props)
        this.patlet_id = props.patlet_id

        this.state = {
            id : this.patlet_id,
            bookmarks : JSON.parse(localStorage.getItem('bookmarks'))
        }

        if (this.state.bookmarks === undefined || this.state.bookmarks === null) {
            this.setState({bookmarks: {}})
        }
    }

    updateBookmark() {
        //this.setState({bookmarks: JSON.parse(localStorage.getItem('bookmarks'))})
        let dummy=JSON.parse(localStorage.getItem('bookmarks'))
        if (dummy[this.patlet_id] === undefined) {
            dummy[this.patlet_id] = true
            
        }
        else {
            delete dummy[this.patlet_id];           
        }  
        this.setState({bookmarks: dummy})
        console.log(this.state)
        localStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks));
    }

    render() {
        return (
            <span onClick={() => {this.updateBookmark()}}>
                { this.state.bookmarks[this.patlet_id] === true
                    ? <AiFillStar/>
                    : <AiOutlineStar/>
                }
            </span>
          );
    }
}


export { Bookmark};

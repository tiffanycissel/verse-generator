import React from 'react';
import {bibleBreakdown} from '../allBookInfo';

export class RefSelectChapter extends React.Component{
    constructor(props){
        super(props);
        this.returnChapterValue = this.returnChapterValue.bind(this);
    }

    returnChapterValue(e){
        var updates = {book: this.props.book, chapter: e.target.value, youVersAbb: this.props.yvAbb, bookID: this.props.bookID};
        this.props.onChange(updates);
    }

    getChapters(){
        if(this.props.book){
            var selInd;
            var select = document.getElementById(this.props.type);
            var theOpts = '<option></option>';
            for(var i=0; i<bibleBreakdown[this.props.bookID].length; i++){
                theOpts += '<option value="'+i+'">'+(i+1)+'</option>';
            }
            select.innerHTML = theOpts;
            if(this.props.chapt){
                selInd = parseInt(this.props.chapt)+1;
            }
            select.selectedIndex = selInd;
        }
        
    }

    render(){
        this.getChapters();             
        return(
            <React.Fragment>
            <select id={this.props.type} onChange={this.returnChapterValue}>
                <option></option>
            </select>
            </React.Fragment>
        )
    }
}
import React from 'react';
import {bibleBreakdown} from '../allBookInfo';

export class RefSelectVerse extends React.Component{
    constructor(props){
        super(props);
        this.returnVerseValue = this.returnVerseValue.bind(this);
    }

    returnVerseValue(e){
        var updates = {book: this.props.book, chapter: this.props.chapter, verse: e.target.value, youVersAbb: this.props.yvAbb, bookID:this.props.bookID};
        this.props.onChange(updates);
    }

    getVerses(){
        if(this.props.chapter>=0){
            var selInd;
            var select = document.getElementById(this.props.type);
            var theOpts = '<option></option>';
            var vMin = bibleBreakdown[this.props.bookID][this.props.chapter].start;
            var vMax = bibleBreakdown[this.props.bookID][this.props.chapter].end;
            var verses = 1+(vMax - vMin);
            for(var i=0; i<verses; i++){
                theOpts += '<option value="'+i+'">'+(i+1)+'</option>';
            }
            select.innerHTML = theOpts;
            if(this.props.verse){
                selInd = parseInt(this.props.verse)+1;
            }
            select.selectedIndex = selInd;
        }
    }

    render(){
        this.getVerses();
                        
        return(
            <React.Fragment>
            <select id={this.props.type} onChange={this.returnVerseValue}>
                <option></option>
            </select>
            </React.Fragment>
        )
    }
}
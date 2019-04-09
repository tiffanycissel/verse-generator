import React from 'react';
import {RefSelectBook} from './RefSelectBook';
import {RefSelectChapter} from './RefSelectChapter';
import {RefSelectVerse} from './RefSelectVerse';
import '../components/RefSelect.css';

export class RefSelect extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          
          refSel: {
            book: '',
            youVersAbb: '', 
            chapter: -1,
            verse: -1,            
            bookID: -1
          } 
        };
        this.updateRefSelectBook = this.updateRefSelectBook.bind(this);
        this.updateRefSelectChapter = this.updateRefSelectChapter.bind(this);
        this.updateRefSelectVerse = this.updateRefSelectVerse.bind(this);
      }
    
    updateRefSelectBook(theBook){
    this.setState({
        refSel: {
        book: theBook.book,
        youVersAbb: theBook.youVersAbb,
        verse: -1,
        bookID: theBook.bookID,
        chapter: -1
        }
    });
    this.props.onChange({
        book: theBook.book,
        youVersAbb: theBook.youVersAbb,
        verse: -1,
        bookID: theBook.bookID,
        chapter: -1
    });
    }

    updateRefSelectChapter(theChapter){
    this.setState({
        refSel: {
        chapter: theChapter.chapter,
        book: theChapter.book,
        youVersAbb: theChapter.youVersAbb,
        bookID:theChapter.bookID,
        verse: -1
        }
    });
    this.props.onChange({
        chapter: theChapter.chapter,
        book: theChapter.book,
        youVersAbb: theChapter.youVersAbb,
        bookID:theChapter.bookID,
        verse: -1
    });
    }

    updateRefSelectVerse(theVerse){
    this.setState({
        refSel: {
        verse: theVerse.verse,
        chapter: theVerse.chapter,
        book: theVerse.book,
        youVersAbb: theVerse.youVersAbb,
        bookID: theVerse.bookID
        }
    });
    this.props.onChange({
        verse: theVerse.verse,
        chapter: theVerse.chapter,
        book: theVerse.book,
        youVersAbb: theVerse.youVersAbb,
        bookID: theVerse.bookID
    });
    }

    render(){
        return(            
            <div>
                <label className="RefSelect-label">Choose a reference:</label>
                <RefSelectBook type="book" onChange={this.updateRefSelectBook} />
                <RefSelectChapter type="chapter" onChange={this.updateRefSelectChapter} book={this.state.refSel.book} chapt={this.state.refSel.chapter} yvAbb={this.state.refSel.youVersAbb} bookID={this.state.refSel.bookID} />
                <RefSelectVerse type="verse" onChange={this.updateRefSelectVerse} chapter={this.state.refSel.chapter} book={this.state.refSel.book} verse={this.state.refSel.verse} yvAbb={this.state.refSel.youVersAbb} bookID={this.state.refSel.bookID} />
            </div>
        )
    }
}
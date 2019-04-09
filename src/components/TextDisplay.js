import React from 'react';
import '../components/TextDisplay.css';

export class TextDisplay extends React.Component {
    render(){
        const chapter = parseInt(this.props.reference.chapter);
        const verse = parseInt(this.props.reference.verse);
        const bookID = this.props.reference.bookID;
        const text = this.props.text.result;
        if(verse<0){
            return null;
        } else {
            try {
                return (
                    <React.Fragment>
                        <h2 className="h3">KJV Preview</h2>
                        <p>{text[bookID].chapters[chapter][verse]}</p>
                        <p className="TextDisplay-source">KJV text courtesy of <a href="https://github.com/thiagobodruk/bible" target="_blank" rel="noopener noreferrer" >thiagobodruk</a></p>
                    </React.Fragment>
                );
            }
            catch {
                return <p>Whoops! An error occured.</p>
            }
        }        
    }
}
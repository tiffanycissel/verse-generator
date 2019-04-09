import React from 'react';
import '../components/LinkDisplay.css';

export class LinkDisplay extends React.Component {
    
    render(){
        const book = this.props.reference.book;
        const chapter = parseInt(this.props.reference.chapter)+1;
        const verse = parseInt(this.props.reference.verse)+1;
        const youVers = this.props.reference.youVersAbb;
        const versID = this.props.version?this.props.version.id:59;
        const versAbb = this.props.version?this.props.version.abb:'ESV';        
        const url = `https://www.bible.com/bible/${versID}/${youVers}.${chapter}.${verse}.${versAbb}`;
        const linkText = verse?(`${book} ${chapter}:${verse}`):'';
        if(this.props.reference.verse<0){
            return null;
        } else {
        return(
            <p>
                <a target="_blank" rel="noopener noreferrer" href={url} className="LinkDisplay-a">{linkText} ({versAbb})</a>
            </p>
        );  
    }
    }
}
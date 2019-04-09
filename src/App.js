import React, { Component } from 'react';
import './App.css';
import {VerseGroup} from './components/VerseGroup';
import {VersionGroup} from './components/VersionGroup';
import {RefSelect} from './components/RefSelect';
import {ToolToggle} from './components/ToolToggle';
import {TextDisplay} from './components/TextDisplay';
import {LinkDisplay} from './components/LinkDisplay';

function Display(props){
  if(props.reference.verse<0){
      return null;
  } else {
      return <h2 className="h3">Your verse:</h2>
         
  }
}

function Mode(props){
  if(props.mode===1){
    return (
      <React.Fragment>
      <form className="App-form">        
        <VersionGroup onChange={props.updateVersion} />  
        <VerseGroup onChange={props.onChange} chap={props.chap} book={props.book} reference={props.reference} version={props.version} />
      </form>
      <Display reference={props.reference} /> 
      <LinkDisplay reference={props.reference} version={props.version}/>
      </React.Fragment>
    );    
  } else {
    return(
      <React.Fragment>
      <form className="App-form">
        <VersionGroup onChange={props.updateVersion} />  
        <RefSelect onChange={props.onChange} version={props.version} />
      </form>
      <LinkDisplay reference={props.reference} version={props.version}/>
      </React.Fragment>
      );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reference: {
        book:'', 
        youVersAbb:'',
        chapter:-1, 
        verse:-1,        
        bookID: -1
      },
      version: {
        id: '',
        abb: ''
      },
      tool: 'random',
      btnVal: 1,
      text: {
        isLoaded: false,
        error: null,
        result: []
      }
    };
    this.updateReference = this.updateReference.bind(this);
    this.updateVersion = this.updateVersion.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  updateReference(newRef){
    this.setState({
      reference: {
        book: newRef.book,
        chapter: newRef.chapter,
        verse: newRef.verse,
        youVersAbb: newRef.youVersAbb,
        bookID: newRef.bookID
      }
    });
  }

  updateVersion(newVersion){
    this.setState({
      version: {
        id: newVersion.id,
        abb: newVersion.abb
      }
    });
  }

  handleToggle(newMode){
    this.setState({
      btnVal: newMode,
      reference: {
        book:'', 
        bookID: -1,
        chapter:-1, 
        verse:-1, 
        youVersAbb:'',
      }
    });
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json')
    .then(response=>response.json())
    .then(
      (theResult)=>{
        this.setState({
          text:{
            isLoaded: true,
            result: theResult
          }
        });
      },
      (error) => {
        this.setState({
          text:{
            isLoaded: true,
            error
          }
        });
      }
    )
  } 

  render() {
    const text = this.state.text
    if(text.error){
      return <div>Error: {this.state.text.error.message}</div>
    } else if (!text.isLoaded){
      return <div>Loading...</div>
    }else {
     
    return (
      <div>
        <header className="jumbotron">
          <h1>Verse Generator</h1>
          <p className="text-muted"><em>Generate a link to a random or specific Bible verse from YouVersion</em></p>
        </header>
        <main className="container">          
          <ToolToggle mode={this.state.btnVal} onClick={this.handleToggle} />                  
          <Mode mode={this.state.btnVal} onChange={this.updateReference} chap={this.state.reference.chapter} book={this.state.reference.book} reference={this.state.reference} version={this.state.version} updateVersion={this.updateVersion}/>
          <TextDisplay reference={this.state.reference} text={this.state.text}/>          
        </main>
      </div>
    );
  }
  }
}

export default App
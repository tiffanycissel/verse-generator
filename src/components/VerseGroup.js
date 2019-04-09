import React from 'react';
import '../components/VerseGroup.css';
import '../allBookInfo.js';
import { getRandomVerse, getRandomVerseRange, getRef } from '../allBookInfo.js';

export class VerseGroup extends React.Component {
    constructor(props){
        super(props);
        this.refUpdate = this.refUpdate.bind(this);
    }

    refUpdate(e){        
        const sel = e.target;
        const range = getRandomVerseRange(sel.value);
        const verseNum = getRandomVerse(range.min,range.max);
        const theRef = getRef(verseNum);
        let reference = {            
            book: theRef.book,
            chapter: theRef.chapter,
            verse: theRef.verse,
            youVersAbb: theRef.youVers,
            bookID: theRef.bookID
        };
        this.props.onChange(reference);
    }

    render(){
        return(
            <React.Fragment>
            <label className="VerseGroup-label">Choose a group:</label>
            <select onChange={this.refUpdate} name="verseGroup" className="VerseGroup-select">
                <option></option>
                <option value="whole">Whole Bible</option>
                <optgroup label="Testament">
                    <option value="O">Old Testament</option>
                    <option value="N">New Testament</option>
                </optgroup>
                <optgroup label="Book Group">
                    <option value="Law">Law</option>
                    <option value="History">History</option>
                    <option value="Wisdom/Poetry">Wisdom/Poetry</option>
                    <option value="Major Prophet">Major Prophet</option>
                    <option value="Minor Prophet">Minor Prophet</option>
                    <option value="Gospel">Gospel</option>
                    <option value="Acts">Acts</option>
                    <option value="Pauline Epistle">Pauline Epistle</option>
                    <option value="General Epistle">General Epistle</option>
                    <option value="Revelation">Revelation</option>
                </optgroup>
                <optgroup label="Book">
                    <option value="0">Genesis</option>
                    <option value="1">Exodus</option>
                    <option value="2">Leviticus</option>
                    <option value="3">Numbers</option>
                    <option value="4">Deuteronomy</option>
                    <option value="5">Joshua</option>
                    <option value="6">Judges</option>
                    <option value="7">Ruth</option>
                    <option value="8">1 Samuel</option>
                    <option value="9">2 Samuel</option>
                    <option value="10">1 Kings</option>
                    <option value="11">2 Kings</option>
                    <option value="12">1 Chronicles</option>
                    <option value="13">2 Chronicles</option>
                    <option value="14">Ezra</option>
                    <option value="15">Nehemiah</option>
                    <option value="16">Esther</option>
                    <option value="17">Job</option>
                    <option value="18">Psalm</option>
                    <option value="19">Proverbs</option>
                    <option value="20">Ecclesiastes</option>
                    <option value="21">Song of Solomon</option>
                    <option value="22">Isaiah</option>
                    <option value="23">Jeremiah</option>
                    <option value="24">Lamentations</option>
                    <option value="25">Ezekiel</option>
                    <option value="26">Daniel</option>
                    <option value="27">Hosea</option>
                    <option value="28">Joel</option>
                    <option value="29">Amos</option>
                    <option value="30">Obadiah</option>
                    <option value="31">Jonah</option>
                    <option value="32">Micah</option>
                    <option value="33">Nahum</option>
                    <option value="34">Habakkuk</option>
                    <option value="35">Zephaniah</option>
                    <option value="36">Haggai</option>
                    <option value="37">Zechariah</option>
                    <option value="38">Malachi</option>
                    <option value="39">Matthew</option>
                    <option value="40">Mark</option>
                    <option value="41">Luke</option>
                    <option value="42">John</option>
                    <option value="43">Acts</option>
                    <option value="44">Romans</option>
                    <option value="45">1 Corinthians</option>
                    <option value="46">2 Corinthians</option>
                    <option value="47">Galatians</option>
                    <option value="48">Ephesians</option>
                    <option value="49">Philippians</option>
                    <option value="50">Colossians</option>
                    <option value="51">1 Thessalonians</option>
                    <option value="52">2 Thessalonians</option>
                    <option value="53">1 Timothy</option>
                    <option value="54">2 Timothy</option>
                    <option value="55">Titus</option>
                    <option value="56">Philemon</option>
                    <option value="57">Hebrews</option>
                    <option value="58">James</option>
                    <option value="59">1 Peter</option>
                    <option value="60">2 Peter</option>
                    <option value="61">1 John</option>
                    <option value="62">2 John</option>
                    <option value="63">3 John</option>
                    <option value="64">Jude</option>
                    <option value="65">Revelation</option>
                </optgroup>
            </select> 
            </React.Fragment>
        );
    }
}

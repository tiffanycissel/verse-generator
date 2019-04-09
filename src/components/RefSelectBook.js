import React from 'react';
import {bookInfo} from '../allBookInfo';

export class RefSelectBook extends React.Component{
    constructor(props){
        super(props);
        this.returnBookValue = this.returnBookValue.bind(this);
    }

    returnBookValue(e){
        if(document.getElementById('verse')){
            document.getElementById('verse').innerHTML = '<option></option>';
        }
        var info = {bookID: e.target.value, youVersAbb: bookInfo[e.target.value].youVersAbb, book:bookInfo[e.target.value].name};
        this.props.onChange(info);
    }

    componentDidMount(){
        var id = this.props.type;
        var bookSelect = document.getElementById(id);
        var opts = '<option></option>';
        for(var i = 0; i<66; i++){
            opts += `<option value="${i}">${bookInfo[i].name}</option>`;
        } 
        bookSelect.innerHTML = opts;
    }

    render(){            
        return(            
            <select id={this.props.type} onChange={this.returnBookValue}>
                <option></option>
            </select>
        )
    }
}
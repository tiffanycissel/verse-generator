import React from 'react';

export class RefDisplay extends React.Component{
    render(){
        if(isNaN(this.props.reference.verse)){
            return null;
        } else {
            return (
                <React.Fragment>
                <h2 className="h3">Your verse:</h2>
                <p>{`${this.props.reference.book} ${parseInt(this.props.reference.chapter)+1}:${parseInt(this.props.reference.verse)+1}`}</p>
                </React.Fragment>
            );
        }
    }
}
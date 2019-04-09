import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export class ToolToggle extends React.Component{
    constructor(props){
        super(props);
        this.switchToolMode = this.switchToolMode.bind(this);
    }

    switchToolMode(v,e){
        this.props.onClick(v);
    }

    render(){
        return(
            <ToggleButtonGroup defaultValue={this.props.mode} type="radio" name="toolOpt" onChange={this.switchToolMode}>
                <ToggleButton value={1}>Random</ToggleButton>
                <ToggleButton value={2}>Verse Select</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}
import { useRadioGroup } from '@material-ui/core';
import React, {Component} from 'react';

export class CheckboxWithlabel extends Component{
    constructor(props){
        super(props);
        this.state = {isChecked:false};
    }

    onChange(){
        const {onClickCheckboxWithLabel} = this.props
        this.setState({isChecked: !this.state.isChecked})
        if(onClickCheckboxWithLabel != null){
            onClickCheckboxWithLabel(this.state.isChecked)
        }
    }

    render(){
    return (<label>
        <input type = "checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange.bind(this)}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
    </label>)
    }
}


export default CheckboxWithlabel;
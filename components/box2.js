import React, {Component} from "react";
import logo from '../wolf.jpg';
import '../App.css';

class Box extends Component{
	render() {
		 const block = {
		 display: 'block',
         color: 'DimGrey '
	}
		return(

			<div className="box wol" >
                 <img src={require('../wolf.jpg')} /> 

				<h2> {this.props.name} </h2>

				<h4 style={block}>{this.props.para}</h4>
				<h4 style={block}>{this.props.demo}</h4>
			</div>
		);
	}
}

export default Box;
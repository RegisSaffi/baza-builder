import React from 'react';

class MessageMe extends React.Component{

	render(){

const {message}=this.props;
		return(
			<div className="me" style={{margin:'3px 3px 3px 60px', borderRadius:'25px 25px 3px 25px',}}>
             {message}
			</div>

			);
	}
}


class MessageHer extends React.Component{

	render(){

const {message}=this.props;
		return(
			<div className="her" style={{margin:'3px 60px 3px 3px',borderRadius:'25px 25px 25px 3px'}}>
             {message}
			</div>

			);
	}
}

export {MessageMe,MessageHer};
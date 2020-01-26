import React, { Component } from 'react';




class CatComponent extends React.Component{
	render(){
		return (
			<div>

			</div>
		)
	}
}

class EinsteinQuoteComponent extends React.Component{
	render(){
		return(
			<div>

			</div>
		)
	}
}
class MouseComponent extends React.Component{
	render(){
		return(
			<div>

			</div>
		)
	}
}

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;

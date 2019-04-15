// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React from 'react';

class Likes extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			addLike: false
		}
	}
	handleClick = () => {
		console.log("fish")
		this.setState({
			addLike: !this.state.addLike,
		})
	}
	render() {
		let {likes} = this.props
		let buttonText = "Not Liked"
		if (this.state.addLike == true){
			likes += 1
			buttonText = "Liked "
		}
		// } else {

		// }
		return(
			<div className="Likes">
				{likes}
				<button className='LikesButton' onClick={this.handleClick}>{buttonText}</button>
			</div>
		)
	}
}

export default Likes;
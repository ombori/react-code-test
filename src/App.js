import React from "react";
import "./App.css";
import RenderLoader from "./RenderLoader.js";
import RenderUserList from "./RenderUserList.js";

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state=
		{
			loaderVisible: true
		};
	}

	componentDidMount()
	{
		setTimeout(() => this.setState({loaderVisible: false}), 3000); //Setting up the state change for the loader to become invisible in 3 seconds
	}

	render()
	{
		if(this.state.loaderVisible) //Deciding if the loader or the user list should be rendered
			return <RenderLoader/>;
		else
			return <RenderUserList baseURI="https://reqres.in/api/users?page="/>; //baseURI as a property to allow convenient reusability in the future
	}
}

export default App;

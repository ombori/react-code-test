import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function RenderUser({user})
{
	return <div className='userContainer'>
					<img className='userAvatar' src={user.avatar} alt='Avatar of {user.first_name} {user.last_name}'/>
					<div className='userText'>{user.first_name} {user.last_name}</div>
				</div>;
}

export default class RenderUserList extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state=
		{
			pageId: 0, //Internally we start counting the pages at 0
			numUsersPerPage: 0,
			numPages: 1, //numPages refers to the total number of pages

			users: [],
		};

		this.retrieveUserPages=this.retrieveUserPages.bind(this); //Binding the function retrieveUserPages to this, so it has access to this when called from the InfiniteScroll component
	}

	componentDidMount()
	{
		var pageId=this.state.pageId,
			URI=this.props.baseURI+(pageId*1+1);

		fetch(URI)
			.then(response => response.json())
			.then(buf => this.setState({pageId: (pageId*1+1), numUsersPerPage: buf.per_page, numPages: buf.total_pages, users: buf.data})); //Retrieving the metadata as well as the first page of users
	}

	retrieveUserPages()
	{
		var pageId=this.state.pageId,
				numPages=this.state.numPages,
				URI=this.props.baseURI+(pageId*1+1);

		if(pageId<numPages) //Deciding if there are more pages to load
			fetch(URI)
				.then(response => response.json())
				.then(buf => this.setState({pageId: (pageId*1+1), users: this.state.users.concat(buf.data)})); //Concatenating the array of the already retrieved users with the newly retrieved users
	}

	render()
	{
		var morePages=true;

		if(this.state.pageId===this.state.numPages) //Deciding if there are more pages
			morePages=false;

		return	<div className='userListContainer'>
							<InfiniteScroll
								dataLength={this.state.numUsersPerPage}
								next={this.retrieveUserPages}
								hasMore={morePages}
								loader={<h5 style={{textAlign: "center"}}>Loading users...</h5>}
								endMessage={<h5 style={{textAlign: "center"}}>There are no more users!</h5>}>

								{this.state.users.map(user => <RenderUser key={user.id} user={user}/>)}

								</InfiniteScroll>
						</div>;
	}
}

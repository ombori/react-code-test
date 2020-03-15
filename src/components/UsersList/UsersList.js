import React from "react";
import { compose } from "lodash/fp";

import { DEFAULT_START_PAGE } from "../../utils/constants/defaults";
import InfinityScroll from "../../common/components/InfinityScroll/InfinityScroll";
import UserListItem from "./UserListItem/UserListItem";
import withLoading from "../withLoading";
import { generateUrl } from "../../utils/urlMaker";
import fetchData from "../../utils/fetchData";

import "./UsersList.css";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: DEFAULT_START_PAGE,
      items: [],
      loaded: false
    };
  }

  loadData = () => {
    const { setIsLoading } = this.props;
    const { items, page, loaded } = this.state;
    if (loaded) return;
    fetchData(generateUrl("users", page)).then(data => {
      if (data.data) {
        this.setState({ items: [...items, ...data.data] });
        this.setState({ page: page + 1 });
      }
      if (data.total_pages === page) {
        this.setState({ loaded: true });
      }
      setIsLoading(false);
    });
  };

  render() {
    const { style } = this.props;
    const { items } = this.state;

    return (
      <div style={style}>
        <header className="app__header">Users</header>
        <ul className="users-list">
          <InfinityScroll loadData={this.loadData}>
            {items &&
              items.map(user => <UserListItem key={user.id} {...user} />)}
          </InfinityScroll>
        </ul>
      </div>
    );
  }
}

export default compose(withLoading)(UsersList);

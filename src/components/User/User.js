import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getUsers } from "../../actions/userActions";
import "./user.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfUser: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }
  componentDidMount() {
    const { currentPage } = this.props;
    this.props.getUsers(currentPage);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { currentPage, totalPages } = this.props;
    if (this.isScrollAtBottom()) {
      if (currentPage !== totalPages) {
        this.props.getUsers(currentPage + 1);
      } else {
        this.setState({ endOfUser: true });
      }
    }
  }

  isScrollAtBottom() {
    if (
      window.pageYOffset + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      return false;
    }
    return true;
  }

  renderUsers() {
    const { users } = this.props;
    return (
      users &&
      users.map(user => {
        return (
          <div className="user-section" key={user.id}>
            <img className="user-image" src={user.avatar} alt="user-profile" />
            <div className="user-details">
              <div className="user-name">
                {user.first_name + ` ` + user.last_name}
              </div>
              <div className="user-email">{user.email}</div>
            </div>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div className="user-container">
        <h2>List of Users</h2>
        <div className="users">{this.renderUsers()}</div>
        <div className="message">
          {this.state.endOfUser
            ? "No more user available"
            : "Scroll to load more user"}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.userReducer.users,
  totalPages: state.userReducer.totalPages,
  currentPage: state.userReducer.currentPage
});
User.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      avatar: PropTypes.string
    })
  ).isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  getUsers: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { getUsers })(User);

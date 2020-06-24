import React, { PureComponent } from "react";
import { connect } from "react-redux"
import { requestFetchUsers } from "../redux/modules/action/";

class HomeComponent extends PureComponent {
  componentWillMount(){
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <React.Fragment>
        {users && (
          <ul>
            {users.map(({ name, screen_name }, index) => (
              <li key={`user-${index}`}>
                <div>Name: { name }</div>
                <div>Screen Name: { screen_name }</div>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(requestFetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

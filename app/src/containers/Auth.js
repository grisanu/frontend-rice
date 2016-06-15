import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {replace} from 'react-router-redux';
import hoistStatics from 'hoist-non-react-statics';

export default (Component) => {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      auth: PropTypes.bool.isRequired
    };

    componentWillMount() {
      this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps);
    }

    checkAuth(props) {
      const {auth, location} = props;
      if (!auth) {
        this.props.dispatch(replace({
          pathname: '/login',
          query: {redirect: location.pathname}
        }));
      }
    }

    render() {
      return (
        <div>
          {this.props.auth === true ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  return hoistStatics(connect(({auth}) => ({auth: !!auth.isAuthenticated}))(AuthenticatedComponent), Component);
};

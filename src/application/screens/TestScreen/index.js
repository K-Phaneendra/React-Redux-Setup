import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkRedux } from '../../actions/testAction';

class TestScreen extends Component {
  check = () => {
    const { dispatch } = this.props;
    dispatch(checkRedux(true));
  };

  render() {
    const { reduxWorking } = this.props;
    console.log('reduxWorking', reduxWorking);
    return (
      <div>
        <span>this is test screen</span>
        <input type="button" value="check redux" onClick={this.check} />
        <div>
          <span>Redux Working Status:</span>
          <span>{reduxWorking ? 'YES redux is working' : ''}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxWorking: state.testReducer.reduxWorking
});

export default connect(mapStateToProps)(TestScreen);

import React, { Component } from 'react';

import './LoadingWrapper.css';

const LoadingWrapper = (isLoading, error) => Child =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <div
          className={[
            'LoadingWrapper',
            isLoading ? 'isLoading' : '',
            error ? 'error' : ''
          ].join(' ')}
        >
          <Child />
        </div>
      );
    }
  };

export default LoadingWrapper;

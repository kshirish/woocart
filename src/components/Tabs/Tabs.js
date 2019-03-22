import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: props.initialLabel };
  }

  tabClick = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { children, className = '' } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={`Tabs ${className}`}>
        <div className="tab-list">
          {children.map((child, i) => (
            <div
              key={i}
              onClick={e => this.tabClick(child.props.label)}
              className={`tab-list-item ${
                child.props.label === activeTab ? 'tab-list-active' : ''
              }`}
            >
              {child.props.label}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {children.map(child =>
            child.props.label === activeTab ? child.props.children : undefined
          )}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string
};

export default Tabs;

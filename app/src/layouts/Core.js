import React from 'react';

function CoreLayout({ children }) {
  return (
    <div className="app" id="app">
      {children}
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element,
};

export default CoreLayout;

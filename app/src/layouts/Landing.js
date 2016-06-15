import React from 'react';

function LandingLayout({ children }) {
  return (
  	<div>
  		{children}
  	</div>
  );
}

LandingLayout.propTypes = {
  children: React.PropTypes.element,
};

export default LandingLayout;

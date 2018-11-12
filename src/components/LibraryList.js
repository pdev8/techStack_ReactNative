import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
        console.log(this.props);
		return;
	}
}

const mapStateToProps = (state) => ({
	libraries: state.libraries
});

// Connect helper forges a connection between the library list and application state
export default connect(mapStateToProps)(LibraryList);

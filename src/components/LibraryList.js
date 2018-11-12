import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library} />;
    }

	render() {
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id}
            />
        );
	}
}

const mapStateToProps = (state) => ({
	libraries: state.libraries
});

// Connect helper forges a connection between the library list and application state
export default connect(mapStateToProps)(LibraryList);

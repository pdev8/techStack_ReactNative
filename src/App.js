import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => (
	// Purpose of the provider is to translate the data in the store
	// into something that can be used by the React side of the app

	// Store is the container that holds the state and the provider
	// communicates w/ React
	<Provider store={createStore(reducers)}>
		<View style={{ flex: 1 }}>
			<Header headerText="Tech Stack" />
			<LibraryList />
		</View>
	</Provider>
);

export default App;

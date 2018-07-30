import React, { Component } from 'react';
import { YellowBox, View, StyleSheet } from 'react-native';
import Routes from './src/config/Routes'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import { Constants } from 'expo';

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends Component {
  constructor() {
    super()
    console.ignoredYellowBox = [
      'Warning', `Warning: Can't call setState`
    ];
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.statusBar}>          
          <Routes/>
        </View>        
      </Provider>      
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'blue',
    height: Constants.statusBarHeight,
    flex: 1
  },
})

export default App
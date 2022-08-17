/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import { View } from 'react-native';
import StackNav from './routes/StackNav';

class App extends PureComponent {
  render(){
    return <StackNav />
  }
}
export default App;

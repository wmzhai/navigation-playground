import React from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import Banner from './banner'
import CustomTabs from './custom_tabs'
import Drawer from './drawer'
import TabsInDrawer from './tabs_in_drawer'
import ModalStack from './modal_stack'
import StacksInTabs from './stacks_in_tabs'
import StacksOverTabs from './stacks_over_tabs'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default App

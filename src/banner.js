import React from 'react'
import {
  Image,
  Platform,
  Text,
  View,
} from 'react-native'

const Banner = () => (
  <View style={styles.banner}>
    <Image
      source={require('./assets/nav_logo.png')}
      style={styles.image}
    />
    <Text style={styles.title}>React Navigation Examples</Text>
  </View>
)

const styles = {
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  }
}

export default Banner

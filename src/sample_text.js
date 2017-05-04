import React from 'react'
import { Text } from 'react-native'

/**
 * Used across examples as a screen placeholder.
 */
import { Children } from 'react'

const SampleText = ({ children }) => ( <Text style={styles.sampleText}> {children} </Text> )

const styles = {
  sampleText: {
    margin: 14,
  }
}

export default SampleText

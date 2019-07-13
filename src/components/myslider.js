import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MySlider = (props) => {
  return (
    <ImageBackground
      accessibilityRole={'image'}
      source={require('./1.jpg')}
      style={styles.background}
      imageStyle={styles.logo}>
      <Text style={styles.text}>{props.textPic}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.dark,
  },
  logo: {
    opacity: 0.5,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
  }
})

export default MySlider;
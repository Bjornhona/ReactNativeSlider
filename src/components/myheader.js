import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyHeader = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.sectionDescription}>
        {props.headerText}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 20
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  }
})

export default MyHeader;

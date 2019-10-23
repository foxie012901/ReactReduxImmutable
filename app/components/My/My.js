import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styles.box}>

        <Text> this.is Myssss </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    box:{
        width:100,
        height:50,
        backgroundColor:'red',
        borderWidth: 1,
        borderRadius:8,
    }
})

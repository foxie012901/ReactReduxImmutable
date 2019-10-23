import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,Platform, NativeModules
} from 'react-native';

import TabNavigator from "react-native-tab-navigator";
import IconFont from 'react-native-vector-icons/Ionicons'

import TodoList from './app/components/TodoList/TodoList'
import My from './app/components/My/My'

//获取信息栏高度,并在样式设置padding-top等于信息栏高度
const { StatusBarManager } = NativeModules; 
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'todolist' // 选中的tab标签
    };
  }

  componentDidMount(){
    // console.warn(STATUSBAR_HEIGHT)
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} barStyle={'dark-content'}/>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab ==='todolist'}
            title='todolist'
            renderIcon={() => <IconFont name={'ios-globe'} size={25} color={'gray'} />}
            renderSelectedIcon={() => <IconFont name={'ios-globe'} size={25} color={'#0079ff'} />}
            onPress={() => this.setState({ selectedTab: 'todolist' })}
          >
            <TodoList />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab ==='my'}
            title='my'
            renderIcon={() => <IconFont name={'ios-globe'} size={25} color={'gray'} />}
            renderSelectedIcon={() => <IconFont name={'ios-globe'} size={25} color={'#0079ff'} />}
            onPress={() => this.setState({ selectedTab: 'my' })}
          >
            <My />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:STATUSBAR_HEIGHT
  },

});
//TodoList index


import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  YellowBox,
  ActivityIndicator
} from 'react-native';
import styles from "./style.js";

// import store from "../../store";
// import { getChangeInputValue, InitList, delInitListIndex, putDataToList, getIsShow } from "../../store/actionCreators";
import { actionCreators } from "./store";


import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  componentDidMount() {
    this.props._getData()
    console.log(this.props.isShow)
    this.setState({
      isShow: false
    })

  }

  render() {
    let {
      inputValue,
      list,

      _handleInputChange,
      _handleInitList
    } = this.props

    let newList = [];
    list.map(
      (item)=>{
        newList.push(item)
      }
    )

    let Loading = (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.props.isShow} />
      </View>
    )
    let PageW = (
      <View style={styles.content}>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <TextInput
            placeholder={'Write Something...'}
            placeholderTextColor={'#bbbbbb'}
            style={styles.tInput}
            value={inputValue}
            onChangeText={_handleInputChange}
          />
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={_handleInitList}
          >
            <View style={styles.btnSty}><Text style={styles.btnTxtSty}>Click Me</Text></View>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={newList}
          renderItem={this._renderItem}
          style={{ width: '100%' }}
        />
      </View>
    )

    return (
      <View style={{ width: '100%', height: '100%' }}>
        {
          this.props.isShow ? Loading : PageW
        }
      </View >
    );
  }

  _renderItem = ({ item, index }) => {
    // console.warn(index)
    return (
      <View style={styles.row}>
        <Text >{item}</Text>
        <TouchableOpacity
          onPress={() => this.props._handleDelList(index)}
          style={styles.rowTouch}
        >
          <Text style={styles.rowTouchTxt}>delete</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    inputValue: state.getIn(['todolist', 'inputValue']),
    list: state.getIn(['todolist', 'list']),
    isShow: state.getIn(['todolist','isShow'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // _getIsShow(changedata){
    //   console.log('getIsShow', changedata)
    //   const action = getIsShow(changedata)
    //   dispatch(action)
    // },
    _handleInputChange(value) {
      // const action = getChangeInputValue(value)
      // dispatch(action)
      //直接dispatch,简写
      dispatch(actionCreators.getChangeInputValue(value))
    },
    _handleInitList() {
      dispatch(actionCreators.InitList())
    },
    _handleDelList(index) {
      dispatch(actionCreators.delInitListIndex(index))
    },
    _getData() {
      dispatch(actionCreators.putDataToList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
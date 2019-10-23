import React, { Component } from 'react';
import { View, Text, YellowBox, StyleSheet } from 'react-native';
import {
    Router,
    Stack,
    Scene
} from "react-native-router-flux";

import App from "./App";

//react-redux
import { Provider } from "react-redux";
import store from './app/store'



export default class Main extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
            'Warning: ViewPagerAndroid has been extracted from react-native',
            'Warning: componentWillReceiveProps has been'

        ])
        this.state = {

        };
    }

    render() {
        return (
            <Provider style={styles.container} store={store}>
                <Router>
                    <Stack>
                        <Scene key='app' component={App} title='' hideNavBar={true} />
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
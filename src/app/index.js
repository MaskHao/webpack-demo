/**
 * Created by WillWang on 2017/5/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import { AppContainer } from 'react-hot-loader';
import _ from 'lodash';

// import $ from 'jQuery'
var moment = require("moment");
console.log(moment().format());
tinymce.init({
    selector: '#mytextarea'
});
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    render() {
        return (
            <div style={{ width: 400 }}>
                <h1>111</h1>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('aa'));

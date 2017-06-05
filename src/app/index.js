/**
 * Created by WillWang on 2017/5/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import _ from 'lodash';

// import $ from 'jQuery'
var moment = require("moment");
console.log(moment().format());
function component () {
    var element = document.createElement('div');

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
}
class Greeter extends Component{
    render() {
        return (
            <div>
            {config.greetText}
    </div>
    );
    }
}

$("body").css({fontSize:"30px"});
document.body.appendChild(component());


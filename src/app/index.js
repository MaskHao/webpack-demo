/**
 * Created by WillWang on 2017/5/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect, Timeline, Select, Row, Col, Popover ,Button   } from 'antd';
// const Option = Select.Option;
const { Option, OptGroup } = Select;
//treeSelect假数据
const treeData = [{
    label: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
        label: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
    }, {
        label: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
    }],
}, {
    label: 'Node2',
    value: '0-1',
    key: '0-1',
}];


//白板中时间轴
class TaskTimeLine extends Component{
    render(){
        return(
            <Timeline>
                <Timeline.Item>
                    <div className="timeLine">
                        <div className="tl-lt">
                            <img src="/image/headerImg.jpg" alt=""/>
                            <div className="tl-lt-ct">
                                <p>Lomme</p>
                                <span>2017/05/01 10:23</span>
                            </div>
                        </div>
                        <div className="tl-rt">计划</div>
                    </div>
                </Timeline.Item>
                <Timeline.Item>
                    <div className="timeLine">
                        <div className="tl-lt">
                            <img src="/image/headerImg.jpg" alt=""/>
                            <div className="tl-lt-ct">
                                <p>Lomme</p>
                                <span>2017/05/01 10:23</span>
                            </div>
                        </div>
                        <div className="tl-rt">计划</div>
                    </div>
                </Timeline.Item>
                <Timeline.Item>
                    <div className="timeLine">
                        <div className="tl-lt">
                            <img src="/image/headerImg.jpg" alt=""/>
                            <div className="tl-lt-ct">
                                <p>Lomme</p>
                                <span>2017/05/01 10:23</span>
                            </div>
                        </div>
                        <div className="tl-rt">计划</div>
                    </div>
                </Timeline.Item>
                <Timeline.Item>
                    <div className="timeLine">
                        <div className="tl-lt">
                            <img src="/image/headerImg.jpg" alt=""/>
                            <div className="tl-lt-ct">
                                <p>Lomme</p>
                                <span>2017/05/01 10:23</span>
                            </div>
                        </div>
                        <div className="tl-rt">计划</div>
                    </div>
                </Timeline.Item>
            </Timeline>
        )
    }
}

function handleChange(value) {
    console.log(`selected ${value}`);
}
class TaskSel extends Component{
    state = {
        value: undefined,
    }
    onChange = (value) => {
        console.log(arguments);
        this.setState({ value });
    }
    render(){
        return(
            <Row type="flex" justify="space-between">
                <Col span={12}>
                    <p className="title">所属项目</p>
                    <TreeSelect
                        size = "large"
                        style={{ width: '100%',height:"50px" }}
                        value={this.state.value}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        treeData={treeData}
                        placeholder="Please select"
                        treeDefaultExpandAll
                        onChange={this.onChange}
                    />
                </Col >
                <Col span={5} >
                    <p className="title">执行者</p>
                    <Select  size = "large" placeholder="请选择" style={{ width:'100%' }} onChange={handleChange}>
                        <Option value="jack">
                            <img className="ant-sel-middle ant-sel-circle" src="/image/headerImg.jpg" alt=""/><span className="ant-sel-middle" >Jack</span>

                        </Option>
                        <Option value="lucy">
                            <img className="ant-sel-middle ant-sel-circle" src="/image/headerImg.jpg" alt=""/><span className="ant-sel-middle" >lucy</span>

                        </Option>
                        <Option value="Yiminghe">
                            <img className=" ant-sel-middle ant-sel-circle" src="/image/headerImg.jpg" alt=""/><span className="ant-sel-middle" >Yiminghe</span>
                        </Option>
                    </Select>
                </Col >
                <Col span={5} >
                    <p className="title">状态</p>
                    <Select size = "large" placeholder="请选择" style={{ width:'100%' }} onChange={handleChange}>
                        <Option value="jack">  new</Option>
                        <Option value="lucy">old</Option>
                        <Option value="Yiminghe">??</Option>
                    </Select>
                </Col >
            </Row>
        )
    }
}

//backlog
class TaskSel2 extends Component{
    state = {
        value: undefined,
    }
    onChange = (value) => {
        console.log(arguments);
        this.setState({ value });
    }
    render(){
        return(
            <Row type="flex" justify="space-between">
                <Col span={5} >
                    <p className="title">负责人</p>
                    <Select  size = "large" placeholder="请选择" style={{ width:'100%' }} onChange={handleChange}>
                        <Option value="jack">
                            <img className="ant-sel-middle ant-sel-circle" src="/image/headerImg.jpg" alt=""/><span className="ant-sel-middle" >Jack</span>

                        </Option>
                        <Option value="lucy">
                            <img className="ant-sel-middle ant-sel-circle" src="/image/headerImg.jpg" alt=""/><span className="ant-sel-middle" >lucy</span>

                        </Option>
                        <Option value="Yiminghe">
                            <img className=" ant-sel-middle ant-sel-circle" src="/image/headerImg.jpg" alt=""/><span className="ant-sel-middle" >Yiminghe</span>
                        </Option>
                    </Select>
                </Col >
                <Col span={12} >
                    <p className="title">所属项目</p>
                   <TreeSelect
                    size = "large"
                    style={{ width: '100%',height:"50px" }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    placeholder="Please select"
                    treeDefaultExpandAll
                    onChange={this.onChange}
                />
                </Col >
                <Col span={5} >
                    <p className="title">状态</p>
                    <Select size = "large" placeholder="请选择" style={{ width:'100%' }} onChange={handleChange}>
                        <Option value="In Progress">
                            <div className="ant-sel-middle ant-sel-circle2" style={{backgroundColor:"#5899FC"}}></div>
                            <span className="ant-sel-middle">In Progress</span>
                        </Option>
                        <Option value="Committed">
                            <div className="ant-sel-middle ant-sel-circle2" style={{backgroundColor:"#33C9BA"}}></div>
                            <span className="ant-sel-middle">Committed</span>
                        </Option>
                        <Option value="Failed">
                            <div className="ant-sel-middle ant-sel-circle2" style={{backgroundColor:"#FD8A5C"}}></div>
                            <span className="ant-sel-middle">Failed</span>
                        </Option>
                    </Select>
                </Col >
            </Row>
        )
    }
}
ReactDOM.render(<TaskTimeLine />, document.getElementsByClassName("timeCount")[0]);
ReactDOM.render(<TaskSel />, document.getElementsByClassName("TaskSelect")[0]);
ReactDOM.render(<TaskSel2 />, document.getElementsByClassName("TaskSelect")[1]);



class AddRelease extends React.Component {
    state = {
        visible: false,
    }
    hide = () => {
        this.setState({
            visible: false,
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }

    render() {
        const content = (
            <div className="add-release-cont">
                <input className="" type="text" placeholder="里程碑代号"/>
                <textarea placeholder="里程碑说明"></textarea>
                <button onClick={this.hide}>保存</button>
            </div>
        );
        return (
            <Popover
                content={content}
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <Button className='add-release-btn' type="primary">+</Button>
            </Popover>
        );
    }
}

ReactDOM.render(<AddRelease />, document.getElementsByClassName("add-release")[0]);



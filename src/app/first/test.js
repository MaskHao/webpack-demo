/**
 * Created by WillWang on 2017/6/12.
 */
import { Timeline } from 'antd';
import React, {Component} from 'react';
class TimeLine extends Component{
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
export default  TimeLine;
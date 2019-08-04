import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route } from 'react-router-dom';

import './iconmanage.css'

export default class IconManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addMold: false
        }
    }

    moldClick() {
        this.setState({
            addMold: !this.state.addMold
        })
    }

    render() {
        return (
            <div>
                {/*  */}
                <div className="icon-cho-header">
                    <ul>
                        <li>业务点类型管理</li>
                        <li>监控点管理</li>
                    </ul>
                </div>
                {/*  */}
                <div
                    style={{
                        padding: '16px'
                    }}
                >
                    <div>
                        <button
                            onClick={this.moldClick.bind(this)}
                            className="new-add-mold"
                        >新增类型</button>
                        <div className="new-add-user">
                            <table>
                                <tbody>
                                    <tr>
                                        <th><div> <span> 类型</span></div></th>
                                        <th><div><span> 图标</span></div></th>
                                        <th><div><span>描述</span></div></th>
                                        <th><div><span>操作</span></div></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="new-add-tips">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><div><span>暂无数据</span></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div

                        className="icon-add-ty-fr"
                        style={{
                            visibility: this.state.addMold ? 'visible' : 'hidden',
                            opacity: this.state.addMold ? '1' : '0'
                        }}>
                        {/*  */}
                        <div className="icon-add-ty">
                            <span>新增业务类型</span>
                            <span
                                onClick={this.moldClick.bind(this)}
                            ></span>
                        </div>
                        {/*  */}

                        <div className="icon-add-business">
                            {/*  */}
                            <div>
                                <p>类型:</p>
                                <input type="text" placeholder="类型名称最多五个字" />
                            </div>
                            {/*  */}
                            <div className="choose-file">
                                <span>icon:选择</span>
                                <input type="file" />
                            </div>
                        </div>
                        {/*  */}
                        <div className="icon-describe">
                            <p>描述:</p>
                            <textarea type="text" placeholder="please enter the description" />
                        </div>
                        {/*  */}
                        <div className="icon-cance">
                            <div>
                                <button
                                    onClick={this.moldClick.bind(this)}
                                >取消</button>
                                <button
                                    onClick={this.moldClick.bind(this)}
                                >确定</button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="icon-cut-face"
                        style={{
                            visibility: this.state.addMold ? 'visible' : 'hidden',
                            opacity: this.state.addMold ? '1' : '0'
                        }}
                    >
                    </div>
                </div>
            </div>
        )
    }


}
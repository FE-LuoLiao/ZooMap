import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Event from '../../libs/events.js';

import "./navgation.css";

import logoOnly from '../picture/logo-min-alt.06ea9ef6.png';
import logoText from '../picture/logo-alt.ab9f311b.png'

export default class Navgation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            menushow: false,
            listshow: false,
            data: [],
            Url: [],
            navshow: true,
            setlist: false,
            setNav: false,
            icon: {
                '功能点状态': 'address.png',
                '设备标注': 'video.png',
                '围栏编辑': 'edit.png',
                '景点推荐路线': 'compass.png',
                '设置': 'set.png',
                '用户管理': 'usermanage.png',
                '图标管理': 'face.png',
                '同步数据': 'usermanage.png'

            },
        }
    }
    // 事件发布on ,监听一次就OK，所以放在DidMount里面，on('广播内容'，听到内容之后所要执行事情)
    componentDidMount() {
        Event.on('nav.show', function () {
            this.setState({
                navshow: !this.state.navshow
            });
        }.bind(this));
    }

    handleClick() {
        if (this.state.navshow === true) {
            this.setState({
                listshow: !this.state.listshow
            })
        }
    }

    currentNavClick(event) {
        var e = event.target;
        Event.dispatchEvent('webmap.show', '/', this.state.icon[e.innerText], e.innerText);
    }

    setNavClick(event) {
        var e = event.target;
        this.setState({
            setNav: !this.state.setNav
        })
        Event.dispatchEvent('webmap.show', '/', 'set.png', '设置', '/', this.state.icon[e.innerText], e.innerText)
    }

    setMouseOver(e) {
        if (this.state.navshow === false) {
            this.setState({
                setlist: true
            })
        }
    }

    setMouseLeave(e) {
        if (this.state.navshow === false) {
            this.setState({
                setlist: false
            })
        }
    }

    render() {
        return (
            <div className="nav-list"
                style={{ width: this.state.navshow ? '200px' : '60px' }}
            >
                <div className="nav-list-header"
                    style={
                        {
                            backgroundImage: this.state.navshow ? `url(${logoText})` : `url(${logoOnly})`
                        }}
                ></div>
                {/* 导航栏列表图文 */}
                <div>
                    <ul>
                        <li
                            onClick={
                                this.currentNavClick.bind(this)
                            }
                            style={{
                                padding: this.state.navshow ? '14px 24px' : '14px 20px'
                            }}
                        >
                            <span className="nav-icon-addr"
                                style={{
                                    width: this.state.navshow ? '14px' : '20px',
                                    height: this.state.navshow ? '14px' : '20px'
                                }}
                            ></span>
                            <Link to='./FuncStatus'>功能点状态</Link>
                        </li>
                        <li
                            onClick={
                                this.currentNavClick.bind(this)
                            }
                            style={{
                                padding: this.state.navshow ? '14px 24px' : '14px 20px'
                            }}
                        >
                            <span className="nav-icon-equi"
                                style={{
                                    width: this.state.navshow ? '14px' : '20px',
                                    height: this.state.navshow ? '14px' : '20px'
                                }}
                            ></span>
                            <Link to='./EquLable'>设备标注</Link>
                        </li>
                        <li
                            onClick={
                                this.currentNavClick.bind(this)
                            }
                            style={{
                                padding: this.state.navshow ? '14px 24px' : '14px 20px'
                            }}
                        >
                            <span className="nav-icon-edit"
                                style={{
                                    width: this.state.navshow ? '14px' : '20px',
                                    height: this.state.navshow ? '14px' : '20px'
                                }}
                            ></span>
                            <Link to='./EncEdit'>围栏编辑</Link>
                        </li>

                        <li
                            onClick={

                                this.currentNavClick.bind(this)
                            }
                            style={{
                                padding: this.state.navshow ? '14px 24px' : '14px 20px'
                            }}
                        >
                            <span className="nav-icon-way"
                                style={{
                                    width: this.state.navshow ? '14px' : '20px',
                                    height: this.state.navshow ? '14px' : '20px'
                                }}
                            ></span>
                            <Link to='./ScenicWay'>景点推荐路线</Link>
                        </li>
                    </ul>
                    <div className="nav-set"
                        onClick={this.handleClick.bind(this)}
                        onMouseOver={this.setMouseOver.bind(this)}
                        onMouseLeave={this.setMouseLeave.bind(this)}
                        style={{
                            height: this.state.navshow ? '35px' : '40px',
                            padding: this.state.navshow ? '14px 24px' : '14px 20px'
                        }}
                    >
                        <span className="nav-set-pic"
                            style={{
                                width: this.state.navshow ? '14px' : '20px',
                                height: this.state.navshow ? '14px' : '20px'
                            }}
                        ></span>
                        <span className="nav-set-text">设置</span>
                        <span
                            className="nav-set-choose"
                            style={{ transform: `rotate(${this.state.listshow ? '180deg' : '0deg'})` }}
                        ></span>
                    </div>
                    <div className="nav-set-list-content"
                        onMouseOver={this.setMouseOver.bind(this)}
                        onMouseLeave={this.setMouseLeave.bind(this)}
                        style={{
                            height: this.state.setlist ? '100px' : '0px'
                        }}
                    >
                        <ul>
                            <li onClick={this.setNavClick.bind(this)}>
                                <span className="nav-user-manage-content"></span>
                                <Link to="./UserManage">用户管理</Link>
                            </li>
                            <li onClick={this.setNavClick.bind(this)}>
                                <span className="nav-icon-manage-content"></span>
                                <Link to="./IconManage">图标管理</Link>
                            </li>
                            <li onClick={this.setNavClick.bind(this)}>
                                <span className="nav-data-manage-content"></span>
                                <Link to="./SyncData">同步数据</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-set-list"
                        style={{
                            height: this.state.listshow ? '150px' : '0px'
                        }}
                    >
                        <ul>
                            <li onClick={this.setNavClick.bind(this)}>
                                <span className="nav-user-manage"></span>
                                <Link to="./UserManage">用户管理</Link>
                            </li>
                            <li onClick={this.setNavClick.bind(this)}>
                                <span className="nav-icon-manage"></span>
                                <Link to="./IconManage">图标管理</Link>
                            </li>
                            <li onClick={this.setNavClick.bind(this)}>
                                <span className="nav-data-manage"></span>
                                <Link to="./SyncData">同步数据</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
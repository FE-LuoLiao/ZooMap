import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Event from '../../libs/events.js';

import './webmap.css';

import Login from '../login/login.jsx';
import Encedit from '../encedit/encedit.jsx';
import Equlable from '../equlable/equlable.jsx';
import Funcstatus from '../funcstatus/funcstatus.jsx';
import Scenicway from '../scenicway/scenicway.jsx';
import Home from '../home/home.jsx';
import UserManage from '../usermanage/usermanage.jsx';
import IconManage from '../iconmanage/iconmanage.jsx';
import SyncData from '../syncdata/syncdata.jsx'

export default class Webmap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            menushow: false,
            navshow: false,
            getUrl: [],
            getData: [],
            cutWay: ''

        }
    }

    handleMouseOver(e) {
        this.setState({
            show: true
        })
    }

    handleMouseLeave() {
        this.setState({
            show: false
        })
    }

    componentDidMount() {
        Event.on('webmap.show', function (cutWay, getUrl, getData, setWay, setUrl, setData) {
            this.setState({
                getNav: true,
                getUrl: getUrl,
                getData: getData,
                cutWay: cutWay,
                setWay: setWay,
                setUrl: setUrl,
                setData: setData
            })
        }.bind(this))
    }

    handleClick() {
        this.setState({
            cutWay: '',
            getUrl: '',
            getData: '',
            setWay: '',
            setUrl: '',
            setData: ''
        })
    }

    menClick() {
        this.setState({
            menushow: !this.state.menushow
        })
        this.props.getMenu(this.state.menushow)
        Event.dispatchEvent('nav.show');
    }

    render() {
        return (
            <div className="nav-content">
                <div className="nav-content-header">
                    <span
                        className="nav-header-meun"
                        onClick={this.menClick.bind(this)}
                        style={{ transform: `rotate(${this.state.menushow ? '90deg' : '0deg'}` }}
                    ></span>
                    <div className="nav-header-tex">
                        <span>
                            <Link to="./home"
                                onClick={this.handleClick.bind(this)}
                            >地图</Link>
                        </span>
                        <div style={{
                            height: '20px',
                            float: 'right',
                        }}
                        >
                            <div style={{
                                float: 'left'
                            }}>
                                <span className="nav-header-tex-cut"> {this.state.cutWay} </span>
                                <span>
                                    <i style={{ backgroundImage: `url(../assets/imgs/${this.state.getUrl})` }}></i>
                                    {this.state.getData}
                                </span>
                            </div>
                            <div style={{
                                float: 'right'
                            }}>
                                <span className="nav-header-tex-cut"> {this.state.setWay} </span>
                                <span>
                                    <i style={{ backgroundImage: `url(../assets/imgs/${this.state.setUrl})` }}></i>
                                    {this.state.setData}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-login">
                        <span><i className="nav-login-fullsice"></i></span>
                        <div className="user-list"
                            onMouseOver={() => this.handleMouseOver()}
                            onMouseLeave={this.handleMouseLeave.bind(this)}
                        >
                            <span><i className="nav-login-user"></i></span>
                            <span><i className="nav-login-list"></i></span>
                        </div>
                        <div className="nav-personal"
                            onMouseOver={this.handleMouseOver.bind(this)}
                            onMouseLeave={this.handleMouseLeave.bind(this)}
                            style={{ height: this.state.show ? '90px' : '0' }}
                        >
                            <div className="personal-list">
                                <ul>
                                    <li><Link to="#">个人信息</Link></li>
                                    <li><Link to="#">帮助文档</Link></li>
                                    <li><Link to="#">退出登录</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
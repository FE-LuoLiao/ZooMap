import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import './navicon.css';

export default class Navicon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listshow: false,
            currentNav: 8,
            id: {
                1: {
                    'navname': '功能点状态',
                    'navpic': 'address.png'
                },
                2: {
                    'navname': '设备标注',
                    'navpic': 'video.png'
                },
                3: {
                    'navname': '围栏编辑',
                    'navpic': 'edit.png'
                },
                4: {
                    'navname': '景点推荐路线',
                    'navpic': 'compass.png'
                },
                5: {
                    'navname': '设置',
                    'navpic': 'set.png'
                }
            },
            navshow: false
        }
    }

    handleClick() {
        this.setState({
            listshow: !this.state.listshow
        })
    }

    currentNavClick(event) {

        this.setState({
            id: this.state.id[event.target.dataset.id],
            navshow: true
        })
        console.log('id', event.target)
        this.props.getCurrentNav(
            this.state.id[event.target.dataset.id].navname,
            this.state.id[event.target.dataset.id].navpic,
            this.state.navshow
        )
    }

    render() {
        return (
            <div>
                <ul>
                    <li
                        onClick={
                            this.currentNavClick.bind(this)
                        }
                    >
                        <Link to="./FuncStatus" data-id={1}>
                            <span className="address-icon"></span>
                        </Link>
                    </li>
                    <li
                        data-id={2}
                    >
                        <Link to="./EquLable">
                            <span className="camra-icon"></span>
                        </Link>
                    </li>
                    <li
                        data-id={3}
                    >
                        <Link to="./EncEdit">
                            <span className="edit-icon"></span>
                        </Link>
                    </li>
                    <li
                        data-id={4}
                    >
                        <Link to="./ScenicWay">
                            <span className="way-icon"></span>
                        </Link>
                    </li>
                    <li
                        data-id={5}
                    >
                        <Link to="#">
                            <span className="set-icon"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
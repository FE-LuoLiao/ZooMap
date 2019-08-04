import React from 'react';
import ReactDom from 'react-dom';
import * as maptalks from 'maptalks';

import "./scenicway.css";

import Navgation from '../navgation/navgation.jsx';

export default class Scenicway extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wayName: false
        }
    }

    addClick() {
        this.setState({
            wayName: !this.state.wayName
        })
    }

    componentDidMount() {
        const map = new maptalks.Map('map', {
            center: [175.46873, -37.90258],
            // center: [-0.113049, 51.498568],
            zoom: 14,
            dragRotate: false,
            dragPitch: false,
            doubleClickZoom: false,
            baseLayer: new maptalks.TileLayer('base', {
                urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                subdomains: ['a', 'b', 'c'],
                attribution:
                    '<a href="http://71ditu.com" target="_blank"></a>'
            })
        })
    }


    render() {
        return (

            <div>
                {/*  */}
                <div className="scenic-add-way">
                    <div className="scenic-add-con">
                    </div>
                    <div className="scenic-add-key">
                        <button className="scenic-add-key-b"
                            onClick={this.addClick.bind(this)}
                        >
                            <span className="scenic-add-key-icon"></span>
                        </button>
                    </div>
                </div>
                {/*  */}
                <div className="scenic-way-name"
                    style={{
                        visibility: this.state.wayName ? 'visible' : 'hidden',
                        opacity: this.state.wayName ? '1' : '0',                       
                    }}
                >
                    <h5>请输入路线名称</h5>
                    <div className="scenic-wey-in">
                        <label>*</label>
                        <span> 名称</span>
                        <input type="text" placeholder="请输入路线名称" />
                    </div>
                    <div>
                        <div
                            className="cancel-save"
                            style={{
                                float: 'right'
                            }}>
                            <button
                                onClick={this.addClick.bind(this)}
                            >取消</button>
                            <button
                                onClick={this.addClick.bind(this)}
                            >保存</button>
                        </div>
                    </div>

                </div>
                {/*  */}
                <div className="scenic-icon-acount">
                    <ul>
                        <li style={{
                            paddingTop: '10px'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '5px',
                                margin: '10px 5px 0 0',
                                backgroundColor: 'red',
                                float: 'left',
                                boxSizing: 'border-box'
                            }}></div>
                            <span>已同步</span>
                        </li>
                        <li style={{
                            paddingTop: '10px'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '5px',
                                margin: '10px 5px 0 0',
                                backgroundColor: 'yellow',
                                float: 'left',
                                boxSizing: 'border-box'
                            }}></div>

                            <span>未同步</span>
                        </li>

                    </ul>
                </div>
                {/*  */}
                <div id="map"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                </div>
                <div
                    className="sceni-cut-face"
                    style={{
                        visibility: this.state.wayName ? 'visible' : 'hidden',
                        opacity: this.state.wayName ? '1' : '0'
                    }}>
                </div>
            </div>
        )
    }
}
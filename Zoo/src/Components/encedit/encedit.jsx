import React from 'react';
import ReactDom from 'react-dom';

import Navgation from '../navgation/navgation.jsx';

import "./encedit.css";

export default class Encedit extends React.Component {
    render() {
        return (
            <div>
                <div className="enc-icon-acount">
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
            </div>
        )
    }
}
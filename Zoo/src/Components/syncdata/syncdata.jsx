import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route } from 'react-router-dom';

import './syncdata.css'

export default class SyncData extends React.Component {
    render() {
        return (
            <div
                style={{
                    padding: '16px'
                }}
            >
                <button
                    style={{

                        backgroundColor: '#2db7f5',
                        color: '#fff',
                        borderRadius: '4px',
                        border: '1px solid #2db7f5',
                        height: '30px',
                        width: '90px'
                    }}
                >同步数据</button>

                <button
                    style={{
                        position: 'absolute',
                        right: '20px',
                        backgroundColor: '#2db7f5',
                        color: '#fff',
                        borderRadius: '4px',
                        border: '1px solid #2db7f5',
                        height: '30px',
                        width: '50px'
                    }}
                >刷新</button>
                <div className="new-add-user">
                    <table>
                        <tbody>
                            <tr>
                                <th><div> <span> 序号</span></div></th>
                                <th><div><span> 名称</span></div></th>
                                <th><div><span>类型</span></div></th>
                                <th><div><span>更新时间</span></div></th>
                                <th><div><span>同步状态</span></div></th>
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


                <div className="page-cho">
                    <div className="page-cho-press">
                        <ul>
                            <li><Link to="#"><span className="page-cho-press-left"></span></Link></li>
                            <li className="page-cho-curr"><Link to="#"><span className="page-cho-press-curr">1</span></Link></li>
                            <li><Link to="#"><span className="page-cho-press-right"></span></Link></li>
                        </ul>
                    </div>
                    <div className="page-cho-jump">
                        <span>10条/页</span>
                        <span className="page-cho-down"></span>
                    </div>
                </div>
            </div>


        )
    }


}
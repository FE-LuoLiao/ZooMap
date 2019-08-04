import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route } from 'react-router-dom';

import './usermanage.css'

export default class UserManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addUser: false
        }
    }

    adduserClick() {
        this.setState({
            addUser: !this.state.addUser
        })
    }

    render() {
        return (
            <div
                style={{
                    padding: '16px'
                }}
            >
                <button className="new-add-user-butt"
                    onClick={this.adduserClick.bind(this)}
                >新增用户</button>
                <div className="new-add-user">
                    <table>
                        <tbody>
                            <tr>
                                <th><div> <span> 序号</span></div></th>
                                <th><div><span> 账户名称</span></div></th>
                                <th><div><span>账户状态</span></div></th>
                                <th><div><span>权限范围</span></div></th>
                                <th><div><span>所属单位</span></div></th>
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


                <div className="page-cho">
                    <div className="page-cho-press">
                        <ul>
                            <li><Link to="#"><span className="page-cho-press-left"></span></Link></li>
                            <li className="page-cho-curr"><Link to="#"><span className="page-cho-press-curr">1</span></Link></li>
                            <li><Link to="#"><span className="page-cho-press-right"></span></Link></li>
                        </ul>
                    </div>
                    <div className="page-cho-jump">
                        <span>50条/页</span>
                        <span className="page-cho-down"></span>
                    </div>
                </div>

                {/*  */}
                <div className="user-add-list"
                    style={{
                        visibility: this.state.addUser ? "visible" : "hidden",
                        opacity: this.state.addUser ? '1' : '0'

                    }}
                >
                    {/*  */}
                    <div className="user-add-list-heder">
                        <span>新增</span>
                        <span
                            onClick={this.adduserClick.bind(this)}
                        ></span>
                    </div>
                    {/*  */}
                    <div className="user-add-list-con"
                    >
                        {/*  */}
                        <form>
                            <div className="user-add-list-name">
                                <label>姓名</label>
                                <input type="text" />
                            </div>
                            {/*  */}
                            <div className="user-add-list-name">
                                <label>账户名称</label>
                                <input type="text" />
                            </div>
                            {/*  */}
                            <div className="user-add-list-name">
                                <label>初始密码</label>
                                <input type="password" placeholder="请输入新密码，至少6位字符" />
                            </div>
                            {/*  */}
                            <div className="user-add-list-name">
                                <label>确认密码</label>
                                <input type="password" placeholder="请再次输入新密码" />
                            </div>
                            {/*  */}
                            <div className="acco-status">
                                <label>账户状态</label>
                                <div className="acco-status-choo">
                                    <label>
                                        <input type="radio" name="status" value="正常" />
                                        <span>正常</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="status" value="停用" />
                                        <span>停用</span>
                                    </label>

                                </div>
                            </div>
                            {/*  */}
                            <div className="user-add-list-name-nec user-add-list-name">
                                <label>权限范围</label>
                                <input type="text" placeholder="请选择" />
                            </div>
                            {/*  */}
                            <div className="user-add-list-name-nec user-add-list-name">
                                <label>所属单位</label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                    <div className="user-add-list-save">
                        <button
                            onClick={this.adduserClick.bind(this)}
                        >保存</button>
                    </div>
                </div>
                {/*  */}
                <div
                    className="user-cut-face"
                    style={{
                        visibility: this.state.addUser ? 'visible' : 'hidden',
                        opacity: this.state.addUser ? '1' : '0'
                    }}>
                </div>
            </div>
        )
    }


}
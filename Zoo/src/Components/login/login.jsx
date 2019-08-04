import React from 'react';
import ReactDom from 'react-dom';
import "./login.css";


export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div>
                    <p>欢迎登陆后台管理系统</p>
                    <div className="login-info">
                        <div>
                            <span className="login-username-pic">
                            </span>
                            <input className="login-in" type="text" placeholder="请输入用户名" />
                        </div>
                        <div>
                            <span className="login-password-pic"></span>
                            <input className="login-in" type="password" placeholder="请输入密码" />
                        </div>
                        <div>
                            <button className="login-key">
                                <span>登陆</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, HashRouter as Router } from 'react-router-dom';

import Login from './Components/login/login.jsx';
import Navgation from './Components/navgation/navgation.jsx';
import Encedit from './Components/encedit/encedit.jsx';
import Equlable from './Components/equlable/equlable.jsx';
import Funcstatus from './Components/funcstatus/funcstatus.jsx';
import Scenicway from './Components/scenicway/scenicway.jsx';
import Home from './Components/home/home.jsx';
import Webmap from './Components/webmap/webmap.jsx';
import UserManage from './Components/usermanage/usermanage.jsx';
import IconManage from './Components/iconmanage/iconmanage.jsx';
import SyncData from './Components/syncdata/syncdata.jsx'

import '../src/Components/webmap/webmap.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menushow: true,
            data: [],
            url: [],
            navshow: false
        }
    }

    getMenu(menushow) {
        this.setState({
            menushow: menushow
        })
    }

    getCurrentNav(index, url) {
        this.setState({
            data: index,
            url: url,

        })
    }


    render() {
        return (
            <Router>
                <Navgation
                />

                <div
                    className="webmap-header"
                    style={{
                        left: this.state.menushow ? '200px' : '60px',
                    }}>
                    <Webmap
                        getData={this.state.data}
                        getUrl={this.state.url}
                        getMenu={this.getMenu.bind(this)}
                    />
                    <div
                        className="map-con"
                    >
                        <Route exact path="/" component={Home} />

                        <Route
                            path="/home"
                            render={props => (
                                <Home />
                            )
                            }
                        />

                        <Route
                            path="/login"
                            render={props => (
                                <Login />
                            )
                            }
                        />

                        <Route
                            path="/Encedit"
                            render={props => (
                                <Encedit />
                            )
                            }
                        />

                        <Route
                            path="/Equlable"
                            render={props => (
                                <Equlable />
                            )
                            }
                        />

                        <Route
                            path="/Funcstatus"
                            render={props => (
                                <Funcstatus />
                            )
                            }
                        />

                        <Route
                            path="/Scenicway"
                            render={props => (
                                <Scenicway />
                            )
                            }
                        />

                        <Route
                            path="/UserManage"
                            render={props => (
                                <UserManage />
                            )
                            }
                        />

                        <Route
                            path="/IconManage"
                            render={props => (
                                <IconManage />
                            )
                            }
                        />

                        <Route
                            path="/SyncData"
                            render={props => (
                                <SyncData />
                            )
                            }
                        />
                    </div>
                </div>
            </Router>


        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)
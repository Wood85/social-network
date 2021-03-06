import './App.css'
import Sidebar from "./components/Sidebar/Sidebar"
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import React, {Suspense} from "react"
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import Login from "./components/Login/Login"
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import store from "./redux/redux-store"

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

// const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={()=><Redirect from="/" to="/profile" />}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer />
                        </Suspense>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const AppContainer = compose(withRouter,
    connect(mapStateToProps,{initializeApp}))(App)

const MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp

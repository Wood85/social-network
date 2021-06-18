import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=><Profile store={props.store}
                        // profilePage={props.state.profilePage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={()=><DialogsContainer
                        store={props.store}
                        // dialogsPage={props.state.dialogsPage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

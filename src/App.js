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

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs dialogsPage={props.state.dialogsPage}
                                                                addMessage={props.addMessage}
                                                                updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

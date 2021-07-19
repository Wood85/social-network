import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getUserProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        profile: state.profilePage.profile
    }
}
export default connect(mapStateToProps,{logout,getUserProfile})(HeaderContainer)
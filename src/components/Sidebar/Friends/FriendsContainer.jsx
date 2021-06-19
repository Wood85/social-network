import Friends from "./Friends";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}
const FriendsContainer = connect(mapStateToProps,null)(Friends)
export default FriendsContainer
import {Field, reduxForm} from 'redux-form';
import {createFild, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit,error}) => {
    return(
            <form onSubmit={handleSubmit}>
                {createFild('Email','email', [required], Input)}
                {createFild('password','password', [required], Input)}
                {createFild(null,'rememberMe', [], Input, {type:'checkbox'}, 'remember me')}
                {error && <div className={classes.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to ={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)
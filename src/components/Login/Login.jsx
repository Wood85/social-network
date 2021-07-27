import {Field, reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
// import classes from '../common/FormsControls/FormsControls.module.css'
import classes from './Login.module.css'

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return(
            <form onSubmit={handleSubmit}>
                <div className={classes.login}>{createField('Email','email', [required], Input)}</div>
                <div className={classes.password}>{createField('password','password', [required], Input)}</div>
                <div className={classes.rememberMe}>{createField(null,'rememberMe', [], Input, {type:'checkbox'}, 'remember me')}</div>

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField('symbols from image','captcha', [required], Input, {},)}

                {error && <div className={classes.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button className={classes.btnLogin}>LOG IN</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth) {
        return <Redirect to ={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login})(Login)
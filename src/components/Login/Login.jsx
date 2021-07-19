import {Field, reduxForm} from 'redux-form';
import {createFild, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return(
            <form onSubmit={handleSubmit}>
                {createFild('Email','email', [required], Input)}
                {createFild('password','password', [required], Input)}
                {createFild(null,'rememberMe', [], Input, {type:'checkbox'}, 'remember me')}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createFild('symbols from image','captcha', [required], Input, {},)}

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
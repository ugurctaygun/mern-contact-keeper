import React, {useState,useContext, useEffect} from 'react'
import AlertContext from '../../context/Alert/alertContext';
import AuthContext from '../../context/Auth/authContext';

const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const { register, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            //REDIRECT
            props.history.push('/');
        }
        if(error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error , isAuthenticated, props.history]);
    
    const [user,setuser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name,email,password,password2} = user;

    const onChange = (e) => {
        setuser({
            ...user,
            [e.target.name]:e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email==='' || password==="") {
            setAlert('Please enter all fields', 'danger')
        } else if(password !== password2) {
            setAlert('Password does not match')
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input text="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input text="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input text="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input text="password2" name="password2" value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register;

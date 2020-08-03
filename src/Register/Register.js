import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from './register.schema';
import { useHistory } from 'react-router-dom';
import config from '../config/index';
import { Link } from 'react-router-dom';
import './Register.scss';

function Register() {

    const history = useHistory();

    const [showError, setError] = useState(false);

	const submit = async (values) => {
        setError(false);
        const res = await fetch( config.apiUrl + '/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if(res.status === 201)  {
            history.push('/feed');
        } else if(res.status === 409) {
            setError(true);
        } else {
            console.log('Unknown error');
        }
        return res;
	};

	return (
			<div className="Login row d-flex justify-content-center mt-4">
				<div className="card col-11 col-md-4">
					<div className="card-body my-4 d-flex flex-column">
						<p className="Register__title align-self-center h2">Instagram</p>
						<p className="Register__subtitle h5 text-center">Sign up to see photos and videos from your friends.</p>
						<Formik
							initialValues={{username: '', password: '', confirmPassword: '', email: '', agreeTerms: false}}
							validationSchema={RegisterSchema}
							validateOnChange={true}
							onSubmit={submit}>
							{({ errors, touched, isSubmitting }) => (
								<Form className="Register__form mt-5 px-0" noValidate>
									{ showError && <div className="form-group">
										<div className="alert alert-danger">
											Email or username already exists
										</div> 
									</div> }
									<div className="form-group">
										<Field className="form-control" id="username" name="username" placeholder="Username" />
										{ errors.username && touched.username && <small className="Register__form__error">{errors.username}</small> }
									</div>
									<div className="form-group">
										<Field type="password" className="form-control" name="password" id="password" placeholder="Password" />
										{ errors.password && touched.password && <small className="Register__form__error">{errors.password}</small> }
									</div>
									<div className="form-group">
										<Field type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
										{ errors.confirmPassword && touched.confirmPassword && <small className="Register__form__error">{errors.confirmPassword}</small> }
									</div>
									<div className="form-group">
										<Field type="email" className="form-control" id="email" name="email" placeholder="Email address" />
										{ errors.email && touched.email && <small className="Register__form__error">{errors.email}</small> }
									</div>
									<div className="form-group form-check">
										<div>
											<Field type="checkbox" id="agreeToTerms" name="agreeTerms" className="form-check-input" />
											<label htmlFor="agreeToTerms" className="form-check-label">Agree to terms</label>
										</div>
										{ errors.agreeTerms && touched.agreeTerms && <small className="text-danger">{errors.agreeTerms}</small> }
									</div>
									<div className="form-group text-right">
									<button type="submit" 
										className="mt-3 Register__submit-btn" 
										disabled={isSubmitting}>
											Sign up
									</button>
									</div>
									<div className="Register__terms font-weight-bold text-center" >
										By signing up, you agree to our Terms , Data Policy and Cookies Policy .
									</div>
									<hr className="mt-4"/>
									<div className="d-flex flex-row align-items-center justify-content-center" >
										<div>
											Have an account?
										</div>
										<div>
											<Link className="nav-link font-weight-bold" to="/login">Login</Link>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>

		

		/*
			<div className="col-lg-6 order-sm-1 order-lg-0 text-right">
				<img src={require('./intro.png')} className="Register__intro-image my-2 mx-3" alt="Instagram" />
			</div>
		*/

	);
}

export default Register;
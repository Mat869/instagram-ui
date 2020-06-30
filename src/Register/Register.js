import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from './register.schema';
import { useHistory } from 'react-router-dom';
import config from '../config/index';
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
            history.push('/login');
        } else if(res.status === 409) {
            setError(true);
        } else {
            console.log('Unknown error');
        }
        return res;
	};

	return (
		<div className="Register row d-flex justify-content-center">
			<div className="col-lg-6 order-sm-0 order-lg-1 my-5">
				<h2 className="Register__title">Sign up</h2>
				<h3 className="Register__subtitle">Sign up to see photos and videos from your friends.</h3>
				<Formik
					initialValues={{username: '', password: '', confirmPassword: '', email: '', agreeTerms: false}}
					validationSchema={RegisterSchema}
					validateOnChange={true}
					onSubmit={submit}>
					{({ errors, touched, isSubmitting }) => (
						<Form className="Register__form mt-5 col-lg-8 px-0" noValidate>
                            { showError && <div className="form-group">
                                <div className="alert alert-danger">
                                    Email or username already exists
                                </div> 
                            </div> }
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<Field className="form-control" id="username" name="username" placeholder="2-16 characters" />
								{ errors.username && touched.username && <small className="Register__form__error">{errors.username}</small> }
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<Field type="password" className="form-control" name="password" id="password" placeholder="6-16 characters" />
								{ errors.password && touched.password && <small className="Register__form__error">{errors.password}</small> }
							</div>
							<div className="form-group">
								<label htmlFor="password">Confirm Password</label>
								<Field type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="6-16 characters" />
								{ errors.confirmPassword && touched.confirmPassword && <small className="Register__form__error">{errors.confirmPassword}</small> }
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<Field type="email" className="form-control" id="email" name="email" placeholder="Email address..." />
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
						</Form>
					)}
				</Formik>
			</div>
			<div className="col-lg-6 order-sm-1 order-lg-0 text-right">
				<img src={require('./intro.png')} className="Register__intro-image my-2 mx-3" alt="Instagram" />
			</div>
		</div>

	);
}

export default Register;
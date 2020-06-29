import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from './login.schema';
import config from '../config/index';
import './Login.scss';

function Login() {

	const [showError, setError] = useState(false);

	const submit = async (values) => {

		setError(false);
		
        const res = await fetch( config.apiUrl + '/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
			},
			credentials: "include", // for crossdomain cookies
            body: JSON.stringify(values)
        });
        if(res.status === 200)  {
			console.log('Yes');
        } else if(res.status === 401) {
			console.log('No');
			setError(true);
        } else {
            console.log('Unknown error');
        }
        return res;
	};

	return (
		<main className="Main containter-fluid">
			<div className="Login row d-flex justify-content-center">
				<div className="card col-11 col-md-4 mt-5">
					<div className="card-body my-5 d-flex flex-column">
						<h2 className="Login__title align-self-center">Instagram</h2>
						<Formik
							initialValues={{username: '', password: ''}}
							validationSchema={LoginSchema}
							onSubmit={submit}>
							{({ isSubmitting, touched, errors }) => (
								<Form className="Login__form mt-5  px-0" noValidate>
									{ showError && <div className="form-group">
										<div className="alert alert-danger">
											Username or password are not correct
										</div> 
									</div> }
									<div className="form-group">
										<label htmlFor="username">Username</label>
										<Field className="form-control" id="username" name="username" />
										<ErrorMessage name="username" component="small" className="Login__form__error" />
									</div>
									<div className="form-group">
										<label htmlFor="password">Password</label>
										<Field type="password" className="form-control" name="password" id="password" />
										<ErrorMessage name="password" component="small" className="Login__form__error" />
									</div>
									<div className="form-group text-right">
										<button type="submit" 
											className="mt-3 Login__submit-btn" 
											disabled={isSubmitting || !touched.username && !touched.password || errors.username || errors.password}>
												Login
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>

		</main>
	);
}
export default Login;
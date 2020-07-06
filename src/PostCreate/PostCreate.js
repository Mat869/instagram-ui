import React, { useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { PostCreateSchema } from './createPost.schema';
import { useHistory } from 'react-router-dom';
import config from '../config/index';

function PostCreate() {

	const history = useHistory();

	const [showError, setError] = useState(false);

	const buildFromData = (values) => {
		const data = new FormData();
		for (const key in values) {
			data.append(key, values[key]);
		}
		return data;
	}

	const submit = async (values) => {

		setError(false);

		const data = buildFromData(values);
       
        const res = await fetch( config.apiUrl + '/posts', {
            method: 'PUT',
			credentials: "include",
            body: data // the header will be inserted automatically when we put data in body
		});
		if(res.status === 201)  {
            history.push('/');
        } else if(res.status === 409) {
            setError(true);
        } else {
            console.log('Unknown error');
        }
        return res;
	};
    
    return (
		<div className="PostCreate row d-flex justify-content-center">
			<div className="col-lg-6 order-sm-0 order-lg-1 my-5">
				<h2 className="PostCreate__title">Create Post</h2>
				<Formik
					initialValues={{image: '', description: ''}}
					validationSchema={PostCreateSchema}
					onSubmit={submit}>
					{({ errors, isSubmitting, setFieldValue }) => (
						<Form className="PostCreate__form mt-5 col-lg-8 px-0" noValidate>
							<div className="form-group">
								<label htmlFor="image">Image</label>
								<input type='file' id='image' name='image' onChange={(e) => {
									setFieldValue('image', e.currentTarget.files[0]) //this is the binary file
								}} />
								{ errors.image && <small className="Register__form__error">{errors.image}</small> }
							</div>
							<div className="form-group">
								<label htmlFor="Description">Description</label>
								<Field as="textarea" className="form-control" name="password" id="password" />
							</div>
							<div className="form-group text-right">
								<button type="submit" className="btn btn-dark w-100 mt-3 PostCreate__submit-btn" disabled={isSubmitting}>Share</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
    );
}

export default PostCreate;
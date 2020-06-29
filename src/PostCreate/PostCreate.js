import React from 'react';
import { Formik, Form, Field } from 'formik';
import { PostCreateSchema } from './createPost.schema';
import config from '../config/index';

function PostCreate() {

	const submit = async (values) => {
       
        const res = await fetch( config.apiUrl + '/posts', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
			},
			credentials: "include",
            body: JSON.stringify(values)
        });
        console.log(res);
	};
    
    return (
		<div className="PostCreate row d-flex justify-content-center">
			<div className="col-lg-6 order-sm-0 order-lg-1 my-5">
				<h2 className="PostCreate__title">Create Post</h2>
				<Formik
					initialValues={{image: '', description: ''}}
					validationSchema={PostCreateSchema}
					onSubmit={submit}>
					{({ isSubmitting }) => (
						<Form className="PostCreate__form mt-5 col-lg-8 px-0" noValidate>
							<div className="form-group">
								<label htmlFor="image">Image</label>
								<Field type="file" id="image" name="image"/>
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
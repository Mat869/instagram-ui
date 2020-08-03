import React, { useContext } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CommentCreateSchema } from './comment-create.schema';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../user-context'
import Avatar from '../../../common/Avatar/Avatar'
import config from '../../../config/index';

function CommentCreate({postId, onAdd}) {
    const history = useHistory();
    const { user } = useContext(UserContext);
    async function submit (values, {resetForm}) {

        const newComment = await (await fetch(`${config.apiUrl}/posts/${postId}/comment`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })).json();
        onAdd(newComment);
        resetForm();
    }
    return (
    <div className="d-flex row">
        <div className="col-lg-6 order-sm-0 order-lg-1 my-lg-5">
            <Formik
                initialValues={{description: ''}}
                validationSchema={CommentCreateSchema}
                onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form className="CommentCreate__form mt-5 col-lg-8 px-0" noValidate>
                        <div>
                            <Avatar size="sm" image={user.image} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Comment</label>
                            <Field as="textarea" className="form-control" name="content" id="content" />
                            <ErrorMessage component="small" name="content" className="PostCreate__form__error" />
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="mt-3 CommentCreate__submit-btn" disabled={isSubmitting}>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
    );
}
export default CommentCreate;
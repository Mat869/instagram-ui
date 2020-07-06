import * as Yup from 'yup';

export const PostCreateSchema = Yup.object().shape({
	image: Yup.mixed()
		.required('Image is required'), // no matter what is put
	description: Yup.string()
		.max(2000, 'Description is too long'),
});
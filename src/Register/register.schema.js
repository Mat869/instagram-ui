import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, 'Username is too short')
		.max(16, 'Username is too long')
		.required('Username is required')
		.test('isTaken', 'Username already taken', (value) => isTaken('username', value)),
	email: Yup.string()
		.email('Email is invalid')
		.required('Email is required')
		.test('isTaken', 'Email already taken', (value) => isTaken('email', value)),
	password: Yup.string()
		.min(6, 'Password is too short')
		.max(16, 'Password is too long')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null], "Password must match"),
	agreeTerms: Yup.boolean()
		.oneOf([true], 'You must agree to terms')
});

const fields = {
	username: {},
	email: {}
};

async function isTaken(field, value) {

	const res = await fetch(`http://localhost:4000/users/check?${field}=${value}`);
	fields[field][value] = !(await res.json());
	console.log(fields[field][value]);
	return fields[field][value];
}

import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardBody, TextInput, FormGroup } from '@patternfly/react-core';
const Form__hiring_Get_User_By_Name: React.FC<any> = (props: any) => {
	const [formApi, setFormApi] = useState<any>();
	const [User__email, set__User__email] = useState<string>('');
	const [User__firstName, set__User__firstName] = useState<string>('');
	const [User__id, set__User__id] = useState<number>();
	const [User__lastName, set__User__lastName] = useState<string>('');
	const [User__password, set__User__password] = useState<string>('');
	const [User__phone, set__User__phone] = useState<string>('');
	const [User__userStatus, set__User__userStatus] = useState<number>();
	const [User__username, set__User__username] = useState<string>('');
	const [UserName, set__UserName] = useState<string>('');
	/* Utility function that fills the form with the data received from the kogito runtime */
	const setFormData = (data) => {
		if (!data) {
			return;
		}
		set__User__email(data?.User?.email ?? '');
		set__User__firstName(data?.User?.firstName ?? '');
		set__User__id(data?.User?.id);
		set__User__lastName(data?.User?.lastName ?? '');
		set__User__password(data?.User?.password ?? '');
		set__User__phone(data?.User?.phone ?? '');
		set__User__userStatus(data?.User?.userStatus);
		set__User__username(data?.User?.username ?? '');
		set__UserName(data?.UserName ?? '');
	};
	/* Utility function to generate the expected form output as a json object */
	const getFormData = useCallback(() => {
		const formData: any = {};
		formData.User = {};
		formData.User.email = User__email;
		formData.User.firstName = User__firstName;
		formData.User.id = User__id;
		formData.User.lastName = User__lastName;
		formData.User.password = User__password;
		formData.User.phone = User__phone;
		formData.User.userStatus = User__userStatus;
		formData.User.username = User__username;
		return formData;
	}, [
		User__email,
		User__firstName,
		User__id,
		User__lastName,
		User__password,
		User__phone,
		User__userStatus,
		User__username,
	]);
	/* Utility function to validate the form on the 'beforeSubmit' Lifecycle Hook */
	const validateForm = useCallback(() => {}, []);
	/* Utility function to perform actions on the on the 'afterSubmit' Lifecycle Hook */
	const afterSubmit = useCallback((result) => {}, []);
	useEffect(() => {
		if (formApi) {
			/*
        Form Lifecycle Hook that will be executed before the form is submitted.
        Throwing an error will stop the form submit. Usually should be used to validate the form.
      */
			formApi.beforeSubmit = () => validateForm();
			/*
        Form Lifecycle Hook that will be executed after the form is submitted.
        It will receive a response object containing the `type` flag indicating if the submit has been successful and `info` with extra information about the submit result.
      */
			formApi.afterSubmit = (result) => afterSubmit(result);
			/* Generates the expected form output object to be posted */
			formApi.getFormData = () => getFormData();
		}
	}, [getFormData, validateForm, afterSubmit]);
	useEffect(() => {
		/*
      Call to the Kogito console form engine. It will establish the connection with the console embeding the form
      and return an instance of FormAPI that will allow hook custom code into the form lifecycle.
      The `window.Form.openForm` call expects an object with the following entries:
        - onOpen: Callback that will be called after the connection with the console is established. The callback
        will receive the following arguments:
          - data: the data to be bound into the form
          - ctx: info about the context where the form is being displayed. This will contain information such as the form JSON Schema, process/task, user...
    */
		const api = window.Form.openForm({
			onOpen: (data, context) => {
				setFormData(data);
			},
		});
		setFormApi(api);
	}, []);
	return (
		<div className={'pf-v5-c-form'}>
			<Card>
				<CardBody className='pf-v5-c-form'>
					<label>
						<b>User</b>
					</label>
					<FormGroup
						fieldId={'uniforms-0002-0002'}
						label={'Email'}
						isRequired={false}>
						<TextInput
							name={'User.email'}
							id={'uniforms-0002-0002'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={User__email}
							onChange={(e, newValue) => set__User__email(newValue)}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0003'}
						label={'First name'}
						isRequired={false}>
						<TextInput
							name={'User.firstName'}
							id={'uniforms-0002-0003'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={User__firstName}
							onChange={(e, newValue) => set__User__firstName(newValue)}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0005'}
						label={'Id'}
						isRequired={false}>
						<TextInput
							type={'number'}
							name={'User.id'}
							isDisabled={false}
							id={'uniforms-0002-0005'}
							placeholder={''}
							step={1}
							value={User__id}
							onChange={(e, newValue) => set__User__id(Number(newValue))}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0006'}
						label={'Last name'}
						isRequired={false}>
						<TextInput
							name={'User.lastName'}
							id={'uniforms-0002-0006'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={User__lastName}
							onChange={(e, newValue) => set__User__lastName(newValue)}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0007'}
						label={'Password'}
						isRequired={false}>
						<TextInput
							name={'User.password'}
							id={'uniforms-0002-0007'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={User__password}
							onChange={(e, newValue) => set__User__password(newValue)}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-0008'}
						label={'Phone'}
						isRequired={false}>
						<TextInput
							name={'User.phone'}
							id={'uniforms-0002-0008'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={User__phone}
							onChange={(e, newValue) => set__User__phone(newValue)}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000a'}
						label={'User status'}
						isRequired={false}>
						<TextInput
							type={'number'}
							name={'User.userStatus'}
							isDisabled={false}
							id={'uniforms-0002-000a'}
							placeholder={''}
							step={1}
							value={User__userStatus}
							onChange={(e, newValue) =>
								set__User__userStatus(Number(newValue))
							}
						/>
					</FormGroup>
					<FormGroup
						fieldId={'uniforms-0002-000b'}
						label={'Username'}
						isRequired={false}>
						<TextInput
							name={'User.username'}
							id={'uniforms-0002-000b'}
							isDisabled={false}
							placeholder={''}
							type={'text'}
							value={User__username}
							onChange={(e, newValue) => set__User__username(newValue)}
						/>
					</FormGroup>
				</CardBody>
			</Card>
			<FormGroup
				fieldId={'uniforms-0002-000c'}
				label={'User name'}
				isRequired={false}>
				<TextInput
					name={'UserName'}
					id={'uniforms-0002-000c'}
					isDisabled={true}
					placeholder={''}
					type={'text'}
					value={UserName}
					onChange={(e, newValue) => set__UserName(newValue)}
				/>
			</FormGroup>
		</div>
	);
};
export default Form__hiring_Get_User_By_Name;

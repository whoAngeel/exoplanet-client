import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearError, loginAuth } from "../redux/auth/auth.slice";

function Login() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [clientReady, setClientReady] = React.useState(false);
	const [messageApi, contextHolder] = message.useMessage();
	const { isLoading, error, token } = useSelector((state) => state.auth);
	React.useEffect(() => {
		if (error) {
			messageApi.error("Error al iniciar sesion");
			dispatch(clearError());
		}
	}, [error, dispatch, messageApi]);
	React.useEffect(() => {
		if (token) {
			navigate("/game");
		}
	}, [token]);
	React.useEffect(() => {
		setClientReady(true);
	}, []);

	const handleFinish = (values) => {
		dispatch(loginAuth(values));
	};
	return (
		<div className="flex h-full items-center justify-center min-h-screen  ">
			{contextHolder}
			<Form
				form={form}
				onFinish={handleFinish}
				layout="vertical"
				className="w-10-12 sm:w-10/12 lg:w-4/12 -mt-32 flex flex-col gap-2 p-4 text-base-content bg-base-300 rounded-md"
			>
				<h2 className="text-xl font-semibold text-center my-2 text-base-content">
					Inicia sesión para jugar
				</h2>
				<Form.Item
					label={<span className="text-base-content">Correo</span>}
					name="email"
					required
					rules={[
						{
							required: true,
							message: "Por favor ingresa tu correo",
						},
						{
							type: "email",
							message: "Por favor ingresa un correo valido",
						},
					]}
				>
					<Input placeholder="usuario@example.com" />
				</Form.Item>
				<Form.Item
					label={<span className="text-base-content">Contraseña</span>}
					name="password"
					required
				>
					<Input.Password placeholder="contraseña" />
				</Form.Item>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							block
							htmlType="submit"
							className="btn btn-primary btn-sm text-primary-content"
							loading={isLoading}
							disabled={
								!clientReady ||
								!form.isFieldsTouched(true) ||
								!!form
									.getFieldsError()
									.filter(({ errors }) => errors.length).length
							}
						>
							{isLoading ? (
								<span>Ingresando...</span>
							) : (
								<span>Ingresar</span>
							)}
						</Button>
					)}
				</Form.Item>
				<div>
					<p>
						¿No tienes cuenta?{" "}
						<Link to={"/register"}>
							<Button type="link">Registrate aqui</Button>
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export default Login;

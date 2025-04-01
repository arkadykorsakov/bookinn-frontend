import Tabs from '../../components/tabs';
import React from 'react';
import LoginForm from './views/LoginForm';
import RegisterForm from './views/RegisterForm';

export default function AuthPage() {
	const [form, setForm] = React.useState('login');
	return <section className="flex-auto flex items-center justify-center w-full h-full">
		<div className="max-w-[400px] w-full">
			<Tabs value={form} onValueChange={(value) => setForm(value)}>
				<Tabs.List>
					<Tabs.Trigger value="login">Авторизация</Tabs.Trigger>
					<Tabs.Trigger value="register">Регистрация</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="login">
					<LoginForm />
				</Tabs.Content>
				<Tabs.Content value="register">
					<RegisterForm onEnd={() => setForm('login')} />
				</Tabs.Content>
			</Tabs>
		</div>
	</section>;
}


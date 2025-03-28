import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('permite iniciar sesión con credenciales válidas', async () => {
  render(<LoginPage />);
  fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText('Iniciar Sesión'));
  expect(await screen.findByText('¡Bienvenido!')).toBeInTheDocument();
});
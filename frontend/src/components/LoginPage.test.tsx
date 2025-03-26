import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('muestra error si el usuario no existe', async () => {
  render(<LoginPage />);
  fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'invalid' } });
  fireEvent.click(screen.getByText('Iniciar Sesión'));
  expect(await screen.findByText('Error al iniciar sesión')).toBeInTheDocument();
});
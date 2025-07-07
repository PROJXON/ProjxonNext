import { LoginResponse, WPAuthUser } from '@/types/interfaces';

const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login failed:', errorData);
      throw new Error(errorData.message || 'Invalid username or password.');
    }

    const data: WPAuthUser = await response.json();

    if (data.token) {
      localStorage.setItem('authToken', data.token);
      return { success: true };
    } else return { success: false, message: 'Invalid username or password.' };
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, message: 'Login failed. Please try again.' };
  }
};

const logout = () => localStorage.removeItem('authToken');

const isAuthenticated = () => !!localStorage.getItem('authToken');

export { login, logout, isAuthenticated };
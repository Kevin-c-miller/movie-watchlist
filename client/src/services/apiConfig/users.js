import { api } from './index';

// Login User
export const loginUser = async (loginData) => {
  const res = await api.post('/auth/login', { authentication: loginData });
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
};

// Create User
export const createUser = async (createData) => {
  const res = await api.post('/users', { user: createData });
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
};

// Verify User
export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get('/auth/verify');
    return res.data;
  }
  return false;
};

// Get All Users
export const getAllUsers = async () => {
  const res = await api.get('/users');
  return res.data;
};

// Get One User
export const getOneUser = async (user_id) => {
  const res = await api.get(`/users/${user_id}`);
  return res.data;
};

// Update User
export const updateUser = async (user_id, updateData) => {
  const res = await api.put(`/users/${user_id}`, { user: updateData });
  return res.data;
};

// Delete User
export const deleteUser = async (user_id) => {
  const res = await api.delete(`/users/${user_id}`);
  return res.data;
};

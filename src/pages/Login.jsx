// src/pages/Login.jsx
import api from '../api/axios';

const login = async (username, password) => {
  const res = await api.post('/token/', { username, password });
  const token = res.data.access;
  localStorage.setItem('token', token);
};
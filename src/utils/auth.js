export const login = async (username, password) => {
  const res = await api.post('/token/', { username, password });
  localStorage.setItem('token', res.data.access);
};

export const getToken = () => localStorage.getItem('token');
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Authentification

const setToken = token => {
  $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  $instance.defaults.headers['Authorization'] = '';
};

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/signup', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      let message = 'User with such email already exists';
      toast.error(message);

      return thunkApi.rejectWithValue({
        message,
      });
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/login', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      let message = 'Email or password is incorrect';
      toast.error(message);

      return thunkApi.rejectWithValue({
        message,
      });
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) return thunkApi.rejectWithValue(null);
    try {
      setToken(token);
      const { data } = await $instance.get('/users/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(null);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/logout');
      clearToken();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// data contacts

export const requestContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await $instance.post('/contacts', contactData);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await $instance.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

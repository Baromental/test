// contactsOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { workApi } from '../../axiosConfig/workApi';


export const fetchContact = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await workApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContacts',
  async (credentials, thunkApi) => {
    try {
      const { data } = await workApi.post("/contacts", credentials);
      return data;
    } catch (error) {
            console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      await workApi.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
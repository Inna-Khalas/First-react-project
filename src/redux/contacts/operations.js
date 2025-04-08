import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goItApi.get("/contacts", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.error(
        "Error fetching contacts:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await goItApi.post("/contacts", contact, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await goItApi.delete(`/contacts/${id}`, {
        withCredentials: true,
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { urls } from '../../config/urls';

axios.defaults.baseURL = `http://localhost:3000`

export const getLayer1 = createAsyncThunk('layers/l1', async (data) => {
    try {
        const response = await axios.post(urls.layer1(), data);
        console.log(response);
        return response;

        // console.log(urls.test());
        // const response = await axios.get("/test");
        // console.log(response);
        // return response;
    } catch (err) {
        return err.message;
    }
});

export const getLayer2 = createAsyncThunk('layers/l2', async (data) => {
    try {
        console.log("in action", data);
        const response = await axios.post(urls.layer2(), data);
        return response;
    } catch (err) {
        return err.message;
    }
});

export const getLayer3 = createAsyncThunk('layers/l3', async (data) => {
    try {

        const response = await axios.post(urls.layer3(), data);
        return response;
    } catch (err) {
        return err.message;
    }
});

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { urls } from '../../config/urls';

export const getLayer1 = createAsyncThunk('layers/l1', async (data) => {
    try {
        const response = await axios.get(urls.layer1(), data);
        return response;
    } catch (err) {
        return err.message;
    }
});

export const getLayer2 = createAsyncThunk('layers/l2', async (category) => {
    try {
        const response = await axios.get(urls.layer2() + category);
        return response;
    } catch (err) {
        return err.message;
    }
});

export const getLayer3 = createAsyncThunk('layers/l3', async (subCategory) => {
    try {

        const response = await axios.get(urls.layer3() + subCategory);
        return response;
    } catch (err) {
        return err.message;
    }
});

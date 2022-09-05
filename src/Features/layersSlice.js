import { createSlice } from '@reduxjs/toolkit';
import { getLayer1 } from './layersServices';
import { getLayer2 } from './layersServices';
import { getLayer3 } from './layersServices';

let newDate = new Date()
newDate.toISOString().split('T')[0]

const initialState = {
    isLoading: false,
    start: newDate,
    end: newDate,
    layer1: {
        data: [],
        page: 0,
        limit: 50,
    },
    layer2: {
        data: [],
        page: 0,
        limit: 50,
    },
    layer3: {
        data: [],
        page: 0,
        limit: 50,
    },
    error: null,
};

const layersSlice = createSlice({
    name: 'layers',
    initialState,
    reducers: {
        setStartDateAction(state, action) {
            state.start = action.payload;
        },
        setEndDateAction(state, action) {
            state.end = action.payload;
        }
    },
    extraReducers: {
        [getLayer1.pending]: (state) => {
            state.isLoading = true;
        },
        [getLayer1.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log('slice action of getLayer1: ', action);
            let currPayload = action.payload;
            if (currPayload.status == 200) {
                // console.log('data in payload of action of getLayer1: ', currPayload.data.data);
                state.layer1 = {
                    ...initialState.layer1,
                    data: currPayload.data.data,
                }
                // console.log("state.layer1.data", state.layer1);
            } else {
                state.error = currPayload.error;
            }
        },
        [getLayer1.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data.error;
        },

        [getLayer2.pending]: (state) => {
            console.log('pending');
            state.isLoading = true;
        },
        [getLayer2.fulfilled]: (state, action) => {
            console.log('fullfilled', action);
            let currPayload = action.payload;
            if (currPayload.status == 200) {
                state.layer2 = {
                    ...initialState.layer2,
                    data: currPayload.data.data,
                }
                console.log("state.layer2", state.layer2);
            } else {
                state.error = currPayload.error;
            }
            state.isLoading = false;
        },
        [getLayer2.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data.error;
        },

        [getLayer3.pending]: (state) => {
            console.log('pending getLayer3');
            state.isLoading = true;
        },
        [getLayer3.fulfilled]: (state, action) => {
            console.log('fullfilled getLayer3', action);
            let currPayload = action.payload;
            if (currPayload.status == 200) {
                state.layer3 = {
                    ...initialState.layer3,
                    data: currPayload.data.data
                };
            } else {
                state.error = currPayload.error;
            }
            state.isLoading = false;
        },
        [getLayer3.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data.error;
        },
    },
});

export const { setStartDateAction, setEndDateAction } = layersSlice.actions
export default layersSlice.reducer;


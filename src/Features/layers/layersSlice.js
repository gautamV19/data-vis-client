import { createSlice } from '@reduxjs/toolkit';
import { getLayer1 } from './layersServices';
import { getLayer2 } from './layersServices';
import { getLayer3 } from './layersServices';

let newDate = new Date()
newDate.toISOString().split('T')[0]

const initialState = {
    isLoding: false,
    start: newDate,
    end: newDate,
    layer1: [],
    layer2: [],
    layer3: [],
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
            state.isLoding = true;
        },
        [getLayer1.fulfilled]: (state, action) => {
            state.isLoding = false;
            console.log('slice action of getLayer1: ', action);
            if (action.payload.status == 200) {
                state.layer1 = action.payload.data;
            } else {
                state.error = action.payload.error;
            }
        },
        [getLayer1.rejected]: (state, action) => {
            state.isLoding = false;
            state.error = action.payload.error;
        },

        [getLayer2.pending]: (state) => {
            console.log('pending');
            state.isLoding = true;
        },
        [getLayer2.fulfilled]: (state, action) => {
            console.log('fullfilled', action);
            if (action.payload.status == 200) {
                state.layer2 = action.payload.data;
            } else {
                state.error = action.payload.error;
            }
            state.isLoding = false;
        },
        [getLayer2.rejected]: (state, action) => {
            state.isLoding = false;
            state.error = action.payload.error;
        },

        [getLayer3.pending]: (state) => {
            console.log('pending getLayer3');
            state.isLoding = true;
        },
        [getLayer3.fulfilled]: (state, action) => {
            console.log('fullfilled getLayer3', action);
            if (action.payload.status == 200) {
                state.layer3 = action.payload.data;
            } else {
                state.error = action.payload.error;
            }
            state.isLoding = false;
        },
        [getLayer3.rejected]: (state, action) => {
            state.isLoding = false;
            state.error = action.payload.error;
        },
    },
});

export const { setStartDateAction, setEndDateAction } = layersSlice.actions
export default layersSlice.reducer;


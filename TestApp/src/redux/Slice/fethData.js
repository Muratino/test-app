import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const _apikey = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const _baseOffset = 20;

export const fetchAllImg = createAsyncThunk(
  'imgArr/fetchImg',
  async (offset = _baseOffset) => {
    const { request } = useHttp();
    return request(`https://api.unsplash.com/photos/?page=1&per_page=${offset}&client_id=${_apikey}`);
  }
)

export const fetchOneImg = createAsyncThunk(
  'oneImg/fetchOneImg',
  async (id) => {
    const { request } = useHttp();
    return request(`https://api.unsplash.com/photos/${id}?client_id=${_apikey}`);
  }
)

const initialState = {
  statusArr: '',
  arr: [],
  oneImgArr: [],
  statusOneImg: '',
}

export const fethData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addNewImg: (state, action) => {
      state.arr.push(action.payload);
    },
  },
  extraReducers: {
    [fetchAllImg.pending]: (state) => {
      state.arr = [];
      state.statusArr = "loading";
    },
    [fetchAllImg.fulfilled]: (state, action) => {
      state.statusArr = "success";
      action.payload.map(el => state.arr.push(el));
    },
    [fetchAllImg.rejected]: (state) => {
      state.statusArr = 'error';
      state.arr = [];
    },
    [fetchOneImg.pending]: (state) => {
      state.oneImgArr = [];
      state.statusOneImg = "loading";
    },
    [fetchOneImg.fulfilled]: (state, action) => {
      state.statusOneImg = "success";
      state.oneImgArr = action.payload;
    },
    [fetchOneImg.rejected]: (state) => {
      state.statusOneImg = 'error';
      state.oneImgArr = [];
    },
  }
})

export const { addNewImg } = fethData.actions

export default fethData.reducer
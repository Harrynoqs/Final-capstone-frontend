import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {

  laptoplibrary: [{"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUCv-mnBgilD_YNXW-6pR8rmYw3oHqAkKkA&usqp=CAU", "model" : "Acer", "name" :"Acer laptop"}
  ]
}

const booksSlice = createSlice({
  name: 'library',
  initialState,

  reducers: {},
  
});



export default laptopSlice.reducer;


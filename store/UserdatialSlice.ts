import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { db } from '@/config/fire';
import { collection, addDoc } from "firebase/firestore"; 


export interface a {
  Name:string,
  Email:string,
  Age:number,
  Gender:string

}

export const addUsers = createAsyncThunk<void,a>("adduser",(data,{rejectWithValue})=>{
  try {

    
  } catch (error) {
    
  }

})

const initialState: {User: a[],loading:boolean,error:null|string } = {
  User:[],
  loading:false,
  error:null
}


export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
   
    
  },
})




export default UserSlice.reducer;

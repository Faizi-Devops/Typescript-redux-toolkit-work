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

export const addUsers = createAsyncThunk<a,a>("adduser", async (data,{rejectWithValue})=>{
  try {
    console.log("data in the slice",data)
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);

    return data;
    
  } catch (error:any) {
    return rejectWithValue(error.message)

    
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

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface a {
  Name:string,
  Email:string,
  Age:number,
  Gender:string

}

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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk(
    "cart/createCart",
    async(data,{rejectWithValue}) =>{
      console.log("inside cart data ", data);
        try{
        const response= await fetch("http://localhost:4000/createcart",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(data),
        })
        return response.json();
    }catch(error){
        return rejectWithValue(error.message);
    }
}
);

export const getCart= createAsyncThunk(
    "cart/getcart", async(userId, {rejectWithValue})=>{
        try{
            const response= await fetch("http://localhost:4000/getcart",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(userId),
            })
            console.log("response",response);
            console.log("response json",response.json());
            return response.json();
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: "idle" | "loading" | "success" | "rejected",
    cart: [],
    error: null,
  },
  reducers:{
  },
  extraReducers:(builder)=>{
      builder
      .addCase(createCart.pending,(state)=>{
        state.loading="loading";
        state.error = null;
      })
      .addCase(createCart.fulfilled, (state, action)=>{
        state.loading="success";
        state.cart=action.payload;
      })
      .addCase(createCart.rejected, (state, action)=>{
        state.loading="rejected";
        state.error=action.error.message;
      })
      .addCase(getCart.pending,(state)=>{
        state.loading="loading";
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action)=>{
        state.loading="success";
        state.cart=action.payload;
      })
      .addCase(getCart.rejected, (state, action)=>{
        state.loading="rejected";
        state.error=action.error.message;
      })
  }
});

export default cartSlice.reducer;

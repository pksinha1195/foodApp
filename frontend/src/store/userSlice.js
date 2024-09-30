import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "users/createuser",
  async (userData, { rejectWithValue }) => {
    // console.log(userData);
    try {
      const response = await fetch("http://localhost:4000/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("failed to fetch user Details");
      }
      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async (userData, { rejectWithValue }) => {
    try {
      // console.log(userData);
      const response = await fetch("/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("failed to get user details");
      }
      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: [],
    loginUser:[],
    loading: "idle",
    error: null,
  },
  reducers: {
    emptyfunction: (state) => {
      state.userInfo = [];
      state.loading = "idle";
      state.error = null;
    },
    emptyUser:(state)=>{
      state.loginUser = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = "success";
        state.userInfo = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.userInfo = action.payload;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loginUser = action.payload;
        state.loading = "success";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.userInfo = action.payload;
        state.error = action.error.message;
      });
  },
});

export const { emptyfunction, emptyUser } = userSlice.actions;
export default userSlice.reducer;

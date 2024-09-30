import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await fetch("/findrestaurant");
    if (!response.ok) {
      throw new Error("failed to fetch restaurants");
    }
    return response.json();
  }
);

export const addRestaurant = createAsyncThunk(
  "restaurants/addRestaurant",
  async (restaurantData, { rejectWithValue }) => {
    try {
      console.log(restaurantData);
      const response = await fetch("http://localhost:4000/addrestaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantData),
      });
      if (!response.ok) {
        throw new Error("failed to add restaurnt");
      }
      return response.json();
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const restaurantDetails = createAsyncThunk(
  "restaurants/restaurantDetails",
  async (restaurantName, { rejectWithValue }) => {
    // console.log(restaurantName);
    try {
      const response = await fetch(`http://localhost:3000/findbyname/name/${restaurantName.name}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body:JSON.stringify(restaurantName),
      });
      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
    details: [],
    loading: "idle",
    addStatus: "idle",
    detailsStatus: "idle",
    error: null,
  },
  reducers: {
    increment:(value)=>{
      return value + 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(addRestaurant.pending, (state) => {
        state.error = null;
        state.addStatus = "pending";
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.addStatus = "succeeded";
        state.entities.push(action.payload);
      })
      .addCase(addRestaurant.rejected, (state, action) => {
        state.addStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(restaurantDetails.pending, (state) => {
        state.error = null;
        state.detailsStatus = "pending";
      })
      .addCase(restaurantDetails.fulfilled, (state, action) => {
        state.detailsStatus = "succeeded";
        state.details=action.payload;
        // console.log(action.payload);
      })
      .addCase(restaurantDetails.rejected, (state, action) => {
        state.detailsStatus = "failed";
        state.error = action.error.message;
      });
  },
});
  export const {increment}=restaurantSlice.actions;

export default restaurantSlice.reducer;

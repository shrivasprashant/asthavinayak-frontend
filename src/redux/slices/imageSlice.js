import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

// Image Operations
export const uploadImage = createAsyncThunk(
  "image/upload",
  async (imageFile, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      
      const response = await apiClient.post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteImage = createAsyncThunk(
  "image/delete",
  async (imageUrl, { rejectWithValue }) => {
    try {
      await apiClient.delete("/upload/image", { data: { imageUrl } });
      return imageUrl;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageUrl: "",
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    clearImageUrl: (state) => {
      state.imageUrl = "";
    },
    resetImageState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload Image
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.imageUrl = action.payload.imageUrl;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to upload image";
      })
      // Delete Image
      .addCase(deleteImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteImage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.imageUrl = "";
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to delete image";
      });
  },
});

export const { clearImageUrl, resetImageState } = imageSlice.actions;
export default imageSlice.reducer;
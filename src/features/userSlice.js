import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create user
export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=>{
    const response = await fetch("https://651cfed744e393af2d58fbd9.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
       })
       try {
        const result =response.json();
        return result;
       } catch (error) {
         return rejectWithValue(error)
       }
});

export const showUsers = createAsyncThunk("showUser", async(args, {rejectWithValue})=>{
    const response = await fetch("https://651cfed744e393af2d58fbd9.mockapi.io/crud");
    try {
        const result = await response.json()
        console.log("result....", result,)
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
});
// update action
export const updateUser = createAsyncThunk("updateUser", async(data, {rejectWithValue})=>{
    console.log("updated Data", data)
    const response = await fetch(`https://651cfed744e393af2d58fbd9.mockapi.io/crud/${data.id}`, {
        method: "PUt",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
       })
       try {
        const result =response.json();
        return result;
       } catch (error) {
         return rejectWithValue(error)
       }
});
// delete method
export const deleteUser = createAsyncThunk("deleteUser", async(id, {rejectWithValue})=>{
    const response = await fetch(`https://651cfed744e393af2d58fbd9.mockapi.io/crud/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(id)
       })
       try {
        const result = await response.json();
        console.log("del-id-result: ", result)
        return result;
       } catch (error) {
         return rejectWithValue(error)
       }
});

const initialState= {
    users: [],
    loading:  false,
    error: null,
    searchUser:""
}

export const userDetails = createSlice({
    name: "userData",
    initialState,
    reducers:{
        searchResult: (state, action)=>{
            state.searchUser  = action.payload
        }
    },
    extraReducers: (builder)=> {
        builder
        .addCase(createUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action)=>{
            state.loading = false
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(showUsers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(showUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(showUsers.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(updateUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action)=>{
            state.loading = false
            state.users = state.users.map((ele)=>{
               return ele.id === action.payload.id ? action.payload : ele 
            }) 
        })
        .addCase(updateUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(deleteUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
            state.loading = false;
            console.log("result-builder: ", action.payload)
            const id = action.payload.id
            console.log("del-id: ",id)
            state.users = state.users.filter((ele)=>{
                return ele.id !== id
            })
        })
        .addCase(deleteUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })

    //    [createUser.pending]: (state)=>{ 
    //      state.loading = true;
    //    },
    //    [createUser.fulfilled]: (state , action)=>{
    //     state.loading = false;
    //     state.users.push(action.payload)
    //   },
    //   [createUser.rejected]: (state , action)=>{
    //     state.loading = false;
    //     state.users =action.payload
    //   },
    },

})
export const {searchResult} = userDetails.actions;
export default userDetails.reducer;
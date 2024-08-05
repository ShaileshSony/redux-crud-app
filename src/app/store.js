import { configureStore} from "@reduxjs/toolkit";
import userDetails  from "../features/userSlice";

export const store = configureStore({
    reducer:{
        app: userDetails
    }
})
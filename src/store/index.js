import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./customers";

export default configureStore({
  reducer: {
    customer: customerReducer,
  },
});

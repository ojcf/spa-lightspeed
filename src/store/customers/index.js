import { createAction, createReducer } from "@reduxjs/toolkit";

const INIT_STATE = {};

export const addCustomer = createAction("ADD_CUSTOMER");

export default createReducer(INIT_STATE, {
  [addCustomer.type]: (state, action) => action.payload,
});

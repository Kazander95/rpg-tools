import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./browserStorage";
import initiativeReducer from "./Initiative/models/initiativeReducer";
("./Initiative/models/initiativeReducer");

export const store = configureStore({
  reducer: {
    initiative: initiativeReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

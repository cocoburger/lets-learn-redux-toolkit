// 기본 redux create store 함수를 둘러산 래퍼이다.
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import {apiSlice} from "../features/dogs/dogs-slice";

export const store = configureStore({
  reducer: {counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware); //캐시 수명을 추적하는 특수 기능이 추가된다.
  }

});

export type AppDispatch = typeof store.dispatch;
// store에 slice.reducer를 더 추가하면 해당 type이 자동으로 업데이트 된다.
export type RootState = ReturnType<typeof store.getState>;


// redux 상태의 한 조각에 대한 논리와 데이터를 나타내기 때문에 일반적으로 이것을 '슬라이스 파일' 이라고한다.
//ducks pattern
// createSlice는 redux 로직을 정의하는 데 사용할 주요 api 함수이다.
// Payload Action은 주어진 하나의 객체의 내용을 나타내는 TypeScript 유형입니다.

import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter', //대소문자 상관없고 소문자 사용으로 컨벤션을 맞추자.
  initialState,
  reducers: {
    // return keyword 필요하지 않고, 이 리듀서에서 직접 코드를 변경하는 것처럼 보인다.
    // 따라서 실제로 반환하는 것은 state.value++이다.
    // 일반적인 리덕스 리듀서에서는 기존 상태를 변경하지 않고 복사본을 만들지 않으면 UI는 변경 사항을 알지 못하기 때문에 정말 좋지 않다.
    // 리덕스 툴킷은 Immer 라이브러리를 사용한다.
    // 불변성 유지: immer는 불변성을 유지하는 코드를 작성하는 데 도움을 줍니다. 리덕스에서는 상태가 불변해야 하므로 immer를 사용하면 상태를 직접 수정하지 않고 새로운 상태를 생성할 수 있습니다.
    // 코드 간소화: immer는 복잡한 상태 업데이트 로직을 간소화합니다. 기존의 상태와 새로운 값을 합치는 코드를 작성하는 대신 immer의 produce 함수를 사용하여 간단하게 상태를 업데이트할 수 있습니다.
    // 코드 가독성: immer를 사용하면 코드의 가독성이 좋아집니다. 상태 업데이트 코드가 복잡해지면 가독성이 저하되는데, immer를 사용하면 코드를 간결하고 이해하기 쉽게 작성할 수 있습니다.
    // 성능 개선: immer는 불필요한 객체 복사를 줄여 성능을 개선합니다. immer는 내부적으로 불변성을 유지하면서도 새로운 상태를 생성하기 때문에 객체를 복사하는 비용이 줄어들어 성능이 향상됩니다.
    // 타입 안정성: immer를 사용하면 타입 안정성을 보장할 수 있습니다. immer는 TypeScript를 지원하므로 타입 에러를 방지할 수 있습니다.
    incremented(state) {    //es6 literal
      // it's okay to do this because immer makes it immutable
      state.value++;
    },
    amountAdded(state, aciton: PayloadAction<number>){
      state.value += aciton.payload;
    },
    //decrement

    decrement(state) {
      state.value--;
    }
    //reset
  }

});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;


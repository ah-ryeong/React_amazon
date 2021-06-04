import { createContext, useContext, useReducer } from "react";

// 데이터 레이어 준비
export const StateContext = createContext();

// App을 래핑, 데이터레이어 제공하는 부분을 만들어줌
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// 각 컴포넌트한테 전달
export const UseStateValue = () => useContext(StateContext);
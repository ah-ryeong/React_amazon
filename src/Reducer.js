// 처음상태(장바구니 바구니 상태, 빈 바구니)
export const initialState = {
    basket: [],
}

// selector 가져올거임 : state에서 필요한 데이터를 가져오거나 계산을 수행해서 원하는 형태의 데이터를 가져오는 역할
// reduce메서드 : 배열의 모든 요소에 대해서 지정된 콜백 함수를 요청, 반환값은 누적된 결과임
// 모든 배열의 값을 합산할 때 사용함
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

// Reducer란?
// 장바구니 담기 같은 행동을 디스패치해주는것 
// 디스패치란 총을 쏜다고 생각하면 됨 -> 컴포넌트가 가진 정보를 데이터레이어가 둘러싸고 있으면,
// 장바구니 담기를 쏘면 이 쏘는 행동, 액션 자체를 디스패치라고 함 
// reducer는 이 디스패치의 case에 맞는 state와 action을 리턴해주는 것을 말한다.
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return{
                // ...은 스프레드씬텍스임 , 우리가 어떤 배열을 가지고 올 때 배열 전체를 가져올 수 있지만, []말고 내용물만 가져오고 싶을 때, 점 세개 찍어주면됨
                ...state,
                basket: [...state.basket, action.item]
            };

            default:
                return state;
    }
}

export default reducer;
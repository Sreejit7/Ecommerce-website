export const initialState={
    cart:[],
    user: null,
    products:[]
};
//Selector reduce func
export const getCartTotal=(cart)=>
    cart.reduce((amount,item)=> item.price+amount,0);

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART': return{
            ...state,
            cart:[...state.cart, action.item],
        };
        case 'REMOVE_FROM_CART':
            const index=state.cart.findIndex(
                (item)=> item.id===action.id
            );
            let newCart=[...state.cart];
            if(index>=0){
                newCart.splice(index,1);
            }
            else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                )
            }
            return{
                ...state,
                cart: newCart
            };
        case 'EMPTY_CART':
            return{
                ...state, cart:[]
            }
        
        case 'SET_USER':
            return{
                ...state, user: action.user
            }
        case 'ADD_PRODUCT':
            return{
                ...state,
                products:[...state.products,action.item]
            };
        default:
            return state;
    }
    
}
export default reducer; 
import reducer from "../../reducers";
import ProductMock from "../../__mocks__/ProductMock";

describe('Reducers', () => {
    test('return initial state', () => {
        expect(reducer({}, "")).toEqual({})
    })
    
    test('ADD_TO_CART', () => {
        const initialState = {
            cart:[],
        }
        
        const payload = ProductMock;
        
        const action = {
            type:"ADD_TO_CART",
            payload
        };
        
        const expected = {
            cart:[
                ProductMock
            ]
        }
        
        expect(reducer(initialState, action)).toEqual(expected)
    })
    
    test('REMOVE_TO_CART', () => {
        const initialState = {
            cart: []
        }
        
        const payload = ProductMock;
        
        const actionAdd = {
            type:"ADD_TO_CART",
            payload
        }
        
        const actionRemove = {
            type:"REMOVE_FROM_CART",
            payload
        }
        
        const resultAdd = reducer(initialState, actionAdd)
        const resultRemove = reducer(resultAdd, actionRemove)
        
        expect(resultRemove).toEqual(initialState)
    })
})
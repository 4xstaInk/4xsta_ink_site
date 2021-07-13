import axios from "axios";
import shop from "../../api/shop.js";

export const shoppingcart = {

    namespaced: true,
    state: {
        products: [],
        cart:[],
        checkoutStatus: null
    },


    getters: {
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        },

        cartProducts(state){
            return state.cart.map(cartItem =>{
                const product = state.products.find(product => product.id === cartItem.id)

                return{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartTotal(state, getters){
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        },

        productIsInStock(){
            return (product) => {
                return product.inventory > 0
            }
        },
        productInventoryIsInStock(){
            return (product) => {
                return product.inventory
            }
        }
    },


    mutations: {
        setProducts(state, products) {
            state.products = products
        },

        pushProductToCart(state, productId){
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity(state, cartItem){
            cartItem.quantity++
        },
        decrementItemQuantity(state, cartItem){
            cartItem.quantity--
        },
  
        decrementProductInventory(state, product){
            product.inventory--
        },
        incrementProductInventory(state, product){
            product.inventory++
        },

        setCheckoutStatus(state, status){
            state.checkoutStatus = status
        },
        
        emptyCart(state){
            state.cart = []
        }
    },


    actions: {
        fetchProducts({commit}) {
            return new Promise((resolve, reject)=>{
            shop.getProducts(products => {
                commit('setProducts', products)   
                resolve() 
            })
            
            })
        },

        addProductToCart(context, product){
            if(context.getters.productIsInStock(product)){
                const cartItem = context.state.cart.find(item => item.id === product.id)

                if(!cartItem){
                    context.commit("pushProductToCart", product.id)
                }else{
                    context.commit("incrementItemQuantity", cartItem)
                }
                context.commit("decrementProductInventory", product)
            }
        },

        removeProductToCart(context, product){
            if(product){
                const cartItem = context.state.cart.find(item => item.id === product.id)

                if(cartItem){
                 context.commit("decrementItemQuantity", cartItem)
                }
                context.commit("incrementProductInventory", product)
            }
        },

        incrementProductQuantity(context, product){
            if(context.getters.productIsInStock(product)){
                const cartItem = context.state.cart.find(item => item.id === product.id)

                if(!cartItem){
                    context.commit("pushProductToCart", product.id)
                }else{
                    context.commit("incrementItemQuantity", cartItem)
                }
                context.commit("decrementProductInventory", product)
            }
        },

        checkout({state, commit}){
            shop.buyProducts(
                state.cart,
                () =>{
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'success')
                },
                () =>{
                    commit('setCheckoutStatus', 'failure')
                }
            )
        }
    },
};

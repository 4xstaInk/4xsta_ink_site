const _products = [
    {"id":1,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":2,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":3,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":4,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":5,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":6,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":7,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":8,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":9,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":10,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":11,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":12,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":13,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":14,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":15,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":16,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":17,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":18,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":19,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":20,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":21,"title":"Leather coat", "price":50.01, "inventory": 5},
    {"id":22,"title":"ipad 4 mini", "price":500.01, "inventory": 2},
    {"id":23,"title":"Chelsea boots", "price":300.01, "inventory": 10},
    {"id":24,"title":"Leather coat", "price":50.01, "inventory": 5},
]

export default {
    getProducts (cb){
        setTimeout(()=>cb(_products),100)
    },

    buyProducts(products, cb, errorCb){
        setTimeout(() => {
            // simulate randome checkout failures
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            ? cb()
            : errorCb
        }, 100)
    }
}
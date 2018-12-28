import * as MUTATION_TYPES from '../mutation_types'
const state = {
    LoginStatus:true,
    userName:'su',
    Category: [],
    Poster:[],
    Products: []
}

const mutations = {
    [MUTATION_TYPES.GET_CATEGORY](state,{data}){
        state.Category = data.Category;
    },
    [MUTATION_TYPES.GET_POSTER](state,{data}){
        state.Poster = data.Pic;
    },
    [MUTATION_TYPES.GET_PRODUCTS](state,{data}){

        state.Products = data.Products;
    }
}

const actions = {
    async getCategory({commit,dispatch}){
        let data = await  this._vm.$api.test.sayHelloWorld()
        commit({
            type: 'GET_CATEGORY',data
        })
    },
    async getPoster({commit,dispatch}){
        let data = await  this._vm.$api.test.sayHelloWorld()
        commit({
            type: 'GET_POSTER',data
        })
    },
    async getProducts({commit,dispatch}){
        let data = await  this._vm.$api.test.sayHelloWorld()
        commit({
            type: 'GET_PRODUCTS',data
        })
    }
}

export default {
    state, mutations, actions
}

<template>
    <div>
        <p>{{category}}</p>
        <ul v-for="item in test(category)">
            <li>{{item.pName}}</li>
        </ul>
    </div>

</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "category",
        data() {
            return {
                category:this.$route.params.cName
            };
        },
        computed: {
            ...mapState({
                Products() {return this.$store.state.test.Products}
            })
        },
        mounted(){
            this.getProducts()
        },
        methods: {
            getProducts () {
                this.$store.dispatch('getProducts')
            },
            test(category){
                return this.Products.filter(item => {
                    if(item.category == category)
                        return item
                })
            }
        }
    }
</script>

<style scoped>

</style>
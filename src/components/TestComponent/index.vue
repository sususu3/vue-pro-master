<template>
    <section>
        <div class="block">
            <el-carousel height="400px" type="card">
                <el-carousel-item v-for="item in Poster">
                    <img :src="require(item.url)" :alt="item.name">
                </el-carousel-item>
                <el-carousel-item>
                    <img :src="url">
                </el-carousel-item>
                <!--<el-carousel-item>-->
                    <!--<img src="../../assets/04.jpeg">-->
                <!--</el-carousel-item>-->
                <!--<el-carousel-item>-->
                    <!--<img src="../../assets/05.jpeg">-->
                <!--</el-carousel-item>-->

            </el-carousel>
        </div>

    </section>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'TestComponent',
        data: () => ({
            url:require('../../assets/03.jpeg')
        }),
        computed: {
          ...mapState({
              Poster() {return this.$store.state.test.Poster}
          })
        },
        mounted(){
            this.getPoster()
        },
        methods: {
            getPoster () {
                this.$store.dispatch('getPoster')
            }
        }
    }
</script>

<style>

</style>

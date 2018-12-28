<template>
    <div>
        <!--<div class="topStrip">-->
        <!--<router-link to="/" class="linkStyle">首页</router-link>-->
        <!--<span v-if="status">你好，{{user}}</span>-->
        <!--<span v-else>请登陆！</span>-->
        <!--<router-link to="/Login" v-if="!status" class="linkStyle"> 登 陆 </router-link>-->
        <!--<router-link to="/" v-else class="linkStyle"> 退 出 </router-link>-->
        <!--</div>-->
        <el-menu
                router :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">产品类别</template>
                <el-menu-item v-for="item in category" :index="'/category/' + item.cName">{{item.cName}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">关于我们</el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    import test from '../../store/modules/test'
    import {mapState} from 'vuex'
    export default {
        name: "topStrip",
        data() {
            return {
            };
        },
        mounted(){
            this.getCategory()
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getCategory () {
                this.$store.dispatch('getCategory')
            }
        },
        computed:{
            status(){
                return test.state.LoginStatus;
            },
            user(){
                return test.state.userName;
            },
            category() {return this.$store.state.test.Category}
        },
        test
    }
</script>

<style>
/*.topStrip{*/
    /*width: 100%;*/
    /*height: 20px;*/
    /*line-height:20px;*/
    /*background-color: #f5f7fa;*/
    /*text-align: right;*/
    /*border-bottom: 1px solid #e6e6e6;*/
/*}*/
    /*.linkStyle{*/
        /*margin-left: 5px;*/
        /*margin-right: 5px;*/
    /*}*/
</style>
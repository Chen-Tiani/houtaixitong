"use strict";(self["webpackChunkct"]=self["webpackChunkct"]||[]).push([[465],{9465:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"myarticle"},[a("div",{staticClass:"add",on:{click:t.add}},[a("i",{staticClass:"el-icon-plus"})]),t._l(t.myartdata,(function(s,e){return a("div",{staticClass:"card"},[a("img",{attrs:{src:JSON.parse(s.images)[0]}}),a("p",[t._v(t._s(s.name))]),a("p",[t._v(t._s(s.price))])])}))],2)},r=[],d=(s(5475),{computed:{},data(){return{myartdata:[]}},methods:{add(){this.$router.push("/add")}},mounted(){let t=this.$route.params.user;console.log(t),this.$api.getmyart({userid:t}).then((t=>{console.log(t.data.data),this.myartdata=t.data.data}))}}),i=d,c=s(8412),n=(0,c.Z)(i,e,r,!1,null,"4e86dde6",null),u=n.exports}}]);
//# sourceMappingURL=465.37c2b913.js.map
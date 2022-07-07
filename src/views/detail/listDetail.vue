<!--  -->
<template>
<div>
<search></search>
<div v-if="id==='1'">
<list></list>
</div>
<div v-else class="nodata">暂时没有数据</div>
</div>
</template>

<script>
import list from '../home/list.vue'
import search from '../components/search.vue'
export default {
  components:{
        list,
        search
    },
data() {
  return {
  id:''

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
 this.id=this.$route.query.id
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.nodata{
  padding: 20px;
  color: #999;
}
</style>
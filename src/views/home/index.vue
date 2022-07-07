<template>
  <div>
    <search></search>
    <category></category>
    <div class="title">附近的商家</div>
    <list></list>
  </div>
</template>

<script>
import category from './category'
import List from './list.vue'
import search from '../components/search.vue'
export default {
 components: {
   category,
   List,
   search
 }
}
</script>

<style lang="scss" scoped>
.header{
  background: #1c1b20;
  padding: 0.2rem;
  .search{
    width: 100%;
    border: none;
    height: 0.6rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    padding: 0 0.2rem;
  }
}
.title {
  font-size: 0.34rem;
  font-weight: 700;
  text-align: center;
  height: 0.46rem;
  line-height: 0.46rem;
  margin: 0.3rem 0.1rem;
}
.title::after,.title::before{
  content: "";
  height: 1px;
  transform: scale(.5);
  width: 30px;
  display: inline-block;
  background: #666;
  vertical-align: middle;
}
</style>
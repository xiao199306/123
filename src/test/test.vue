<template>
    <div class="container">
        <!-- 导航栏 -->
        <h1 v-show="true">{{ msg }}</h1>
        <div class="navigat" v-for="(item, index) in navigat"> {{  item[index] }}</div>
    </div>
</template>

<script>
export default {
  name: 'test',
 
  data () {
    return {
      msg: 'hello world',
      navigat: [
          {'0': '琴'},
          {'1': '棋'},
          {'2': '书'},
          {'3': '画'},
      ],
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        width: 90%;
        border: 1px solid red;
        margin: 20px auto;
        background: url(../img/base.jpg);
    }
</style>

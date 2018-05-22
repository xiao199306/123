<template>
   <div class="container">
     
     <div>
       <div>
          <p class="notice">{{ msg }}</p>
       </div>
     </div>
   </div>

  
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'hello world2222'
    }
  }
}
</script>

<style lang="css">
  .container{
    width:1000px;
    margin: 20px auto;
    border: 2px solid red;
  }
</style>




<template>
   <div class="container">
     <div>
       <div>
          <p class="notice">{{ msg }}</p>
       </div>

       <div>
         <Input v-model="value" placeholder="请输入用户名" style="width: 300px"></Input>
        </div>

        <div>
            <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
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




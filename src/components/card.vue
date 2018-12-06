<template>
  <a :href="url" target="view_window">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" >
      <div class="pad">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img
                :src="imgUrl"
                :alt="imgAlt"
                width="48"
                height="48"
                class="img"
              >
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <span class="title">{{title}}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                <span class = "type">[{{toolClass}}]</span>
            </div>
          </el-col>
        </el-row>
        <hr>
        <span class="description">{{description}}</span>
      </div>
    </el-card>
  </a>
</template>


<script>
export default {
    data() {
    return {
      currentDate: new Date()
    };
  },
  props:{
    imgUrl : String,
    imgAlt : String,
    title : String,
    toolClass:String,
    url : String,
    description : String
  }
}
</script>


<style scoped>
.el-card{
    height: 130px;
    width: 260px;
    float: left;
    margin: 0 13px 13px 0;
    border: 1px solid #CCC;
    background-image: -webkit-linear-gradient(top, #FFF, #F9F9F9);
    position: static;
    border-radius: 5px;
    transition: box-shadow 0.3s ease-in-out;
}
/* .img{
    background-repeat: no-repeat;
    background-image: url("../assets/sadwdawgrgt.png");
    background-position: -150px -150px;
} */
.pad{
    padding: 10px 10px
}
.type{
    font-size: 10px;
    line-height: 60px;
}
.title{
  color: #000;
  font-size: 16px;
  line-height: 60px;
  text-decoration: none;
}
.description{
  font-size: 12px;
}
</style>

<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <div class="pad">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="coderunner"
                width="48"
                height="48"
                class="img"
              >
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <a href="#">在线运行代码</a>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="grid-content bg-purple">
                <a href="#" class = "type">[开发类]</a>
            </div>
          </el-col>
        </el-row>
        <hr>
        <span>工具说明</span>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
    data() {
    return {
      currentDate: new Date()
    };
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
.img{
    background-repeat: no-repeat;
    background-image: url("../assets/sadwdawgrgt.png");
    background-position: -150px -150px;
}
.pad{
    padding: 10px 10px
}
.type{
    font-size: 10px;
    line-height: 60px
}
</style>

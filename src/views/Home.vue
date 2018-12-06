<template>
  <div class="home">
    <!-- head -->
    <tools-head/>
    <!-- main -->
    <el-tabs>
      <el-tab-pane label="全部" >
        <card v-for="(item, index) in data" :key="index" 
              :imgUrl = item.imgUrl 
              :imgAlt = item.imgAlt 
              :title = item.title
              :toolClass = item.toolClass
              :url = item.url
              :description = item.description
              />
      </el-tab-pane>
      <el-tab-pane label="开发类">
        <card v-for="(item, index) in data" :key="index" 
              :imgUrl = item.imgUrl 
              :imgAlt = item.imgAlt 
              :title = item.title
              :toolClass = item.toolClass
              :url = item.url
              :description = item.description
              v-if="item.toolClass == '开发类'"
              />
      </el-tab-pane>
      <el-tab-pane label="站长类">
        <card v-for="(item, index) in data" :key="index" 
              :imgUrl = item.imgUrl 
              :imgAlt = item.imgAlt 
              :title = item.title
              :toolClass = item.toolClass
              :url = item.url
              :description = item.description
              v-if="item.toolClass == '站长类'"
              />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    toolsHead : require("components/toolsHead").default,
    card:require("components/card").default
  },
  data(){
    return {
      data:[{
        imgUrl : './tools/static/icon/regexp.jpg',
        imgAlt : '正则表达式 regexp',
        title : '正则表达式',
        toolClass:'开发类',
        url : './tools/template/regexp.html',
        description : 'regexp'
      },{
        imgUrl : './tools/static/icon/timestamp.jpg',
        imgAlt : '时间戳 时间戳转换 timestamp',
        title : '时间戳转换工具',
        toolClass:'开发类',
        url : '/tools/template/timestamp.html',
        description : 'timestamp'
      },{
        imgUrl : './tools/static/icon/jsonformat.jpg',
        imgAlt : 'Json格式化工具 jsonformat',
        title : 'Json格式化工具',
        toolClass:'站长类',
        url : '/tools/template/jsonformat.html',
        description : 'jsonformat'
      }
      ,{
        imgUrl : './tools/static/icon/qrcode.png',
        imgAlt : '二维码生成工具 qrcode',
        title : '二维码生成工具',
        toolClass:'站长类',
        url : '/tools/template/qrcode.html',
        description : 'qrcode'
      }
      ,{
        imgUrl : './tools/static/icon/imagebase64.jpg',
        imgAlt : '图片Base64转码',
        title : '图片Base64转码',
        toolClass:'开发类',
        url : '/tools/template/imagebase64.html',
        description : 'imagebase64'
      }
      ,{
        imgUrl : './tools/static/icon/endecode.png',
        imgAlt : '字符串编解码',
        title : '字符串编解码',
        toolClass:'开发类',
        url : '/tools/template/endecode.html',
        description : 'endecode'
      }
      ,{
        imgUrl : './tools/static/icon/codebeautify.jpg',
        imgAlt : '代码美化工具',
        title : '代码美化',
        toolClass:'开发类',
        url : '/tools/template/codebeautify.html',
        description : 'codebeautify'
      }
      ]
    }
  }
}
</script>

<style scoped>
.home{
  margin: 0 50px ;
}
</style>

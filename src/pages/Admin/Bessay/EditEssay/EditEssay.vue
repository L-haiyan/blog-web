<template>
  <div>
      <el-row class="form">
          <el-col :span="18" class="form-container" :offset="3">
            <el-card>
                <el-row >
                    <div class="title">
                        <span>修改文章</span>
                    </div>
                </el-row>
                    <!-- 表单区域 -->
                <el-row>
                    <el-form :label-position="labelPosition" ref="essayInfo" label-width="80px" :model="essayInfo">                        
                        <el-form-item label="标题:">
                            <el-input v-model="essayInfo.title"></el-input>
                        </el-form-item>
                        <el-form-item label="作者:">
                            <el-input v-model="essayInfo.author"></el-input>
                        </el-form-item>
                        <el-form-item label="分类:">
                            <el-select v-model="essayInfo.category" placeholder="请选择" >
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="文章内容:">
                            <div>
                                <mavon-editor v-model="essayInfo.text" :ishljs = "true" ref=md @imgAdd="$imgAdd" />
                            </div>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-row>
                    <el-col :span="5" :offset="11" >
                        <el-button type="info" name="reset"  @click="resetForm()">重置</el-button>
                        <el-button type="info" name="submit">提交</el-button>
                    </el-col>
                </el-row>
            </el-card>
            <!-- 标题 -->
        </el-col>
      </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import {editEssay} from '../../../../api/index.js'
export default {
    data() {
      return {     
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
         value3: '',
         value:'',
          options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        //文章的内容
        essayInfo:{
           title:'',
           author:'',
           category:'',
           text:'' 
        }
         
      }
      
    },
    mounted(){
        //获取文章信息
        this.getEssayInfo()
    },
    computed:{

    },
     methods: {
        // 绑定@imgAdd event
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           axios({
               url: 'server url',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
               $vm.$img2Url(pos, url);
           })
        },
        //获取文章信息
        async getEssayInfo() {
            let id = this.$route.query.id
            const {result:result}= await editEssay(id)
            console.log(result);
                this.essayInfo.title = result.title
                this.essayInfo.author = result.author
                this.essayInfo.category = result.category
                this.essayInfo.text = result.text
        },
        //清空表单
        resetForm() {
            this.essayInfo.title = ""
            this.essayInfo.author = ""
            this.essayInfo.category = ""
            this.essayInfo.text = ""
      }
    }

}
</script>

<style lang="less" scoped>
    .title {
        widows: 40px;
        height: 40px;
        line-height: 40px;
        text-align:center;
        padding-bottom: 10px; 
        font-weight: 700;
    }
    .el-card {
        padding-right: 20px;
    }
</style>

<template>
  <div>
      <el-row class="form">
          <el-col :span="18" class="form-container" :offset="3">
            <el-card>
                <el-row >
                    <div class="title">
                        <span>添加文章</span>
                    </div>
                </el-row>
                    <!-- 表单区域 -->
                <el-row>
                    <el-form label-width="80px">                        
                        <el-form-item label="标题:">
                            <el-input v-model="addForm.title"></el-input>
                        </el-form-item>
                        <el-form-item label="作者:">
                            <el-input v-model="addForm.author"></el-input>
                        </el-form-item>
                        <el-form-item label="分类:">
                            <el-select v-model="addForm.category" placeholder="请选择" >
                                <el-option
                                v-for="item in categoryList"
                                :key="item.title"
                                :label="item.title"
                                :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="文章内容:" class="write">
                            <div>
                                <mavon-editor  style="min-height: 500px;"  codeStyle="dracula"  v-model="addForm.text" :ishljs = "true" ref=md @imgAdd="$imgAdd" 
                               />
                            </div>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-row>
                    <el-col :span="5" :offset="11" >
                        <el-button type="info" name="reset" >重置</el-button>
                        <el-button type="info" name="submit" @click="addEssays()">提交</el-button>
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

// import "mavon-editor/dist/css/index.css";
import { getCategory,addEssay } from '../../../../api/index.js'
export default {
    data() {
      return {   
        //分类列表
        categoryList:[],    
        //表单信息
        addForm:{
            title:'',
            author:'',
            category:'',
            text:'',
        },
        codeStyle:'atelier-lakeside-dark',
       
      }
      
    },
    async mounted(){
        this.getCategory()

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
         //1.获取分类
        async getCategory() {
            const result = await getCategory()
            if(result.code==200) {
            this.categoryList = result.data
            console.log(result.data)
            }
        },
        //2.添加文章
        async addEssays() {
            const title=this.addForm.title
            const author=this.addForm.author
            const text=this.$refs.md.d_render
            const category=this.addForm.category
            const result = await addEssay(
                title,
                author,
                category,
                text,
                
            )
      
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

<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data(){
    return{
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://vue-node-e6379-default-rtdb.firebaseio.com//posts/' + this.id + ".json")
      .then(function (data) {
        return data.json();
        //this.blog = data.body;
      })
      .then(function (data){
        this.blog = data;
      })
  }
}
</script>

<style scoped>

#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}

</style>

<template>
  <div class="blog">
    <h1>Blog</h1>
    <div class="search">
      <div class="inputs">
        <label >Title:</label>
        <input type="text" v-model="title" />
        <label >Post:</label>
        <textarea type="text" v-model="content" />
      </div>
      <button @click="post()">Send</button>
    </div>
      <h2>Posts:</h2>
    <ul class="blog-post">
      <dl class="blog-post-single" v-for="(item, index) in data" :key="index">
        <dt>{{ item.title }}</dt>
        <dd>{{ item.content }}</dd>
      </dl>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: {
    data() {
      return this.$store.getters.getData;
    },
  },
  methods: {
    post() {
      this.$store.dispatch("postBlog", {
        title: this.title,
        content: this.content,
      });
      this.$store.dispatch("getBlogs");
    },
  },
  created() {
    this.$store.dispatch("getBlogs");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border: 0.24rem solid green;
  background: lightgrey;
}
.search {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.search > button {
  border: 0.08rem solid green;
  height: fit-content;
  padding: 0.48rem;
  border-radius: 48rem;
  background: white;
  font-size: 1.2rem;
}
.search > button:hover {
  border: 0.08rem solid black;
  background: green;
  color: white;
}
.inputs {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0.8rem;
  border-radius: 0.24rem;
  border: 0.08rem solid grey;
}
.inputs > input, .inputs > textarea {
  margin: 0.24rem;
  width: 14rem;
  border: 0.16rem solid black;
}
.inputs > textarea {
  height: 16vh;
}
.inputs > label {
  font-size: 1rem;
  text-align: left;
  font-weight: 800;
}
.blog-post {
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow-y:scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.blog-post::-webkit-scrollbar {
    display: none;
}

dl {
  width: 24rem;
  padding: 2.4rem;
  border: 0.48rem solid darkblue;
  border-radius: 0.64rem;
  background: white;
  margin: 0.8rem;
}
dt {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2.4rem;
  border-bottom: 0.16rem solid black;
}
dd {
  font-size: 0.8rem;
  text-align: left;
  padding: 2.4rem;
}
</style>
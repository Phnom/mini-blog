<template>
  <div class="blog-input">
    <div class="inputs">
      <label>Title:</label>
      <input type="text" v-model="title" />
      <label>Post:</label>
      <textarea type="text" v-model="content" />
    </div>
    <button @click="post()">Send</button>
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
  methods: {
    post() {
      this.$store.dispatch("postBlog", {
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
      this.$store.dispatch("getBlogs");
    },
  },
};
</script>

<style>
.blog-input {
  max-height: 40%;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.blog-input > button { 
  border: 0.08rem solid rgba(128, 128, 128, 0.23);
  height: fit-content;
  width: fit-content;
  padding: 0.48rem;
  border-radius: 48rem;
  background: white;
  font-size: 1.2rem;
}
.blog-input > button:hover {
  border: 0.08rem solid black;
  background: green;
  color: white;
}
.inputs {
  display: flex;
  flex-direction: column;
  background: white;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.552) 0%, white 25%, rgba(255, 255, 255, 0.552) 87%);
  padding: 0.8rem;
  border-radius: 0.24rem;
  border: 0.08rem solid rgba(128, 128, 128, 0.23);
}
.inputs > input,
.inputs > textarea {
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
@media screen and (max-width: 600px) {
  .blog-input {
    flex-direction: column;
    align-items: center;
}
.blog-input > button {
  margin: 1.24rem;
}
}
</style>
<template>
  <div class="search">
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
.search {
  max-height: 50%;
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
</style>
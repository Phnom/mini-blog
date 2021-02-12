<template>
  <div class="blog-input" :class="{ editMode: edit }">
    <div class="inputs">
      <label>Title:</label>
      <input type="text" v-model="title" :class="{ editMode: edit }" />
      <label>Post:</label>
      <textarea type="text" v-model="content" :class="{ editMode: edit }" />
    </div>
    <div class="buttons">
      <button class="button" @click="post()" :class="{ editMode: edit }">
        Send
      </button>
      <button class="button editMode" v-if="edit" @click="deletePost(editId)">
        Delete
      </button>
    </div>
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
  watch: {
    edit(editMode) {
      if (editMode) {
        this.title = this.currentPost.title;
        this.content = this.currentPost.content;
      } else {
        this.title = "";
        this.content = "";
      }
    },
  },
  methods: {
    post() {
      !this.edit
        ? this.$store.dispatch("postBlog", {
            title: this.title,
            content: this.content,
          })
        : this.$store.dispatch(
            "patchBlog",
            {
              title: this.title,
              content: this.content,
              id: this.editId,
            },
            this.editId
          );
      this.$store.dispatch("getBlogs");
      this.$store.dispatch("editMode");
    },
    deletePost(id) {
      this.$store.dispatch("deleteBlog", id);
      this.$store.dispatch("getBlogs");
      this.$store.dispatch("editMode");
    },
  },
  computed: {
    edit() {
      return this.$store.getters.getEdit;
    },
    editId() {
      return this.$store.getters.getEditId;
    },
    currentPost() {
      return this.$store.getters.getDataById;
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.editMode > .buttons {
  justify-content: space-around;
}
.blog-input {
  max-height: 40%;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.inputs {
  display: flex;
  flex-direction: column;
  background: white;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.552) 0%,
    white 25%,
    rgba(255, 255, 255, 0.552) 87%
  );
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
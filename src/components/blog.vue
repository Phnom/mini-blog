<template>
  <div class="blog">
    <header class="header">
      <h1>Blog</h1>
    </header>
    <BlogInput />
    <h2>Posts</h2>
    <BlogPosts :data="data" />
    <footer class="footer"></footer>
  </div>
</template>


<script>
import BlogPosts from "@/components/blogPosts.vue";
import BlogInput from "@/components/blogInput.vue";
export default {
  components: {
    BlogPosts,
    BlogInput,
  },
  computed: {
    data() {
      return this.$store.getters.getData;
    },
  },
  created() {
    this.$store.dispatch("getBlogs");
  },
};
</script>

<style>
.editMode {
  filter: invert(100%);
}

h1,
h2 {
  color: black;
  background: rgba(128, 128, 128, 0.164);
}

.blog {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  background-color: black;
  background-blend-mode:multiply;
  background-image: url("~@/assets/background.jpg");
  background-size: 100% auto;
  background-repeat: no-repeat;
  filter: sepia(27%) contrast(135%) saturate(-20%);
  gap: 0.48rem;
}
.header {
  filter: invert(100%);
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.4738270308123249) 51%,
    rgba(255, 255, 255, 0) 87%
  );
}
.footer {
  width: 100%;
  height: 8%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4738270308123249) 51%,
    rgba(255, 255, 255, 1) 87%
  );
  filter: invert(100%);
}
.blog-post-single, .blog-input, .buttons:not() {
  -webkit-transition: 0.4s -webkit-filter ease-in-out;
  -moz-transition: 0.4s -moz-filter ease-in-out;
  -moz-transition: 0.4s filter ease-in-out;
  -ms-transition: 0.4s -ms-filter ease-in-out;
  -o-transition: 0.4s -o-filter ease-in-out;
  transition: 0.4s filter ease-in-out, 0.4s -webkit-filter ease-in-out;
}



@media screen and (max-width: 800px) {
  .blog {
    width: 100%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
}
</style>
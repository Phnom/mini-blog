<template>
  <div class="blog">
    <div class="header">
      <h1>Blog</h1>
    </div>
    <BlogInput />
    <h2>Posts</h2>
    <BlogPosts :data="data" />
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
* {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  color: black;
}
.header {
  filter: invert(100%);
  height: 20%;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.4738270308123249) 51%,
    rgba(255, 255, 255, 0) 87%
  );
}
.blog {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background-image: url("~@/assets/background.jpg");
  background-size: cover;
  filter: sepia(7%) contrast(135%) saturate(-20%);
}
@media screen and (max-width: 800px) {
  .blog {
    background-size: 100% contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
}
</style>
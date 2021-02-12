<template>
  <div class="blog">
    <h1>Blog</h1>
    <BlogSearch />
    <h2>Posts:</h2>
    <BlogPosts :data="data" />
  </div>
</template>


<script>
import BlogPosts from "@/components/blogPosts.vue";
import BlogSearch from "@/components/blogSearch.vue";
export default {
  components: {
    BlogPosts,
    BlogSearch,
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
.blog {
  padding: 0.88rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border: 0.24rem solid green;
  background: lightgrey;
}

</style>
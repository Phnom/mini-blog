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
h1,
h2 {
  color: black;
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
.header {
  filter: invert(100%);
  height: 16%;
  width: 100%;
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
@media screen and (max-width: 800px) {
  .blog {
    background-size: 100% contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
}
</style>
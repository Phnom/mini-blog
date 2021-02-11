<template>
  <div class="home">
    <Blog />
  </div>
</template>

<script>
import Blog from "@/components/blog.vue";

export default {
  components: {
    Blog
  },
};
</script>

<style>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
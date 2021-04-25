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
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
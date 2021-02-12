<template>
  <ul class="blog-post">
    <dl
      class="blog-post-single"
      v-for="(item, index) in data"
      :key="index"
    >
      <dt>{{ item.title }}</dt>
      <dd>{{ item.content }}</dd>
    </dl>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
.blog-post {
  max-height: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.blog-post::-webkit-scrollbar {
  display: none;
}

dl {
  width: 24rem;
  padding: 0.64rem;
  border: 0.48rem solid darkblue;
  border-radius: 0.64rem;
  background: white;
  margin-bottom: 0.8rem;
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
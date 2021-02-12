<template>
  <ul class="blog-post">
    <dl
      class="blog-post-single"
      v-for="(item, index) in data"
      :key="index"
      :class="{ editMode: edit && item._id === editId }"
    >
      <div class="blog-header">
        <dt>{{ item.title }}</dt>
        <button
          class="button"
          @click="editMode(item._id)"
          :class="{ editMode: edit && item._id === editId }"
        >
          Edit
        </button>
      </div>
      <dd>{{ item.content }}</dd>
    </dl>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  computed: {
    edit() {
      return this.$store.getters.getEdit;
    },
    editId() {
      return this.$store.getters.getEditId;
    },
  },
  methods: {
    editMode(id) {
      this.$store.dispatch("editMode", id);
    },
  },
};
</script>

<style>
.blog-post {
  max-height: 40%;
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
  height: 20vh;
  width: 48rem;
  padding: 0.64rem;
  border-radius: 0.64rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  margin-bottom: 6.84rem;
  background: white;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.552) 0%,
    white 25%,
    rgba(255, 255, 255, 0.552) 87%
  );
  border: 0.08rem solid rgba(128, 128, 128, 0.23);
}
.blog-header {
  display: flex;
  justify-content: center;
}
dt {
  width: 80%;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 1.6rem;
  border-bottom: 0.16rem solid black;
}
dd {
  font-size: 0.8rem;
  text-align: left;
  padding: 0.8rem;
}
@media screen and (max-width: 600px) {
  dl {
    width: 18rem;
  }
}
</style>
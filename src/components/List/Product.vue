<template>
  <b-card>
    <div class="container">
      <b-img v-bind:src="item.thumbnail" fluid alt="Responsive image"></b-img>
      <div class="info">
        <h5>{{item.title}}</h5>
        <span class="text-success">${{item.price}}</span>
        <div>
          <router-link :to="{ name: 'Detail', params: { id: item.id } }" id="details-button">
            Ver más
          </router-link>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>

export default {
  name: 'Product',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    openDetails () {}
  }
}
</script>

<style lang="css">
  .container {
    display: flex;
    flex-direction: row;
  }
  .info {
    width: 100%;
  }
</style>

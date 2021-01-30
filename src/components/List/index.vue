<template>
  <div>
    <div class="input-container">
      <b-form-input v-model="search" placeholder="Ingresa tu búsqueda" type="search"  id="search-input"></b-form-input>
      <b-button v-on:click="onSearch" id="search-button">Buscar</b-button>
    </div>
    <div>
      <b-row>
        <b-col cols="6" v-for="product in list" v-bind:key="product.id">
          <Product v-bind:item="product" />
        </b-col>
      </b-row>
    </div>
    <b-pagination
      v-model="page"
      :total-rows="totalCount"
      :per-page="limit"
      v-on:input="onSearch"
    />
  </div>
</template>

<script>
import axios from "axios"
import Product from "./Product.vue"

export default {
  name: 'SearchSection',
  components: {
    Product
  },
  data: () => ({
    search: '',
    limit: 10,
    list: [],
    totalCount: 0,
    page: 1
  }),
  methods: {
    onSearch () {
      const requestUrl = `https://api.mercadolibre.com/sites/MCO/search?q=${this.search}&offset=${(this.page - 1) * this.limit}&limit=${this.limit}`
      axios.get(requestUrl).then(res => {
        this.list = res.data.results
        this.totalCount = res.data.paging.total
      })
    }
  }
}
</script>

<style lang="css">
  .input-container {
    width: 400px;
    display: flex;
    flex-direction: row;
    margin: auto;
  }
</style>

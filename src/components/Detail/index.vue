<template>
  <div v-if="Boolean(item)">
		<b-img v-bind:src="item.thumbnail" fluid alt="Responsive image"></b-img>
		<div class="info">
			<h5>{{item.title}}</h5>
			<span class="text-success">${{item.price}}</span>	
        <div>
          <router-link :to="{ name: 'Lista'  }">
            Volver
          </router-link>
        </div>
		</div>
	</div>
</template>

<script>
import router from "../../router"
import axios from "axios"

export default {
	name: 'Deatil',
	data: () => ({
		item: null
	}),
	created () {
		const id = this.$route.params.id
		const requestUrl = `https://api.mercadolibre.com/items/${id}`
		axios.get(requestUrl).then(res => {
			console.log(res)
			this.item = res.data
		})
	},
	methods: {
		navigate() {
			router.go(-1);
		}
	}
}
</script>

<style>

</style>

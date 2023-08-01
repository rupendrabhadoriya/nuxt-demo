<template>
  <h1>This is a Product Page</h1>
  <div v-for="p in products" :key="p.id">
   <p>
      <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
    </p>
  </div>
</template>

<script setup>
useHead({
  title: 'This is Product Page',
  meta: [{
    name: "description",
    content: 'this product Page great...'
  }]
});

const {data: products } = useFetch('https://fakestoreapi.com/products')

</script>

<style>
  p {
    margin: 25px;
  }
</style>
<template>
<Head>
  <Title>
    Nuxt demo | Product ID {{ id }}
  </Title>
  <Meta name="description" :content="`This product has a ID ${id}`" />
</Head>
  <h1>This is Details Page..</h1>
  <p>This is the product with ID {{ id }}</p>
</template>

<script setup>
 const { id } = useRoute().params;

</script>

<style>

</style>
<template>
  <h1> Hello ben-jones... </h1>
  <p>this is data {{ data }}</p>
  <p>this is data 2 {{ de }}</p>
</template>

<script setup>
// Node server.js path
const { data } = useFetch('/myapi/posts');


// Default path server/api
const { data: de } = useFetch('/api/demo');

</script>

<style>

</style>
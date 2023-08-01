<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink> | 
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/products">Product</NuxtLink> 
    </header>
    <NuxtPage />
  </div>
</template>

<style>
h1 {
    margin: 20px;
    text-align: center;
  }
header {
  margin: 20px;
  padding-bottom: 50px;
  text-align: center;
}
a {
  padding: 10px;
}
</style>
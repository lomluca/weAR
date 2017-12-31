<template>
  <ul>
    <li>{{ item.owner }}</li>
    <li>{{ item.cardNumber }}</li>
    <li>{{ item.expirationDate }}</li>
  </ul>
</template>

<script>
export default {
  name: 'wear-card-table',
  props: ['item']
}
</script>

<style>
ul {
  width: 100%;
  display: inline-block;
  list-style-type: none;
  text-align: left
}
</style>

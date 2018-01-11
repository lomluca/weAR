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
  margin: 0;
  padding: 0;
  list-style-type: none
}
li {
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

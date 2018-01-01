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
  margin:0;
  padding:0;
  overflow: hidden;
  list-style-position: inside;
  list-style-type: none;
}
li{
  float: left;
  clear: right;
  width: 250px;
  white-space: nowrap;
  text-overflow: ellipsis // This is where the magic happens
}
</style>

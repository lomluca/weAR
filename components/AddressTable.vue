<template>
  <ul>
    <li>{{ item.street }}</li>
    <li>{{ item.city }}, {{ item.zipCode }}</li>
    <li>{{ item.country }}</li>
  </ul>
</template>

<script>
export default {
  name: 'wear-address-table',
  props: ['item']
}
</script>

<style>
ul {
  width: 250px;
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

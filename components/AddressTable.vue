<template>
  <ul>
    <li>Address: {{ item.street }}</li>
    <li>City: {{ item.city }}</li>
    <li>Zip: {{ item.zipCode }}</li>
    <li>State: {{ item.country }}</li>
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

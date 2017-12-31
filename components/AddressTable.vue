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
  width: 100%;
  display: inline-block;
  list-style-type: none;
  text-align: left
}
</style>

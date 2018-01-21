<template>
  <ul class="list-info">
    <li><span class="light-text">Street</span> <span class="bold-text">{{ item.street }}</span></li>
    <li><span class="light-text">City</span> <span class="bold-text">{{ item.city }}</span></li>
    <li><span class="light-text">Zip code</span> <span class="bold-text">{{ item.zipCode }}</span></li>
    <li><span class="light-text">Country</span> <span class="bold-text">{{ item.country }}</span></li>
  </ul>
</template>

<script>
export default {
  name: 'wear-address-table',
  props: ['item']
}
</script>

<style>
ul.list-info {
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 0;
}

span.light-text {
  font-size: 14px;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
  color: slategray;
}

span.bold-text {
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 15px;
}
</style>

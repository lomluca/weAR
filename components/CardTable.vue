<template>
  <ul class="list-info">
    <li><span class="light-text">Owner</span> <span class="bold-text">{{ item.owner }}</span></li>
    <li><span class="light-text">Number</span> <span class="bold-text">{{ item.cardNumber }}</span></li>
    <li><span class="light-text">Expiration</span> <span class="bold-text">{{ item.expirationDate }}</span></li>
  </ul>
</template>

<script>
export default {
  name: 'wear-card-table',
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

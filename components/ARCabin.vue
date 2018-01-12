<template>
<!-- IE versions < 11 do not support this feature -->
<div class="ar-container">
  <video autoplay="true" class="ar-element" id="ar-component">
  
  </video>
</div>
</template>

<script>
export default {
  name: 'wear-arcabin',
  props: [ 'item' ],
  data() {
    return {
    }
  },
  methods: {
    
  },
  // Request for webcam access as soon as the component is mounted
  mounted() {
    var video = document.querySelector("#ar-component");
     
    var constraints = { audio: false, video: true };

    var handleSuccess = function (stream) {  
        video.srcObject = stream;
    };

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
  }
}
</script>

<style>
.ar-container {

}

.ar-element {
  min-width: 100%; 
  min-height: 100%;
  width: 100%; 
  height: auto; 
  z-index: -100;
  background-size: cover;
  overflow: hidden;
}
</style>

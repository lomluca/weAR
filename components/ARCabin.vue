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

    /*navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      
    if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
    else {
      // The browser does not support HTML5 getUserMedia stuff
    }

    function handleVideo(stream) {
      video.src = window.URL.createObjectURL(stream);
    }
                
    function videoError(e) {
      // do something
    }*/
  }
}
</script>

</style>
.ar-container {
  width: 100%;
  height: 100%;
  border: 10px #333 solid;
}

.ar-element {
  width: 100%;
  height: 100%;
  background-color: #666;
}
</style>

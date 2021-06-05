<template>
	<div class="spin"></div>
</template>

<script>

export default {
    name: 'Loading',
}

</script>

<style scoped>
      .spin {
        height: 40px;
        width: 40px;
        border-radius: 15vh;
        border: 5px solid #00000000;
        animation: loading 2s linear infinite;
      }
      @keyframes loading {
        0%{
            border-top: 5px solid rgb(60, 181, 211);
            background: #0028aa20;
        }
        50%{
            border-top: 5px solid rgb(5, 62, 77);
            background: #2a005200;

        }
        100% {
            border-top: 5px solid rgb(60, 181, 211);
            background: #0028aa20;
            transform: rotate(360deg);
        }
      }

</style>

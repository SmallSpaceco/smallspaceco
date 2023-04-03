<script lang="ts">
import '@picocss/pico'
import Header from './Header.svelte';
import Footer from './Footer.svelte';
import '../app.css';
</script>

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Rubik:ital@0;1&display=swap" rel="stylesheet">
</head>

<main class="">
  <Header/>
  <slot />
  <Footer/>
</main>

<style>

</style>

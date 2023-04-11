<script lang='ts'>
  import { enhance, type SubmitFunction } from '$app/forms'
  import { page } from '$app/stores'
  import 'iconify-icon'
  import { fade } from 'svelte/transition' 

  //maak theme switchen smoother
  const submitUpdateTheme: SubmitFunction = ({ action }) => {
    const theme = action.searchParams.get('theme');

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  let isDarkTheme = false;
  function toggleTheme() {
    isDarkTheme = !isDarkTheme;
  }
</script>

<div class="px-5 shadow-lg z-10 relative">
  <nav class="">
    <ul>
      <!-- logo -->
      <li class="logo">
        <a href="/">
          <img src="/logolevel.png" alt="logo" class="w-auto sm:h-12 h-8">
        </a>
    </ul>
    <ul class="">
      <li class="hover:text-indigo-500">
        <a href="/ons_werk">Services</a>
      </li>
      <li class="hover:text-indigo-500">
        <a href="/over_ons">Over ons</a>
      </li>
      <li class="">
        <a href="/contact" role="button" class="buttongradient">Contact</a>
      </li>
      <ul class="sm:px-2">
      <li class="">
        <div class="flex items-center justify-center">
          <form class="translate-y-3" method="POST" use:enhance={submitUpdateTheme} on:submit|preventDefault={toggleTheme}>
            {#if isDarkTheme}
            <button class="darklight" formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}">
              <svg in:fade xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z"/></svg>
            </button>
          {:else}
              <button class="darklight" formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}">
                <svg in:fade xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M13 4.8c-4 0-4 14.4 0 14.4s9-2.7 9-7.2s-5-7.2-9-7.2m.1 12.4C12.7 16.8 12 15 12 12s.7-4.8 1.1-5.2C16 6.9 20 8.7 20 12c0 3.3-4 5.1-6.9 5.2M2 5h7.5c-.2.4-.5.8-.6 1.4c-.1.2-.1.4-.2.6H2V5m6 6H2V9h6.2c-.1.6-.1 1.3-.2 2m.7 6c.2.8.5 1.4.9 2H2.1v-2h6.6m-.5-2H2v-2h6c.1.7.1 1.4.2 2Z"/></svg>
              </button>
            {/if}
          </form>
        </li>
      </ul>
      </ul>
    </nav>
</div>

<style>
  .darklight{
    border: 0;
  }

  .buttongradient{
    background-image: linear-gradient(to right top, #574ae2, #a431c9, #cf04aa, #ea0088, #f61067);
    color: white;
    border : 0;
    border-radius: 10px;
    box-shadow: rgba(165, 54, 217, 0.1) 0px 0px 0px 6px, rgba(0, 0, 0, 0.25) 0px 2px 8px 0px; 
}

.buttongradient:hover{
    background-image: linear-gradient(to right top, #6b3cbc, #aa2bbb, #ca068c, #ea0085, #e30e60);
    box-shadow: rgba(165, 54, 217, 0.1) 0px 0px 0px 10px, rgba(0, 0, 0, 0.25) 0px 2px 8px 0px; 
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
}
</style>
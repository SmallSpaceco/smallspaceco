<script lang="ts">
  import { scale } from 'svelte/transition'
  import { onMount, onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  import Contact from '../Contact.svelte';
  import 'iconify-icon'
  let ready = false;
  onMount(() => ready = true);
  onDestroy(() => ready = false);

  //make foto div infinty scroll horizontally
  let images = ["/thomas_in_auto.webp", "/spiegel.gif", "/highfive_op_auto.webp", "/in_auto.gif", "/thomas_naast_auto.webp", "/naast_auto.gif"]
  let translateX = 0;
  let animationFrame: number;

  function animate() {
  const fotoElement = document.getElementById("foto");
  const firstImage = fotoElement?.children[0];
  const threshold = (firstImage?.clientWidth || 0) + (3 * parseInt(window.getComputedStyle(firstImage ?? document.createElement('div')).marginRight || "0"));

  if (translateX >= threshold) {
    translateX -= threshold;
    images = [...images.slice(1), images[0]]; // Move the first image to the end
  } else {
    translateX += 1;
  }

  if (fotoElement) {
    fotoElement.style.transform = `translateX(-${translateX}px)`;
  }

  // Schedule the next frame
  animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    // Start the animation
    animationFrame = requestAnimationFrame(animate);
  });

  onDestroy(() => {
    // Cancel the animation
    cancelAnimationFrame(animationFrame);
  });
</script>
<svelte:head>
    <title>Services - LevelMarketing</title> 
</svelte:head>
<!-- achtergrond -->
<div class="isolate overflow-hidden mb-0">
  <div class="mx-auto max-w-7xl px-6 pb-0 pt-8 text-center">
    <div class="relative">
      { #if ready}
      <svg in:scale={{ delay: 250, duration: 1000 }}  viewBox="0 0 1208 1024" class="absolute -top-10 left-1/2 -z-10 h-[48rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
          <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
        <defs>
          <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      {/if}
      
<!-- hero section -->
  <main class="">
    <div class="relative isolate">
      <svg class="absolute inset-x-0 top-0 -z-10 h-[48rem] w-full stroke-gray-400 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>

      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 lg:px-8 sm:pt-0 pt-12">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Hoe wij rijscholen helpen slagen.</h1>
              <p class="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">Door onze geavanceerde technologieën en data-analyse te combineren met onze creatieve benadering van marketing, kunnen we de meest effectieve strategieën ontwikkelen voor het vergroten van uw naamsbekendheid, het genereren van meer leads en het laten groeien van uw bedrijf. Het resultaat is een meetbare ROI en een aantoonbaar succes voor uw rijschool.</p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="/contact" class="buttongradient py-1.5 px-4">Begin direct</a>
                <a href="/over_ons" class="text-sm font-semibold leading-6">Onmoet LevelMarketing <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img src="/groei.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img src="/thomas_in_auto.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div class="relative">
                  <img src="/leerling_en_docent.webp" alt="" class="object-right aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
  </div>
</div>

<!-- fotos  -->
<div class="isolate overflow-hidden m-3">
  <div id="foto" class="flex gap-3" data-mouse-down-at="0" data-prev-percentage="0" style="min-width: calc((100% - 3rem) * {images.length});">
    { #each images as image}
    <img alt="social-media foto" class="image h-96 sm:w-auto w-80 object-cover rounded-xl shadow-md m-3 my-8" src="{image}" draggable="false">
    {/each}
  </div>
</div>

<!-- aanbod -->
<div class="pb-8 mt-10">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div>
        <h2 class="text-base font-semibold leading-7 text-[#574AE2]">Groei uw rijschool</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Ons aanbod</p>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Zet uw rijschool op de kaart met onze diensten. Wij zorgen ervoor dat uw rijschool opvalt en dat u meer klanten krijgt. Wij zorgen ervoor dat u meer klanten krijgt en dat u meer omzet maakt.
        </p>
      </div>
      <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Website op maat
          </dt>
          <dd class="mt-2">Volledig makkelijk navigeerbare website op maat voor een vast bedrag per maand, zonder opstartkosten.</dd>
        </div>

        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Social media
          </dt>
          <dd class="mt-2">Werf leerlingen op platformen waar ze actief zijn.</dd>
        </div>

        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Advertenties
          </dt>
          <dd class="mt-2">Wij bouwen Facebook, Google & TikTok campagnes met hoge conversies afgesteld op uw rijschool.</dd>
        </div>

        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Affliate programma
          </dt>
          <dd class="mt-2">Ontvang een bedrag voor het promoten van theoriescholen aan leerlingen.</dd>
        </div>

        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Op maat foto's en video's
          </dt>
          <dd class="mt-2">Val op tussen de concurrentie met eigen foto's en video's</dd>
        </div>

        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Rij-instructeurs werven
          </dt>
          <dd class="mt-2">Wilt u opschalen? Geen probleem, wij zoeken de ideale rij-instructeurs voor uw rijschool.</dd>
        </div>

        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Vast bedrag
          </dt>
          <dd class="mt-2">Geen plotselingen kosten, betaal een vast bedrag per maand. Maandelijks opzegbaar  </dd>
        </div>
        
        <div class="relative pl-9">
          <dt class="font-semibold  ">
            <svg class="absolute left-0 top-1 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          Leerlingen verzekeren
          </dt>
          <dd class="mt-2">Geen zorgen of je agenda vol komt. Wij regelen de leerlingen voor jouw.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<!-- tarieven -->
<div class="isolate overflow-hidden mb-0">
    <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-base font-semibold leading-7 text-[#574AE2]">Tarieven</h2>
        <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Marketing die past bij uw rijschool</h1>
      </div>
      <div class="relative mt-6">
        <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60"> Wij bieden een volledig pakket aan diensten aan voor een vast bedrag per maand. Zo weet u precies waar u aan toe bent en komt u niet voor verassingen te staan. </p>        
        { #if ready}
        <svg in:scale={{ delay: 250, duration: 1000 }}  viewBox="0 0 1208 1024" class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
            <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
          <defs>
            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        {/if}
      </div>
    </div>
    <div class="flow-root pb-24 sm:pb-32">
      <div class="-mt-80">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            <div class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
              <div>
                <h3 id="tier-hobby" class="text-base font-semibold leading-7 text-[#574AE2]">Website</h3>
                <div class="mt-4 flex items-baseline gap-x-2">
                  <span class="text-5xl font-bold tracking-tight text-gray-900">€145</span>
                  <span class="text-base font-semibold leading-7 text-gray-600">/maand</span>
                </div>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    Een op maat gemaakte website voor uw rijschool met maandelijks onderhoud, zonder opstartkosten. Prijs excl. BTW.
                </p>
                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Geschikt voor mobiel, tablet, laptop en desktop
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    24/7 ondersteuning & maandelijks onderhoud
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Vindbaar in Google (SEO)
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Meer leerlingen
                  </li>
                </ul>
              </div>
              <a href="#" aria-describedby="tier-hobby" class="mt-8 block rounded-md bg-[#574AE2] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Neem contact op</a>
            </div>
  
            <div class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
              <div>
                <h3 id="tier-team" class="text-base font-semibold leading-7 text-[#574AE2]">Website + marketing</h3>
                <div class="mt-4 flex items-baseline gap-x-2">
                  <span class="text-5xl font-bold tracking-tight text-gray-900">Custom</span>
                  <span class="text-base font-semibold leading-7 text-gray-600">/maand</span>
                </div>
                <p class="mt-6 text-base leading-7 text-gray-600">Volledig op maat pakket op basis van uw benodigheden.</p>
                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Kies zelf hoeveel leerlingen uw rijschool per maand nodig heeft.
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Social-media marketing (Facebook, Instagram, TikTok, Google)
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Op maat foto's & video's
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Op maat sales funnels
                  </li>
  
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    24/7 support
                  </li>
                </ul>
              </div>
              <a href="#" aria-describedby="tier-team" class="mt-8 block rounded-md bg-[#574AE2] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Neem contact op</a>
            </div>
  
            <div class="flex flex-col bg-white items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
              <div class="lg:min-w-0 lg:flex-1">
                <h3 class="text-lg font-semibold leading-8 tracking-tight text-[#574AE2]">Bel ons voor gratis advies</h3>
                <p class="mt-1 text-base leading-7 text-gray-600">Benieuwd wat wij kunnen betekenen voor uw rijschool en wat voor cijfers wij kunnen waar maken. Neem contact met ons op en neem de eerste stap naar een succesvolle rijschool.</p>
              </div>
              <a href="#" class="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-[#574AE2] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Bellen <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
 

  <Contact/>


<style>

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
}

#foto {
    transition: transform 0s linear;
  }

</style>

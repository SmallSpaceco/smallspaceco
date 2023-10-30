<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import { slide, fade } from 'svelte/transition';
import { inview } from 'svelte-inview';
import type { ObserverEventDetails } from 'svelte-inview';
import Contact from './Contact.svelte';
import { afterUpdate } from 'svelte';
import 'iconify-icon';

//animatie wanneer in beeld
let isInView: boolean;
let isInView2: boolean;
let isInView3: boolean;
const handleInView = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
};
const handleInView2 = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView2 = detail.inView;
};
const handleInView3 = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView3 = detail.inView;
};


//animatie the shape when scrolling
let y = 0;
let svgHeight: number;
const maxSvgHeight = 150;

// set the max height of the shape
$: svgHeight = Math.max(0, Math.min(y, maxSvgHeight));
$: svgHeight2 = Math.max(0,Math.min(y-700, maxSvgHeight));

//animatie scrollen door text
let greetings = ['Meer klanten', 'Meer winst', 'Meer tijd'];
let index = 0;
let roller: number;
	
	onMount(() => {
		roller = setInterval(() => {
			if (index === greetings.length - 1) index = 0;
			else index++;
		}, 1500);
	});
	
	onDestroy(() => {
		clearInterval(roller);
	});

</script>

<svelte:window bind:scrollY={y} />
<main>
<!-- Banner -->
<div class="relative isolate px-6 lg:px-6">
  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-2xl py-32 md:py-28">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-500/10 hover:ring-gray-500/20">
        Bekijk ons werk bij andere Schoonheidsklinieken <a href="/ons_werk" class="font-semibold text-[#cf04aa]"><span class="absolute inset-0" aria-hidden="true"></span>Meer lezen <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Jouw weg naar</h1>
      {#key index}
      <h2 transition:slide|local class="text-2xl font-bold tracking-tight sm:text-4xl pt-3">{greetings[index]}</h2>
      {/key}
      <p class="mt-6 text-lg leading-8 text-gray-500">Klaar om op te schalen? Plan een gratis persoonlijk gesprek!</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/contact" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 buttongradient">Begin vandaag</a>
        <a href="/over_ons" class="text-sm font-semibold leading-6 contrast">Ontmoet SmallSpace<span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
  <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
</div>

<!-- shape -->
<div class="custom-shape-divider-bottom-1679581777 pb-[-5px]">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" height={svgHeight}    >
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div>

<!-- content -->
<div class="bg-[#574AE2] pt-20 pb-20 relative">
    <!-- website plaatje en text -->
    <div class="flex flex-col md:flex-row ml-5 pr-0 py-8 rounded-l-lg">
        <div class="order-2 md:order-1 mx-5 rounded-lg">
          <h1 class="text-white text-3xl font-bold">Onze aanpak</h1>
          <p class="mt-3 text-white">Wil je als schoonheidskliniek jouw online aanwezigheid verbeteren en meer klanten aantrekken? Ons team van experts biedt website-ontwerp- en online marketingdiensten om jouw schoonheidskliniek te helpen groeien. 
            Wij ontwerpen een aantrekkelijke website met duidelijke informatie over behandelingen en prijzen, en zetten doelgerichte marketingcampagnes op om meer potentiële klanten aan te trekken. Ontdek hoe onze aanpak heeft gezorgd voor een significante toename in websiteverkeer en aanvragen voor behandelingsen in onze case study. </p>
          <p><a href="/ons_werk" role="button" class="bg-white text-black mt-8 w-48 font-bold">Meer informatie <span aria-hidden="true">→</span></a></p>
        </div>
        <img class="object-contain order-1 ml-auto md:order-2 md:w-2/4 w-2/3 md:mb-0 mb-5" src="/macbook.webp" alt="macbook">
      </div>
</div>

<!-- shape -->
<div class="custom-shape-divider-bottom-1679581777">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" height={svgHeight2}>
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
  </div>
  
<!-- tekst met kleur -->
<div class="py-8 mt-10 px-4 md:px-8 text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient">Geef jouw schoonheidskliniek een online boost met een professionele website</h1>
    <p class="text-lg md:text-xl text-white mx-[500px]">Haal meer uit jouw schoonheidskliniek met een website die jouw klanten aantrekt en behoudt. Investeer vandaag nog in een professionele website en zie jouw schoonheidskliniek groeien!</p>
</div>

<!-- cijfers -->
<div class="py-24 sm:py-32"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:inview_change={handleInView}
>


  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-500">Meer omzet</dt>
        {#if isInView}
        <dd in:fade="{{ duration: 2000 }}" class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">80%</dd>
        {/if}
      </div>

      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-500">Maandelikse views op social-media</dt>
        {#if isInView}
        <dd in:fade="{{ duration: 2000 }}" class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">700.000</dd>
        {/if}
      </div>

      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-500">Per week meer tijd voor behandelingsen</dt>
        {#if isInView}
        <dd in:fade="{{ duration: 2000 }}" class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">8 uur</dd>
        {/if}
      </div>
    </dl>
  </div>
</div>

<!-- Belang van marketing -->
<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-4"
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:inview_change={handleInView2}
      >
      { #if isInView2 }
        <div in:fade="{{ duration: 2000 }}" class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
          <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="/groei.jpg" alt="marketing">
          <div class="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
          <div class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#cf04aa] to-[#574AE2] opacity-40" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <figure class="relative isolate">
            <!-- quotes -->
            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20">
              <path id="0ef284b8-28c2-426e-9442-8655d393522e" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
              <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
            </svg>
            <!-- quote -->
            <blockquote class="mt-6 text-xl font-semibold leading-8 text-white border-[#574AE2]">
              <p class="text-white">“Het is niet de beste schoonheidskliniek die de meeste klanten heeft, het is de schoonheidskliniek die het beste weet hoe ze zichzelf kan verkopen.”</p>
            </blockquote>

            <!-- author -->
            <figcaption class="mt-6 text-sm leading-6 text-gray-300"><strong class="font-semibold text-white">Marketing Daan,</strong> B2B Marketing Specialist</figcaption>
          </figure>
        </div>
      {/if}
      </div>
      <div>
        <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
          <p class="text-base font-semibold leading-7 text-[#574AE2]">Waarom ben jij de juiste schoonheidskliniek?</p>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-[#cf04aa] sm:text-4xl">Het belang van marketing</h1>
          <div class="max-w-xl">
            <p class="mt-6">Als schoonheidskliniek is marketing onmisbaar om zichtbaar te zijn voor potentiële klanten. Het is de beste manier om uw schoonheidskliniek te onderscheiden van concurrenten en om uw merk te promoten.</p>
            <p class="mt-8">Ons marketingbureau voor schoonheidsklinieken biedt op maat gemaakte oplossingen om uw schoonheidskliniek te laten groeien. Van het ontwerpen van een aantrekkelijke website tot het opzetten van effectieve social media campagnes en advertenties, wij helpen u om meer klanten aan te trekken en uw schoonheidskliniek naar nieuwe hoogten te brengen.</p>
          </div>
      </div>
    </div>
  </div>
</div>

<div class="mx-5 mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
  <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
    <div class="flex flex-col">
      <dt class="text-base leading-7">
        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#574AE2]">
          <iconify-icon icon="uil:arrow-growth" style="color: white;" width="32" height="32"></iconify-icon>
        </div>
        <p class="text-xl font-bold leading-7 text-[#574AE2]">Meer omzet</p>
      </dt>
      <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 font-light">
        <p class="flex-auto">Meer klanten en tijd voor behandelingsen = meer omzet</p>
      </dd>
    </div>

    <!-- icons -->
    <div class="flex flex-col">
      <dt class="text-base font-semibold leading-7 ">
        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#574AE2]">
          <iconify-icon icon="material-symbols:shield" style="color: white;" width="32" height="32"></iconify-icon>
        </div>
        <p class="text-xl font-bold leading-7 text-[#574AE2]">Verzekerd klanten</p>
      </dt>
      <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p class="flex-auto">Altijd een volle agenda, zodat u kan focussen op de behandelingsen.</p>
      </dd>
    </div>

    <div class="flex flex-col">
      <dt class="text-base font-semibold leading-7 ">
        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#574AE2]">
          <iconify-icon icon="mdi:search-web" style="color: white;" width="32" height="32"></iconify-icon>
        </div>
        <p class="text-xl font-bold leading-7 text-[#574AE2]">Jouw schoonheidskliniek zichtbaar</p>
      </dt>
      <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p class="flex-auto">Wordt vindbaar wanneer een klant intresse heeft.</p>
      </dd>
    </div>
  </dl>
</div>
</div>


<!-- scroll -->
<div class="relative isolate overflow-hidden px-4 py-16 sm:py-24 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
    </div>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-[#574AE2]">Verhoog uw betrouwbaarheid</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-[#cf04aa] sm:text-4xl">Website op maat</h1>
            <p class="mt-6 text-xl leading-8 text-gray-500">Ons team bouwt een website op maat die past bij uw schoonheidskliniek.</p>
          </div>
        </div>
      </div>
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:inview_change={handleInView3}
      >
      { #if isInView3 }
        <img in:fade="{{ duration: 2000 }}" class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/foto.webp" alt="">
      { /if }
      </div>
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-500 lg:max-w-lg">
            <p>Wij zorgen ervoor dat u boven aan op Google te vinden bent, uw website makkelijk te navigeren is en klanten zich sneller aanmelden.</p>
            <ul class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <svg class="mt-1 h-5 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                <span><strong class="font-semibold text-gray-500">Maandelijks onderhoud.</strong> Een goede website veranderd altijd, wij zorgen dat uw website up-to-date blijft.</span>
              </li>
              <li class="flex gap-x-3">
                <svg class="mt-1 h-5 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                <span><strong class="font-semibold text-gray-500">SSL certificates.</strong> Versleutel uw data voor hackers.</span>
              </li>
              <li class="flex gap-x-3">
                <svg class="mt-1 h-5 w-5 flex-none text-[#574AE2]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                <span><strong class="font-semibold text-gray-500">Geschikt voor elk platform.</strong> Een website geschikt voor mobiel, tablet en desktop.</span>
              </li>
            </ul>
            <p class="mt-8">Een professionele website is van essentieel belang voor schoonheidsklinieken om nieuwe klanten aan te trekken en hun bedrijf te laten groeien. Het vergroot de zichtbaarheid, versterkt de reputatie en bouwt vertrouwen op bij potentiële klanten. Door te investeren in een goed ontworpen website, kunt u het aantal leads verhogen en uw schoonheidskliniek laten groeien.</p>
            <h2 class="mt-16 text-2xl font-bold tracking-tight text-[#574AE2]">Geen geld voor een website? Geen probleem.</h2>
            <p class="mt-6">Investeer in een nieuwe website voor uw schoonheidskliniek en betaal in 2 jaar maandelijks af. Zo spreidt u de kosten en behoudt u uw cashflow. Het is een slimme en toegankelijke manier om te investeren in de groei van uw schoonheidskliniek.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- center a button -->
<div class="flex justify-center mb-10">
    <a href="/ons_werk" role="button" class="bg-white text-black mt-2 w-48 font-bold">Ons werk bekijken</a>
</div>
<Contact/>
</main>

<style>
.custom-shape-divider-bottom-1679581777 {
    position: relative;
    margin-top: -1px;
    overflow: hidden;
}

/* make heigth of the shape based on the scroll position */
.custom-shape-divider-bottom-1679581777 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
}

.shape-fill{
    fill: #574AE2;
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
}

.gradient{
    background-image: linear-gradient(to right top, #574ae2, #a431c9, #cf04aa, #ea0088, #f61067);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>

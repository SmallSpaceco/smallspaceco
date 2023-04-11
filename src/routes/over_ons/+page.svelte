<script lang="ts">
  import { page } from '$app/stores'
  import { onMount, afterUpdate } from 'svelte'
  import Contact from '../Contact.svelte';
</script>

  <!-- Hero section -->
  <div class="relative isolate -z-10 overflow-hidden">
    <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 class="max-w-2xl text-4xl font-bold tracking-tight text-[#cf04aa] sm:text-6xl lg:col-span-2 xl:col-auto">Door de impact van doeltreffende content ondersteunen wij jou bij het realiseren van jouw marketingdoelen.</h1>
        <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p class="text-lg leading-8">LevelMarketing versterkt jouw onderneming met effectieve content en innovatieve marketingstrategieën. Met een persoonlijke, resultaatgerichte aanpak vertellen we jouw unieke verhaal.</p>
        </div>
        <img src="/thomas_naast_auto.webp" alt="" class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
      </div>
    </div>
  </div>

<!-- over ons -->
<div class=" py-24 md:py-32">
  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
    <div class="max-w-2xl xl:col-span-2">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl  text-[#574AE2]">Over ons team</h2>
      <p class="mt-6 text-lg leading-8">Wij zijn een jong en gepassioneerd team van drie professionals met een missie om rijscholen te helpen groeien en hun doelen te bereiken. Ons bureau richt zich op het ontwikkelen van op maat gemaakte marketingoplossingen voor rijscholen die gericht zijn op het maximaliseren van merkgroei en het aantrekken van nieuwe leerlingen. We geloven dat succesvolle marketing begint met het begrijpen van onze klanten en hun unieke behoeften en doelstellingen, en ons team werkt nauw samen met onze klanten om oplossingen op maat te bieden die werken.</p>
    </div>
    <ul class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
      <li class="flex flex-col gap-10 pt-12 sm:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-scale-down" src="/tino.png" alt="">
        <div class="max-w-xl flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-[#574AE2]">Valentino Kuldipsingh</h3>
          <p class="text-base leading-7">Projectmanager / Communicatie</p>
          <p class="mt-6 text-base leading-7">Als marketingbureau voor rijscholen streven we ernaar onze klanten te helpen opvallen in een drukke markt en hun rijscholen te transformeren tot succesvolle topmerken. Onze ondertitel weerspiegelt deze ambitie en ons vermogen om onze klanten te helpen het verschil te maken.</p>
        </div>
      </li>
      <li class="flex flex-col gap-10 pt-12 sm:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-scale-down" src="/daan.png" alt="">
        <div class="max-w-xl flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-[#574AE2]">Daan Zeemeijer</h3>
          <p class="text-base leading-7">Marketing strateeg / Communicatie</p>
          <p class="mt-6 text-base leading-7"> Door gebruik te maken van data-gestuurde benaderingen en gepersonaliseerde campagnes, kunnen we rijscholen helpen om hun doelen te bereiken en te groeien in de markt van rijopleidingen.</p>
        </div>
      </li>
      <li class="flex flex-col gap-10 pt-12 sm:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-scale-down" src="/chriss.png" alt="">
        <div class="max-w-xl flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-[#574AE2]">Chris Prosman</h3>
          <p class="text-base leading-7">Full stack web developer / Videograaf</p>
          <p class="mt-6 text-base leading-7"> Wij hebben een diepgaande kennis van zowel de technische als visuele aspecten van webontwikkeling, en zijn in staat om websites te bouwen en deze te versterken met hoogwaardige videoproducties.</p>
        </div>
      </li>
      
    </ul>
  </div>
</div>

<!-- contact -->
<Contact/>
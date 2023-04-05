<script lang="ts">
    import { scale } from 'svelte/transition'
    import { onMount, onDestroy } from 'svelte';
    import Contact from '../Contact.svelte';
    import 'iconify-icon'
    let ready = false;
    onMount(() => ready = true);
    onDestroy(() => ready = false);
</script>

<div class="isolate overflow-hidden mb-0">
    <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-base font-semibold leading-7 text-[#574AE2]">Tarieven</h2>
        <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Marketing die past bij uw rijschool</h1>
      </div>
      <div class="relative mt-6">
        <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</p>        
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
  
  <div class="pb-8">
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

  <Contact/>


<style>
</style>

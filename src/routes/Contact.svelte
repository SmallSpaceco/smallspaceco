<script lang='ts'>
  import { page } from '$app/stores'
  import 'iconify-icon';
</script>

<!-- laten we praten -->
<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-xl lg:max-w-4xl">
      <h2 class="text-4xl font-bold tracking-tight">Vrijblijvend advies over uw rijschool</h2>
      <p class="mt-2 text-lg leading-8 text-gray-500">Een gesprek met tips voor uw rijschool zonder kosten.</p>
      <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form action="#" method="POST" class="lg:flex-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6">Voornaam</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6">Achternaam</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="budget" class="block text-sm font-semibold leading-6">Rijschool naam</label>
              <div class="mt-2.5">
                <input id="budget" name="budget" type="text" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="website" class="block text-sm font-semibold leading-6">Telefoonnummer</label>
              <div class="mt-2.5">
                <input type="url" name="website" id="website" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6">Opmerking</label>
              <div class="mt-2.5">
                <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm buttongradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Laten we praten!</button>
          </div>
          <div>
            <!-- bellen is sneller -->
            <div class="mt-6 text-sm text-center text-gray-500">
                <h1 class="text-xl mt-5">Bellen is nog sneller</h1>
              <p>24/7 bereikbaar: <a href="tel:0612345678" class="text-indigo-600 hover:text-indigo-500">+31 6 123 45 678</a></p>
          </div>
        </form>
        <div class="lg:mt-6 lg:w-80 lg:flex-none">
          <div>
            <h1 class="text-lg">Contact</h1>
            <div class="align-middle flex mt-1">
              <iconify-icon class="mr-2" icon="material-symbols:mail-outline-rounded" style="color: white;" width="32" height="32"></iconify-icon>
              <h2>Info@levelmarketing.nl</h2>
            </div>
            <div class="align-middle flex mt-3">
              <iconify-icon class="mr-2" icon="mdi:telephone" style="color: white;" width="32" height="32"></iconify-icon>
              <h2>+31 642339204</h2>
            </div>
          </div>
          <figure class="mt-10">
            <blockquote class="text-lg font-semibold leading-8 text-gray-900">
              <p>“Als je niet gevonden wordt op het internet, besta je niet.”</p>
            </blockquote>
            <figcaption class="mt-10 flex gap-x-6">
              <img src="static/tino.png" alt="" class="h-12 w-12 flex-none rounded-full bg-gray-50">
              <div>
                <div class="text-base font-semibold">Valentino Kuldipsingh</div>
                <div class="text-sm leading-6 text-gray-600">Projectmanager / Communicatie</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
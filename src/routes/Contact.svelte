<script lang='ts'>
  import { page } from '$app/stores'
  import 'iconify-icon';
  let succes = '';
  let foutmelding = '';


  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify({
        attributes: {
          FIRSTNAME: event.target.FIRSTNAME.value,
          LASTNAME: event.target.LASTNAME.value,
          SMS: event.target.SMS.value,
          RIJSCHOOL: event.target.RIJSCHOOL.value,
        },
        listIds: [5],
        updateEnabled: false,
        email: event.target.EMAIL.value
      })
    };

    const response = await fetch('https://api.sendinblue.com/v3/contacts', options);
    const data = await response.json();

    if (response.ok) {
    // API-aanroep geslaagd
    foutmelding = '';
    succes = '🥳 Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.';
  } else {
    // API-aanroep mislukt
    foutmelding = "Foutmelding: " + data.message;
    succes = '';
  }

  };

</script>

<!-- laten we praten -->
<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-xl lg:max-w-4xl">
      <h2 class="text-4xl font-bold tracking-tight">Vrijblijvend advies over uw rijschool</h2>
      <p class="mt-2 text-lg leading-8 text-gray-500">Een gesprek met tips voor uw rijschool zonder kosten.</p>
      <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form on:submit={handleSubmit} class="lg:flex-auto" autocomplete="on" id="sib-form" method="POST" action="https://fd40632e.sibforms.com/serve/MUIEALGteEaDVAxCcXMijG66ZdhxxSEVRIhqMXG_qrY3aMMSENJRQqu1gogO8rDJIGiHhtE7ENfx9_i-aQhAAyUKdFsM0E9lx5KweqCMMVTCLqdBUF1W1HQqztH-g0RLxUqt52rqEL031rEa1lh8ft061_tZKvUmX76m2hjNrbjXmVzvTCN5-CKHIA6-IqxBZ4_LOz9sIMG-FArO" data-type="subscription">
          <div class="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            <div>
              <label for="FIRSTNAME" data-required="*" class="block text-sm font-semibold leading-6">Voornaam</label>
              <div class="mt-2.5">
                <input type="text" id="FIRSTNAME" placeholder="Jan" data-required="true" required name="FIRSTNAME" autocomplete="given-name" class="placeholder:text-gray-500 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="LASTNAME" class="block text-sm font-semibold leading-6">Achternaam</label>
              <div class="mt-2.5">
                <input type="text" name="LASTNAME" id="LASTNAME" placeholder="Jansen" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="RIJSCHOOL" class="block text-sm font-semibold leading-6" data-required="*">Rijschool naam</label>
              <div class="mt-2.5">
                <input id="RIJSCHOOL" name="RIJSCHOOL" type="text" placeholder="Uw Rijschool naam" data-required="true" required class="placeholder:text-gray-500 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="SMS" class="block text-sm font-semibold leading-6">Telefoonnummer</label>
              <div class="mt-2.5">
                <input type="tel" name="SMS" id="SMS" placeholder="0612345678" data-required="true" required class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="EMAIL" class="block text-sm font-semibold leading-6" data-required="*">E-mail</label>
              <div class="mt-2.5">
                <input id="EMAIL" name="EMAIL" type="text" placeholder="voorbeeld@email.nl" data-required="true" required class="placeholder:text-gray-500 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <input type="checkbox" class="mr-3" value="1" id="OPT_IN" name="OPT_IN" />
            <div>
              <p>Ik ga akkoord om informatieve e-mails te ontvangen en ik accepteer de privacyverklaring.</p>
              <p class="text-xs mt-1.5">U kunt zich te allen tijde uitschrijven via de link in onze e-mails.</p>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit" form="sib-form" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm buttongradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Laten we praten!</button>
          </div>
          <p class="text-center mt-3 text-md text-indigo-700">{succes}</p>
          <p class="text-center mt-3 text-md text-red-600">{foutmelding}</p>
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
              <img src="/tino.png" alt="" class="h-12 w-12 flex-none rounded-full bg-gray-50">
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
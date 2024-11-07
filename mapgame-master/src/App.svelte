<script lang="ts">
   //@ts-nocheck
   import { onMount } from "svelte";
 
   let ol = {};
   let selc = "";
   let selectedCountry = ""; // A kiválasztott ország neve megjelenítésre
 
   const africanCountries = [
   "Algeria",
   "Angola",
   "Benin",
   "Botswana",
   "Burkina Faso",
   "Burundi",
   "Cape Verde",
   "Cameroon",
   "Central African Republic",
   "Chad",
   "Comoros",
   "Republic of Congo", // SVG-ben szereplő név
   "Djibouti",
   "Democratic Republic of Congo",
   "democratic of the congo",
   "Egypt",
   "Equatorial Guinea",
   "Eritrea",
   "Eswatini", // SVG név
   "Ethiopia",
   "Gabon",
   "Gambia",
   "Ghana",
   "Guinea",
   "Guinea-Bissau",
   "Côte d'Ivoire", // SVG név
   "Kenya",
   "Lesotho",
   "Liberia",
   "Libya",
   "Madagascar",
   "Malawi",
   "Mali",
   "Mauritania",
   "Mauritius",
   "Morocco",
   "Mozambique",
   "Namibia",
   "Niger",
   "Nigeria",
   "Rwanda",
   "Sao Tome and Principe",
   "Senegal",
   "Seychelles",
   "Sierra Leone",
   "Somalia",
   "South Africa",
   "South Sudan",
   "Sudan",
   "Swaziland",
   "Tanzania",
   "Togo",
   "Tunisia",
   "Uganda",
   "Zambia",
   "Zimbabwe",
   "Western Sahara"
];

    

onMount(async () => {
      let parser = new DOMParser();
      let text:any = await fetch("worldmap.svg");
      text = await text.text();
      let xmlDoc = parser.parseFromString(text, "text/xml");

      let paths = xmlDoc.getElementsByTagName("svg")[0].children;
      for (let i = 0; i < paths.length; i++) {
         let countryTitle = paths[i].getAttribute("title");
         if (africanCountries.includes(countryTitle)) {
            ol[countryTitle] = paths[i].getAttribute("d");
         }
      }
   });

   function handleCountryClick(countryName) {
      selectedCountry = countryName;
      selc = countryName; // Az ország kiemeléséhez
   }
</script>

<main>
   <svg viewBox="0 0 1009.6727 665.96301">
      {#each Object.entries(ol) as [t, d]}
         <path
            d={d}
            title={t}
            fill={selc == t ? "#e73121" : "rgb(255,215,0)"}
            stroke-width={selc == t ? "0.5" : "0.02"}
            stroke={selc == t ? "rgb(155,200,230)" : "black"}
            on:click={() => handleCountryClick(t)}  
         ></path>
      {/each}
   </svg>

   <!-- Kiválasztott ország megjelenítése -->
   <p> A kiválasztott ország: {selectedCountry}</p>
</main>

<style>
   svg {
      width: 100%;
      position: absolute;
      left: 0px;
      top: 100px;
   }
   p {
      font-size: 18px;
      position: fixed;
      top: 70px;
      left: 20px;
      font-family: Arial, sans-serif;
      color: #cc1218;
   }
</style>
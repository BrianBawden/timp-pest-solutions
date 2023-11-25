
let geocoder;
let map;
const pageMap = document.querySelector("#map");
const form = document.querySelector('#address');


function codeAddress(address) {
  const street = address["userStreet"];
  const city = address["userCity"];
  const state = address["userState"];

  geocoder.geocode({ 'address': `${street}, ${city}, ${state}`}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else{
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  let mapOptions = {
    zoom: 15,
  }
  map = new google.maps.Map(pageMap, mapOptions)
  console.log(address['userStreet']);
}


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  geocoder = new google.maps.Geocoder();
  
  map = new Map(document.getElementById("map"), {
    center: { lat: 39.8283, lng: -98.5795 },
    zoom: 3,
  });
}


(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
({key: "AIzaSyAcfQ1B0JMMJW81EWCeUhmr3QrIEHe-qdw", v: "weekly"});


form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let address = {}
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    address[key] = value;
  }
  codeAddress(address);
})


initMap()
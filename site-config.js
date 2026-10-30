/* ===================== Frontline in Ukraine: SITE SETTINGS =====================
   Your site's own settings. Keep this file next to index.html on your website.
   Updates to the app only replace index.html, so whatever you put here stays.
   Leave a value empty ('' or null) to switch that feature off. The README explains each step. */
window.FA_SITE = {
  // Firebase web config: turns on publishing, share links, embeds and live editing.
  // Paste the firebaseConfig object from Firebase (Project settings → Your apps → Web), e.g.
  // firebase: { apiKey: "AIza...", authDomain: "...firebaseapp.com", databaseURL: "https://...firebasedatabase.app", projectId: "...", appId: "1:...:web:..." },
  firebase: {
     apiKey: "AIzaSyBxbHXc4VMVmLx2GX4UL55XVeOIp0K3--s",
    authDomain: "andreevka-map.firebaseapp.com",
    databaseURL: "https://andreevka-map-default-rtdb.firebaseio.com",
    projectId: "andreevka-map",
    storageBucket: "andreevka-map.firebasestorage.app",
    messagingSenderId: "442405426413",
    appId: "1:442405426413:web:f604480fe7215707c128e4",
    measurementId: "G-E23S6605HR"
  },

  // Google API key for Google satellite, offered to every visitor (restrict it to your site's address).
  googleKey: '',
  googleRegion: 'UA',            // whose view Google uses for disputed borders

  // NASA FIRMS fire detections. With the fire helper (firms-worker.js on Cloudflare), put its address
  // in firmsProxy and set firmsKey to '' so the key isn't in the page.
  firmsProxy: '',
  firmsKey: '2c0d2ee7716d45fd806d4a7e029fe295',

  // Live links to Google My Maps (mymaps-worker.js on Cloudflare).
  mymapsProxy: '',
  mymapsRefreshMinutes: 10,

  viewerRefreshMinutes: 2,       // how often people viewing a shared map get new changes
  defaultBase: 'esri',           // first basemap: esri, wayback, google, s2, cdse, street, esridark, topo, esritopo
  liveMapUrl: ''                 // where the "Live frontline map" button goes ('' = the open shared map, or the last one published)
};

// V22: network-first while stadium themes and mesh-wall physics are verified.
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async()=>{
  for(const key of await caches.keys()) await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request, {cache:'no-store'}).catch(()=>new Response(
    'Offline unavailable during Rocket Arena V22 verification',
    {status:503, headers:{'Content-Type':'text/plain'}}
  )));
});

// V8 deliberately avoids caching while collision fixes are being tested.
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request, {cache:'no-store'}).catch(()=>new Response('Offline unavailable during V8 testing',{status:503}))) });

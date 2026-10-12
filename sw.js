'use strict';

// 설치용 서비스 워커입니다. 앱/데이터를 CacheStorage에 저장하지 않습니다.
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

// 요청은 그대로 네트워크에 전달합니다. 인증/쿠키/저장 데이터는 변경하지 않습니다.
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request));
});

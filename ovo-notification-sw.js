self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', (event) => {
  event.notification?.close?.();
  event.waitUntil((async () => {
    try {
      const allClients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of allClients) {
        if (client && typeof client.focus === 'function') {
          try {
            await client.focus();
            return;
          } catch (_) {}
        }
      }
      try {
        await self.clients.openWindow('./');
      } catch (_) {}
    } catch (_) {}
  })());
});

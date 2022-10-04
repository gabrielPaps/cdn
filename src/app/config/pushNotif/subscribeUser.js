const PUBLIC_VAPID_KEYS = 'BAlpO4K2eP-ChIXT10QFWa6K9dWO9zM9xaV_PnruStHTlYSg8bEK36m2Zljy44OCJa_bZjvdcMJHGIong8HNKB0'

export default async function subscribeUserToPush() {
    return navigator.serviceWorker
      .register('/sw.js')
      .then(function (registration) {
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            PUBLIC_VAPID_KEYS,
          ),
        };
  
        return registration.pushManager.subscribe(subscribeOptions);
      })
      .then(function (pushSubscription) {
        console.log(
          'Received PushSubscription: ',
          JSON.stringify(pushSubscription),
        );
        return pushSubscription;
      });
  }
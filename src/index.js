'use strict'

import askPermission from './app/config/pushNotif/askPermission.js'


askPermission()
const PUBLIC_VAPID_KEYS = 'BAlpO4K2eP-ChIXT10QFWa6K9dWO9zM9xaV_PnruStHTlYSg8bEK36m2Zljy44OCJa_bZjvdcMJHGIong8HNKB0'


const subscription = async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register("/sw.js"), {
      scope: '/'
    };
  }

  // const userSubscription = await register.pushManager.subscribe({
  //   userVisibleOnly: true,
  //   applicationServerKey: PUBLIC_VAPID_KEYS
  // })

  await fetch('/subscription', {
    method: 'POST',
    // body: JSON.stringify(userSubscription),
    headers: {
      "Content-Type": "application/json"
    }
  })
}

subscription()
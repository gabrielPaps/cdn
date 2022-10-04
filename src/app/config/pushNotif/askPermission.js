export default async function askPermission() {
    const permissionResult_1 = await new Promise(function (resolve, reject) {
        const permissionResult = Notification.requestPermission(function (result) {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    });
    if (permissionResult_1 !== 'granted') {
        throw new Error("We weren't granted permission.");
    }
  }
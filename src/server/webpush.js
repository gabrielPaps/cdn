const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto: carusogabriel9@gmail.com',
    process.env.PUBLIC_VAPID_KEYS,
    process.env.PRIVATE_VAPID_KEYS
)

module.exports = webpush
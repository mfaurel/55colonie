const resource = [ /* --- CSS --- */ '/55colonie/assets/css/style.css', /* --- JavaScripts --- */ '/55colonie/assets/js/dist/home.min.js', '/55colonie/assets/js/dist/page.min.js', '/55colonie/assets/js/dist/post.min.js', '/55colonie/assets/js/dist/categories.min.js', '/55colonie/assets/js/data/search.json', '/55colonie/app.js', '/55colonie/sw.js', /* --- HTML --- */ '/55colonie/index.html', '/55colonie/404.html', '/55colonie/categories/', '/55colonie/tags/', '/55colonie/archives/', '/55colonie/about/', /* --- Favicons --- */ '/55colonie/assets/img/favicons/android-chrome-192x192.png', '/55colonie/assets/img/favicons/android-chrome-512x512.png', '/55colonie/assets/img/favicons/apple-touch-icon.png', '/55colonie/assets/img/favicons/favicon-16x16.png', '/55colonie/assets/img/favicons/favicon-32x32.png', '/55colonie/assets/img/favicons/favicon.ico', '/55colonie/assets/img/favicons/mstile-150x150.png', '/55colonie/assets/img/favicons/site.webmanifest', '/55colonie/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'mfaurel.github.io/55colonie', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
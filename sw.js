const nombreCache = 'apv-v1';
const archivos = [
    './',
    './index.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'

]

//Cuando se instala el service wolker

self.addEventListener('install', e => {

    console.log('Instalado el service Worker')

    e.waitUntil(
        caches.open(nombreCache)
           .then( cache => {
               console.log('cacheando');
               cache.addAll(archivos)
           })
    )
});

//Altivar el service wolker



self.addEventListener('activate', e => {

    console.log('Service Worker activado')

    console.log(e);
});


//Evento fetch para descargar archivos estaticos 

self.addEventListener('fetch', e => {

    console.log('Fecht...', e);

    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache
        })
    )
})



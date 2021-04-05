// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firestore:{
    apiKey: "AIzaSyDkYa7_nWdp-4bymdOWo0acjWZvEThMjrk",
    authDomain: "prueba-angular-cb4eb.firebaseapp.com",
    projectId: "prueba-angular-cb4eb",
    storageBucket: "prueba-angular-cb4eb.appspot.com",
    messagingSenderId: "443638195830",
    appId: "1:443638195830:web:4dfbc69ca99b86fa5ae157",
    measurementId: "G-FJG88VJBB1"
  },
  URL_BASE: "index.php/ws/",
  URL_ENDPOINT_ALL: "getLocales",
  URL_ENDPOINT_TURNO: "getLocalesTurnos"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

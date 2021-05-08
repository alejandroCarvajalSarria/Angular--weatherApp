// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiOpenWeather:"https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",
  apiKeyOpenWeather: "112276c68784e8c5396cc01eb6f6105c"
};

// http://api.openweathermap.org/data/2.5/weather?q=Bogota,co&units=metric&appid=112276c68784e8c5396cc01eb6f6105c

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

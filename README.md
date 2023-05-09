About Project
We simultaneously implement and learn about React.js, Material UI and using API’s. The project uses 3 API’s to show the nearby hotels, restaurants and attractions. The application launches with the geolocation of the user (provided, location access is granted to the Browser.) There are filters, such as Ratings [All, 2.0+, 3.0+, 4.0+] and Type of search parameter [Hotels, Restaurants and Attractions] to refine and present the results accordingly. User can also pinch and zoom the Map and results will be populated as defined by the filter criteria set. User can view the details of the restaurants and hotels on the DetailCard present on the page, and a link is provided too such that the TripAdvisor page of the restaurant or hotel can be visited. Lastly, there is a search field on the Navigation bar, which allows the user to search for places on the entire Earth. This is using the Places API to fetch the various places on Earth.

The code in the repository, if being used, needs to be modified such that Weather API keys are added in the index.js file under api folder, and the Google Maps API keys are added under the index.html file under public folder. Also, Travel Advisor API keys will be required.

Resources that I used:
API Service by https://openweathermap.org/ to fetch Weather Data, I was able to fetch the weather data, but was unable to populate the weather icons on the webpage.
API Service by RapidAPI – Travel Advisor API https://rapidapi.com/apidojo/api/travel-advisor/
API Service by Google Maps JavaScript API https://console.cloud.google.com/

Places API

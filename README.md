<h1 align="center">Weather App</h1>
<h3 align="center">A full stack weather app based on <a href="https://developer.accuweather.com/apis">AccuWeather API</a></h3>

<h2>Built with:</h2>

**Client:**
*   React.js + Vite

**Server:**
*   Node.js + Express

**Database:**
*   MySQL

<h2>Installation Steps:</h2>

1. **Install dependencies**
    * From the '**_client_**' directory, run `npm install`
    * From the '**_server_**' directory, also run `npm install`
2. **Add environment variables**
    * In the '**_server_**' directory you will find a '**_.env.example_**' file,  
      create a copy of that file in the same directory and name it '**_.env_**'

<h2>Configurations:</h2>

#### Database  
In the **_root_** directory you will find a '**_schema.sql_**' file,
this file contains the SQL commands for creating a database called '**_weather_app_**',  
along with tables called '**_cities_weather_**' and '**_favorite_cities_**'.  

**'cities_weather' table:**  
<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Primary Key</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>city_key</td>
    <td>varchar</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>name</td>
    <td>varchar</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>temperature</td>
    <td>float</td>
    <td>❌</td>
  </tr>
</tbody>
</table>

**'favorite_cities' table:**  
<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Primary Key</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>user_id</td>
    <td>varchar</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>city_key</td>
    <td>varchar</td>
    <td>✅</td>
  </tr>
</tbody>
</table>

<h2>Before starting:</h2>  

1. **Choose app environment**  
   In the **_.env_** file you can choose the environment mode (development / production).
   *  `NODE_ENV=development`  
         Will tell the server to use dummy data (stored in the server directory) instead of fetching data from <a href="https://developer.accuweather.com/apis">AccuWeather API</a>
   *  `NODE_ENV=production`
         Will tell the server to use data fetched from <a href="https://developer.accuweather.com/apis">AccuWeather API</a>
2. **Start the application**  
   To start the entire application (client and server),  
   go to the '**_server_**' directory and run `npm run dev`.  

<h2>USAGE:</h2>  

1. **Open the browser on <a href="http://localhost:5173/">http://localhost:5173/</a>**  

   <img width="1000" alt="image" src="https://github.com/adilev7/Adi-Lev-14-01-2024-FullStack/assets/71292432/d8bbe499-de47-4d79-9a15-108ab9cfb28c">  
   
   **Any user that enters the app for the first time receives a '_User ID_' from the server, the ID is saved in the browser's local storage for later use**.  

2. **Type a name of a city**  
   This should give you a list of cities to choose from via the <a href="https://developer.accuweather.com/apis">AccuWeather API</a>.

3. **Choose a city**
   This should look for the city's weather data in database,  
   if not found, it will fetch the data from <a href="https://developer.accuweather.com/apis">AccuWeather API</a> and add it to the database.  
   
4. **Add to favorites**
   Mark a city as favorite by clicking on the star icon,  
   this will add the city's data to the '**_favorite_cities_**' database table,
   along with the **_User ID_** that was saved in the browser's local storage when the user first visited the app.  

   <img width="1000" alt="image" src="https://github.com/adilev7/Adi-Lev-14-01-2024-FullStack/assets/71292432/a19ef94f-98df-4c14-826c-3e4f731b7be6">  

5. **Navigate to 'favorites' page**  
   There you will see all of your favorite cities' weather data.

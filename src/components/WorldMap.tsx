import { useState, useEffect } from 'react';

interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

// Comprehensive list of customer cities with coordinates
const customerCities: City[] = [
  // North America - USA
  { name: "New York", country: "USA", lat: 40.7128, lng: -74.0060 },
  { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437 },
  { name: "Las Vegas", country: "USA", lat: 36.1699, lng: -115.1398 },
  { name: "Miami", country: "USA", lat: 25.7617, lng: -80.1918 },
  { name: "Houston", country: "USA", lat: 29.7604, lng: -95.3698 },
  { name: "Chicago", country: "USA", lat: 41.8781, lng: -87.6298 },
  { name: "Denver", country: "USA", lat: 39.7392, lng: -104.9903 },
  { name: "Seattle", country: "USA", lat: 47.6062, lng: -122.3321 },
  { name: "Atlanta", country: "USA", lat: 33.7490, lng: -84.3880 },
  { name: "Dallas", country: "USA", lat: 32.7767, lng: -96.7970 },
  { name: "Philadelphia", country: "USA", lat: 39.9526, lng: -75.1652 },
  { name: "Phoenix", country: "USA", lat: 33.4484, lng: -112.0740 },
  { name: "San Antonio", country: "USA", lat: 29.4241, lng: -98.4936 },
  { name: "San Diego", country: "USA", lat: 32.7157, lng: -117.1611 },
  { name: "Sacramento", country: "USA", lat: 38.5816, lng: -121.4944 },
  { name: "Portland", country: "USA", lat: 45.5152, lng: -122.6784 },
  { name: "Minneapolis", country: "USA", lat: 44.9778, lng: -93.2650 },
  { name: "Detroit", country: "USA", lat: 42.3314, lng: -83.0458 },
  { name: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  { name: "Nashville", country: "USA", lat: 36.1627, lng: -86.7816 },
  { name: "Oklahoma City", country: "USA", lat: 35.4676, lng: -97.5164 },
  { name: "Cleveland", country: "USA", lat: 41.4993, lng: -81.6944 },
  { name: "Tampa", country: "USA", lat: 27.9506, lng: -82.4572 },
  { name: "Orlando", country: "USA", lat: 28.5383, lng: -81.3792 },
  { name: "Spokane", country: "USA", lat: 47.6587, lng: -117.4260 },
  { name: "Brick", country: "USA", lat: 40.0573, lng: -74.1357 },
  { name: "Farmington Hills", country: "USA", lat: 42.4989, lng: -83.3677 },
  { name: "Bon Aqua", country: "USA", lat: 35.9562, lng: -87.3200 },
  { name: "Unionville", country: "USA", lat: 39.5245, lng: -86.4453 },
  { name: "Elizabethville", country: "USA", lat: 40.4587, lng: -76.8119 },
  { name: "Olalla", country: "USA", lat: 47.3940, lng: -122.5354 },
  { name: "La Mirada", country: "USA", lat: 33.9172, lng: -118.0120 },
  { name: "Suisun City", country: "USA", lat: 38.2383, lng: -122.0405 },
  { name: "Askvoll", country: "USA", lat: 40.7609, lng: -111.8910 },
  { name: "Dry Ridge", country: "USA", lat: 38.6795, lng: -84.5916 },
  { name: "Presque Isle", country: "USA", lat: 46.6781, lng: -68.0159 },
  { name: "Framingham", country: "USA", lat: 42.2793, lng: -71.4162 },
  { name: "Venice", country: "USA", lat: 34.0195, lng: -118.4912 },
  { name: "Limassol", country: "USA", lat: 40.7831, lng: -73.0482 },
  { name: "Alachua", country: "USA", lat: 29.7816, lng: -82.4787 },
  { name: "Oak Harbor", country: "USA", lat: 48.2932, lng: -122.6432 },
  { name: "Philippines", country: "USA", lat: 39.1637, lng: -84.5120 },
  { name: "Bohle Plains", country: "USA", lat: 46.8772, lng: -96.7898 },
  { name: "Linneus", country: "USA", lat: 39.8836, lng: -93.1918 },
  { name: "Großbottwar", country: "USA", lat: 39.0458, lng: -76.6413 },
  { name: "Amarillo", country: "USA", lat: 35.2220, lng: -101.8313 },
  { name: "Tullahoma", country: "USA", lat: 35.3620, lng: -86.2094 },
  { name: "Loveland", country: "USA", lat: 40.3977, lng: -105.0748 },
  { name: "Macul", country: "USA", lat: 42.3584, lng: -71.0598 },
  { name: "Salisbury", country: "USA", lat: 38.3607, lng: -75.5994 },
  { name: "Lichfield", country: "USA", lat: 41.8508, lng: -73.1887 },
  { name: "Greenwich", country: "USA", lat: 41.0262, lng: -73.6284 },
  { name: "Tainan City", country: "USA", lat: 33.6846, lng: -116.2431 },
  { name: "West Springfield", country: "USA", lat: 42.1070, lng: -72.6412 },
  { name: "Mueang Nakhon Pathom", country: "USA", lat: 13.8199, lng: -100.0620 },
  { name: "Byers", country: "USA", lat: 39.7069, lng: -104.2155 },
  { name: "Singapore", country: "USA", lat: 40.4431, lng: -74.2594 },
  { name: "Campbell", country: "USA", lat: 37.2872, lng: -121.9500 },
  { name: "Brisbane", country: "USA", lat: 37.6810, lng: -122.3999 },
  { name: "London", country: "USA", lat: 37.1290, lng: -84.0833 },
  { name: "Hillsboro", country: "USA", lat: 45.5228, lng: -122.9698 },
  { name: "Tracy", country: "USA", lat: 37.7396, lng: -121.4252 },
  { name: "Gloucester", country: "USA", lat: 42.6153, lng: -70.6581 },
  { name: "Peyton", country: "USA", lat: 38.9472, lng: -104.4600 },
  { name: "Woodside", country: "USA", lat: 37.4297, lng: -122.2541 },
  { name: "Bremerton", country: "USA", lat: 47.5673, lng: -122.6329 },
  { name: "Janesville", country: "USA", lat: 42.6827, lng: -89.0187 },
  { name: "Spokane", country: "USA", lat: 47.6587, lng: -117.4260 },
  { name: "Lily", country: "USA", lat: 37.0317, lng: -84.1421 },
  { name: "Dübendorf", country: "USA", lat: 47.3969, lng: 8.6184 },
  { name: "Hohenwald", country: "USA", lat: 35.5487, lng: -87.5497 },
  { name: "Manns Choice", country: "USA", lat: 40.1770, lng: -78.5675 },
  { name: "Rogers", country: "USA", lat: 36.3320, lng: -94.1185 },
  { name: "Japan", country: "USA", lat: 33.8812, lng: -94.1710 },
  { name: "Waterloo", country: "USA", lat: 42.4928, lng: -92.3426 },
  { name: "Indianapolis", country: "USA", lat: 39.7684, lng: -86.1581 },
  { name: "Woodbridge", country: "USA", lat: 38.6581, lng: -77.2497 },
  { name: "Bayswater", country: "USA", lat: 40.6201, lng: -73.7629 },
  { name: "Moxee", country: "USA", lat: 46.5535, lng: -120.4064 },
  { name: "Nampa", country: "USA", lat: 43.5407, lng: -116.5635 },
  { name: "Haugesund", country: "USA", lat: 43.5407, lng: -116.5635 },
  { name: "South Jordan", country: "USA", lat: 40.5621, lng: -111.9297 },
  { name: "Layton", country: "USA", lat: 41.0602, lng: -111.9710 },
  { name: "Dania Beach", country: "USA", lat: 26.0523, lng: -80.1439 },
  { name: "Eau Claire", country: "USA", lat: 44.8113, lng: -91.4985 },
  { name: "Fayetteville", country: "USA", lat: 36.0626, lng: -94.1574 },
  { name: "Smiths Falls", country: "USA", lat: 44.9000, lng: -76.0167 },
  { name: "Candia", country: "USA", lat: 43.0570, lng: -71.3023 },
  { name: "Kirkwood", country: "USA", lat: 38.5834, lng: -90.4068 },
  { name: "Liverpool", country: "USA", lat: 43.1062, lng: -76.2177 },
  { name: "Enosburg", country: "USA", lat: 44.9042, lng: -72.8048 },
  { name: "Otsego", country: "USA", lat: 42.4617, lng: -85.6962 },
  { name: "Lawrenceburg", country: "USA", lat: 39.0906, lng: -84.8499 },
  { name: "Port Byron", country: "USA", lat: 41.6117, lng: -90.3407 },
  { name: "Nassau", country: "USA", lat: 42.5187, lng: -73.6107 },
  { name: "Sun City", country: "USA", lat: 33.5983, lng: -112.2716 },
  { name: "Mooroopna", country: "USA", lat: 36.3833, lng: -145.3500 },
  { name: "Pratt", country: "USA", lat: 37.6447, lng: -98.7370 },
  { name: "Denia", country: "USA", lat: 40.4637, lng: -86.8253 },
  { name: "Casselberry", country: "USA", lat: 28.6778, lng: -81.3206 },
  { name: "Beloit", country: "USA", lat: 42.5083, lng: -89.0312 },
  { name: "Macomb", country: "USA", lat: 40.4592, lng: -90.6718 },
  { name: "Ghent", country: "USA", lat: 42.2928, lng: -84.0597 },
  { name: "Macau Island", country: "USA", lat: 22.1987, lng: 113.5439 },
  { name: "Tustin", country: "USA", lat: 33.7458, lng: -117.8267 },
  { name: "Omaha", country: "USA", lat: 41.2524, lng: -95.9980 },
  { name: "Jackson", country: "USA", lat: 32.2988, lng: -90.1848 },
  { name: "Roswell", country: "USA", lat: 33.3943, lng: -104.5230 },
  { name: "Natchitoches", country: "USA", lat: 31.7607, lng: -93.0862 },
  { name: "Cheyenne", country: "USA", lat: 41.1400, lng: -104.8197 },
  { name: "Circle Pines", country: "USA", lat: 45.1441, lng: -93.1575 },
  { name: "Saint Marys", country: "USA", lat: 30.7307, lng: -81.5462 },
  { name: "Lostorf", country: "USA", lat: 47.3167, lng: 7.9333 },
  { name: "Tailem Bend", country: "USA", lat: -35.2500, lng: 139.4833 },
  { name: "Chaffee", country: "USA", lat: 37.1781, lng: -89.6523 },
  { name: "Louisville", country: "USA", lat: 38.2527, lng: -85.7585 },
  { name: "Leander", country: "USA", lat: 30.5788, lng: -97.8531 },
  { name: "Cypress", country: "USA", lat: 29.9685, lng: -95.6972 },
  { name: "Ostróda", country: "USA", lat: 53.6958, lng: 19.9617 },
  { name: "Lawrenceburg", country: "USA", lat: 39.0906, lng: -84.8499 },
  { name: "Sterling", country: "USA", lat: 39.0062, lng: -77.4286 },
  { name: "Freeville", country: "USA", lat: 42.5162, lng: -76.3474 },
  { name: "Edina", country: "USA", lat: 44.8897, lng: -93.3499 },
  { name: "Bristol", country: "USA", lat: 36.5951, lng: -82.1887 },
  { name: "Champlin", country: "USA", lat: 45.1869, lng: -93.3975 },
  { name: "Wayne", country: "USA", lat: 40.0421, lng: -74.2763 },
  { name: "Grömitz", country: "USA", lat: 54.1500, lng: 10.9667 },
  { name: "Tucson", country: "USA", lat: 32.2226, lng: -110.9747 },
  { name: "Sleaford", country: "USA", lat: 52.9964, lng: -0.4059 },
  { name: "Tranby", country: "USA", lat: 59.8667, lng: 10.4000 },
  { name: "Papillion", country: "USA", lat: 41.1544, lng: -96.0428 },
  { name: "Valrico", country: "USA", lat: 27.9439, lng: -82.2443 },
  { name: "Göttingen", country: "USA", lat: 51.5414, lng: 9.9156 },
  { name: "Winfield", country: "USA", lat: 37.2420, lng: -96.9956 },
  { name: "Attleboro", country: "USA", lat: 41.9445, lng: -71.2856 },
  { name: "Kita", country: "USA", lat: 35.7667, lng: 139.6500 },
  { name: "Christiansted", country: "USA", lat: 17.7479, lng: -64.7054 },
  { name: "Pasadena", country: "USA", lat: 34.1478, lng: -118.1445 },
  { name: "Ashland", country: "USA", lat: 42.2618, lng: -71.4636 },
  { name: "Atlantic Beach", country: "USA", lat: 30.3293, lng: -81.3973 },
  { name: "Kittanning", country: "USA", lat: 40.8187, lng: -79.5220 },
  { name: "Machali", country: "USA", lat: -34.1833, lng: -70.6500 },
  { name: "Pikeville", country: "USA", lat: 37.4793, lng: -82.5188 },
  { name: "Ballybay", country: "USA", lat: 53.9333, lng: -6.7833 },
  { name: "Claypool", country: "USA", lat: 41.1120, lng: -86.0928 },
  { name: "McKinney", country: "USA", lat: 33.1973, lng: -96.6397 },
  { name: "Pune", country: "USA", lat: 18.5196, lng: 73.8553 },
  { name: "Pensacola", country: "USA", lat: 30.4518, lng: -87.2169 },
  { name: "Nuñoa", country: "USA", lat: -33.4569, lng: -70.5969 },
  { name: "Norman", country: "USA", lat: 35.2226, lng: -97.4395 },
  { name: "Ames", country: "USA", lat: 42.0308, lng: -93.6319 },
  { name: "Fort Myers", country: "USA", lat: 26.6406, lng: -81.8723 },
  { name: "Vega", country: "USA", lat: 35.2442, lng: -102.4277 },
  { name: "Middletown", country: "USA", lat: 39.5151, lng: -84.3980 },
  { name: "Woonsocket", country: "USA", lat: 41.9985, lng: -71.5147 },
  { name: "Lake Katrine", country: "USA", lat: 41.9876, lng: -74.0054 },
  { name: "Ñuñoa", country: "USA", lat: -33.4569, lng: -70.5969 },
  { name: "Burlington", country: "USA", lat: 44.4759, lng: -73.2121 },
  { name: "Talcahuano", country: "USA", lat: -36.7167, lng: -73.1167 },
  { name: "Tatum", country: "USA", lat: 32.3146, lng: -94.5219 },
  { name: "Woodbridge Township", country: "USA", lat: 40.5577, lng: -74.2845 },
  { name: "Breaux Bridge", country: "USA", lat: 30.2732, lng: -91.8996 },
  { name: "Mosoel Bay", country: "USA", lat: 34.0522, lng: -118.2437 },
  { name: "Littleton", country: "USA", lat: 39.6133, lng: -105.0178 },
  { name: "Alpharetta", country: "USA", lat: 34.0754, lng: -84.2941 },
  { name: "Crosby", country: "USA", lat: 29.9110, lng: -95.0610 },
  { name: "Southampton", country: "USA", lat: 40.8843, lng: -72.3898 },
  { name: "Commerce", country: "USA", lat: 34.1987, lng: -118.1598 },
  { name: "Topeka", country: "USA", lat: 39.0473, lng: -95.6890 },
  { name: "Marina", country: "USA", lat: 36.6844, lng: -121.8022 },
  { name: "Cedar Crest", country: "USA", lat: 35.1275, lng: -106.3031 },
  { name: "Santiago", country: "USA", lat: 33.1139, lng: -117.0931 },
  { name: "Hickory", country: "USA", lat: 35.7344, lng: -81.3412 },
  { name: "Tilburg", country: "USA", lat: 51.5556, lng: 5.0919 },
  { name: "Bountiful", country: "USA", lat: 40.8869, lng: -111.8808 },
  { name: "Schwäbisch Gmünd", country: "USA", lat: 48.8000, lng: 9.8000 },
  { name: "Fiano Romano", country: "USA", lat: 42.1667, lng: 12.6000 },
  { name: "Province of Oristano", country: "USA", lat: 39.9000, lng: 8.6000 },
  { name: "Gloucester", country: "USA", lat: 42.6153, lng: -70.6581 },
  { name: "Haeundae-gu", country: "USA", lat: 35.1635, lng: 129.1635 },
  { name: "La Spezia", country: "USA", lat: 44.1071, lng: 9.8283 },
  { name: "Bagsvaerd", country: "USA", lat: 55.7667, lng: 12.4667 },
  { name: "Rionegro", country: "USA", lat: 6.1667, lng: -75.3833 },
  { name: "Baton Rouge", country: "USA", lat: 30.4515, lng: -91.1871 },
  { name: "Chandigarh", country: "USA", lat: 30.7333, lng: 76.7794 },
  { name: "Butler", country: "USA", lat: 40.8612, lng: -79.8951 },
  { name: "Rio Grande", country: "USA", lat: 38.2656, lng: -106.3419 },
  { name: "Cape Coral", country: "USA", lat: 26.5629, lng: -81.9495 },
  { name: "Newburgh", country: "USA", lat: 41.5034, lng: -74.0104 },
  { name: "Wells River", country: "USA", lat: 44.1501, lng: -72.0626 },
  { name: "Bethel", country: "USA", lat: 41.3715, lng: -73.4140 },
  { name: "Lincoln", country: "USA", lat: 40.8136, lng: -96.7026 },
  { name: "Draper", country: "USA", lat: 40.5246, lng: -111.8638 },
  { name: "Emporia", country: "USA", lat: 38.4042, lng: -96.1817 },
  { name: "West Richland", country: "USA", lat: 46.3043, lng: -119.3614 },
  { name: "Bakersfield", country: "USA", lat: 35.3733, lng: -119.0187 },
  { name: "Belgrade", country: "USA", lat: 45.7781, lng: -111.1772 },
  { name: "Towson", country: "USA", lat: 39.4015, lng: -76.6022 },
  { name: "Colorado Springs", country: "USA", lat: 38.8339, lng: -104.8214 },
  { name: "Brandon", country: "USA", lat: 43.6106, lng: -99.9624 },
  { name: "St. George", country: "USA", lat: 37.0965, lng: -113.5684 },
  { name: "Fairhope", country: "USA", lat: 30.5229, lng: -87.9033 },
  { name: "Piedmont", country: "USA", lat: 33.9262, lng: -85.6102 },
  { name: "McCausland", country: "USA", lat: 41.6256, lng: -90.4146 },
  { name: "Gera", country: "USA", lat: 50.8797, lng: 12.0819 },
  { name: "North Ogden", country: "USA", lat: 41.3072, lng: -111.9597 },
  { name: "Center", country: "USA", lat: 37.7542, lng: -106.1050 },
  { name: "Duluth", country: "USA", lat: 46.7833, lng: -92.1065 },
  { name: "Japan", country: "USA", lat: 33.8812, lng: -94.1710 },
  { name: "Sherburne", country: "USA", lat: 45.4358, lng: -93.7564 },
  { name: "Rushville", country: "USA", lat: 39.6084, lng: -85.4455 },
  { name: "Madison", country: "USA", lat: 43.0731, lng: -89.4012 },
  { name: "New Albany", country: "USA", lat: 38.2856, lng: -85.8244 },
  { name: "Havre de Grace", country: "USA", lat: 39.5490, lng: -76.0916 },
  { name: "Terrell", country: "USA", lat: 32.7357, lng: -96.2753 },
  { name: "Post Falls", country: "USA", lat: 47.7182, lng: -116.9516 },
  { name: "Grand Haven", country: "USA", lat: 43.0631, lng: -86.2284 },
  { name: "Ivrea", country: "USA", lat: 45.4667, lng: 7.8744 },
  { name: "Oracle", country: "USA", lat: 32.6097, lng: -110.7704 },
  { name: "Solakrossen", country: "USA", lat: 59.9139, lng: 10.7522 },
  { name: "Kittanning", country: "USA", lat: 40.8187, lng: -79.5220 },
  { name: "Woodstock", country: "USA", lat: 42.3148, lng: -88.4487 },
  { name: "Garnett", country: "USA", lat: 38.2803, lng: -95.2403 },
  { name: "Rickenbach", country: "USA", lat: 47.5167, lng: 8.0167 },
  { name: "Osage Beach", country: "USA", lat: 38.1364, lng: -92.6532 },
  { name: "Brockworth", country: "USA", lat: 51.8667, lng: -2.1167 },
  { name: "Richland", country: "USA", lat: 46.2857, lng: -119.2845 },
  { name: "Marlow", country: "USA", lat: 51.5719, lng: -0.7758 },
  { name: "Bel Air", country: "USA", lat: 39.5262, lng: -76.3486 },
  { name: "Tupadly", country: "USA", lat: 50.1333, lng: 14.3667 },
  { name: "Metropolitan City of Messina", country: "USA", lat: 38.1937, lng: 15.5540 },
  { name: "China", country: "USA", lat: 44.4759, lng: -69.4595 },
  { name: "Paradise", country: "USA", lat: 36.0972, lng: -115.1467 },
  { name: "Asheville", country: "USA", lat: 35.5951, lng: -82.5515 },
  { name: "Aurora", country: "USA", lat: 39.7294, lng: -104.8319 },
  { name: "Sammamish", country: "USA", lat: 47.6162, lng: -122.0356 },
  { name: "Peoria", country: "USA", lat: 40.6936, lng: -89.5890 },
  { name: "Woodside", country: "USA", lat: 37.4297, lng: -122.2541 },
  { name: "Big Stone Gap", country: "USA", lat: 36.8706, lng: -82.7815 },
  { name: "Hendersonville", country: "USA", lat: 35.3187, lng: -82.4609 },
  { name: "Glendale", country: "USA", lat: 34.1425, lng: -118.2551 },
  { name: "Athea", country: "USA", lat: 52.3167, lng: -9.0333 },
  { name: "Zelenogradsk", country: "USA", lat: 54.9583, lng: 20.4792 },
  { name: "Ajijic", country: "USA", lat: 20.3000, lng: -103.2667 },
  { name: "Hudson", country: "USA", lat: 42.3917, lng: -71.5661 },
  { name: "Flowood", country: "USA", lat: 32.3293, lng: -90.1120 },
  { name: "Hammond", country: "USA", lat: 30.5043, lng: -90.4612 },
  { name: "Buckley", country: "USA", lat: 47.1628, lng: -122.0190 },
  { name: "Maple Grove", country: "USA", lat: 45.0725, lng: -93.4558 },
  { name: "Bitritto", country: "USA", lat: 41.0667, lng: 16.8000 },
  { name: "Rockville", country: "USA", lat: 39.0840, lng: -77.1528 },
  { name: "Colorado Springs", country: "USA", lat: 38.8339, lng: -104.8214 },
  { name: "Honolulu", country: "USA", lat: 21.3099, lng: -157.8581 },
  { name: "Lubbock", country: "USA", lat: 33.5779, lng: -101.8552 },
  { name: "Anderson", country: "USA", lat: 34.5032, lng: -82.6501 },
  { name: "Carson City", country: "USA", lat: 39.1638, lng: -119.7674 },
  { name: "Broadway", country: "USA", lat: 39.4415, lng: -78.7978 },
  { name: "Sanford", country: "USA", lat: 35.4799, lng: -79.1803 },
  { name: "Aguilar", country: "USA", lat: 37.4058, lng: -104.6636 },
  { name: "Auburn", country: "USA", lat: 32.6010, lng: -85.4808 },
  { name: "Grand Isle", country: "USA", lat: 29.2633, lng: -89.9565 },
  { name: "Labastide-Clermont", country: "USA", lat: 43.7000, lng: 1.0833 },
  { name: "Avondale", country: "USA", lat: 33.4356, lng: -112.3496 },
  { name: "Panama", country: "USA", lat: 30.1588, lng: -85.6602 },
  { name: "Easton", country: "USA", lat: 40.6862, lng: -75.2204 },
  { name: "Ovalle", country: "USA", lat: -30.6000, lng: -71.2000 },
  { name: "Concepción", country: "USA", lat: -36.8167, lng: -73.0500 },
  { name: "Nuñoa", country: "USA", lat: -33.4569, lng: -70.5969 },
  { name: "San Pedro de la Paz", country: "USA", lat: -36.8333, lng: -73.1167 },
  { name: "Florida", country: "USA", lat: 27.7663, lng: -82.6404 },
  { name: "Winchester", country: "USA", lat: 39.1857, lng: -78.1633 },
  { name: "Santo Domingo", country: "USA", lat: 18.4861, lng: -69.9312 },
  { name: "La Serena", country: "USA", lat: -29.9027, lng: -71.2519 },
  { name: "Valparaíso", country: "USA", lat: -33.0458, lng: -71.6197 },
  { name: "Gorbea", country: "USA", lat: -39.1000, lng: -72.6833 },
  { name: "Iquique", country: "USA", lat: -20.2208, lng: -70.1431 },
  { name: "Villarrica", country: "USA", lat: -39.2833, lng: -72.2333 },
  { name: "Peñalolén", country: "USA", lat: -33.4833, lng: -70.5333 },
  { name: "Temuco", country: "USA", lat: -38.7333, lng: -72.6000 },
  { name: "Las Condes", country: "USA", lat: -33.4167, lng: -70.5833 },
  { name: "Rogers", country: "USA", lat: 36.3320, lng: -94.1185 },
  { name: "Milford", country: "USA", lat: 41.2223, lng: -73.0565 },
  { name: "Papillion", country: "USA", lat: 41.1544, lng: -96.0428 },
  { name: "Rengo", country: "USA", lat: -34.4000, lng: -70.8667 },
  { name: "Hanover", country: "USA", lat: 39.8007, lng: -76.9839 },
  { name: "Mesa", country: "USA", lat: 33.4152, lng: -111.8315 },
  { name: "Tomé", country: "USA", lat: -36.6167, lng: -72.9667 },
  { name: "Puente Alto", country: "USA", lat: -33.6167, lng: -70.5833 },
  { name: "Fleetwood", country: "USA", lat: 53.9276, lng: -3.0137 },
  { name: "Dillingham", country: "USA", lat: 59.0403, lng: -158.4575 },
  { name: "Port Orchard", country: "USA", lat: 47.5401, lng: -122.6357 },
  { name: "Huron", country: "USA", lat: 44.3633, lng: -98.2142 },
  { name: "Conchali", country: "USA", lat: -33.3667, lng: -70.6667 },
  { name: "Shirley", country: "USA", lat: 42.5542, lng: -71.6495 },
  { name: "La Reina", country: "USA", lat: -33.4500, lng: -70.5333 },
  
  // Canada
  { name: "Ottawa", country: "Canada", lat: 45.4215, lng: -75.6972 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832 },
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207 },
  { name: "Montreal", country: "Canada", lat: 45.5017, lng: -73.5673 },
  { name: "Calgary", country: "Canada", lat: 51.0447, lng: -114.0719 },
  { name: "Winnipeg", country: "Canada", lat: 49.8951, lng: -97.1384 },
  { name: "Kingston", country: "Canada", lat: 44.2312, lng: -76.4860 },
  { name: "London", country: "Canada", lat: 42.9849, lng: -81.2453 },
  
  // Europe
  { name: "London", country: "UK", lat: 51.5074, lng: -0.1278 },
  { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050 },
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
  { name: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122 },
  { name: "Oslo", country: "Norway", lat: 59.9139, lng: 10.7522 },
  { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686 },
  { name: "Reykjavik", country: "Iceland", lat: 64.1466, lng: -21.9426 },
  { name: "Belgrade", country: "Serbia", lat: 44.7866, lng: 20.4489 },
  { name: "Krakow", country: "Poland", lat: 50.0647, lng: 19.9450 },
  { name: "Roanne", country: "France", lat: 46.0333, lng: 4.0667 },
  { name: "Worcester", country: "UK", lat: 52.1923, lng: -2.2219 },
  { name: "Wantage", country: "UK", lat: 51.5886, lng: -1.3581 },
  { name: "Altengottern", country: "Germany", lat: 51.1000, lng: 10.5833 },
  { name: "Wloclawek", country: "Poland", lat: 52.6481, lng: 19.0678 },
  { name: "Monza", country: "Italy", lat: 45.5845, lng: 9.2744 },
  { name: "Moenchengladbach", country: "Germany", lat: 51.1805, lng: 6.4428 },
  { name: "Moiano", country: "Italy", lat: 41.1833, lng: 14.6167 },
  { name: "Moster", country: "Norway", lat: 59.7833, lng: 5.3667 },
  { name: "Treviso", country: "Italy", lat: 45.6669, lng: 12.2428 },
  
  // Asia Pacific
  { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
  { name: "Brisbane", country: "Australia", lat: -27.4698, lng: 153.0251 },
  { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631 },
  { name: "Adelaide", country: "Australia", lat: -34.9285, lng: 138.6007 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Hong Kong", country: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780 },
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842 },
  { name: "Nerang", country: "Australia", lat: -27.9833, lng: 153.3333 },
  { name: "Ingleburn", country: "Australia", lat: -33.9833, lng: 150.8667 },
  { name: "Wickham", country: "Australia", lat: -32.9167, lng: 151.7500 },
  { name: "Coldstream", country: "Australia", lat: -37.7167, lng: 145.4167 },
  
  // South America
  { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693 },
  { name: "Buenos Aires", country: "Argentina", lat: -34.6118, lng: -58.3960 },
  { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428 },
  { name: "Bogota", country: "Colombia", lat: 4.7110, lng: -74.0721 },
  { name: "Niteroi", country: "Brazil", lat: -22.8833, lng: -43.1036 },
  { name: "Nuevo Chimbote", country: "Peru", lat: -9.0833, lng: -78.5167 },
  
  // Greece
  { name: "Santorini", country: "Greece", lat: 36.3932, lng: 25.4615 },
  
  // Other notable locations
  { name: "Auckland", country: "New Zealand", lat: -36.8485, lng: 174.7633 },
  { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241 },
  { name: "Tel Aviv", country: "Israel", lat: 32.0853, lng: 34.7818 },
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784 },
];

interface WorldMapProps {
  className?: string;
}

export default function WorldMap({ className = "" }: WorldMapProps) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  // SVG world map projection (simplified)
  const projectCoordinate = (lat: number, lng: number) => {
    // Simple equirectangular projection
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-6 overflow-hidden">
        <svg
          viewBox="0 0 800 400"
          className="w-full h-auto max-h-96"
          style={{ background: 'linear-gradient(180deg, #e6f3ff 0%, #cce7ff 100%)' }}
        >
          {/* Simple world map background */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Grid background */}
          <rect width="800" height="400" fill="url(#grid)" />
          
          {/* Simplified continents */}
          <g fill="hsl(var(--secondary))" fillOpacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1">
            {/* North America */}
            <path d="M50,80 Q120,60 180,90 L200,140 Q160,180 120,160 Q80,140 50,120 Z" />
            
            {/* South America */}
            <path d="M140,200 Q160,180 180,220 L170,300 Q150,320 140,280 Q130,240 140,200 Z" />
            
            {/* Europe */}
            <path d="M350,70 Q400,60 420,90 L410,120 Q380,130 350,110 Z" />
            
            {/* Africa */}
            <path d="M380,140 Q420,130 440,180 L430,280 Q400,300 380,260 Q370,200 380,140 Z" />
            
            {/* Asia */}
            <path d="M450,60 Q550,50 650,90 L680,160 Q620,180 550,160 Q480,140 450,100 Z" />
            
            {/* Australia */}
            <path d="M600,280 Q650,270 680,290 L670,320 Q640,330 620,310 Q600,300 600,280 Z" />
          </g>
          
          {/* Customer city pins */}
          {customerCities.map((city, index) => {
            const { x, y } = projectCoordinate(city.lat, city.lng);
            const isHovered = hoveredCity?.name === city.name;
            const isSelected = selectedCity?.name === city.name;
            
            return (
              <g key={`${city.name}-${index}`}>
                {/* Pin shadow */}
                <circle
                  cx={x + 2}
                  cy={y + 2}
                  r={isHovered || isSelected ? "6" : "4"}
                  fill="rgba(0,0,0,0.2)"
                />
                
                {/* Pin */}
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered || isSelected ? "5" : "3"}
                  fill="hsl(var(--accent))"
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => setSelectedCity(city)}
                />
                
                {/* Pulse animation for hovered pin */}
                {isHovered && (
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="hsl(var(--accent))"
                    fillOpacity="0.3"
                    className="animate-ping"
                  />
                )}
              </g>
            );
          })}
        </svg>
        
        {/* City tooltip */}
        {(hoveredCity || selectedCity) && (
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
            <div className="font-semibold text-primary">
              {(hoveredCity || selectedCity)?.name}
            </div>
            <div className="text-sm text-gray-600">
              {(hoveredCity || selectedCity)?.country}
            </div>
          </div>
        )}
        
        {/* Stats */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <div className="text-center">
            <div className="text-2xl font-serif font-bold text-primary">{customerCities.length}</div>
            <div className="text-sm text-gray-600">Cities Worldwide</div>
          </div>
        </div>
      </div>
    </div>
  );
}
// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nLXFyaSIsImEiOiJjazZncWRkZGowb3kyM25vZXkwbms2cW0xIn0.lbwola6y7YDdaKLMdjif1g';

// set central points and z-level 
var initialCenterPoint = [105.3414953, 37.1341374]
var initialZoom = 3.4

// a helper function for Lookup for looking up all the provinces and their status quo
var nameLookup = (code) => {
  switch (code) {
     //>10,000
    case 1:
      return {
        color: '#8B3626', 
        description: 'Hubei',
      };
     //1,000-9,999
    case 2:
      return {
        color: '#CD4F39',
        description: 'Guangdong',
      };
    case 3:
      return {
        color: '#CD4F39',
        description:'Zhejiang',
      };  
    case 4:
      return {
        color: '#CD4F39',
        description:'Hunan',
      };  
    case 5:
      return {
        color: '#CD4F39',
        description:'Henan',
      };  
     //500-999
    case 6:
      return {
        color: '#EE5C42',
        description: 'Shandong',
      };
    case 7:
      return {
        color: '#EE5C42',
        description:'Anhui',
      };  
    case 8:
      return {
        color: '#EE5C42',
        description:'Sichuan',
      };  
    case 9:
      return {
        color: '#EE5C42',
        description:'Jiangxi',
      };  
    case 10:
      return {
        color: '#EE5C42',
        description:'Chongqing',
      }; 
    case 11:
      return {
        color: '#EE5C42',
        description:'Jiangsu',
      };  
     
      //100-499
    case 12:
      return {
        color: '#FF6347',
        description: 'Beijing',
      };  
    case 13:
      return {
        color: '#FF6347', 
        description: 'Heilongjiang',
       }; 
    case 14:
      return {
        color: '#FF6347', 
        description:'Guangxi',
       }; 
    case 15:
      return {
        color: '#FF6347', 
        description:'Fujian',
       }; 
    case 16:
      return {
        color: '#FF6347', 
        description:'Shanghai',
      };
    case 17:
      return {
        color: '#FF6347', 
        description:'Hebei',
      };
    case 18:
      return {
        color: '#FF6347', 
        description:'Shaanxi',
      }; 
    case 19:
      return {
        color: '#FF6347',
        description:'Tianjin',
      };    
 
    case 20:
      return {
        color: '#FF6347',
        description:'Guizhou',
      };   
    case 21:
      return {
        color: '#FF6347',
        description:'Hainan',
      };  
    case 22:
      return {
        color: '#FF6347',
        description:'Liaoning',
      };  
    case 23:
      return {
        color: '#FF6347',
        description:'Shanxi',
      };  
   case 24:
      return {
        color: '#FF6347',
        description:'Yunnan',
      };
  
     //10-99 
      
 
    case 25:
      return {
        color: '#fed0c8',
        description: 'Hong Kong',
      };
    case 26:
      return {
        color: '#fed0c8',
        description:'Xinjiang',
      };  
    case 27:
      return {
        color: '#fed0c8',
        description:'Inner Mongolia',
      };  
    case 28:
      return {
        color: '#fed0c8',
        description: 'Jilin',
      };
    case 29:
      return {
        color: '#fed0c8',
        description: 'Taiwan',
      };  
    case 30:
      return {
        color: '#fed0c8',
        description:'Gansu',
      };  
    case 31:
      return {
        color: '#fed0c8',
        description: 'Ningxia',
      };  
    case 32:
      return {
        color: '#fed0c8',
        description:'Macau',
      };   
    case 33:
      return {
        color: '#fed0c8',
        description:'Qinghai',
      };   
      
     //1 
    case 34:
      return {
        color: '#fffbfa',
        description: 'Tibet',
      };
    default:
      return {
        color: '#CD3700',
        description: 'other',
      };
   }
};

var defaultText = '<p> Get more inormation about the statistics of each province. </p>'
$('#feature-info').html(defaultText)

var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/dark-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// wait for the initial style to Load
map.on('style.load', function() {

  // add a geojson source to the map using our external geojson file
  map.addSource('NHFPC', {
    type: 'geojson',
    data: './china.geojson',
  });
 
  // let's make sure the source got added by logging the current map state to the console
  console.log(map.getStyle().sources)

  // add  layer for filling different provinces
  map.addLayer({
    id: 'fill-map-province',
    type: 'fill',
    source: 'NHFPC',
    paint: {
      'fill-color': {
        type: 'categorical',
        property: 'name',
        stops: [
          [
            'Hubei',
            nameLookup(1).color,
          ],
          [
            'Guangdong',
            nameLookup(2).color,
          ],
          [
            'Zhejiang',
            nameLookup(3).color,
          ],
          [
            'Hunan',
            nameLookup(4).color,
          ],
          [
            'Henan',
            nameLookup(5).color,
          ],
           [
            'Shandong',
            nameLookup(6).color,
          ],
           [
            'Anhui',
            nameLookup(7).color,
          ],
           [
            'Sichuan',
            nameLookup(8).color,
          ],
           [
            'Jiangxi',
            nameLookup(9).color,
          ],
           [
            'Chongqing',
            nameLookup(10).color,
          ],
           [
            'Jiangsu',
            nameLookup(11).color,
          ],
          [
            'Beijing',
            nameLookup(12).color,
          ],
          [
            'Heilongjiang',
            nameLookup(13).color,
          ],
          [
            'Guangxi',
            nameLookup(14).color,
          ],
          [
            'Fujian',
            nameLookup(15).color,
          ],
          [
            'Shanghai',
            nameLookup(16).color,
          ],
          [
            'Hebei',
            nameLookup(17).color,
          ],
          [
            'Shaanxi',
            nameLookup(18).color,
          ],
          [
            'Tianjin',
            nameLookup(19).color,
          ],
          [
            'Guizhou',
            nameLookup(20).color,
          ],
          [
            'Hainan',
            nameLookup(21).color,
          ],
          [
            'Liaoning',
            nameLookup(22).color,
          ],
          [
            'Shanxi',
            nameLookup(23).color,
          ],
          [
            'Yunnan',
            nameLookup(24).color,
          ],
          [
            'Hong Kong',
            nameLookup(25).color,
          ],
          [
            'Xinjiang',
            nameLookup(26).color,
          ],
          [
            'Inner Mongolia',
            nameLookup(27).color,
          ],
          [
            'Jilin',
            nameLookup(28).color,
          ],
          [
            'Taiwan',
            nameLookup(29).color,
          ],
          [
            'Gansu',
            nameLookup(30).color,
          ],
          [
            'Ningxia',
            nameLookup(31).color,
          ],
          [
            'Macau',
            nameLookup(32).color,
          ],
          [
            'Qinghai',
            nameLookup(33).color,
          ],   
          [
            'Tibet',
            nameLookup(34).color,
          ],
        ]
      }
    }
  });
  
    // add a layer for provincal borders
    map.addLayer({
      id:'line-map-province',
      type: 'line',
      source: 'NHFPC',
      before:['fill-map-province'],
    //  layout: {
    //    'visibility': 'visible',
    //    'line-join': 'round',
    //    'line-cap': 'round'
    //      },
      paint: {
        'line-color': 'white',
        'line-width': 1,
          }
    });

  map.addSource('highlight-feature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });
  
  map.addLayer({
    id: 'highlight-line',
    type: 'line',
    source: 'highlight-feature',
    paint: {
      'line-width': 4,
      'line-opacity': 0.9,
      'line-color': 'white',
        }
  });
  
  // listen for the mouse moving over the map and react when the cursor is over our data

  map.on('mousemove', function (e) {
    // query for the features under the mouse, but only in the lots layer
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['fill-map-province'],
    });

    // if the mouse pointer is over a feature on our layer of interest
    // take the data for that feature and display it in the sidebar
    if (features.length > 0) {
      map.getCanvas().style.cursor = 'pointer';  // make the cursor a pointer

      var hoveredFeature = features[0]
      var featureInfo = `
        <h4>${hoveredFeature.properties.name}</h4>
        <p><strong>Total Confirmed Cases:</strong> ${hoveredFeature.properties.TCC}</p>
        <p><strong>Cured Cases:</strong> ${hoveredFeature.properties.CC}</p>
      `
      $('#feature-info').html(featureInfo)

      // set this lot's polygon feature as the data for the highlight source
      map.getSource('highlight-feature').setData(hoveredFeature.geometry);
    } else {
      // if there is no feature under the mouse, reset things:
      map.getCanvas().style.cursor = 'default'; // make the cursor default

      // reset the highlight source to an empty featurecollection
      map.getSource('highlight-feature').setData({
        type: 'FeatureCollection',
        features: []
      });

      // reset the default message
      $('#feature-info').html(defaultText)
    }
  })

})

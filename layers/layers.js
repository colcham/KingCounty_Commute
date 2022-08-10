var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ShareofResidentsThatTakePublicTransporttoWork_1 = new ol.format.GeoJSON();
var features_ShareofResidentsThatTakePublicTransporttoWork_1 = format_ShareofResidentsThatTakePublicTransporttoWork_1.readFeatures(json_ShareofResidentsThatTakePublicTransporttoWork_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShareofResidentsThatTakePublicTransporttoWork_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShareofResidentsThatTakePublicTransporttoWork_1.addFeatures(features_ShareofResidentsThatTakePublicTransporttoWork_1);
var lyr_ShareofResidentsThatTakePublicTransporttoWork_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShareofResidentsThatTakePublicTransporttoWork_1, 
                style: style_ShareofResidentsThatTakePublicTransporttoWork_1,
                interactive: true,
    title: 'Share of Residents That Take Public Transport to Work<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_0.png" /> 0 - 0.029<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_1.png" /> 0.029 - 0.054<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_2.png" /> 0.054 - 0.078<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_3.png" /> 0.078 - 0.104<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_4.png" /> 0.104 - 0.135<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_5.png" /> 0.135 - 0.173<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_6.png" /> 0.173 - 0.213<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_7.png" /> 0.213 - 0.262<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_8.png" /> 0.262 - 0.325<br />\
    <img src="styles/legend/ShareofResidentsThatTakePublicTransporttoWork_1_9.png" /> 0.325 - 0.427<br />'
        });
var format_ShareofResidentsThatDrivetoWork_2 = new ol.format.GeoJSON();
var features_ShareofResidentsThatDrivetoWork_2 = format_ShareofResidentsThatDrivetoWork_2.readFeatures(json_ShareofResidentsThatDrivetoWork_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShareofResidentsThatDrivetoWork_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShareofResidentsThatDrivetoWork_2.addFeatures(features_ShareofResidentsThatDrivetoWork_2);
var lyr_ShareofResidentsThatDrivetoWork_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShareofResidentsThatDrivetoWork_2, 
                style: style_ShareofResidentsThatDrivetoWork_2,
                interactive: true,
    title: 'Share of Residents That Drive to Work<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_0.png" /> 0.057 - 0.186<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_1.png" /> 0.186 - 0.283<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_2.png" /> 0.283 - 0.413<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_3.png" /> 0.413 - 0.504<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_4.png" /> 0.504 - 0.583<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_5.png" /> 0.583 - 0.659<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_6.png" /> 0.659 - 0.728<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_7.png" /> 0.728 - 0.791<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_8.png" /> 0.791 - 0.853<br />\
    <img src="styles/legend/ShareofResidentsThatDrivetoWork_2_9.png" /> 0.853 - 0.952<br />'
        });
var format_AverageCommuteTimeMinutes_3 = new ol.format.GeoJSON();
var features_AverageCommuteTimeMinutes_3 = format_AverageCommuteTimeMinutes_3.readFeatures(json_AverageCommuteTimeMinutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AverageCommuteTimeMinutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AverageCommuteTimeMinutes_3.addFeatures(features_AverageCommuteTimeMinutes_3);
var lyr_AverageCommuteTimeMinutes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AverageCommuteTimeMinutes_3, 
                style: style_AverageCommuteTimeMinutes_3,
                interactive: true,
    title: 'Average Commute Time (Minutes)<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_0.png" /> 19.7 - 22.1<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_1.png" /> 22.1 - 24.9<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_2.png" /> 24.9 - 27.6<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_3.png" /> 27.6 - 30.2<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_4.png" /> 30.2 - 32.5<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_5.png" /> 32.5 - 34.7<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_6.png" /> 34.7 - 37.1<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_7.png" /> 37.1 - 39.4<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_8.png" /> 39.4 - 42<br />\
    <img src="styles/legend/AverageCommuteTimeMinutes_3_9.png" /> 42 - 47.9<br />'
        });
var format_KingCountyMetroRoutes_4 = new ol.format.GeoJSON();
var features_KingCountyMetroRoutes_4 = format_KingCountyMetroRoutes_4.readFeatures(json_KingCountyMetroRoutes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KingCountyMetroRoutes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KingCountyMetroRoutes_4.addFeatures(features_KingCountyMetroRoutes_4);
var lyr_KingCountyMetroRoutes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KingCountyMetroRoutes_4, 
                style: style_KingCountyMetroRoutes_4,
                interactive: true,
                title: '<img src="styles/legend/KingCountyMetroRoutes_4.png" /> King County Metro Routes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ShareofResidentsThatTakePublicTransporttoWork_1.setVisible(true);lyr_ShareofResidentsThatDrivetoWork_2.setVisible(true);lyr_AverageCommuteTimeMinutes_3.setVisible(true);lyr_KingCountyMetroRoutes_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ShareofResidentsThatTakePublicTransporttoWork_1,lyr_ShareofResidentsThatDrivetoWork_2,lyr_AverageCommuteTimeMinutes_3,lyr_KingCountyMetroRoutes_4];
lyr_ShareofResidentsThatTakePublicTransporttoWork_1.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'Census Tract', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tests': 'Tests', 'Commute_GE': 'Commute_GE', 'Commute_NA': 'Commute_NA', 'Commute_TR': 'Commute_TR', 'Commute_Av': 'Commute_Av', 'Commute_Pc': 'Commute_Pc', 'Commute__1': 'Commute__1', 'trans': 'Share of Residents That Take Public Transport to Work', });
lyr_ShareofResidentsThatDrivetoWork_2.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'Census Tract', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tests': 'Tests', 'Commute_GE': 'Commute_GE', 'Commute_NA': 'Commute_NA', 'Commute_TR': 'Commute_TR', 'Commute_Av': 'Commute_Av', 'Commute_Pc': 'Commute_Pc', 'Commute__1': 'Commute__1', 'car': 'Share of Residents That Drive to Work', });
lyr_AverageCommuteTimeMinutes_3.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'Census Tract', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tests': 'Tests', 'Commute_GE': 'Commute_GE', 'Commute_NA': 'Commute_NA', 'Commute_TR': 'Commute_TR', 'Commute_Av': 'Commute_Av', 'Commute_Pc': 'Commute_Pc', 'Commute__1': 'Commute__1', 'Time': 'Average Commute Time (Mins)', });
lyr_KingCountyMetroRoutes_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CHANGE_NUM': 'CHANGE_NUM', 'MINOR_CHAN': 'MINOR_CHAN', 'CURRENT_NE': 'CURRENT_NE', 'IN_SERVICE': 'IN_SERVICE', 'ROUTE_ID': 'ROUTE_ID', 'LOCAL_EXPR': 'LOCAL_EXPR', 'ROUTE_NUM': 'ROUTE_NUM', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ShareofResidentsThatTakePublicTransporttoWork_1.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tests': 'Hidden', 'Commute_GE': 'Hidden', 'Commute_NA': 'Hidden', 'Commute_TR': 'Hidden', 'Commute_Av': 'Hidden', 'Commute_Pc': 'Hidden', 'Commute__1': 'Hidden', 'trans': 'TextEdit', });
lyr_ShareofResidentsThatDrivetoWork_2.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tests': 'Hidden', 'Commute_GE': 'Hidden', 'Commute_NA': 'Hidden', 'Commute_TR': 'Hidden', 'Commute_Av': 'Hidden', 'Commute_Pc': 'Hidden', 'Commute__1': 'Hidden', 'car': 'TextEdit', });
lyr_AverageCommuteTimeMinutes_3.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tests': 'Hidden', 'Commute_GE': 'Hidden', 'Commute_NA': 'Hidden', 'Commute_TR': 'Hidden', 'Commute_Av': 'Hidden', 'Commute_Pc': 'Hidden', 'Commute__1': 'Hidden', 'Time': 'TextEdit', });
lyr_KingCountyMetroRoutes_4.set('fieldImages', {'OBJECTID': 'Hidden', 'CHANGE_NUM': 'Hidden', 'MINOR_CHAN': 'Hidden', 'CURRENT_NE': 'Hidden', 'IN_SERVICE': 'Hidden', 'ROUTE_ID': 'Hidden', 'LOCAL_EXPR': 'Hidden', 'ROUTE_NUM': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_ShareofResidentsThatTakePublicTransporttoWork_1.set('fieldLabels', {'TRACTCE': 'header label', 'trans': 'header label', });
lyr_ShareofResidentsThatDrivetoWork_2.set('fieldLabels', {'TRACTCE': 'header label', 'car': 'header label', });
lyr_AverageCommuteTimeMinutes_3.set('fieldLabels', {'TRACTCE': 'header label', 'Time': 'header label', });
lyr_KingCountyMetroRoutes_4.set('fieldLabels', {});
lyr_KingCountyMetroRoutes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
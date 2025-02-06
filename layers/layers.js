ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11081284.738205, 1294242.506924, 11115792.446782, 1310135.887809]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_353_1 = new ol.format.GeoJSON();
var features_353_1 = format_353_1.readFeatures(json_353_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_353_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_353_1.addFeatures(features_353_1);
var lyr_353_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_353_1, 
                style: style_353_1,
                popuplayertitle: 'ต.ห้วยยาง 353',
                interactive: true,
    title: 'ต.ห้วยยาง 353<br />\
    <img src="styles/legend/353_1_0.png" /> All\'s day cafe&Restaurant<br />\
    <img src="styles/legend/353_1_1.png" /> Hello mango cafe<br />\
    <img src="styles/legend/353_1_2.png" /> Jack Sparrow\'s Restaurant&coffee<br />\
    <img src="styles/legend/353_1_3.png" /> lnfinity Beach<br />\
    <img src="styles/legend/353_1_4.png" /> NYFLKET<br />\
    <img src="styles/legend/353_1_5.png" /> กาแฟ เกาะจัน<br />\
    <img src="styles/legend/353_1_6.png" /> ครัวมะปรางเปรี้ยว<br />\
    <img src="styles/legend/353_1_7.png" /> ชุลมุน coffee<br />\
    <img src="styles/legend/353_1_8.png" /> ทุ่งยาวคาเฟ่<br />\
    <img src="styles/legend/353_1_9.png" /> บ้านสวนอินทรีย์อยู่อย่างพอเพียง<br />\
    <img src="styles/legend/353_1_10.png" /> ป้ารุณ อาหารและเครื่องดื่ม<br />\
    <img src="styles/legend/353_1_11.png" /> เมมโมรี่ คาเฟ่แคมป์<br />\
    <img src="styles/legend/353_1_12.png" /> ร้านกาแฟอินทนิล<br />\
    <img src="styles/legend/353_1_13.png" /> ร้านอาหารกบซีฟู้ด<br />\
    <img src="styles/legend/353_1_14.png" /> ลองดูคอฟฟี่<br />\
    <img src="styles/legend/353_1_15.png" /> วิสาหกิจชุมชนท่องเที่ยวเชิงเกษตรและโฮมสเตย์ โดย ชุมชนบ้านห้วยยาง<br />\
    <img src="styles/legend/353_1_16.png" /> วิสาหกิจชุมชนแปลงใหญ่สหกรณ์โคนมไทย-เดนมาร์ค บ้านเนินดินแดง จำกัด<br />\
    <img src="styles/legend/353_1_17.png" /> สองพี่น้อง Rose Garden1 coffee&DrinkBreakfast<br />\
    <img src="styles/legend/353_1_18.png" /> หาดวนกร<br />\
    <img src="styles/legend/353_1_19.png" /> อุทยานแห่งชาติน้ำตกห้วยยาง<br />\
    <img src="styles/legend/353_1_20.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_353_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_353_1];
lyr_353_1.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ละติจูด': 'ละติจูด', 'ลองจิจูด': 'ลองจิจูด', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'ภาพสถานที่': 'ภาพสถานที่', 'Facebook': 'Facebook', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_353_1.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองจิจูด': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'ภาพสถานที่': 'TextEdit', 'Facebook': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_353_1.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ละติจูด': 'hidden field', 'ลองจิจูด': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'hidden field', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'ภาพสถานที่': 'header label - always visible', 'Facebook': 'inline label - visible with data', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', });
lyr_353_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
(this.webpackJsonpmapbox=this.webpackJsonpmapbox||[]).push([[0],{14:function(e,t,o){},8:function(e,t,o){e.exports=o(9)},9:function(e,t,o){"use strict";o.r(t);var a=o(3),n=o(4),r=o(6),i=o(7),s=o(0),c=o.n(s),l=o(5),u=o.n(l),d=o(1),p=o.n(d);o(14);p.a.accessToken="pk.eyJ1IjoibWFjamltdWxhYyIsImEiOiJjazZvNzVrdDgwMDN3M2VxbHljdjF5Yzd4In0.rWPmBMx94_Z7RwLIXnXF4g";var m=function(e){Object(i.a)(o,e);var t=Object(r.a)(o);function o(e){var n;return Object(a.a)(this,o),(n=t.call(this,e)).state={lng:16.08268,lat:43.89275,zoom:8},n}return Object(n.a)(o,[{key:"componentDidMount",value:function(){var e=this,t=new p.a.Map({container:this.mapContainer,style:"mapbox://styles/macjimulac/ck822lxw108m61io4gyyl12q6",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})})),t.on("load",(function(){t.addSource("earthquakes",{type:"geojson",data:"https://demo7371634.mockable.io/korona",cluster:!0,clusterMaxZoom:14,clusterRadius:50}),t.addLayer({id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#f1f075",10,"#FF8C00",25,"#ff0000"],"circle-radius":["step",["get","point_count"],20,10,30,75,40]}}),t.addLayer({id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}}),t.addLayer({id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#00ff00","circle-radius":8,"circle-stroke-width":1,"circle-stroke-color":"#fff"}}),t.on("click","clusters",(function(e){var o,a,n,r=e.features[0].geometry.coordinates.slice();e.features[0].properties.type;for(console.log(r[0]),16.196508407592773==r[0]?(o="Knin",a=12,n="Grad"):15.592517852783203==r[0]?(o="Murter-Kurnati",a=27,n="Op\u0107ina"):15.641162395477295==r[0]?(o="Tisno",a=2,n="Op\u0107ina"):15.778770446777344==r[0]?(o="Vodice",a=4,n="Grad"):15.895071029663086==r[0]?(o="\u0160ibenik",a=9,n="Grad"):15.595865249633789==r[0]?(o="Murter",a=29,n="Otok"):r[0].toFixed(4)==15.923223495483398.toFixed(4)&&(o="Skradin",a=1,n="Grad");Math.abs(e.lngLat.lng-r[0])>180;)r[0]+=e.lngLat.lng>r[0]?360:-360;(new p.a.Popup).setLngLat(r).setHTML(n+": "+o+"<br>Broj oboljelih: "+a).addTo(t)})),t.on("mouseenter","clusters",(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","clusters",(function(){t.getCanvas().style.cursor=""})),t.on("click","unclustered-point",(function(e){var o,a=e.features[0].geometry.coordinates.slice(),n=e.features[0].properties.mag,r=e.features[0].properties.tsunami;for(console.log(a[0]),a[0].toFixed(4)==15.923223495483398.toFixed(4)?(n="Skradin",r=1,o="Grad"):a[0].toFixed(4)==16.155824661254883.toFixed(4)?(n="Drni\u0161",r=1,o="Grad"):a[0].toFixed(4)==16.090164184570312.toFixed(4)&&(n="Promina",r=1,o="Op\u0107ina");Math.abs(e.lngLat.lng-a[0])>180;)a[0]+=e.lngLat.lng>a[0]?360:-360;(new p.a.Popup).setLngLat(a).setHTML(o+": "+n+"<br>Broj oboljelih: "+r).addTo(t)})),t.on("mouseenter","clusters",(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","clusters",(function(){t.getCanvas().style.cursor=""}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"sidebarStyle"},c.a.createElement("div",null,"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom),c.a.createElement("div",null,"COVID-19 PODACI ZA \u0160IBENSKO-KNINSKU \u017dUPANIJU"),c.a.createElement("div",null,"STANJE NA DAN: 09. travnja 2020.")),c.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}))}}]),o}(c.a.Component);u.a.render(c.a.createElement(m,null),document.getElementById("app"))}},[[8,1,2]]]);
//# sourceMappingURL=main.ce72b749.chunk.js.map
var map = {

    map: null,
    drawingManager: null,
    isDrawing: false,
    polygon: null,
    markers: [],
    POIs: [
        {isOpen: true, point: new google.maps.Data.Point({lat:44.86477954		,lng:8.22219912 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.67517448		,lng:7.3867052 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.59659322		,lng:7.3441255 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.3821594		,lng:7.48222811 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.82680994		,lng:7.78815051 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.96802292		,lng:6.98626079 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.42040154		,lng:7.43650473 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.48983034		,lng:7.85556773 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.10865664		,lng:6.51627758 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.39798449		,lng:7.70482245 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.59205248		,lng:7.79589607 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.32987446		,lng:8.39084601 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.01753169		,lng:7.97963347 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.25068189		,lng:8.09170588 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.45376973		,lng:7.07605321 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.62487223		,lng:7.43731293 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.18349085		,lng:6.46552119 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.95069906		,lng:7.52522299 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.2700474		,lng:8.18368629 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.67052189		,lng:7.78450234 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.73608206		,lng:7.24989604 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.66766453		,lng:8.1611115 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.76467189		,lng:7.24356189 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.57475274		,lng:8.37011702 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.95715765		,lng:7.06890131 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.84389477		,lng:7.99465529 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.52276071		,lng:6.76432617 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.04320074		,lng:6.54295311 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.63570526		,lng:7.88658166 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.47856251		,lng:6.8114729 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.36539186		,lng:8.3105373 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:45.13631102		,lng:7.24378304 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.5232286		,lng:6.87655012 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.0332527		,lng:7.59301419 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.44673293		,lng:8.29913505 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.27884693		,lng:7.29728578 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.69569661		,lng:6.8290818 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.74648903		,lng:8.17782903 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.65971808		,lng:8.15794325 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.43458324		,lng:8.13339297 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.87937607		,lng:7.61788101 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.64200345		,lng:8.59116807 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.1815245		,lng:7.52581592 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.38407444		,lng:7.50099902 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.76291609		,lng:7.57618083 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.66888319		,lng:7.48511766 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.63975187		,lng:7.24257798 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.90195039		,lng:7.86737673 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.08887675		,lng:8.503537 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:45.67981407		,lng:7.15234195 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.16197239		,lng:8.47615746 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.67181064		,lng:7.37133496 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.56731519		,lng:7.69621097 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.83341046		,lng:7.43017178 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.65882917		,lng:8.3224654 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:45.50581569		,lng:8.0521804 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.36512938		,lng:6.98072546 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.68639043		,lng:8.54260108 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.75470188		,lng:8.41626698 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.5181768		,lng:8.62958899 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.27190984		,lng:7.40837218 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.60405374		,lng:7.38689756 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.97195071		,lng:6.76929139 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.96468218		,lng:8.06895172 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.37330709		,lng:7.64443216 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.38051231		,lng:6.48857911 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.43377026		,lng:6.52817978 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.92462523		,lng:8.5339 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.67490499		,lng:7.10089621 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.66625143		,lng:7.41254186 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.22665428		,lng:8.9035739 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.77403777		,lng:6.80766483 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.34589574		,lng:7.49888107 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.11779748		,lng:6.72574133 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.5857469		,lng:7.04455753 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.77970132		,lng:7.60677284 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.31661448		,lng:8.73049594 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.02002093		,lng:6.51516124 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.05342936		,lng:7.6342455 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.57412518		,lng:7.91084508 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.75318162		,lng:7.41409189 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.72041477		,lng:6.64773669 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.29703705		,lng:7.08034303 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.03090745		,lng:8.24273297 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.1822134		,lng:6.86767265 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.96537671		,lng:7.6839983 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:45.48467366		,lng:7.4872536 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.60404774		,lng:7.62803587 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.25179489		,lng:7.7359517 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.99293567		,lng:6.90550816 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.05996519		,lng:7.12756806 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.87067789		,lng:6.65150733 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.70243968		,lng:6.8660547 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:44.93060986		,lng:6.54738429 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.88827847		,lng:8.41963216 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.90352284		,lng:7.98551716 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:44.6685248		,lng:6.7580003 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:45.20351877		,lng:8.64476773 })},	
        {isOpen: true, point: new google.maps.Data.Point({lat:45.2565837		,lng:7.9268879 	})},
        {isOpen: true, point: new google.maps.Data.Point({lat:45.5870135		,lng:6.91772568	})}
    ],

    initialize: function(){
        
        addContains();
        
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 45.0888904, 
                lng: 7.6699955
            },
            zoom: 8,
            disableDefaultUI: true,
            styles: this.getMapStyles()
        });

        // this.drawingManager = new google.maps.drawing.DrawingManager({
        //     drawingMode: google.maps.drawing.OverlayType.POLYGON,
        //     drawingControl: false
        // });
        
        // this.drawingManager.setMap(this.map);
        // this.drawingManager.addListener('polygoncomplete', function(polygon){
        //     map.clearMap();
        //     map.polygon = polygon;
        //     map.POIs.map(function(POI, index){
        //         setTimeout(function() {
        //             if(polygon.contains(POI.point))
        //                 map.addMarker(POI)
        //         }, index * 100)
        //     })
            
        // });

    },

    disable: function(){
        this.isDrawing = true;
        document.getElementById('btnDraw').innerText = "Stop";
        this.clearMap();
        this.map.setOptions({
            draggable: false, 
            zoomControl: false, 
            scrollwheel: false, 
            disableDoubleClickZoom: true
        });
        google.maps.event.addDomListener(this.map.getDiv(),'mousedown',function(e){
            map.drawFreeHand()
        });
    },

    drawFreeHand: function()
    {

        //the polygon
        poly=new google.maps.Polyline({map:this.map,clickable:false});
        
        //move-listener
        var move=google.maps.event.addListener(this.map,'mousemove',function(e){
            poly.getPath().push(e.latLng);
        });
        
        //mouseup-listener
        google.maps.event.addListenerOnce(this.map,'mouseup',function(e){
            google.maps.event.removeListener(move);
            var path=poly.getPath();
            poly.setMap(null);
            var polygon=new google.maps.Polygon({map:map.map,path:path});
            
            google.maps.event.clearListeners(map.map.getDiv(), 'mousedown');
            
            map.setMarkers(polygon);

            map.enable();
        });
    },

    enable: function(){
        this.isDrawing = false;
        document.getElementById('btnDraw').innerText = "Draw";
        this.map.setOptions({
            draggable: true, 
            zoomControl: false, 
            scrollwheel: true, 
            disableDoubleClickZoom: true
        });
    },

    clearMap: function(){
        if(this.polygon) this.polygon.setMap(null);
        this.markers.map(function(marker){ marker.setMap(null) })
        this.markers = [];
    },

    setMarkers: function(polygon){
        this.clearMap();
        map.polygon = polygon;
        map.POIs.map(function(POI, index){
            setTimeout(function() {
                if(polygon.contains(POI.point))
                    map.addMarker(POI)
            }, index * 50)
        })
    },

    addMarker: function(POI){

        var image = {
            //url: POI.isOpen ? './img/pinYES.png' : './img/pinNO.png',
            url: './img/pin1.png',
            // This marker is 16 pixels wide by 32 pixels high.
            size: new google.maps.Size(16, 32),
            //origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            //anchor: new google.maps.Point(0, 32)
        };

        this.markers.push(new google.maps.Marker({
            position: POI.point.get(),
            map: this.map,
            title: 'Hello World!',
            animation: google.maps.Animation.DROP,
            icon: image
        }));
    },

    getMapStyles: function(){
        return [
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "20"
                    },
                    {
                        "weight": "1.00"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-20"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-20"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1e242b"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "15"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "invert_lightness": true
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "6"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#1e242b"
                    },
                    {
                        "lightness": "30"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#010306"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    }
}

function addContains(){
    google.maps.Polygon.prototype.contains = function(point) {
        var j=0;
        var oddNodes = false;
        var x = point.b.lng();
        var y = point.b.lat();

        var paths = this.getPath();

        for (var i=0; i < paths.getLength(); i++) {
            j++;
            if (j == paths.getLength()) {j = 0;}
            if (((paths.getAt(i).lat() < y) && (paths.getAt(j).lat() >= y))
            || ((paths.getAt(j).lat() < y) && (paths.getAt(i).lat() >= y))) {
            if ( paths.getAt(i).lng() + (y - paths.getAt(i).lat())
            /  (paths.getAt(j).lat()-paths.getAt(i).lat())
            *  (paths.getAt(j).lng() - paths.getAt(i).lng())<x ) {
                oddNodes = !oddNodes
            }
            }
        }
        return oddNodes;
    }

    google.maps.Polyline.prototype.contains = google.maps.Polygon.prototype.contains;
}
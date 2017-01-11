var app = {
    initialize: function() {
        document.addEventListener('DOMContentLoaded', function() { 
            Origami.fastclick(document.body); 
        }, false);
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('btnDraw').addEventListener('click', function(){
            if(!map.isDrawing){
            
                map.disable();        
            }else{
                map.enable();
            } 
        })
    },

    onDeviceReady: function() {
        console.log('ready');

        map.initialize();
    }

};

app.initialize();
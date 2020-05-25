var imageEditor = {

    editImg: null

    , init: function() {
        editImg = $('#img_con img')[0];
        editImg.setAttribute("style","zoom: 100%; filter: blur(0px);");

        this.registEvent();

        var flag = false;

        var w = $('#img_con img').width();
        $('#width').val(w);

        var h = $('#img_con img').height();
        $('#height').val(h);

        editImg.style.width = w +'px';
        editImg.style.height = h +'px';

//////////이미지 크롭 - canvas
        /*
        var canvas = document.getElementById("canvas1");
        var context = canvas.getContext("2d");
        var imageObj = new Image();

        imageObj.onload = function() {
            var sourceX = 100;
            var sourceY = 100;
            var sourceWidth = 200;
            var sourceHeight = 100;
            var destWidth = sourceWidth;
            var destHeight = sourceHeight;
            var destX = canvas.width / 2 - destWidth / 2;
            var destY = canvas.height / 2 - destHeight / 2;

            context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        };
        imageObj.src = "../img/facility_3.png";
        */
    }

    , registEvent: function() {
        var _this = this;

        $('#show_width').on('click', function () {
            _this.setSize("show_width");
        });

        $('#show_height').on('click', function () {
            _this.setSize("show_height");
        });

        $("#width").keydown(function(key) {
            _this.enterKeyDown("width", key);
        });

        $("#height").keydown(function(key) {
            _this.enterKeyDown("height", key);
        });

        $('#left').on('click', function () {
            _this.setRotation("left");
        });

        $('#right').on('click', function () {
            _this.setRotation("right");
        });

        $('#x_flip').on('click', function () {
            _this.setFlip("X", "Y");
        });

        $('#y_flip').on('click', function () {
            _this.setFlip("Y", "X");
        });

        $('#crop').on('click', function(){
            _this.letCrop();
        });

        $('#zoom_in').on('click', function(){
            _this.setZooming("zoom_in");
        });

        $('#zoom_out').on('click', function(){
            _this.setZooming("zoom_out");
        });

        $('#blur').on('input', function() {
            _this.setFilterBlur();
        });

        $('#brightness').on('input', function(){
            _this.setFilterBright();
        });

        $('#contrast').on('input', function(){
           _this. setFilterContrast();
        });

        $('#imageReturn').on('click', function(){
           _this.init();
        });

    }
    , enterKeyDown: function(type,key) {
        if (type == "width" && key.keyCode == 13) {
            var w = $('#width').val();
            $('#img_con img').width(w);
        } else if (type == "height" && key.keyCode == 13) {
            var h = $('#height').val();
            $('#img_con img').height(h);
        }
    }
    , setSize: function(type) {
        if(type == "show_width") {
            var get_width = $('#width').val();
            editImg.style.width = get_width +'px'; // $('#img_con img').width(get_width);
        } else if(type == "show_height") {
            var get_height = $('#height').val();
            editImg.style.height = get_height +'px'; // $('#img_con img').height(get_height);
        }
    }

    , setRotation: function(type) {
        var applyValue = "";
        var rotate = parseInt(this.getTransform("rotate"), 10) || 0;
        if(type == "left") {
            rotate -= 90;
        } else {
            rotate += 90;
        }
        applyValue += "rotate(" + rotate%360 + "deg)";

        var scaleX = parseInt(this.getTransform("scaleX"), 10);
        if(!isNaN(scaleX)) {
            applyValue += " scaleX(" + scaleX + ")";
        }

        var scaleY = parseInt(this.getTransform("scaleY"), 10);
        if(!isNaN(scaleY)) {
            applyValue += " scaleY(" + scaleY + ")";
        }

        editImg.style.transform = applyValue;
    }

    , setFlip: function(type0, type1) {
        var applyValue = "";

        var scale0 = parseInt(this.getTransform("scale" + type0), 10);
        if(isNaN(scale0) || scale0 == 1) {
            scale0 = -1;
        } else {
            scale0 = 1;
        }
        applyValue = "scale" + type0 +"(" + scale0 + ")";

        var scale1 = parseInt(this.getTransform("scale" + type1), 10);
        if(!isNaN(scale1)) {
            applyValue += " scale" + type1 + "(" + scale1 + ")";
        }

        var rotate = parseInt(this.getTransform("rotate"), 10);
        if(!isNaN(rotate)) {
            applyValue += " rotate(" + rotate + "deg)";
        }
        editImg.style.transform = applyValue;
    }

    , setTransform: function() {

    }

    , getTransform: function(property) {
        var values = editImg.style.transform.split(")");
        for(var key in values) {
            var val = values[key];
            var prop = val.split("(");
            if (prop[0].trim() == property) {
                return prop[1];
            }
        }
        return "";
    }

    , letCrop: function(){

    }

    , setFilterBlur: function () {
        var applyValue = "";
        var current_value = $('#blur').val();
        applyValue = "blur(" + current_value + "px)";

        var brightness = $('#brightness').val();
        if(!isNaN(brightness)){
            applyValue += "brightness(" + ( brightness ) / 10 + ")";
        }

        var contrast = $('#contrast').val();
        if(!isNaN(contrast)){
            applyValue += "contrast(" + ( contrast ) / 10 + ")";
        }

        editImg.style.filter = applyValue;
    }

    , setFilterBright: function () {
        var applyValue = "";
        var current_value = ($('#brightness').val()) / 10;
        applyValue = "brightness(" + current_value + ")";

        var blur = $('#blur').val();
        if(!isNaN(blur)){
            applyValue += "blur(" + blur + "px)";
        }

        var contrast = $('#contrast').val();
        if(!isNaN(contrast)){
            applyValue += "contrast(" + ( contrast ) / 10 + ")";
        }

        editImg.style.filter = applyValue;
    }

    , setFilterContrast: function(){
        var applyValue = "";
        var current_value = $('#contrast').val();
        applyValue = "contrast(" + ( current_value ) / 10 + ")";

        var brightness = $('#brightness').val();
        if(!isNaN(brightness)){
            applyValue += "brightness(" + ( brightness ) / 10 + ")";
        }

        var blur = $('#blur').val();
        if(!isNaN(blur)){
            applyValue += "blur(" + blur + "px)";
        }

        editImg.style.filter = applyValue;
    }

    , setZooming: function (type) {
        var now_zoom = parseInt(this.getZooming(),10) || 0;

        if(type == "zoom_in"){
            now_zoom += 10;
        } else if(type == "zoom_out") {
            now_zoom -= 10;
            if(now_zoom == 0){
                return 0;
            }
        }
        $('#imageRatio').text(now_zoom + "%");
        editImg.style.zoom = now_zoom + "%";
    }

    , getZooming: function () {
        var values = editImg.style.zoom.split("%");
        if (!isNaN(values[0])){
            return values[0];
        }
        return "";
    }

}

$(function() {
    imageEditor.init();
});

var imageEditor = {

    editImg: ""

    , init: function() {
        editImg = $('#img_con img')[0];
        this.registEvent();

        var w = $('#img_con img').width();
        $('#width').val(w);
        var h = $('#img_con img').height();
        $('#height').val(h);

        editImg.style.width = w +'px';
        editImg.style.height = h +'px';
    }

    , registEvent: function() {
        var _this = this;
        $('#show_width').on('click', function () {
            var get_width = $('#width').val();
            $('#img_con img').width(get_width);
        });
        $('#show_height').on('click', function () {
            var get_height = $('#height').val();
            $('#img_con img').height(get_height);
        });

        $("#width").keydown(function(key) {
            if (key.keyCode == 13) {
                $('#img_con img').width($('#width').val());
            }
        });

        $("#height").keydown(function(key) {
            if (key.keyCode == 13) {
                $('#img_con img').height($('#height').val());
            }
        });
///////////////////////////////////// 좌측 90 우측 90

        $('#left').on('click', function () {
            _this.setRotation("left");
        });

        $('#right').on('click', function () {
            _this.setRotation("right");
        });
/////////////////////////////////////// 좌우반전 상하반전
        $('#lr_flip').on('click', function () {
            console.log("lr_flip");
            _this.setFlip("X", "Y");
        });

        $('#td_flip').on('click', function () {
            console.log("td_flip");
            _this.setFlip("Y", "X");
        });
    }

    , setSize: function(type) {
    }

    , setRotation: function(type) {
        var applyValue = "";
        var rotate = parseInt(this.getTransform("rotate"), 10) || 0;
        if(type == "left") {
            rotate -= 90;
        } else {
            rotate += 90;
        }
        applyValue += "rotate(" + rotate + "deg)";

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
        console.log("scale0: " + scale0)
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
        console.log(applyValue);
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
}

$(function() {
    imageEditor.init();
});

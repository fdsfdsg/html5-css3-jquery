<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>카드뒤집기</title>
</head>
<body>
    <script>
        var count= 0;
        var card = ["front", "front", "front", "front", "front", "front", "front", "front"];
        var isallflip = function (currentcard) { return currentcard === "front"; }
        
        function flip() { 
            var ran = Math.floor(Math.random()*8);
            if(ran === card.length-1){
                if(card[card.length-1] === "back"){
                    card[card.length-1] = "front";
                    return;
                }
                if(card[card.length-1] === "front"){
                    card[card.length-1] = "back";
                    return;
                }
            }
            if(card[ran] === "front"){
                card[ran] = "back";
                if(card[ran+1] === "front"){
                    card[ran+1] = "back";
                    return;
                }
                if(card[ran+1] === "back"){
                    card[ran+1] = "front";
                    return;
                } 
            }
            if(card[ran] === "back"){
                card[ran] = "front";
                if(card[ran+1] === "front"){
                    card[ran+1] = "back";
                    return;
                }
                if(card[ran+1] === "back"){
                    card[ran+1] = "front";
                    return;
                }
            }
        }

        while(card.some(isallflip)){
            flip();
            document.write("<div>"+(++count)+"</div>","<div>"+card+"</div>");
        }
        
   </script>
</body>
</html>

var canvas = new fabric.Canvas("myCanvas")
var Block_W = 60;
var Block_H = 60;
var playerX = 10;
var playerY = 10;
var playerObj = "";
var block_obj = "";
function player_upd(){
    fabric.Image.fromURL("player.png", function(o_img){
        playerObj = o_img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(120);
        playerObj.set({top: playerY, left: playerX});
        canvas.add(playerObj)
    })
}
player_upd();
function new_img(get_img){
    fabric.Image.fromURL(get_img, function(o_img){
        block_obj = o_img;
        block_obj.scaleToWidth(Block_W);
        block_obj.scaleToHeight(Block_H);
        block_obj.set({top: playerY, left: playerX});
        canvas.add(block_obj);
    })
}
window.addEventListener("keydown" ,my_keydown);
function my_keydown(e){
    keyPress = e.keyCode;
    console.log(keyPress);
    if(keyPress == "84"){
        new_img("trunk.jpg")
    }
    if(keyPress == "83"){
        new_img("cloud.jpg")
    }
    if(keyPress == "71"){
        new_img("ground.png")
    }
    if(keyPress == "78"){
        new_img("roof.jpg")
    }
    if(keyPress == "85"){
        new_img("unique.png")
    }
    if(keyPress == "66"){
        new_img("wall.jpg")
    }
    if(keyPress == "89"){
        new_img("yellow_wall.png")
    }
    if(e.shiftKey == true && keyPress == "38"){
        Block_H = Block_H + 5;
        document.getElementById("Height").innerHTML = Block_H;
    }
    if(e.shiftKey == true && keyPress == "40"){
        Block_H = Block_H - 5;
        document.getElementById("Height").innerHTML = Block_H;
    }
    if(e.shiftKey == true && keyPress == "37"){
        Block_W = Block_W - 5;
        document.getElementById("Width").innerHTML = Block_W;
    }
    if(e.shiftKey == true && keyPress == "39"){
        Block_W = Block_W + 5;
        document.getElementById("Width").innerHTML = Block_W;
    }
    if(keyPress == "38"){
        canvas.remove(playerObj);
        playerY = playerY - 10;
        player_upd();
    }
    if(keyPress == "40"){
        canvas.remove(playerObj);
        playerY = playerY + 10;
        player_upd();
    }
    if(keyPress == "37"){
        canvas.remove(playerObj);
        playerX = playerX - 10;
        player_upd();
    }
    if(keyPress == "39"){
        canvas.remove(playerObj);
        playerX = playerX + 10;
        player_upd();
    }
}   
/*made by Rick Bieze */
//this is the class used to animate the zombie on the home screen, to create canvases and the GUI
var i = 0;
//this is used for the animated zombie on the startScreen
function animate(obj){
		var objects = obj;
		var aantalPlaatjes = objects.pics;
		var animate = objects.pics;
		var sprite = objects.spriteID;
		var imageID = objects.div;	
		var arize = document.getElementById(imageID);		
		this.animateThis = function(){ setTimeout(function () {  
		arize.src = animate[i];
		i++;             
		if (i < aantalPlaatjes.length) 
		{   
			show(imageID,sprite);
			return;
			if (i== aantalPlaatjes.length -1)
			{
				i=0;
			}
				
		}	
   }, 50)
		}
	}
//dit object wordt gemaakt zodat de juiste variabelen goed toegankelijk zijn voor de animatie class 
function animateObject(div,Pics, spriteID){
	this.div = div;
	this.pics = Pics;
	this.spriteID = spriteID;
}

// zorgt voor het opzetten van de animatie
function show(id, sprites)
{
	var appear = ["GameSpritesZombie/appear/appear_1.png","GameSpritesZombie/appear/appear_2.png","GameSpritesZombie/appear/appear_3.png","GameSpritesZombie/appear/appear_4.png","GameSpritesZombie/appear/appear_5.png","GameSpritesZombie/appear/appear_6.png","GameSpritesZombie/appear/appear_7.png","GameSpritesZombie/appear/appear_8.png","GameSpritesZombie/appear/appear_9.png","GameSpritesZombie/appear/appear_10.png","GameSpritesZombie/appear/appear_11.png"];
	var die = ["GameSpritesZombie/die/die_1.png","GameSpritesZombie/die/die_2.png","GameSpritesZombie/die/die_3.png","GameSpritesZombie/die/die_4.png","GameSpritesZombie/die/die_5.png","GameSpritesZombie/die/die_6.png","GameSpritesZombie/die/die_7.png","GameSpritesZombie/die/die_8.png"];
	var slap =["GameSpritesZombie/attack/hit_1.png","GameSpritesZombie/attack/hit_2.png","GameSpritesZombie/attack/hit_3.png","GameSpritesZombie/attack/hit_4.png","GameSpritesZombie/attack/hit_5.png","GameSpritesZombie/attack/hit_6.png","GameSpritesZombie/attack/hit_7.png"];
	var walk =["GameSpritesZombie/walk/go_1.png","GameSpritesZombie/walk/go_2.png","GameSpritesZombie/walk/go_3.png","GameSpritesZombie/walk/go_4.png","GameSpritesZombie/walk/go_5.png","GameSpritesZombie/walk/go_6.png","GameSpritesZombie/walk/go_7.png","GameSpritesZombie/walk/go_8.png","GameSpritesZombie/walk/go_9.png","GameSpritesZombie/walk/go_10.png"];
	var idle =["GameSpritesZombie/idle/idle_1.png","GameSpritesZombie/idle/idle_2.png","GameSpritesZombie/idle/idle_3.png","GameSpritesZombie/idle/idle_4.png","GameSpritesZombie/idle/idle_5.png","GameSpritesZombie/idle/idle_6.png"];
	var spriteID;
	var animationSprites;
	switch(sprites) {
    case "appear":
        animationSprites = appear;
		spriteID = "appear";
        break;
    case "die":
        animationSprites = die;
		spriteID = "die";
        break;
	case "slap":
		animationSprites = slap;
		spriteID = "slap";
		break;
	case "walk":
		animationSprites = walk;
		spriteID = "walk";
        break;
    default:
		animationSprites = idle;
		spriteID = "idle";
}
	var imgID = id;
	var anim = new animateObject(imgID,animationSprites, spriteID)
	var animation = new animate(anim);
	animation.animateThis();	
}
function showings(){
	var showZombieTwo = new show("imgs", "appear");
}
//this is a jQuery function that will hide a selected html element
function hiding(id) {
	var select = id;
$(document).ready(function(){
    $("#" + select).hide(500);        
    });
};
//this is a jQuery function that will show a selected html element
function divShower(id) {
	var select = id;
$(document).ready(function(){
    $("#" + select).show(1000);        
    });
};
//this function can be used to create a new canvas
function createCanvas(id,width,height,position,border,background,backgroundImage){		
	this.canvas = document.createElement('canvas');
	this.canvas.id = id
	this.canvas.width = width
	this.canvas.height = height
	this.canvas.style.position = position
	this.canvas.style.border = border
	this.canvas.style.background = background
	this.canvas.style.backgroundImage = backgroundImage
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(this.canvas);
	return this.canvas
}
//this function sets a new GUI item, such as the health bars and other elements from the GUI
function setGUIItem(img,x,y){
	this.pos =[]
	this.pos = {x:x,y:y}
	this.GUIItem = new Image()
	this.GUIItem.onload = function(){
		
	}
	this.GUIItem.src = img
}
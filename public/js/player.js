/*made by Rick Bieze */
//this is the class used to create the player
//create a new player and setting all values for the player
function Player(name,weapon){
	this.playerImg = new Image();
	this.playerImg.onload = function(){
		
	};
	this.playerImg.src = "../public/GameSpritesZombie/player.png";
	this.currentWeapon = weapon.setWeapon();
	this.name = name;
	this.health = 100;
	this.alive = true
	this.perks = [];
	this.bullets = [];
	this.zombieKills = 0;
	this.score = 50000
	this.position =[];
	//this.direction = false;
	this.powerUp = false;
	this.shot = false;
	this.speed =2;
	this.energy = {energy:1000,regen:0.2};
	this.cube = {h:64,w:64};
	this.previousDirection;
	this.frameDirection
	this.moving = false
	this.sounds = new loadSounds()
}
// set a position to the player,so that it can be rendered
Player.prototype.spawnPlayer = function(startX, startY) {
    this.position = {x: startX, y: startY};
};
//this function handles the movement of the player, changing the x and y according to the given directions
Player.prototype.movePlayer = function(direction) {
		this.moveDirection = direction
        if(this.moveDirection === 0)
		{
			this.position.x += +this.speed
			this.frameDirection = 3
			this.moving = false
		}
        if(this.moveDirection === 1) 
		{
			this.position.x += -this.speed
			this.frameDirection = 1
			this.moving = false
		}
        if(this.moveDirection === 2)
		{
			this.position.y += -this.speed	
			this.frameDirection = 0
			this.moving = false
		}
        if(this.moveDirection === 3)
		{
			this.position.y += +this.speed
			this.frameDirection = 2
			this.moving = false
		}
		
};
//this will speed up the player if the player has enough enery to do so
Player.prototype.run = function(){
	if(this.energy.energy >10)
	{

		this.energy.energy --;
		this.speed =4;
	}
	if(this.energy.energy <10 )
	{
		this.speed =2;
	}
	return
}
//when this function is called, the player will shoot one bullet, by creating a bullet, the movement of this bullet is handled in the game class
//it has a setTimeout function so that the player cant spam bullets, making the gun more realistic
Player.prototype.shoot = function(){
	this.bulletDirection = setDirection(this.direction)
	shootWait = function(){
		return this.shot = false
	}
		if(this.currentWeapon.ammo >=1)
		{
			this.pistol = new Audio("sound/lmgShot.wav");
			this.pistol.volume = 0.1
			this.pistol.play()
			this.currentWeapon.ammo--;
			this.bullet = new createBullet(this.position.x +30, this.position.y +35, this.bulletDirection)
			this.bullets.push(this.bullet)
			setTimeout(shootWait,this.currentWeapon.rateOfFire) 
		}
		else{
			this.sounds.noAmmo.play()
			this.shot = false
			return this.shot
		}
}
//regenerate the players energy and health
Player.prototype.regenerate = function(){
	if(this.health <100)
	{
		this.health +=0.05
	}
	if(this.energy.energy <1000)
	{
		this.energy.energy +=this.energy.regen
	}
}
//set the direction of the bullet, even if the player stands still it will remember his previous direction and therefore shoot at the right direction
function setDirection(d){
	this.d1 = d
	switch(this.d1) {
    case 0:
        this.previousDirection = 0;
        break;
    case 1:
        this.previousDirection = 1;
        break;
	case 2:
		this.previousDirection = 2;
		break;
	case 3:
		this.previousDirection = 3;
        break;
    default:
	}
	return this.previousDirection
}
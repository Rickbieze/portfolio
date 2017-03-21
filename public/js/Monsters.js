/*made by Rick Bieze */
//this is the class used to create zombies
//create a monster object
function Monster(weapon){
	this.monsterImg = new Image();
	this.monsterImg.onload = function(){	
	};
	this.monsterImg.src = "../public/GameSpritesZombie/zombiesss.png"
	this.Weapon =weapon;
	this.currentWeapon = this.Weapon.setWeapon();
	this.name = "zombie";
	this.health = 10;
	this.position =[];
	this.direction;
	this.sound = this.setZombieSound()
	this.DropPowerUp = this.setPowerUp();
	this.ZframeDirection
}
//this gives each zombie different sounds, so that there is some variety in the sounds
Monster.prototype.setZombieSound = function(){
	this.sounds = []
	this.attack = new Audio()
	this.attack.volume = 1.0
	this.grunt = new Audio()
	this.grunt.volume = 0.1
	this.death = new Audio
	this.death.volume = 0.2
	var rand = Math.floor(Math.random() *7 +1);
	var attackRand =Math.floor(Math.random() *21 +1);
	var deathRand =Math.floor(Math.random() *9 +1);
	this.attack.src = "../public/sound/zombies/attack_"+ attackRand +".mp3"
	this.grunt.src = 	"../public/sound/zombies/sprint"+rand+".mp3"
	this.death.src = "../public/sound/zombies/death_0"+ deathRand +".mp3"
	this.sounds = {attack:this.attack,grunt:this.grunt,death:this.death}
	return this.sounds
}
//sets a location for each zombie, and checks wether a zombieBoss will be spawned, if so
//the values are increased and the image of the zombie is changed to a boss zombie
Monster.prototype.spawnZombie = function() {
	this.pos = setPos()
    this.position = {x: this.pos.x, y: this.pos.y};
	this.boss = setBoss()
	if(this.boss)
	{
		this.name = this.boss.zName
		this.health = this.boss.hp
		this.DropPowerUp = this.boss.power
		this.monsterImg.src = this.boss.img
	}
	else return
};
//creates a boss zombie with some random numbers, spawning a boss zombie if this returns true
function setBoss(){
	var bossRandom1 = Math.floor(Math.random() *1000 +1);
	var bossRandom2 = Math.floor(Math.random() *1000 +1);	
	if(bossRandom1 < bossRandom2 && bossRandom1 > 900)
	{
		this.zName = "boss"
		this.hp = 2000
		this.img = "../public/GameSpritesZombie/zombieBoss.png"
		this.power = "ammo"
		return this.bossStats = {name:this.zName,hp:this.hp,img:this.img,power:this.power}
	}
	else return false
}
//set a position for each zombie, at fixed spawnpoints
function setPos(){
	var selectSide = Math.floor(Math.random() *4 +1);
	this.x
	this.y
	switch(selectSide) {
    case 1:
        this.y =Math.floor(Math.random()*(270-300+1)+300);
		this.x =Math.floor(Math.random() *4 +1);
        break;
    case 2:
        this.x =Math.floor(Math.random()*(620-670+1)+670);
		this.y =Math.floor(Math.random() *4 +1);
        break;
	case 3:
		this.x =Math.floor(Math.random()*(1300-1305+1)+1305);
		this.y =Math.floor(Math.random()*(270-300+1)+300);
		break;
	case 4:
		this.x =Math.floor(Math.random()*(620-670+1)+670);
		this.y =Math.floor(Math.random()*(600-620+1)+620);
        break;
    default:
		this.y =Math.floor(Math.random()*(270-300+1)+300);
		this.x =Math.floor(Math.random() *4 +1);	
	}
	this.pos = {x:this.x, y:this.y}
	return this.pos
}
//this handles the movement of the zombie, much like the player object, the only difference is that the zombie has 8 directions instead of 4
Monster.prototype.moveZombie = function() { 
		this.sound.grunt.play()
        if(this.direction === 0)
		{
			this.position.x += +1
			this.ZframeDirection = 3
		}
        if(this.direction === 1) 
		{
			this.position.x += -1
			this.ZframeDirection = 1
		}
        if(this.direction === 2)
		{
			this.position.y += -1
			this.ZframeDirection = 0
		}
        if(this.direction === 3)
		{
			this.position.y += +1
			this.ZframeDirection = 2
		}
		if(this.direction === 4)
		{
			this.position.x += -1
			this.position.y += -1
			this.ZframeDirection = 1
		}
		if(this.direction === 5)
		{
			this.position.x += -1
			this.position.y += +1
			this.ZframeDirection = 1
			
		}
		if(this.direction === 6)
		{
			this.position.x += +1
			this.position.y += +1
			this.ZframeDirection = 3
		}
		if(this.direction === 7)
		{
			this.position.x += +1
			this.position.y += -1
			this.ZframeDirection = 3
		}
};
//checks if the zombie will get a powerup if the zombie is killed
Monster.prototype.setPowerUp = function(){
		var rand = Math.floor(Math.random() *1000 +1);
		if(rand === 1000 || rand >777 &&  rand< 798){
			return this.DropPowerUp ="nuke"
		}
		if(rand >0 && rand<5 || rand >222 && rand < 234)
		{
			return this.DropPowerUp = "ammo"
			
		}
		if(rand >100 && rand < 111 || rand > 666 && rand < 677)
		{
			return this.DropPowerUp = "instaKill"
			
		}
		else{
			return this.DropPowerUp = false;		
		}
}
//this will create the powerup, making it able to be rendered by the game class
function createPowerUp(power,x,y){
	this.power = power
	this.x = x
	this.y = y
	this.img = selectPowerUpImg(this.power)

}
//selects the right image for the powerup
function selectPowerUpImg(power){
	this.power = power
	this.selectedImage = new Image()
	this.selectedImage.onload = function(){	
	};

	if(this.power == "nuke")
	{
		this.selectedImage.src = "../public/GameSpritesZombie/nuke.png"
		return this.selectedImage
	}
		if(this.power == "ammo")
	{
		this.selectedImage.src = "../public/GameSpritesZombie/maxAmmo.png"
		return this.selectedImage
	}
			if(this.power == "instaKill")
	{
		this.selectedImage.src = "../public/GameSpritesZombie/instaKill.png"
		return this.selectedImage
	}
}
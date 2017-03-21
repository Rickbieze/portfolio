/*made by Rick Bieze */
//this is the class used to create Weapons
//create a new weapon object
function weapon(type){
	this.type = type;
	this.weapons = [];
	this.weapons = this.setWeapon()
}
//create a weapon that players can buy, this takes a weapon object and uses the given position so that it can be rendered in game
function setBuyableWeapon(weapon,x,y){
	this.weapon = weapon
	this.pos = [];
	this.pos ={x:x,y:y}
}
//this function sets the weapon to a player, this is used when a player is created and when a weapon is purchased
weapon.prototype.setWeapon = function(){
	this.bImage = new Image()
	this.bImage.onload = function(){
		
	};
	this.weaponImg = new Image()
	this.weaponImg.onload = function(){
		
	};
	if(this.type == "zombie")
	{
		this.weaponImg.src = ""
		this.weapons = {name: "slapper", dammage: 35, ammo: 1, bSpeed:0};
		return this.weapons
	}
	if(this.type == "machineGun")
	{
		this.weaponImg.src = "GameSpritesZombie/machineGun.png"
		this.bImage.src = "GameSpritesZombie/redBullet.png"
		this.weapons = {name: "machine gun", dammage: 10, ammo: 1000, rateOfFire: 70, img: this.bImage,wImg: this.weaponImg, maxAmmo: 1000, price:2000,upgradePrice:4500,upgrade:false}
		return this.weapons
	}
		if(this.type == "pistol")
	{
		this.weaponImg.src = "GameSpritesZombie/machineGun.png"
		this.bImage.src = "GameSpritesZombie/greenBullet.png"
		this.weapons = {name: "pistol", dammage: 5, ammo: 0,rateOfFire: 150, img: this.bImage,wImg:this.weaponImg, maxAmmo: 500, price:900,upgradePrice:2000,upgrade:false };
		return this.weapons
	}
	if(this.type == "LMG")
	{
		this.weaponImg.src = "GameSpritesZombie/lmg.png"
		this.bImage.src = "GameSpritesZombie/blueBullet.png"
		this.weapons = {name: "Light machine gun", dammage:50, ammo: 2000,rateOfFire: 200, img: this.bImage,wImg: this.weaponImg, maxAmmo: 2000, price:5000,upgradePrice:4500,upgrade:false};
		return this.weapons
	}
}
//this function creates a new bullet, this is called when a player shoots
function createBullet(x,y,direction){
	this.positions =[]
	this.positions = {x:x,y:y,direction:direction}
}
//this moves the bullet in a straigt line, with a speed of 10px/update
createBullet.prototype.moveBullet = function(direction){
		this.direction = direction;
        if(this.direction === 0)
		{
			this.positions.x += +10
		}
        if(this.direction === 1) 
		{
			this.positions.x += -10
		}
        if(this.direction === 2)
		{
			this.positions.y += -10
		}
        if(this.direction === 3)
		{
			this.positions.y += +10 
		}
}
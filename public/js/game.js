/*made by Rick Bieze */
//main game class
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
/* initializing critical game components
-creating a new player object
-setting the canvas to the right size
-setting the current wave to 1 as the game starts
-create a array for the zombies
*/ 
function playGame(){
	this.waveWait = false//setting up a new game
	this.powerOn = false
	this.shot = false
	this.sounds = new loadSounds()
	this.pause = false;
	this.currentWave = 0;
	this.maxWaves = 100;
	this.maxZombies = 10;
	this.zombiesKilledThisWave=0;
	this.zombies = [];
	this.powerUpsInGame = [];
	//setting up the player
	this.player = new Player("Rick", new weapon("pistol"));
	this.player.spawnPlayer(200,200);
	//setting up the canvases
	this.map = new createCanvas("gameMap", 1360,620,"absolute", "", "", "url('GameSpritesZombie/blackOut.png')")
	this.ctx = map.getContext("2d");
	this.stats = new createCanvas("statsCanvas",300,150,"relative","","", "url('GameSpritesZombie/scoreBackGround.png')")
	this.ctxStats = stats.getContext("2d");
	this.statusScreen = new createCanvas("status",1360,620,"relative","", "" , "url('GameSpritesZombie/pausedScreen.png')")
	this.ctxStatus = statusScreen.getContext("2d")
	this.waves = new createCanvas("waves", 1360,200,"absolute", "","","")
	this.ctxWave = waves.getContext("2d")
	hiding("status")
	hiding("waves")
	//setting up objects such as buyable items
	setObjects()
	createGUI()
	//starting the waves
	this.currentWave++;
	wave(currentWave);
	//starting game loop
	main();
}
//with this function certain objects are added in the beginning in the game such as perk machines and guns on the wall
function setObjects(){
	this.weapons = []//holds all buyable weapons in the game
	this.lmg = new setBuyableWeapon(new weapon("LMG"),730,590)
	this.pistol =new setBuyableWeapon(new weapon("pistol"),730,5)
	this.machineGun = new setBuyableWeapon(new weapon("machineGun"),500,5)
	this.weapons.push(this.pistol,this.machineGun,this.lmg)
	
	this.machines =[]//holds all perk machines in the game
	this.juggerNog = new PerkMachines("juggerNog", 1250,50)
	this.stamInUp = new PerkMachines("Stamin-Up", 500,500)
	this.machines.push(this.juggerNog,this.stamInUp)
	
	this.powerM = []
	this.powerMachine = new PerkMachines("power", 250,600)
	this.powerM.push(this.powerMachine)
}
//this function will create a "pack-a-punch" machine, which the player can use to upgrade weapons
function setPap(){
	if(this.player.health >101 && this.player.energy.regen == 0.9)//this is only created after the other two perks are unlocked
	{
		this.papMachine = new PerkMachines("papMachine", 100,500)
		this.machines.push(this.papMachine)
	}
}
//the set up for a simple GUI
function createGUI(){
	this.guiItems = []
	this.healthBar = new setGUIItem("GameSpritesZombie/healthBar.png",10,20)
	this.energyBar = new setGUIItem("GameSpritesZombie/energyBar.png", 10,40)
	this.points = new setGUIItem("GameSpritesZombie/points.png",10,60)
	this.guiItems.push(this.healthBar,this.energyBar,this.points)
}
// if all zombies are dead, a new wave is started 
function setNewWave(){
		this.showWave()
		this.setWave = function(){
		this.currentWave +=1;
		this.ctx.clearRect(0,0,1360,620);
		wave(this.currentWave)
		this.bullets = [];// to clear all bullets(to fix some graphical issues)
		this.zombiesKilledThisWave = 0
		}
		setTimeout(this.setWave,4000)   
}
//change the picture to the right backgroundImage 
function turnPowerOn(){
	this.map.style.backgroundImage = "url('GameSpritesZombie/canvasBackground.png')"	
}
//all this does is return true, so that a setTimeout will execute a short delay between waves
function bools(){
	if(this.zombies.length == 0)
	{
		return this.waveWait = true
	}
}
/* when a new wave is started, this function takes care of spawning 1 - 10 zombies according to the wave number
only 10 zombies can be in the room at the same time, to prevent the player from being overrun by too many zombies
zombies will get extremely powerfull later in the game, therefore if there are 50 extremely powerfull zombies the player will not survive
*/
function wave(wave){
	var totalZombies = wave;
	if(totalZombies>=0 && totalZombies <=10&& this.zombies.length <10){
		for(var i = 0; i < totalZombies; i++)
		{
			var zombie = new Monster(new weapon("zombie"));
			zombie.health = this.currentWave*10;
			this.zombies.push(zombie);
			this.zombies[i].spawnZombie();
		}
		return
	}
}
//this will spawn aditional zombies, if you managed to get past wave 10
function spawnZombies(){
	if(this.zombies.length <10)
	{
		if(this.currentWave >10 && this.zombiesKilledThisWave +10  < this.currentWave)
		{
			var zombie = new Monster(new weapon("zombie"));
			zombie.health = this.currentWave*10;
			zombie.spawnZombie();
			this.zombies.push(zombie);
		}
		return
	}
}
// pausing the game, by setting pause to true
function pausing(){
	//hiding("gameMap")
	hiding("statsCanvas")
	divShower("status")
		return this.pause = true;	
}
//unpausing the game by setting pause to false
function unpausing(){
	//divShower("gameMap")
	divShower("statsCanvas")
	hiding("status")
		return this.pause = false;
}
//shows the current wave as it starts
function showWave(){
	this.ctxWave.clearRect(0,0,1360,620);
	this.ctxWave.font="50px Goudy Old Style";
	this.ctxWave.fillStyle = "#650111"
	this.ctxWave.fillText("Wave: "+(this.currentWave +1) ,600,100);
	divShower("waves")
	this.resetScreen = function(){
		hiding("waves")
	}
	setTimeout(this.resetScreen,2000)
}
//kills all zombies on the map(for debugging purposes)
function killZombies(){
	for(var i = 0; i<this.zombies.length; i++)
	{
		this.zombies[i].health =0;
	}
}
//this will assign the perks to the player, if the player has purchased one
function perk(){
	if(this.player.perks.length!= 0)
	{
		for(var i =0; i<this.player.perks.length; i++)
		{
			
			if(this.player.perks[i].name == "Juggernog")
			{
				this.player.health = this.player.perks[i].health
			}
			if(this.player.perks[i].name == "Stamin-Up")
			{

				this.player.energy.regen = this.player.perks[i].regen
			}
			if(this.player.perks[i].name == "power")
			{
				this.powerOn = true
			}
			if(this.player.perks[i].name == "pap")
			{
				this.sounds.pap.play()
				this.player.currentWeapon.dammage =(this.player.currentWeapon.dammage*this.player.perks[i].dmg);
				this.player.currentWeapon.ammo = this.player.currentWeapon.maxAmmo
				this.player.currentWeapon.upgrade = true
			}
		}
	}
}
//this function checks for health of the zombies, deleting them if they are dead
//also checks health of the player, stopping the game if the player died
function checkHealth(){
	this.zombieDeath = new Audio("sound/zombies/death_10.mp3")
	//checks for the health of the zombies. if the zombie has a powerup, it is added to the powerUpsInGame, 
	//the player is then able to pick it up
	if(this.zombies.length!= 0)
	{	
		for(var i = 0; i<this.zombies.length; i++)
		{
			if(this.zombies[i].health <0 && this.zombies[i].DropPowerUp != false)
			{
				this.zombies[i].sounds.death.play()
				this.player.zombieKills++;
				this.zombiesKilledThisWave++;
				this.player.score+=50;
				this.ctx.clearRect(this.zombies[i].position.x ,this.zombies[i].position.y ,44,64);
				this.powerUp = new createPowerUp(this.zombies[i].DropPowerUp,this.zombies[i].position.x,this.zombies[i].position.y)
				this.powerUpsInGame.push(this.powerUp)
				this.zombies.splice(i,1);
				this.bools()
			}
			else if (this.zombies[i].health <0)
			{
				this.zombies[i].sounds.death.play()
				this.player.score+=50;
				this.player.zombieKills++;
				this.zombiesKilledThisWave++;
				this.ctx.clearRect(this.zombies[i].position.x ,this.zombies[i].position.y ,44,64);
				this.zombies.splice(i,1);
				this.bools()
			}
		}
	}
	//check if the player is dead, stopping the game if this is true
	if(this.player.health <1)
	{
		this.statusScreen.style.backgroundImage = "url('GameSpritesZombie/gameOver.png')"
		this.player.alive = false
		hiding("statsCanvas")
		this.ctxStatus.font="50px Goudy Old Style";
		this.ctxStatus.fillStyle = "#650111"
		this.ctxStatus.fillText(this.currentWave ,600,275);
		this.ctxStatus.fillText(this.player.score ,600,375)
		this.ctxStatus.fillText(this.player.zombieKills,600,463)
		divShower("status")
		this.playerScores = []
		this.playerScores = {name:this.player.name,wave:this.currentWave,points:this.player.score,zombiesKilled:this.player.zombieKills}
		highScores(this.playerScores)
		setTimeout(function(){ location.reload()},10000);
	}	
}
//this will check if the player has picked up a power up, and will execute the powerup
function checkPowerUps(){
	if(this.player.powerUp != false)
	{	
		if(this.player.powerUp === "nuke")
		{
			for(var i = 0; i<this.zombies.length; i++)
			{
				this.sounds.powerUp.play()
				this.sounds.explosion.play()
				this.sounds.nuke.play()
				this.zombies[i].health =-1;
			}
			this.player.powerUp = false;
		}
		if(this.player.powerUp === "instaKill")
		{
			for(var i = 0; i<this.zombies.length; i++)
			{
				this.sounds.instaKill.play()
				this.zombies[i].health =0.01;	
			}
			this.player.powerUp = false;
		}
		if(this.player.powerUp === "ammo")
		{
			this.sounds.maxAmmo.play()
			this.player.currentWeapon.ammo = this.player.currentWeapon.maxAmmo
			this.player.powerUp = false;
		}	
	}
	return
}
//this function handles the direction of all zombies, giving them a target(the player) and giving them the directions towards the player
function zombieDirectionSelector(){
	if(this.zombies.length!= 0)
	{
		this.targetX = this.player.position.x;
		this.targetY = this.player.position.y;
		for(var i=0; i<this.zombies.length; i++)
		{
			if(this.player.position.x < this.zombies[i].position.x)
			{
				this.zombies[i].direction = 1;//left
			}
			if(this.player.position.x > this.zombies[i].position.x)
			{
				this.zombies[i].direction = 0;//right
			}
			if(this.player.position.y < this.zombies[i].position.y)
			{
				this.zombies[i].direction = 2;//up
			}
			if(this.player.position.y > this.zombies[i].position.y)
			{
				this.zombies[i].direction = 3;//down
			}
			if(this.player.position.x < this.zombies[i].position.x && this.player.position.y < this.zombies[i].position.y)
			{
				this.zombies[i].direction = 4//
			}
			if(this.player.position.x < this.zombies[i].position.x && this.player.position.y > this.zombies[i].position.y)
			{
				this.zombies[i].direction = 5
			}
			if(this.player.position.x > this.zombies[i].position.x && this.player.position.y > this.zombies[i].position.y)
			{
				this.zombies[i].direction = 6
			}
			if(this.player.position.x > this.zombies[i].position.x && this.player.position.y < this.zombies[i].position.y)
			{
				this.zombies[i].direction = 7
			}
		}
	}
}
// check for collision by AABB
function collTest(){
	this.ctx.font="20px Georgia";
	//checks if the player is in range to buy a weapon and if the player can buy a weapon, if the player doesnt have enough money,the purchase will be denied and  a sound will be played
	for(var i = 0; i< this.weapons.length; i++)
	{
		if(this.player.position.x < this.weapons[i].pos.x + 150 && this.player.position.x + this.player.playerImg.width/9 > this.weapons[i].pos.x && this.player.position.y  < this.weapons[i].pos.y + 25 && this.player.position.y + this.player.playerImg.height/4 > this.weapons[i].pos.y)
		{
			this.ctx.fillText("press E to buy " + this.weapons[i].weapon.weapons.price + " upgraded ammo: " + this.weapons[i].weapon.weapons.upgradePrice ,600,500);
			if(69 in keysDown && this.player.currentWeapon.ammo != this.weapons[i].weapon.weapons.maxAmmo && this.weapons[i].weapon.weapons.price < this.player.score && this.player.currentWeapon.upgrade == false )
			{
				this.sounds.buy.play()
				this.player.score -= this.weapons[i].weapon.weapons.price
				this.player.currentWeapon = this.weapons[i].weapon.setWeapon()	
			}
			if(69 in keysDown && this.player.currentWeapon.ammo != this.weapons[i].weapon.weapons.maxAmmo && this.weapons[i].weapon.weapons.price < this.player.score && this.player.currentWeapon.name == this.weapons[i].weapon.weapons.name && this.player.currentWeapon.upgrade == true)
			{
				this.player.currentWeapon.ammo = this.player.currentWeapon.maxAmmo
				this.player.score -= this.weapons[i].weapon.weapons.upgradePrice
			}
			if(69 in keysDown && this.player.currentWeapon.ammo != this.weapons[i].weapon.weapons.maxAmmo && this.weapons[i].weapon.weapons.price < this.player.score && this.player.currentWeapon.upgrade == true )
			{
				this.sounds.buy.play()
				this.player.score -= this.weapons[i].weapon.weapons.price
				this.player.currentWeapon = this.weapons[i].weapon.setWeapon()	
			}
			if(69 in keysDown &&this.player.score < this.weapons[i].weapon.weapons.price)
			{
				this.sounds.noBuy.play()
			}
		}
	}
	//the player can only buy items if the power is turned on
	if(this.powerOn === true)
	{
		//check if the player is in range to buy a perk OR weaponupgrade(PAP)
		for(var i = 0; i< this.machines.length; i++)
		{
			if(this.player.position.x < this.machines[i].pos.x + 49 && this.player.position.x + 42 > this.machines[i].pos.x && this.player.position.y  < this.machines[i].pos.y + 18 && this.player.position.y + 64 > this.machines[i].pos.y)
			{
				this.ctx.fillText("press E to buy " +this.machines[i].perkMachine.price  ,600,500);
				if(69 in keysDown && this.machines[i].perkMachine.price < this.player.score && (this.player.currentWeapon.upgrade == false || this.player.health <=101 || this.player.energy.regen ==0.1))//(this.player.health <= 101 || this.player.energy.regen !=01 ))
				{
					this.sounds.buy.play()
					this.sounds.swallow.play()
					this.sounds.open.play()
					this.player.perks.push(this.machines[i].perkMachine)
					this.player.score -= this.machines[i].perkMachine.price
					perk()
					setPap()	
					console.log("setting pap")
					if(this.machines[i].perkMachine.name != "pap")
					{
						this.machines.splice(i,1)
					}	
				}
				else if(69 in keysDown && this.player.score < this.machines[i].perkMachine.price)
				{
					this.sounds.noBuy.play()
				}	
			}
		}
	}
	//checks if the player is in range of the power switch
	for(var i=0; i<this.powerM.length; i++)
	{
		if(this.player.position.x < this.powerM[i].pos.x + 49 && this.player.position.x + 42 > this.powerM[i].pos.x && this.player.position.y  < this.powerM[i].pos.y + 18 && this.player.position.y + 64 > this.powerM[i].pos.y)
		{
		this.ctx.fillText("press E to turn on power",600,500);
			if(69 in keysDown)// && this.powerM[i].perkMachine.price < this.player.score && (this.player.currentWeapon.upgrade == false || this.player.health <=101 || this.player.energy.regen ==0.1))//(this.player.health <= 101 || this.player.energy.regen !=01 ))
			{
				this.sounds.powerOn.play()
				this.sounds.elec.play()
				this.player.perks.push(this.powerM[i].perkMachine)
				this.player.score -= this.powerM[i].perkMachine.price
				perk()	
				turnPowerOn();
			}
		}
	}
	//check for collision between zombies and the player, zombies will push the player back and deal damage 
	for(var i = 0; i < this.zombies.length; i++)
	{
		
		if(this.player.position.x < this.zombies[i].position.x + this.player.playerImg.width/9-20 && this.player.position.x + this.player.playerImg.width/9-20> this.zombies[i].position.x && this.player.position.y  < this.zombies[i].position.y + this.player.playerImg.height/4-20 && this.player.position.y + this.player.playerImg.height/4-20 > this.zombies[i].position.y)
		{
			this.noContact = false
			this.player.speed = 1.5
			this.zombies[i].sounds.attack.play()
			if(this.zombies[i].direction == 0)
			{
				this.player.movePlayer(0)
			}
			if(this.zombies[i].direction == 1)
			{
				this.player.movePlayer(1)
			}
			if(this.zombies[i].direction == 2)
			{
				this.player.movePlayer(2)
			}
			if(this.zombies[i].direction == 3)
			{
				this.player.movePlayer(3)
			}
			this.player.health --;
		}
		this.noContact = true
	}
	//this checks for collision between bullets and zombies
	for (var j = 0; j< this.zombies.length; j++)
	{
		for(var a = 0; a<this.player.bullets.length;a++)
		{
			if(this.player.bullets[a].positions.x < this.zombies[j].position.x +this.player.playerImg.width/9-25 && this.player.bullets[a].positions.x +4 > this.zombies[j].position.x && this.player.bullets[a].positions.y < this.zombies[j].position.y +this.player.playerImg.height/4-20 && this.player.bullets[a].positions.y +7 > this.zombies[j].position.y)
			{
				this.hit = new Audio("sound/zombies/zombie_head_00.mp3")
				this.hit.volume = 0.1
				this.hit.play()
				this.zombies[j].health += - this.player.currentWeapon.dammage
				this.player.score +=1;
				this.player.bullets.splice(a,1);
			}
		}
	}
	//checks if the player is in range to pick up a power-up
	if(this.powerUpsInGame.length != -1)
	{
		for(var i = 0; i<this.powerUpsInGame.length; i++)
		{
			if(this.player.position.x < this.powerUpsInGame[i].x + 32 && this.player.position.x + 32 > this.powerUpsInGame[i].x && this.player.position.y  < this.powerUpsInGame[i].y + 32 && this.player.position.y + 32 > this.powerUpsInGame[i].y)
			{
				this.player.powerUp = this.powerUpsInGame[i].power
				//this.ctx.clearRect(this.powerUpsInGame[i].x ,this.powerUpsInGame[i].y ,32,32);
				this.powerUpsInGame.splice(i,1)
			}
		}	
	}
	//check if player is trying to move out of the canvas
	if(this.player.position.x <0)
	{
		this.player.movePlayer(0);
	}
	if(this.player.position.x >1300)
	{
		this.player.movePlayer(1)
	}
	if(this.player.position.y <0)
	{
		this.player.movePlayer(3)
	}
	if(this.player.position.y > 550)
	{
		this.player.movePlayer(2)
	}
	//checks if bullets are outside of the map, and if so they will be deleted from the game
	for(var i = 0; i<this.player.bullets.length; i++)
	{
		if(this.player.bullets[i].positions.x <0 || this.player.bullets[i].positions.x > 1360  || this.player.bullets[i].positions.y <0 || this.player.bullets[i].positions.y > 620 )
		{
			this.player.bullets.splice(i,1);
		}
	}
}
/* 
all players,zombies and other objects are rendered here
first the images are drawn on the screen, after this, a square around the objects are cleared to simulate the correct movement and stop the canvas from filling up with pictures
*/
this.moveCounter = 0
this.zMovecounter = 0
function render(){
	ctx.clearRect(0,0,1360,620);
	//draws the player
	if(this.player.alive == true){	
		this.frameWidth = this.player.playerImg.width/9
		this.frameHeight = this.player.playerImg.height/4
		this.frameDirection = this.player.frameDirection
		this.move = Math.floor(this.moveCounter) % 9
		this.ctx.drawImage(this.player.playerImg,this.move*frameWidth,this.frameDirection*frameHeight,this.frameWidth,frameHeight,this.player.position.x,this.player.position.y,this.player.playerImg.width/9,this.player.playerImg.height/4 );
	}
	//draws the zombies
	if(this.zombies.length != -1){
		for(var i = 0; i<this.zombies.length; i++)
		{
			if(this.zombies[i].direction == false || this.zombies[i].direction != false)
			{
				this.ZframeWidth = this.player.playerImg.width/9
				this.ZframeHeight = this.player.playerImg.height/4
				this.ZframeDirection = this.zombies[i].ZframeDirection
				this.Zmove = Math.floor(this.zMovecounter) % 9
				this.ctx.drawImage(this.zombies[i].monsterImg,this.Zmove*ZframeWidth,this.ZframeDirection*ZframeHeight,this.ZframeWidth,ZframeHeight,this.zombies[i].position.x,this.zombies[i].position.y,this.zombies[i].monsterImg.width/9,this.zombies[i].monsterImg.height/4 );
			}	
		}
	}
	//draw the bullets
	if(this.player.bullets.length != -1){
		for(var i = 0; i<this.player.bullets.length; i++)
		{
			this.ctx.drawImage(this.player.currentWeapon.img, this.player.bullets[i].positions.x, this.player.bullets[i].positions.y );
		}
	}
	//draw the GUI
	if(this.guiItems.length!= -1)
	{
		ctxStats.clearRect(0,0,1360,200);
		for(var i = 0; i<this.guiItems.length; i++)
		{
			ctxStats.drawImage(this.guiItems[i].GUIItem,this.guiItems[i].pos.x,this.guiItems[i].pos.y)
		}
		if(this.player.health >0 || this.player.energy >0)
		{
			if(this.player.health > 101)
			{
				ctxStats.rect(33,24,(this.player.health/3),4)
			}
			else{
				ctxStats.rect(33,24,this.player.health,4)
			}
			ctxStats.rect(33,44,(this.player.energy.energy/10),4)
			
			ctxStats.fillStyle ="green"
			ctxStats.fill();
			ctxStats.clearRect(33+this.player.health,24,100 ,4)
			ctxStats.clearRect(33+(this.player.energy.energy/10),44,100 ,4)
		}
	}
	ctxStats.font="20px Georgia";
	ctxStats.fillStyle = "black"
	ctxStats.fillText(this.player.score,30,74)
	ctxStats.fillText("Wave: " + this.currentWave +"/" + this.maxWaves,30,94)
	ctxStats.fillText(this.player.currentWeapon.name + " " + this.player.currentWeapon.ammo + "/" +this.player.currentWeapon.maxAmmo ,30,114);
	ctxStats.fillText("zombies left: " + (this.currentWave-this.zombiesKilledThisWave),30,134);
	//if the player has a perk the logo will be drawn
	if(this.player.perks.length!= 0)
	{
		for(var i = 0; i<this.player.perks.length; i++)
		{
			ctxStats.drawImage(this.player.perks[i].logo,this.player.perks[i].x,this.player.perks[i].y)
		}
	}
	//draw the power ups that are dropped by the zombies
	if(this.powerUpsInGame.length != -1)
	{
		for (var i = 0; i<this.powerUpsInGame.length; i++)
		{
			this.ctx.drawImage(this.powerUpsInGame[i].img,this.powerUpsInGame[i].x,this.powerUpsInGame[i].y)
		}
	}
	//draw the weapons on the wall
	for(var i = 0; i<this.weapons.length; i++)
	{
		this.ctx.drawImage(this.weapons[i].weapon.weapons.wImg,this.weapons[i].pos.x,this.weapons[i].pos.y)
	}
	//draw the perk machines and pap machine
	for(var i = 0; i<this.machines.length; i++)
	{
		this.ctx.drawImage(this.machines[i].perkMachine.img,this.machines[i].pos.x,this.machines[i].pos.y)
	}
	//draws the power lever
	for(var i = 0; i<this.powerM.length; i++)
	{
		this.ctx.drawImage(this.powerM[i].perkMachine.img,this.powerM[i].pos.x,this.powerM[i].pos.y)
	}
	return
}

function highScores(scores){
	this.scores = scores
	var json = JSON.stringify(this.scores);
	localStorage.setItem('scores', JSON.stringify(this.scores));
}
// creating a array for handling keyboard input
var keysDown = {};

//add EventListeners, also for handling user input
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	if(this.player.alive == true)
	{
		this.player.speed = 2
		delete keysDown[e.keyCode];
	}
	
}, false);
//this function will update the game, by getting the user input and calling all critical game methods 
function update() {
	if(this.player.alive == true)
	{
		if(this.noContact == true)
		{
			this.player.moving = true
		if (38 in keysDown) { // Player holding up
			this.player.movePlayer(2);
			this.player.direction = 2
			this.player.moving = false
		}
		if (40 in keysDown) { // Player holding down
			this.player.movePlayer(3);
			this.player.direction = 3
			this.player.moving = false
		}
		if (37 in keysDown) { // Player holding left
			this.player.movePlayer(1);
			this.player.direction = 1
			this.player.moving = false
		}
		if (39 in keysDown) { // Player holding right
			this.player.movePlayer(0);
			this.player.direction = 0
			this.player.moving = false
		}
		
		}
		if (32 in keysDown) {
			if(this.player.speed == 2 && this.shot == false)
			{
				this.shot = true
				this.player.shoot()
			}
			if(this.player.currentWeapon.ammo <=0)
			{
				this.shot = false
			}
		}
		if (27 in keysDown) { // Player holding escape
			pausing();
		}
		if (16 in keysDown) { // Player holding escape
			player.run();
			this.moveCounter += 0.8
		}
		if(this.player.moving == false)
		{
			this.moveCounter += 0.4
		}
		this.zMovecounter += 0.4
		render();
		collTest();	
		checkHealth()
		checkPowerUps()
		if(this.zombies.length <10)
		{
			if(this.currentWave >10 && this.zombiesKilledThisWave +10  < this.currentWave)
			{
			spawnZombies()
			}
		}
		this.player.regenerate()
		if(this.zombies.length != -1)
		{
			for(var i = 0; i <this.zombies.length; i++)
			{
				zombieDirectionSelector()
				this.zombies[i].moveZombie();
			}
		}
		if(this.player.bullets.length != -1)
		{
			for(var i = 0; i <this.player.bullets.length; i++)
			{
				this.player.bullets[i].moveBullet(this.player.bullets[i].positions.direction);
			}
		}
	
		if(this.zombies.length == 0 && this.currentWave != this.maxWaves && this.waveWait == true)
		{
			setNewWave()
			this.waveWait = false
		}
	}
	return		
}
// this is the game loop
function main() {
	if (13 in keysDown) { // enter
	unpausing();
	}
	if(this.pause === false)
	{
		update();
	}
	// Request to do this again ASAP
	requestAnimationFrame(main);
};
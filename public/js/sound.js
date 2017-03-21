//this class sets up most of the audio, but some audio is also initialized in the game class due to some strange bugs
function loadSounds(){
	this.zombieDeath = new Audio("../public/sound/zombies/death_10.mp3")
	this.run =  new Audio("../public/sound/conc_run_00.mp3");
	this.noAmmo = new Audio("../public/sound/WhereIsAmmo.mp3");
	this.pap = new Audio("../public/sound/PaPOMG.mp3");
	this.instaKill = new Audio("../public/sound/InstaKill.mp3");
	this.maxAmmo =  new Audio("../public/sound/MaxAmmo.mp3");
	this.nuke = new Audio("../public/sound/Kaboom.mp3");
	this.explosion = new Audio("../public/sound/explosion.wav");
	this.pistol = new Audio("../public/sound/lmgShot.wav");
	this.machineGun = new Audio("../public/sound/machineGunShot.wav");
	this.lmg = new Audio("../public/sound/lmgShot.wav");
	this.buy = new Audio("../public/sound/buy.wav");
	this.powerOn = new Audio("../public/sound/lever.mp3");
	this.elec = new Audio ("../public/sound/small_elec.mp3");
	//this.newWave = new Audio()
	this.zombieGrunt01 = new Audio("../public/sound/zombies/behind_00.mp3")
	this.zombieGrunt02 = new Audio("../public/sound/zombies/behind_01.mp3")
	this.zombieGrunt03 = new Audio("../public/sound/zombies/behind_02.mp3")
	this.zombieGrunt04 = new Audio("../public/sound/zombies/behind_03.mp3")
	this.zombieGrunt05 = new Audio("../public/sound/zombies/behind_04.mp3")
	this.swallow = new Audio("../public/sound/swallow_00.mp3");
	this.open = new Audio("../public/sound/open_00.mp3");
	this.powerUp = new Audio("../public/sound/powerUp.mp3");
	this.noBuy = new Audio("../public/sound/noMoney.mp3");
}

function playSound(sound){
	this.sound = sound
	this.piano = new Audio("../public/sound/UI/piano.mp3")
	this.GUISound = new Audio("../public/sound/UI/2nd_click_rear.mp3")
	this.t =  new Audio("../public/sound/swallow_00.mp3");
	switch(this.sound) {
    case "gui":
		
		return this.GUISound.play()
        break;
    case "music":
		
		this.piano.play()
        break;
	case "stopMusic":
		console.log("pause")
		this.t.play() 
		
		break;
    default:
	}
}

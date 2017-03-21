/*made by Rick Bieze */
//this is the class used to create perkMachines
//this is used to create a perkMachine, but is also used for the pap machine and power lever
function PerkMachines(name,x,y){
	this.name = name
	this.pos = []
	this.pos ={x:x,y:y}
	this.perkMachine = []
	this.perkMachine = this.setPerkMachine();
}
//this is used to give the perk to the player
PerkMachines.prototype.setPerkMachine = function(){
	this.machineImage = new Image()
	this.machineImage.onload = function(){
		
	};
	this.perkLogo = new Image()
	this.machineImage.onload = function(){
		
	};
	
	if(this.name == "juggerNog")
	{
		this.machineImage.src = "GameSpritesZombie/juggerNog.png"
		this.perkLogo.src = "GameSpritesZombie/juggerIco.png"
		this.perkMachine = {name: "Juggernog", health:300 ,img:this.machineImage,price:5000, logo:this.perkLogo, x:145,y:15};
		return this.perkMachine
	}
	if(this.name == "Stamin-Up")
	{
		this.machineImage.src = "GameSpritesZombie/staminup.png"
		this.perkLogo.src = "GameSpritesZombie/staminico.png"
		this.perkMachine = {name: "Stamin-Up", regen:0.9,img:this.machineImage,price:5000, logo:this.perkLogo, x: 195, y:15};
		return this.perkMachine
	}
		if(this.name == "papMachine")
	{
		this.machineImage.src = "GameSpritesZombie/papMachine.png"
		this.perkLogo.src = "GameSpritesZombie/staminico.png"
		this.perkMachine = {name: "pap", dmg:5,upgrade:true,img:this.machineImage,price:5000, logo:this.perkLogo, x: 195, y:15};
		return this.perkMachine
	}
	if(this.name == "power")
	{
		this.machineImage.src = "GameSpritesZombie/leverOn.png"
		this.perkLogo.src = ""
		this.perkMachine = {name: "power", dmg:0,upgrade:"",img:this.machineImage,price:0, logo:this.perkLogo, x:"", y:""};
		return this.perkMachine
	}
}
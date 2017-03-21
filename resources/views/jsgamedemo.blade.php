<!DOCTYPE html>
<html  lang="en">
<head>
    <!-- Theme Made By www.w3schools.com - No Copyright -->
    <title>5050 Zombies</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="../public/css/demo_style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" type="image/png" href="GameSpritesZombie/favicon.png"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src ="../public/js/game.js"></script>
    <script src ="../public/js/sound.js"></script>
    <script src ="../public/js/animate.js"></script>
    <script src ="../public/js/map.js"></script>
    <script src ="../public/js/player.js"></script>
    <script src ="../public/js/Weapons.js"></script>
    <script src ="../public/js/Monsters.js"></script>
    <script src ="../public/js/PerkMachine.js"></script>
    <script> function playMusic(){
            this.music = new Audio("sound/UI/piano.mp3")
            this.play = function(){return this.music.play()}
            this.stop = function(){return this.music.pause(),this.music.currentTime = 0;}}
        var m = new playMusic()</script>
</head>

<body onload = "m.play(),showings(), hiding('showInstructions'),hiding('showInstructionsImg'), hiding('showHighScores'),hiding('showHighsScoresImg')">

<div  id = "ZombieHead" class="container-fluid bg-1 text-center">
    <img onclick = "" id = "imgs" src="" class=""  >
    <img onclick = "" id = "imgs1" src="" class=""  >
    <img onclick = "" id = "imgs2" src="" class=""  >
    <img onclick = "" id = "imgs3" src="" class=""  >
</div>

<div id = "play" class="container-fluid bg-1 text-center" onclick= "m.stop(),playGame(), hiding('ZombieHead'), hiding('play'), hiding('playGameImg'), hiding('instructions'), hiding('instructionsImg'), hiding('highscore'), hiding('highscoreImg'), hiding('showInstructions'), hiding('showInstructionsImg')">
    <img id = "playGameImg" src="GameSpritesZombie/play.PNG" class="" alt="Play" onmouseover="playSound('gui')"  >
</div>

<div id = "instructions"  class="container-fluid bg-1 text-center"onclick= "divShower('showInstructions'), divShower('showInstructionsImg'),hiding('ZombieHead'), hiding('play'), hiding('playGameImg'), hiding('instructions'), hiding('instructionsImg'), hiding('highscore'), hiding('highscoreImg')">
    <img id = "instructionsImg" src="GameSpritesZombie/instructions.PNG" class="" alt="Zombie" onmouseover="playSound('gui')" >
</div>
<!--
<div id = "highscores" class="container-fluid bg-1 text-center" onclick= "divShower('showHighScores'), divShower('showHighsScoresImg'),hiding('ZombieHead'), hiding('play'), hiding('playGameImg'), hiding('instructions'), hiding('instructionsImg'), hiding('highscore'), hiding('highscoreImg')">
    <img id = "highscoreImg" src="GameSpritesZombie/highscore.PNG" class="" alt="highscore" onmouseover="playSound('gui')" >
</div>
-->

<div  id = "showInstructions"  class="container-fluid bg-1 text-center" onclick = "hiding('showInstructions'),hiding('showInstructionsImg'),divShower('ZombieHead'),divShower('play'),divShower('playGameImg'),divShower('instructions'),divShower('instructionsImg'),divShower('highscores'),divShower('highscoreImg')">
    <img id = "showInstructionsImg" src="GameSpritesZombie/instruction.PNG" class="" onmouseover="playSound('gui')"  >
</div>
<!--
<div  id = "showHighScores"  class="container-fluid bg-1 text-center" onclick = "hiding('showHighScores'),hiding('showHighsScoresImg'),divShower('ZombieHead'),divShower('play'),divShower('playGameImg'),divShower('instructions'),divShower('instructionsImg'),divShower('highscores'),divShower('highscoreImg')">
    <img id = "showHighsScoresImg" src="GameSpritesZombie/zombies.PNG" class="" onmouseover="playSound('gui')"  >
</div>
-->
</body>
</html>
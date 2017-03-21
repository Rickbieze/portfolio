<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Rick's portfolio</title>
    <link href="../public/css/stylish-portfolio.css" rel="stylesheet" type="text/css">
    <link href="../public/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="../public/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="../public/css/style.css" rel="stylesheet" type="text/css">
    <link href="../public/css/stylish-portfolioJSGame.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <script src = "../public/js/progress.js"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

<!-- Navigation -->
<a id="menu-toggle" href="#" class="btn btn-dark btn-lg toggle"><i class="fa fa-bars"></i></a>
<nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
        <li class="sidebar-brand">
            <a href="home" onclick=$("#menu-close").click();>Home</a>
        </li>
        <li>
            <a href="#top" onclick=$("#menu-close").click();>Top</a>
        </li>
        <li>
            <a href="#about" onclick=$("#menu-close").click();>About</a>
        </li>
        <li>
            <a href="#competenties" onclick=$("#menu-close").click();>Competenties</a>
        </li>
        <li>
            <a href="#portfolio" onclick=$("#menu-close").click();>Portfolio</a>
        </li>
        <li>
            <a href="#contact" onclick=$("#menu-close").click();>Contact</a>
        </li>
    </ul>
</nav>
<!-- Header -->
<header id="top" class="header">
    <div class="text-vertical-center" >
        <div class="hwrapper">
            <h1 class = "h1Class">Javascript Game</h1>
        </div>
        <br>
        <a href="#about" class="btn btn-dark btn-lg">Details</a>
    </div>
</header>

<!-- About -->
<section id="about" class="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2>Het spel</h2>
                <hr class="small">
                <p class="lead">
                    Om mij te verdiepen in Javascript hebt ik een game gemaakt. Het doel van dit spel is zo lang mogelijk in leven te blijven. Hiervoor moet de speler de zombies ontwijken of neerschieten. Een speler kan extra levens en energie kopen. Ook kan een speler nieuwe wapens kopen en upgraden verder hebben de zombies een kans om een “power-up” te droppen.Verder bevat het spel een simpel instructie scherm en kan het spel gepauzeerd worden.
                </p>
                <table>
                    <tr>
                        <th>Features speler</th>
                        <th>Features monsters</th>
                        <th>Overig</th>
                    </tr>
                    <tr>
                        <td>• schieten</td>
                        <td>• naar de speler lopen</td>
                        <td>• zombies kunnen gedood worden</td>
                    </tr>
                    <tr>
                        <td>• lopen</td>
                        <td>• speler shade toebrengen</td>
                        <td>• max 10 zombies tegelijk</td>
                    </tr>
                    <tr>
                        <td>• wapens/ammo kopen</td>
                        <td>• power-ups droppen</td>
                        <td>• elke wave komt er 1 zombie bij</td>
                    </tr>
                    <tr>
                        <td>• extra leven/energy kopen</td>
                        <td>• kans op "boss" zombie</td>
                        <td>• spel kan gepauzeerd worden</td>
                    </tr>
                    <tr>
                        <td>• stroom aanzetten</td>
                        <td>• speler blokkeren</td>
                        <td>• speler kan gedood worden</td>
                    </tr>
                    <tr>
                        <td>• wapen upgraden</td>
                        <td>• speler langzamer laten lopen</td>
                    </tr>
                    <tr>
                        <td>• power-ups pakken</td>
                        <td>• elke wave sterker</td>
                    </tr>
                </table>
                <br>


                <p><a href="jsgamedemo" class="btn btn-dark btn-lg">speel het spel hier</a></p>


            <div class="col-md-6">
                <div class="portfolio-item">
                    <h3>Ingame screenshot</h3>
                    <a href="img/jsingame.png">
                        <img class="img-portfolio img-responsive" src="img/jsingame.png">
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <h3>Pre-Game user interface</h3>
                <div class="portfolio-item">
                    <a href="img/pregamescreen.png">
                        <img class="img-portfolio img-responsive" src="img/pregamescreen.png">
                    </a>
                </div>
            </div>
        </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</section>

<!-- Services -->
<!-- The circle icons use Font Awesome's stacked icon classes. For more information, visit http://fontawesome.io/examples/ -->
<section id="services" class="services bg-primary">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h2>De code</h2>
                    <hr class="small">
                <p>Het spel is object georiënteerd geprogrammeerd, elke class is verantwoordelijk voor zijn eigen dingen. Deze classes zijn vervolgens in de game class bij elkaar gevoegd om het spel te creëren. Er is geen gebruik gemaakt van een framework of iets dergelijks, alle javascript code is “from scratch” geprogrammeerd.
                    Het spel bestaat uit de volgende classes:
                    •	Animate
                    •	Game
                    •	Monster
                    •	PerkMachine
                    •	Player
                    •	Sound
                    •	Weapon.
                </p>
                <a href="../public/js/animate.js"><h3>Animate Class</h3></a>
                <a href="../public/js/game.js"><h3>Game Class</h3></a>
                <a href="../public/js/monsters.js"><h3>Monster Class</h3></a>
                <a href="../public/js/PerkMachine.js"><h3>PerkMachine Class</h3></a>
                <a href="../public/js/player.js"><h3>Player Class</h3></a>
                <a href="../public/js/Sound.js"><h3>Sound Class</h3></a>
                <a href="../public/js/Weapons.js"><h3>Weapon Class</h3></a>
            <p></p>
            </div>
                <!-- /.row (nested) -->
        </div>
            <!-- /.col-lg-10 -->
    </div>
        <!-- /.row -->
    <!-- /.container -->
</section>

<!-- Callout -->


<!-- Portfolio -->
<section id="portfolio" class="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
                <h2>Galery</h2>
                <hr class="small">
                <div class="row">
                    <div class="col-md-6">
                        <div class="portfolio-item">
                            <h2>Javascript game</h2>
                            <a href="#">
                                <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Project Snake</h2>
                        <div class="portfolio-item">
                            <a href="#">
                                <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>LoL search app</h2>
                        <div class="portfolio-item">
                            <a href="#">
                                <img class="img-portfolio img-responsive" src="img/lolapp.png">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Project Hondsrug Portfolio</h2>
                        <div class="portfolio-item">
                            <a href="#">
                                <img class="img-portfolio img-responsive" src="img/hondsrug.png">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- /.row (nested) -->
            </div>
            <!-- /.col-lg-10 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</section>


<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
                <h3><strong>Contact</strong>
                </h3>
                <ul class="list-unstyled">
                    <li><i class="fa fa-phone fa-fw"></i>0612191902</li>
                    <li><i class="fa fa-envelope-o fa-fw"></i> <a href="mailto:rick.bieze@student.stenden.com">rick.bieze@student.stenden.com</a>
                    </li>
                </ul>
                <br>
                <ul class="list-inline">
                    <li>
                        <a href="https://www.facebook.com/rick.bieze" target="_blank"><i class="fa fa-facebook fa-fw fa-3x"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rickbieze" target="_blank"><i class="fa fa-linkedin fa-fw fa-3x"></i></a>
                    </li>
                </ul>
                <hr class="small">
                <p class="text-muted">Copyright &copy; Rick Bieze 2017</p>
            </div>
        </div>
    </div>
    <a id="to-top" href="#top" class="btn btn-dark btn-lg"><i class="fa fa-chevron-up fa-fw fa-1x"></i></a>
</footer>

<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- Custom Theme JavaScript -->
<script>
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
        var that = $(this);
        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);
        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");
        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }
    // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);
</script>

</body>

</html>
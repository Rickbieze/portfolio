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
            <a href="#top" onclick=$("#menu-close").click();>Start Bootstrap</a>
        </li>
        <li>
            <a href="#top" onclick=$("#menu-close").click();>Home</a>
        </li>
        <li>
            <a href="#about" onclick=$("#menu-close").click();>About</a>
        </li>
        <li>
            <a href="#services" onclick=$("#menu-close").click();>Services</a>
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
                <h2>Rick who?</h2>
                <p class="lead">Hallo en welkom op mijn portfolio! Mijn naam is Rick Bieze, ik ben 23 jaar en woon in Stadskanaal. Ik zit momenteel in het 2e jaar van mijn studie Software Engineering. In mijn vrije tijd ben ik graag bezig met het customizen van mijn pc, daarnaast ben ik een fanatieke gamer. Ook werk ik graag aan mijn eigen game ontwerpen en probeer ik deze te realiseren. In het weekend ben ik vaak bij mijn vriendin in Nijmegen. Verder beschrijf ik mezelf als een rustige jongen met veel interesse voor software en techniek. Op dit portfolio is meer informatie over mij en mijn gemaakte software/opdrachten te vinden.</p>
            </div>
            <div class="col-md-6">
                <div class="portfolio-item">
                    <a href="img/profielpic.jpg">
                        <img class="img-portfolio img-responsive" src="img/profielpic.jpg">
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="portfolio-item">
                    <a href="img/pc.jpg">
                        <img class="img-portfolio img-responsive" src="img/pc.jpg">
                    </a>
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
                <a class ="competentieLink" href="competenties"> <h2>Mijn vaardigheden/competenties</h2>
                    <hr class="small">
                </a>

                <div id="bars">
                    <div class="bar" data-percent="80">
                        <h3>JavaScript</h3>
                        <canvas class="bar-circle" width="70" height="70"></canvas>
                    </div>
                    <div class="bar" data-percent="76">
                        <h3>HTML5</h3>
                        <canvas class="bar-circle" width="70" height="70"></canvas>
                    </div>
                    <div class="bar" data-percent="75">
                        <h3>PHP</h3>
                        <canvas class="bar-circle" width="70" height="70"></canvas>
                    </div>
                    <div class="bar" data-percent="63">
                        <h3>Java</h3>
                        <canvas class="bar-circle" width="70" height="70"></canvas>
                    </div>
                    <div class="bar" data-percent="65">
                        <h3>C#</h3>
                        <canvas class="bar-circle" width="70" height="70"></canvas>
                    </div>
                </div>

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
                <h2>Mijn Opdrachten/Werk</h2>
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
                <a href="#" class="btn btn-dark">Meer</a>
            </div>
            <!-- /.col-lg-10 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</section>

<!-- Call to Action -->
<aside class="call-to-action bg-primary">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h3>The buttons below are impossible to resist.</h3>
                <a href="#" class="btn btn-lg btn-light">Click Me!</a>
                <a href="#" class="btn btn-lg btn-dark">Look at Me!</a>
            </div>
        </div>
    </div>
</aside>

<!-- Map -->
<section id="contact" class="map">
    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76826.3687745737!2d6.863715766519211!3d53.005548475901364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c83bb57e3000c9%3A0xb8497bdac29f4022!2sStadskanaal!5e0!3m2!1snl!2snl!4v1490049605837"></iframe>
    <br />
    <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
    </small>
</section>

<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
                <h4><strong>Contact</strong>
                </h4>
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
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
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <script src = "../public/js/progress.js"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body onload="hiding('competenties_javascript'),hiding('competenties_HTMLCSS'), hiding('competenties_cSharp'), hiding('competenties_Java'),hiding('competentie_1') , hiding('competenties_overig')">

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
    <div class="text-vertical-center">
        <div class="hwrapper">
            <h1 class = "h1Class">Mijn Competenties en vaardigheden</h1>
        </div>
        <br>
        <a href="#competenties" class="btn btn-dark btn-lg">naar de vaardigheden</a>
    </div>
</header>
<!-- section Javascript -->
<section id="competenties" class="services bg-primary" onclick="divShower('competenties_javascript'),hiding('c1_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h1>Vaardigheden</h1>
                    <h2>Javascript</h2>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    <div id="c1_plus">
                        <i id ="red" class="fa fa-plus fa-fw fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="competenties_javascript" class="services bg-primary" onclick="hiding('competenties_javascript'), divShower('c1_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">

                        <h2>Zombie survival game</h2>
                        <div class="portfolio-item">
                            <a href="jsgame">
                                <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                            </a>
                        </div>
                    <h2>Project Snake</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                </div>
                <i id ="red" class="fa fa-minus fa-fw fa-3x"></i>
            </div>
        </div>
    </div>
</section>
<!-- section HTML/CSS/PHP-->
<section id="competenties" class="about" onclick="divShower('competenties_HTMLCSS'),hiding('c2_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>HTML, CSS, PHP en databases</h2>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100" style="width:76%">
                            <span class="sr-only">76% Complete</span>
                        </div>
                    </div>
                    <div id="c2_plus">
                        <i id ="white" class="fa fa-plus fa-fw fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="competenties_HTMLCSS" class="about" onclick="hiding('competenties_HTMLCSS'), divShower('c2_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>Project professionele website</h2>
                    <div class="portfolio-item">
                        <a href="jsgame">
                            <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                        </a>
                    </div>
                    <h2>Project Stenden portfolio</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>
                    <h2>Project Hondsrug portfolio (externe opdrachtgever)</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <h2>Eigen portfolio</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <i id ="white" class="fa fa-minus fa-fw fa-3x"></i>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- section c# -->
<section id="competenties" class="services bg-primary" onclick="divShower('competenties_cSharp'),hiding('c3_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>C#</h2>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width:65%">
                            <span class="sr-only">65% Complete</span>
                        </div>
                    </div>
                    <div id="c3_plus">
                        <i id ="red" class="fa fa-plus fa-fw fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="competenties_cSharp" class="services bg-primary" onclick="hiding('competenties_cSharp'), divShower('c3_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">

                    <h2>Weather station</h2>
                    <div class="portfolio-item">
                        <a href="jsgame">
                            <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                        </a>
                    </div>
                    <h2>League of Legends search app</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                </div>
                <i id ="red" class="fa fa-minus fa-fw fa-3x"></i>
            </div>
        </div>
    </div>
</section>
<!-- section Java -->
<section id="competenties" class="about" onclick="divShower('competenties_Java'),hiding('c4_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>Java</h2>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style="width:63%">
                            <span class="sr-only">63% Complete</span>
                        </div>
                    </div>
                    <div id="c4_plus">
                        <i id ="white" class="fa fa-plus fa-fw fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="competenties_Java" class="about" onclick="hiding('competenties_Java'), divShower('c4_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="jsgame">
                            <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                        </a>
                    </div>
                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>
                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <i id ="white" class="fa fa-minus fa-fw fa-3x"></i>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- overig -->
<section id="competenties" class="services bg-primary" onclick="divShower('competenties_overig'),hiding('c6_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>Overig</h2>
                    <div id="c6_plus">
                        <i id ="red" class="fa fa-plus fa-fw fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="competenties_overig" class="services bg-primary" onclick="hiding('competenties_overig'), divShower('c6_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h2>overig</h2>
                    <div class="portfolio-item">
                        <a href="jsgame">
                            <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                        </a>
                    </div>
                    <h2>overig</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>
                    <h2>overig</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>
                    <h2>overig</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <i id ="red" class="fa fa-minus fa-fw fa-3x"></i>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Competenties-->
<section id="competenties" class="about" onclick="divShower('competentie_1'),hiding('c5_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">
                    <h1>Persoonlijke competenties</h1>
                    <h2>Persoonlijke competenties</h2>

                    <div id="c5_plus">
                        <i id ="white" class="fa fa-plus fa-fw fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="competentie_1" class="about" onclick="hiding('competentie_1'), divShower('c5_plus')">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="container">

                    <div class="portfolio-item">
                        <a href="jsgame">
                            <img class="img-portfolio img-responsive" src="img/opdrachtJSGamePreview.png">
                        </a>
                    </div>
                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>
                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <h2>Java</h2>
                    <div class="portfolio-item">
                        <a href="projectSnake">
                            <img class="img-portfolio img-responsive" src="img/opdrachtSnake.png">
                        </a>
                    </div>

                    <i id ="white" class="fa fa-minus fa-fw fa-3x"></i>
                </div>
            </div>
        </div>
    </div>
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

    //this is a jQuery function that will hide a selected html element
    function hiding(id) {
        var select = id;
        $(document).ready(function(){
            $("#" + select).fadeOut(500);
        });
    };
    //this is a jQuery function that will show a selected html element
    function divShower(id) {
        var select = id;
        $(document).ready(function(){
            $("#" + select).fadeIn(1000);
        });
    };
</script>

</body>

</html>
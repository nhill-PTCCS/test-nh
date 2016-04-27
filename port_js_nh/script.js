
function init() {
var content = '';



content += '<head>';
content += '<meta charset="utf-8">';
content += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
content += '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">';
content += '<title>Minimum Bootstrap HTML Skeleton</title>';
content += '<!--  -->';
content += '<style id="s615d_css">';
content += '</style>';
content += '</head>';
content += '<body>';
content += '<div id="s615d_menu"></div>';
content += '<div class="container">';
content += '<div id="s615d_welcome"></div>';
content += '</div>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>';
content += '<script src="script.js">';
content += '</script>';
content += '</body>';
		document.getElementById('nhPort').innerHTML = '';
	document.getElementById('nhPort').innerHTML = content;

makeStyle();
makeNav();	
makeContent();
}

function makeStyle()
{
var content = 'body{background-color:none;}* {-webkit-border-radius: 0 !important;-moz-border-radius: 0 !important;border-radius: 0 !important;}.form {margin-top: 180px;border-color: none;font-family: sans-serif;}h1 {margin-top: 140px;font-family: sans-serif;padding-left: 50px;padding-right: 50px;text-align: center;color:red;}.welcome {background-color: none;border:1px;border-color: black;border-radius:15px;padding-bottom: 150px;margin-top: 50px;}'	

document.getElementById('s615d_css').innerHTML = content;

}

function makeNav()
{
var content = '<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index1.html">S615D</a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li><a href="about.html">ABOUT</a></li><li><a href="work.html">WORK</a></li><li><a href="contact.html">CONTACT</a></li></ul></div></div></nav>';

document.getElementById('s615d_menu').innerHTML = content;

}

function makeContent()
{
var content = '<div class="container container-responsive"><div class="row" ;><div class="col-md-10 col-md-offset-1"><div class="panel panel-body welcome pb"><div class="panel-body"><h1>Welcome to my new portfolio site. <br><br>Come back to watch the evolution!</h1></div></div></div></div></div>'

document.getElementById('s615d_welcome').innerHTML = content;

}
init();

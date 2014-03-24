function profile()
{
	alert("profile clicked");
}

function newsfeed()
{
	alert("newsfeed clicked");
}

function courses()
{
	alert("courses clicked");
}

function stats()
{
	alert("stats clicked");
}

function friends()
{
	alert("friends clicked");
}

function challenges()
{
	alert("challenges clicked");
}

function achievements()
{
	alert("achievements clicked");
}

function help()
{
	alert("help clicked");
}

$(document).ready(function() {
    $('.profile').click(function() {
    	profile();
    });
    $('.newsfeed').click(function() {
    	newsfeed();
    });
    $('.courses').click(function() {
    	courses();
    });
    $('.stats').click(function() {
    	stats();
    });
    $('.friends').click(function() {
    	friends();
    });
    $('.challenges').click(function() {
    	challenges();
    });
    $('.achievements').click(function() {
    	achievements();
    });
    $('.help').click(function() {
    	help();
    });
});
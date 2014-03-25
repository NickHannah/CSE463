function profile()
{
	$('#profile_content').siblings().hide();
    $('#profile_content').show();
}

function newsfeed()
{
	$('#newsfeed_content').siblings().hide();
    $('#newsfeed_content').show();
}

function courses()
{
    $('#courses_content').siblings().hide();
    $('#courses_content').show();
}

function stats()
{
    $('#stats_content').siblings().hide();
    $('#stats_content').show();
}

function friends()
{
	$('#friends_content').siblings().hide();
    $('#friends_content').show();
}

function challenges()
{
	$('#challenges_content').siblings().hide();
    $('#challenges_content').show();
}

function achievements()
{
	$('#achievements_content').siblings().hide();
    $('#achievements_content').show();
}

function help()
{
	$('#help_content').siblings().hide();
    $('#help_content').show();
}


$(document).ready(function() {
    $('#profile').click(function() {
    	profile();
    });
    $('#newsfeed').click(function() {
    	newsfeed();
    });
    $('#courses').click(function() {
    	courses();
    });
    $('#stats').click(function() {
    	stats();
    });
    $('#friends').click(function() {
    	friends();
    });
    $('#challenges').click(function() {
    	challenges();
    });
    $('#achievements').click(function() {
    	achievements();
    });
    $('#help').click(function() {
    	help();
    });
});
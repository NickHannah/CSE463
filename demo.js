function profile()
{
	$('#profile_content').siblings().hide();
    $('#profile_content').fadeIn();
}

function newsfeed()
{
	$('#newsfeed_content').siblings().hide();
    $('#newsfeed_content').fadeIn();
}

function courses()
{
    $('#courses_content').siblings().hide();
    $('#courses_content').fadeIn();
}

function stats()
{
    $('#stats_content').siblings().hide();
    $('#stats_content').fadeIn();
}

function friends()
{
	$('#friends_content').siblings().hide();
    $('#friends_content').fadeIn();
}

function challenges()
{
	$('#challenges_content').siblings().hide();
    $('#challenges_content').fadeIn();
}

function achievements()
{
	$('#achievements_content').siblings().hide();
    $('#achievements_content').fadeIn();
}

function help()
{
	$('#help_content').siblings().hide();
    $('#help_content').fadeIn();
}

$(document).ready(function() {
	// PROFILE
    $('#profile').click(function() {
    	profile();
    });

    // *** name ***
    $('#name_edit').click(function() { // open edit input
    	$('#name_input').val("");
    	$('#name_form').toggle();
    });
    $('#name_form').submit(function(event) { // submit input
    	event.preventDefault();
    	var edit = $('#name_input').val();
    	console.log(edit);
    	if (edit !== "") {
    		$('#name_h2').text(edit);
    	}
    	$('#name_form').toggle();
    });
    $('#name_cancel').click(function() { // cancel input
    	$('#name_form').toggle();
    });

    // *** bio ***
    $('#bio_edit').click(function() { // open edit textarea
    	$('#bio_text').val("");
    	$('#bio_form').toggle();
    });
    $('#bio_form').submit(function(event) { // submit textarea
    	event.preventDefault();
    	var edit = $('#bio_text').val().split("\n");
    	console.log(edit);
    	if (edit !== "") {
    		$('#bio_div').empty();
    		for (var i = 0; i < edit.length; i++) {
    			$('#bio_div').append("<p>" + edit[i] + "</p>");
    		};
    	}
    	$('#bio_form').toggle();
    });
    $('#bio_cancel').click(function() { // cancel textarea
    	$('#bio_form').toggle();
    });

    // NEWSFEED
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
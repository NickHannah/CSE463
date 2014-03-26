// ------------------------------------------------------------------------ TABS
function profile()
{
	$('#profile_content').siblings().hide();
    $('#profile_content').fadeIn('fast');
}

function newsfeed()
{
	$('#newsfeed_content').siblings().hide();
    $('#newsfeed_content').fadeIn('fast');
}

function courses()
{
    $('#courses_content').siblings().hide();
    $('#courses_content').fadeIn('fast');
}

function stats()
{
    $('#stats_content').siblings().hide();
    $('#stats_content').fadeIn('fast');
}

function friends()
{
	$('#friends_content').siblings().hide();
    $('#friends_content').fadeIn('fast');
}

function challenges()
{
	$('#challenges_content').siblings().hide();
    $('#challenges_content').fadeIn('fast');
}

function achievements()
{
	$('#achievements_content').siblings().hide();
    $('#achievements_content').fadeIn('fast');
}

function help()
{
	$('#help_content').siblings().hide();
    $('#help_content').fadeIn('fast');
}

//------------------------------------------------------------------ NAME EDITOR
function openNameEditor()
{
	$('#name_input').val("");
    $('#name_form').slideToggle('fast');
}

function closeNameEditor()
{
	$('#name_form').hide();
}

function submitNameEdit()
{
	var edit = $('#name_input').val();
	console.log(edit);
	if (edit.length > 0) {
		$('.name_h2').text(edit);
	}
	$('#name_form').hide();
}

//------------------------------------------------------------------- BIO EDITOR
function openBioEdtor()
{
	$('#bio_text').val("");
    $('#bio_form').slideToggle('fast');
}

function closeBioEditor()
{
	$('#bio_form').hide();
}

function submitBioEdit()
{
	var edit = $('#bio_text').val().split("\n");
	console.log(edit);
	if (edit.length > 0) {
		$('#bio_div').empty();
		for (var i = 0; i < edit.length; i++) {
			$('#bio_div').append("<p>" + edit[i] + "</p>");
		};
	}
	$('#bio_form').hide();
}

function openQuoteEditor()
{
	$('#quote_text').val("");
	$('#quote_input').val("");
	$('#quote_form').slideToggle('fast');
}

function closeQuoteEditor()
{
	$('#quote_form').hide();
}

function submitQuoteEdit()
{
	var new_quote = $('#quote_text').val();
	var new_author = $('#quote_input').val();
	if (new_quote.length > 0) {
		new_quote = removeQuotes(new_quote);
		$('.quote').text("\"" + new_quote + "\"");
	}
	if (new_author.length > 0) {
		$('.quote_author').text(new_author);
	}
	$('#quote_form').hide();
}

//----------------------------------------------------------------- MY UTILITIES
function removeQuotes(str)
{
	var result = str;
	if (result.charAt(0) === "\"") {
		result = result.substr(1);
	}
	if (result.charAt(result.length - 1) === "\"") {
		result = result.substr(0,result.length - 1);
	}
	return result;
}

//------------------------------------------------------------------------------
//
//                                                                     DOC READY
//
//------------------------------------------------------------------------------
$(document).ready(function() {
	//-------------------------------------------------------------- PROFILE TAB
    $('#profile').click(function() {
    	profile();
    });

    //--------------------------------------------------------------------- name
    $('#name_edit').click(function() { // open edit input
    	openNameEditor();
    });
    $('#name_form').submit(function(event) { // submit input
    	event.preventDefault();
    	submitNameEdit();
    });
    $('#name_cancel').click(function() { // cancel input
    	closeNameEditor();
    });

    //---------------------------------------------------------------------- bio
    $('#bio_edit').click(function() { // open edit textarea
    	openBioEdtor();
    });
    $('#bio_form').submit(function(event) { // submit textarea
    	event.preventDefault();
    	submitBioEdit();
    });
    $('#bio_cancel').click(function() { // cancel textarea
    	closeBioEditor();
    });

    //-------------------------------------------------------------------- quote
	$('#quote_edit').click(function() { // open edit textarea
    	openQuoteEditor();
    });
    $('#quote_form').submit(function(event) { // submit textarea
    	event.preventDefault();
    	submitQuoteEdit();
    });
    $('#quote_cancel').click(function() { // cancel textarea
    	closeQuoteEditor();
    });

    //----------------------------------------------------------------- NEWSFEED
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
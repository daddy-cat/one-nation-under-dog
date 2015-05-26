// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function open_frame_window(artpiece_id)
{
	var newwindow;
	newwindow=window.open("/page/view_in_frame/?artpiece_id=" + artpiece_id,'frames','height=675,width=900,toolbar=no,menubar=yes,scrollbars=yes');
	if (window.focus) {newwindow.focus()}
}

function open_zoom_window(artpiece_id)
{
	var newwindow;
	if (artpiece_id == 353)
		newwindow=window.open("/artwork/view_zoom/" + artpiece_id,'zoom','height=800,width=1024,toolbar=no,menubar=no,scrollbars=yes');
	else
		newwindow=window.open("/artwork/view_zoom/" + artpiece_id,'zoom','height=800,width=1024,toolbar=no,menubar=no,scrollbars=yes');
	if (window.focus) {newwindow.focus()}
}
function open_request_info_window(artpiece_id)
{
	var newwindow;
	if (artpiece_id == 353)
		newwindow=window.open("/artwork/request_pdfs?artpiece_id=" + artpiece_id,'zoom','height=800,width=1024,toolbar=no,menubar=no,scrollbars=yes');
	else
		newwindow=window.open("/artwork/request_pdfs?artpiece_id=" + artpiece_id,'zoom','height=800,width=1024,toolbar=no,menubar=no,scrollbars=yes');
	if (window.focus) {newwindow.focus()}
}
function open_artist_comment_window(artpiece_id)
{
	var newwindow;
	newwindow=window.open("/artwork/artist_comments/?artpiece_id=" + artpiece_id,'zoom','height=340,width=520,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_list_of_symbolism(artwork_title) {
	var newwindow;
	newwindow=window.open("/artwork/list_of_symbolism/"+artwork_title,'symbolism','height=800,width=950,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_interview_with_the_artist() {
	var newwindow;
	newwindow=window.open("/artwork/interview_with_the_artist",'interview','height=800,width=950,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_what_has_obama_done() {
	var newwindow;
	newwindow=window.open("/artwork/what_has_obama_done",'obama','height=800,width=950,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_collapse_of_the_dollar() {
	var newwindow;
	newwindow=window.open("/artwork/collapse_of_the_dollar",'obama','height=800,width=950,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_what_is_a_true_christian() {
	var newwindow;
	newwindow=window.open("/artwork/what_is_a_true_christian",'truechristian','height=800,width=950,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_promotional_code_window() {
	var newwindow;
	newwindow=window.open("/shopping_cart/promotional_code_description",'promotional_code_description','height=800,width=950,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function open_product_tab_help() {
	var newwindow;
	newwindow=window.open("/artwork/product_tab_help",'product_tab_help','height=500,width=500,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	if (window.focus) {newwindow.focus()}
}

function close_window_if_opener_exists(redirect_url) {
	if (window.opener) {
		window.opener.location = redirect_url;
		window.opener.focus();
		window.close();
	}
}

/*
var image;
var width;

function refresh_zoom_image() {
	image = document.getElementById('image_zoom');
	width = image.width;

	//image.width = 100;

	
	//setTimeout("image.width = width;", 2000);
}
*/

// returns the character count of param string excluding html tags
function get_char_count(string) {
	var html_stripped = string.replace(/(<([^>]+)>)/ig,"");

	return html_stripped.length;
}

// source: http://javascript.internet.com/forms/currency-format.html
function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + '$' + num + '.' + cents);
}


function fetch_right_cart() {
	url = '/get_right_shopping_cart';
	new Ajax.Request(url, {
		 method: 'get',
		 onSuccess: function(transport) {
			$('ajax_shopping_list').insert( { 'top' : transport.responseText } );
		}
	});
}

document.observe ("dom:loaded", function() { fetch_right_cart(); } );

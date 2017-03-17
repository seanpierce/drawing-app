$(document).ready(function() {

var highlight = $('<span class="highlight">> </span>');

$("#projects-list li a").bind("click",function(event){ event.preventDefault();
});


  $('#battery-click').click(function() {
    $('.highlight').remove();
    $(this).prepend(highlight);
    $('#projects').load('projects/battery.txt');
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $('#sutro-click').click(function() {
    $('.highlight').remove();
    $(this).prepend(highlight);
    $('#projects').load('projects/sutro.txt');
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $('#transit-click').click(function() {
    $('.highlight').remove();
    $(this).prepend(highlight);
    $('#projects').load('projects/transit.txt');
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $('#spsam-click').click(function() {
    $('.highlight').remove();
    $(this).prepend(highlight);
    $('#projects').load('projects/spsam.txt');
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $('#asss-click').click(function() {
    $('.highlight').remove();
    $(this).prepend(highlight);
    $('#projects').load('projects/asss.txt');
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });


});

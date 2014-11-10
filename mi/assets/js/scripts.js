var EnglandArr = new Array("BBC Maida Vale","BBC Salford","BBC All Television");
var ScotlandArr = new Array('BBC Glasgow','BBC Edinburgh');
var newsArr = new Array('World News','UK News', 'N.Ireland News', 'Scotland News', 'Wales News');
var sportArr = new Array('Football','Formula 1', 'Cricket', 'Rugby');


populateBuilding();
populateDepartment();

$(function() {

    $('#country-dd').change(function(){
        populateBuilding();
    });

    $('#division-dd').change(function(){
        populateDepartment()
    });

});


function populateBuilding(){
    country = $('#country-dd').val();
    $('#building-dd').html('');

    if(country=='England'){
        EnglandArr.forEach(function(t) {
            $('#building-dd').append('<option>'+t+'</option>');
        });
    }

    if(country=='Scotland'){
        ScotlandArr.forEach(function(t) {
            $('#building-dd').append('<option>'+t+'</option>');
        });
    }

}


function populateDepartment(){
    division = $('#division-dd').val();
    $('#department-dd').html('');

    if(division=='News'){
        newsArr.forEach(function(t) {
            $('#department-dd').append('<option>'+t+'</option>');
        });
    }

    if(division=='Sport'){
        sportArr.forEach(function(t) {
            $('#department-dd').append('<option>'+t+'</option>');
        });
    }

}

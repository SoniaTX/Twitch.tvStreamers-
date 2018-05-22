var streamApi="https://wind-bow.glitch.me/twitch-api/streams/";
var channelApi="https://wind-bow.glitch.me/twitch-api/channels/";
var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "Destiny", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function(){

  channels.forEach(function(channel){
    allStreamCall(channel);
  });
});

function allStreamCall(streamchannel){
  var logo,name,game,status,statusdesc,channel_link;

  var streamchannel_url=streamApi+streamchannel+"?callback=?";
  var channel_url=channelApi+streamchannel+"?callback=?";


  $.getJSON(streamchannel_url,function(data){
    if(data.status=='404'){ 
      game=data.message;
      status="offline";
      statusdesc="";
    }
    else if(data.status=='422'){ 
      game=data.message;
      status="offline";
      statusdesc="";
    }
    else{
      data=data.stream;
      if(data===null){ 
        game="offline";
        status="offline";
        statusdesc="";
        logo="https://www.twitch.tv/p/assets/uploads/general_do_onrightbg_474x356.png";
      }
      else{
        game=data.channel.game;
        status="online";
        statusdesc=":"+data.channel.status;
      }
    }

    $.getJSON(channel_url,function(data){
      name=data.display_name;
      logo=data.logo;
      channel_link=data.url;
      if(data.status=='404'){ 
         name=streamchannel;
        channel_link="#";
        logo="https://i.pinimg.com/736x/8c/f0/1f/8cf01f8bdeb4d9a75aff223797e4b47f--launcher-icon-icons.jpg";
      }
      else if(data.status=='422'){ 
        name=streamchannel;
        channel_link="#";
        logo="https://i.pinimg.com/736x/8c/f0/1f/8cf01f8bdeb4d9a75aff223797e4b47f--launcher-icon-icons.jpg";
      }
      else if(logo===null){ 
        logo="https://openclipart.org/image/240px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      }

      var result=" <div class='row' id='"+status+"'> <div class='col-md-3 col-xs-4'> <span class='logo'><a target='_blank' href='"+channel_link+"'><img class='img img-circle' src='"+logo+"'></span> <a target='_blank' href='"+channel_link+"'> <span class='name text-center'>"+name+"</span> </a> </div> <div class='col-md-9 col-xs-8 text-center' id='statusdescription'> <span class='game'>"+game+"</span> <span class='status'>"+statusdesc+"</span> </div> </div>";
      if(status=='offline')
        $('.res').append(result);
      else
        $('.res').prepend(result);
    });
  });
};

$('#all').click(function(){
  var all=$('.res .row');
  all.each(function(index){ 
    $(this).css({'display':'block'});
  });
});


$('#online').click(function(){
  var online=$('.res .row'); 
  online.each(function(index){
    var toggle=$(this).attr('id'); 
    if(toggle=='online'){
      $(this).css({'display':'block'}); 
    }
    else if(toggle=='offline'){
      $(this).css({'display':'none'}); 
    }
  });
});
    $('#offline').click(function(){
  var offline=$('.res .row'); 
  offline.each(function(index){
    var toggle=$(this).attr('id'); 
    if(toggle=='online'){
      $(this).css({'display':'none'}); 
    }
    else if(toggle=='offline'){
      $(this).css({'display':'block'}); 
      

    }
  });
});


$(document).ready(function () {
		    $(".arrow-right").bind("click", function (event) {
		        event.preventDefault();
		        $(".vid-list-container").stop().animate({
		            scrollLeft: "+=336"
		        }, 750);
		    });
		    $(".arrow-left").bind("click", function (event) {
		        event.preventDefault();
		        $(".vid-list-container").stop().animate({
		            scrollLeft: "-=336"
		        }, 750);
		    });
		});
var textArray = [
    "",
    "",
    "",
    "",""];
  //  var images=['tryal.jpg','test.jpg','test2.jpg','pos.jpg'];
    var back=['newbali.gif','newbali2.gif','giphy.gif','newbali3.gif','newbali4.gif']
var count=-1;
max=14;
min=8;
function makeDiv(){

  count=count+1;
  document.body.background=back[count];
    var divsize = 3
    //((Math.random()*(max - min + 1))).toFixed();
    var color = '#'+ Math.round(0x000fff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width':divsize+'em',
        'height':divsize+'em',
});
    //var t=images[count];
    //$newdiv.append('<img id="theImg" src="" />')
    console.log(divsize)
    var randomWord = textArray[count];
    var posx = (Math.random()*(300 - 140 + 1));
    var posy = (Math.random()*(300 - 140 + 1));
//    console.log(posx);
  //  console.log(posy);
    $newdiv.text(randomWord).css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none',
        'font-size':'3em',
        'color' : color
    }).appendTo( 'body' ).fadeIn(100).delay(5000).fadeOut(200, function(){
      $(this).remove();
       makeDiv();
    });
}


makeDiv();

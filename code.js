var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","c4e310e0-8174-4127-a46e-0cbcc94b488b","b890dd96-6b23-4592-893e-dfb281b8ed31","29751dcb-a48c-43b5-91b0-a3085d5c41b6","630c2147-f4a5-4b97-a2fb-639fa4d91119","93d16438-77d0-47a6-91af-baec0cc06ba0","8fbfa461-8e68-4200-9dea-07b80e82fd34","793e711b-27dc-4949-8ac2-8f81e8085941"],"propsByKey":{"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"vIHUMhAyNTXQIFKW.pCKBHuCjmHOSAx7","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"lNOhebyiTDPXs2k6a7E0wl6oxMsfaYRS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"b890dd96-6b23-4592-893e-dfb281b8ed31":{"name":"ball1","sourceUrl":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png"},"29751dcb-a48c-43b5-91b0-a3085d5c41b6":{"name":"ball2 ","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"},"630c2147-f4a5-4b97-a2fb-639fa4d91119":{"name":"ball2 _copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"},"93d16438-77d0-47a6-91af-baec0cc06ba0":{"name":"city","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"8fbfa461-8e68-4200-9dea-07b80e82fd34":{"name":"ball3","sourceUrl":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"_voB8z1tybHuDAKJb3XrVhG9nCoFKaj.","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png"},"793e711b-27dc-4949-8ac2-8f81e8085941":{"name":"park","sourceUrl":"assets/api/v1/animation-library/gamelab/eRBbLv0JNKLk62sMh4QJET1_ifFvV_vS/category_backgrounds/park_view.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"eRBbLv0JNKLk62sMh4QJET1_ifFvV_vS","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eRBbLv0JNKLk62sMh4QJET1_ifFvV_vS/category_backgrounds/park_view.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var park = createSprite(200,200);
 park.setAnimation("park")
var player = createSprite(200,345,200,345)
player.shapeColor="red"

var dodgeball1 = createSprite(200,250,10,10)
dodgeball1.shapeColor="red"

var dodgeball2 = createSprite(200,150,10,10)
dodgeball2.shapeColor="red"

var dodgeball3 = createSprite(200,50,10,10)
dodgeball3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"



player.setAnimation("hero1");
player.scale=.2;
dodgeball1.setAnimation("ball1");
dodgeball1.scale=.1;
dodgeball2.setAnimation("ball2 ");
dodgeball2.scale=.1;
dodgeball3.setAnimation("ball3");
dodgeball3.scale=.1;

dodgeball1.setVelocity(-10,0);
dodgeball2.setVelocity(10,0);
dodgeball3.setVelocity(-10,0);


function draw() {
  


createEdgeSprites()




dodgeball1.bounceOff(edges)
dodgeball2.bounceOff(edges)
dodgeball3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  player.y=player.y-3
}

if(keyDown(DOWN_ARROW)){
  player.y=player.y+3
}

if(keyDown(LEFT_ARROW)){
  player.x=player.x-3
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+3
}

if(player.isTouching(dodgeball1)|| player.isTouching(dodgeball2)|| player.isTouching(dodgeball3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  player.x=200
  player.y=350
 
}
if(player.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  player.x=200
  player.y=345
 
}

drawSprites()
}









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

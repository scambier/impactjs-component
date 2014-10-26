ig.module( 'game.levels.example' )
.requires( 'impact.image','game.entities.block' )
.defines(function(){
LevelExample=/*JSON[*/{
	"entities": [
		{
			"type": "EntityBlock",
			"x": 8,
			"y": 8
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 3,
			"height": 3,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/grey.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 8,
			"foreground": false,
			"data": [
				[1,1,1],
				[1,1,1],
				[1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelExampleResources=[new ig.Image('media/grey.png')];
});
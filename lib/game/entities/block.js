ig.module('game.entities.block')
    .requires('impact.entity')
    .defines(function () {
        EntityBlock = ig.Entity.extend({
            size: {x: 8, y: 8 },
            //_wmDrawBox: true,
            //_wmBoxColor: '#ff0000',
            animSheet: new ig.AnimationSheet('media/red.png', 8, 8),

            init: function(x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('idle', 1, [0])
            }
        });
    });
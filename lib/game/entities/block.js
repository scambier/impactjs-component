ig.module('game.entities.block')
    .requires(
    'impact.entity',
    'plugins.component',
    'game.components.clickable'
)
    .defines(function () {
        EntityBlock = ig.Entity.extend({
            size: {x: 8, y: 8},
            animSheet: new ig.AnimationSheet('media/red.png', 8, 8),

            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('idle', 1, [0]);

                this.addComponent(new CmpClickable(), {
                    // Using the second parameter of addComponent, you can override default values
                    someParam: 'ipsum'
                });
            }
        });
    });
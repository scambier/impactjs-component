ig.module('game.entities.block')
    .requires(
    'impact.entity',
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
                    // Using the second parameter of addComponent, we can add a new method
                    // or override an existing one
                    onClick: function () {
                        // The component's delegate references the entity
                        console.log('Click on Entity ' + this.delegate.id);
                    }
                });
            }
        });
    });
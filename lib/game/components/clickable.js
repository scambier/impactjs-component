ig.module('game.components.clickable')
    .requires('plugins.component')
    .defines(function () {

        CmpClickable = Component.extend({

            someParam: 'lorem',

            onClick: function() {
                console.log('Click on Entity ' + this.delegate.id + ' - ' + this.someParam);
            },
            _inEntity: function () {
                return ig.input.mouse.x + ig.game.screen.x > this.delegate.pos.x &&
                ig.input.mouse.x + ig.game.screen.x < this.delegate.pos.x + this.delegate.size.x &&
                ig.input.mouse.y + ig.game.screen.y > this.delegate.pos.y &&
                ig.input.mouse.y + ig.game.screen.y < this.delegate.pos.y + this.delegate.size.y;
            },
            update: function() {
                if (ig.input.state('lclick') && this._inEntity()) {
                    this.onClick();
                }
            }
        })
    });
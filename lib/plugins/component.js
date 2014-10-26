/**
 * Requires jQuery 1.1.4+
 */
ig.module('plugins.component')
    .requires('impact.entity')
    .defines(function () {

        /**
         * The base class for the components. Provides the needed stubs.
         * @type {Component}
         */
        Component = ig.Class.extend({

            /**
             * Method stub.
             * Automatically called once the entity is instantiated and linked to its delegate.
             * Use it if you want to perform initialization code and need a reference to the delegate.
             */
            added: function () {
            },

            /**
             * Method stub.
             * Will be called at each Entity's update call
             */
            update: function () {
            },

            /**
             * Method stub.
             * Will be called at each Entity's draw call
             */
            draw: function () {
            }
        });

        /**
         * Plugin for the Entity class, to manage components.
         */
        ig.Entity.inject({
            components: [],

            /**
             * Instantiates a component and links it to the Entity (the "delegate").
             * This is the preferred way to inject a component to an entity
             * @param {Object} comp The instantiated component
             * @param {Object} settings
             * @returns {Component}
             */
            addComponent: function (comp, settings) {
                $.extend(comp, settings);
                comp.delegate = this;
                this.components.push(comp);
                comp.added();
                return comp;
            },

            /**
             * Update the components
             */
            update: function () {
                this.parent();
                if (this.components.length > 0) {
                    for (var i = 0; i < this.components.length; i++) {
                        this.components[i].update();
                    }
                }
            },

            /**
             * Draw the components
             */
            draw: function () {
                this.parent();
                if (this.components.length > 0) {
                    for (var i = 0; i < this.components.length; i++) {
                        this.components[i].draw();
                    }
                }
            },

            /**
             * Removes a component from its delegate.
             * @param comp
             */
            removeComponent: function (comp) {
                for (var i = 0; i < this.components.length; i++) {
                    if (this.components[i] == comp) {
                        this.components.splice(i, 1);
                    }
                }
            },

            /**
             * Returns the component(s) of chosen type.
             * @param type
             * @param {boolean} [firstOnly]
             * @returns {Array|Component}
             */
            getComponents: function (type, firstOnly) {
                firstOnly = typeof firstOnly === 'undefined' ? false : firstOnly;
                var components = [];
                for (var i = 0; i < this.components.length; i++) {
                    var component = this.components[i];
                    if (component.classId === type.classId) {
                        components.push(component);
                        if (firstOnly) {
                            return component;
                        }
                    }
                }
                return components;
            },

            /**
             * A shorthand for getComponents(type, true)
             * @param type
             * @returns {Component}
             * @see getComponents
             */
            getCmp: function (type) {
                return this.getComponents(type, true);
            }
        });
    });
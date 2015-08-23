impactjs-component
==================

This plugin aims to bring the [component pattern](https://en.wikipedia.org/wiki/Entity_component_system), like in the Unity 3D engine, to Impact Entities.

A component is a piece of reusable code that can be (un)plugged to any Entity, at runtime. The component will then have access to the Entity's attributes.

Installation
============

Download the file `lib/plugins/component.js` and drop it in your project.

Usage
=====

Create your components by subclassing the Component class, and require them in your entities, like any other dependency.

Basically, your components are defined like any other Impact `ig.Class`. You may pass a `settings` object at initialization 
that will override default values. 
The `settings` object cannot be used to create new attributes or overwrite functions.  
Once the instance is created, simply inject it into your entity.


This project is also provided with a simple example: an Entity (a red square) is given a "clickable" component, 
that outputs a console.log each time the left mouse button is pressed down.

Call the entity from the component
----------------------------------

Each component references its linked entity via the `delegate` attribute.
If you have any experience with Unity 3D, the `delegate` is the equivalent of `gameObject`.

Link/unlink a component to an entity
------------------------------------

```javascript
var component = new MyComponentSubclass(parameters));
entity.addComponent(component);
entity.removeComponent(component);
```

Retrieve components
-------------------

```javascript
var components = entity.getComponents(MyComponentSubclass); // Retrieve an array containing all components that match the class
var component = entity.getComponents(MyComponentSubclass, true); // Retrieve only the first component to match the class
var component = entity.getCmp(MyComponentSubclass); // Shorthand for the above line
```

Events
------

Components have three built-in events.

- `added()` is called just after `addComponent()`
- `update()` is called just after the component's `update()` call
- `draw()`, like `updated()`, is called just after the component's `draw()` call
- `drawOver()` will be called after the `ig.game` `draw()` function. Useful to draw UI elements like health bars.


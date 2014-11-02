impactjs-component
==================

This plugin aims to bring the [component pattern](https://en.wikipedia.org/wiki/Entity_component_system), like in the Unity 3D engine, to Impact Entities.

A component is a piece of reusable code that can be (un)plugged to any Entity, at runtime. The component will then have access to the Entity's attributes.

Installation
============

Download the file lib/plugins/component.js and drop it in your project.

Usage
=====

Create your components by subclassing the Component class, and require them in your entities, like any other dependency.

Basically, your components are defined like any other object.
When you inject them inside your objects, you may pass a _settings_ object that will override default values
of the component's attributes. The _settings_ object cannot be used to create new attributes or overwrite functions.

This project is also provided with a simple example: an Entity (a red square) is given a "clickable" component, 
that outputs a console.log each time the left mouse button is pressed down.

Call the entity from the component
----------------------------------

Each component references its linked entity via the _delegate_ attribute.
If you have any experience with Unity 3D, the _delegate_ is the equivalent of _gameObject_.

Link/unlink a component to an entity
------------------------------------

```javascript
var component = new MyComponentSubclass());
entity.addComponent(component, parameters);
entity.removeComponent(component);
```

Retrieve components
-------------------

```javascript
var components = entity.getComponents(ComponentType); // Retrieve an array containing all components that match the type
var component = entity.getComponents(ComponentType, true); // Retrieve only the first component to match the type
var component = entity.getCmp(ComponentType); // Shorthand for the above line
```

Events
------

Components have three built-in events.

- **added()** is called just after **addComponent()**
- **update()** is called just after the component's **update()** call
- **draw()**, like **updated()**, is called just after the component's draw() call



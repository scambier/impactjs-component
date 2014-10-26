impactjs-component
==================

This plugin aims to bring the [component pattern](https://en.wikipedia.org/wiki/Entity_component_system), like in the Unity engine, to Impact Entities.

A Component is a piece of reusable code that can be (un)plugged to any Entity. The Component will then have access to the Entity's methods and properties.

jQuery 1.1.4+ is required.


Example
------------
The project is provided with a simple example: an Entity (a red square) is given a "clickable" Component, that outputs a console.log each time the Entity is clicked.

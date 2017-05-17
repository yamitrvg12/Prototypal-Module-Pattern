# Prototypal Module Pattern - javascript

## Some ground rules:

+ Self-contained module
    + Everything to do with my module is in my module
    + No global variables
    + If a module manages more than one thing it should be split up
+ Separation of concerns
+ DRY code: Don't Repeat Yourself
+ Efficient DOM usage
    + very few $(selections)
+ No memory leaks
    + All events can be unbound

## Description
Prototypal pattern for Module Inheritance and Instantiation

Basically, when coding JS OOP with the prototypal pattern, everything is an object. You start with an object literal and, then, to inherit from it, you use Object.create(someModule) to create a child that inherits from it.
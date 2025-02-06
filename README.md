# TDDC73-project

The project is based on independently exploring different Interaction patterns on a slightly deeper level and then creating your own SDK of two of the patterns. The project instructions consist of several different suggestions on what one can choose to delve into, it is up to you to choose information according to the grading criteria described below.

### Project Instructions
You should implement your own SDK consisting of:

### Grading Criteria
Here, criteria are described for the different rating steps. Remember that it is not only quantitative differences between the levels but also qualitative.

There is also an example project to be downloaded (based on Swing) [here](projectexample_tdc73_tdd13.zip) and a readme file [here](project-info.txt). The project is intended to correspond to the qualitative requirements for grade 5, so for lower grades, the exact same requirements for code quality do not apply. (Try writing "Hello" and "Hejsan".)

#### Grade 3
You shall properly implement two *Interaction patterns* using a framework of your choice. With a simple test program/application, you demonstrate how to use your component (interaction pattern). Note that there should be a clear difference between your general component and the test program.  

You choose which interaction patterns you want to implement and include in your SDK from [UI Patterns](http://ui-patterns.com/patterns). The patterns you choose should be non-trivial designs where you build most of the component yourself. You may not use pre-made components from your framework, but you may use smaller widgets like buttons. If unsure whether a pattern is too trivial, check with the course coordinator (Anders).  

For each interaction pattern, you must provide enough data to show how the pattern is supposed to work. You should build your solution (your two interaction patterns) as your own SDK. Consider the following:

- What are the common parts that your components share?
- Are support components needed for your components to work?
- How can the two components be used together?

Your code should be efficient enough to be used. The code should follow common conventions and be adequately commented.

**Selection of Interaction Patterns**  
Most patterns can be chosen, as long as you implement them yourself. For example, you can choose *Module Tabs*, but you may not use Android's SDK Tab to solve the task. Consider what other programmers might want to adapt when using your component. Look at how Android structures complex components like `ListView` or `ExpandableListView` (default models/adapters, renderers for appearance, customization options, etc.).  

Below are some examples of historically common patterns in the course, along with considerations:

- [Password Strength Meter](http://ui-patterns.com/patterns/PasswordStrengthMeter)
  - How to replace the algorithm to determine password strength
  - How to visualize password strength

- [Carousel](http://ui-patterns.com/patterns/Carousel)
  - How many elements should appear at the same time?
  - How should each element appear, and can it be replaced?

- [Inplace Editor](http://ui-patterns.com/patterns/InplaceEditor)
  - Which elements are editable, and how does this appear?
  - Can the method of editing be replaced?

- [Shopping Cart](http://ui-patterns.com/patterns/ShoppingCart)
  - What does the shopping cart look like?
  - Are there different views of the shopping cart (small, compact, full), and how do they look?

- Input feedback (similar to Password Strength Meter)

- [Account Registration](http://ui-patterns.com/patterns/AccountRegistration)
  - What data should be on an account (and what data types)?
  - Which fields should be required?

- [Steps Left](http://ui-patterns.com/patterns/StepsLeft)
  - How can steps be named?
  - How do I connect information to each step (e.g., what should be seen at step 2)?

#### Grade 4
For grade 4, you must complete all the requirements for grade 3 and also implement one of the following:

- *Getting started guide* for a framework of your choice
- UI Testing for one of your components (see below)

#### Grade 5
For grade 5, you must complete all the requirements for grade 3 and implement both:

- *Getting started guide* for a framework of your choice
- UI Testing for one of your components (see below)

### Getting Started Guide
You should write a *guide* for one of the following frameworks: Kotlin for Android, Flutter, or React Native.  
Your guide should be aimed at programmers who are not familiar with your chosen framework. It should cover:

- Simple layout of components/widgets
- Basic interaction with listeners/callback functions
- Navigation between different screens
- How to use your two components

### UI Testing
You must perform UI testing on one of the components you implemented. Use the recommended testing tools for your framework ([UI Testing](http://developer.android.com/tools/testing/testing_ui.html)).  
Your tests do not need to be comprehensive, but you should demonstrate an understanding of how to conduct UI tests.

## Result
<img src="illustrations\project.gif" alt="Final project">

We decided to implement a special form of carousel and a password strength meter.
There is a lot of props for each of the compenent in order to customize them according to your liking.

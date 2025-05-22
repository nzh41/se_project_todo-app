# Simple Todo App

A minimalist task management tool built using vanilla JavaScript. It allows users to create, complete, and delete to-dos with real-time validation and a polished UI. This app is designed to showcase clean component structure, event handling, and modular JavaScript with reusable classes.

Functionality
This application provides the following features:

Add New Tasks: Users can create new tasks by filling out a popup form.

Mark Tasks as Completed: Use checkboxes to track completed tasks.

Delete Tasks: Remove tasks you no longer need.

Optional Due Dates: Users can set a deadline when creating a to-do.

Real-Time Form Validation: Input fields are validated on the fly using a custom FormValidator class.

Dynamic UI: Todos are rendered from a template using a custom Todo class, ensuring clean and consistent markup.

Technology
The app is developed using:

HTML5 for structure

CSS3 for styling and responsive design

Vanilla JavaScript (ES6 Modules) for interactivity

Modular OOP for scalable, maintainable code

Main Components
FormValidator.js: A reusable class to handle form validation, toggle submit buttons, and display error messages.

Todo.js: Manages rendering of a todo item, including checkbox state, deletion, and event handling.

constants.js: Stores static initial data and configuration options for validation.

index.html: Main layout with a popup form, template, and todo list container.

index.js: Entry point that binds all components and initializes the application.

Deployment
This project is live and viewable on GitHub Pages:

Link:

https://nzh41.github.io/se_project_todo-app/

🔗 Simple ToDo App - GitHub Pages

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  ![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)

# REACT STUDENT MANAGER

## Introduction

> **_Note:_** _This can be a pair programming activity or done independently._

## Learning Goals

After this learning unit, you will be able to:

- Create a ReactJS app with vite.
- Use basic JSX directives.
- Bind data and attributes inside JSX elements

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Deliverables

Please, push every file needed to make your app properly on GitHub before creating the pull request.

## Introduction

We are going to create a small React Page to manage students in an academy. This app will let us the list the students in different formats, depending on their grades.

## Setting up a new React project

1. Run the following command to create a React app with Vite. Remember, if you use a dot (.) instead of a name, Vite will use the current directory as the container for the files.

```
npm create vite@latest my-react-app -- --template react
```

2. Clean the code in App.jsx and style.css.

## Iteration 1 - Render Username from Data

Initialize our React app with the following command.

```
npm run dev
```

At first our app will contain a greet message. Bind the **username** so the greet message is `Welcome {username}! For example, if **username** is **Alma**, the page should render something like:

```
Welcome Alma!
```

**Remember to bind just the necessary data. Static text, like "Welcome" shouldn't be part of the binded variable**

## Iteration 2 - Create a Students Array, show it in a bullet list

Create an array of students that contains student names, and the use a for loop to display each student in the array. When there are no items on the array, display a message saying that there are no students. Use a condition to display one thing or the other.

As we saw in class, the corresponding JSX code should be in a function.

## Iteration 3 - Show total number of Students

Show the length of the list, so that the user knows how many students are in this class.

## Iteration 4 - Show the students in a table.

We need to store the grades for each student, so you need to modify your student array to include objects with two fields: name and grade. Modify your JSX code to create a table of students instead or a list. The table will have two columns: the students names and their grades.

```
[
    { name: 'John Doe', grade: 4.5 },
    { name: 'Jane Doe', grade: 7 },
    ...
]
```

## Iteration 5 - Mark the students with failing grades

Using the style attribute, mark somehow the name and grades of the students with failing grades (grade < 5). For example you can color the name or the background to make them stand out.

## Iteration 6 - Style the HTML

Using the style attribute, create styles for your whole app. Make sure to make it look good, while keeping the table easy to read. You can look for inspiration by looking for web designs online.

## BONUS

Create a second table where only the students with passing grades are shown and show it below the original table. Make sure to style this table as well. The students should be ordered by grades in descending order.

## EXTRA BONUS

Create a third table displaying only failing student, sorted alphabetically in ascending order. Style this table as well.

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin main
```

Then create a Pull Request!!

![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)

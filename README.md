# LOVE VEGETABLES

Responsiveness images

[View the live project here]()

# Table of Content

1. [Introduction](#introduction "Goto introduction")

2. [UX](#ux "Goto ux")

    - [Ideal User Demographic](#ideal-user-demographic "Goto ideal user demographic")
    - [User Stories](#user-stories "Goto user stories")
    - [Development Planes](#development-planes "Goto development planes")
    - [Design](#design "Goto design")

3. [Features](#features "Goto features")

    - [Existing and Design Features](#existing-and-design-features "Goto existing & design features")
    - [Features to Implement in the future](#features-to-implement-in-the-future "Goto features to implement in the future")
    
4. [Testing](#testing "Goto testing")

    - [Testing.md](#)

5. [Issues and bugs](#issues-and-bugs "Goto issues and bugs")

6. [Technologies used](#technologies-used "Goto technologies used")
 
    - [Main Languages Used](#main-languages-used "Goto main languages used")
    - [Libraries, Frameworks and Programs Used](#libraries-frameworks-and-programs-used "Goto libraries, frameworks and programs used")
    
7. [Deployment](#deployment "Goto deployment")

    - [Deployment on Github Pages](#deployment-on-github-pages "Goto deployment on github pages")
    - [Forking the Repository](#forking-the-repository "Goto forking the repository")
    - [Creating a Clone](#creating-a-clone "Goto creating a clone")

8. [Cedits](#credits "Goto credits")

    - [Content](#content "Goto content")
    - [Media](#media "Goto media")
    - [code](#code "code")

9. [Acknowledgements](#acknowledgements "Goto acknowledgements")
---

# Introduction

Love Vegetables is a fun interactive website that involves the user in a vegetables knowledge quiz. It is a timed multiple choice game, with random questions each time the user starts the quiz.  The user can see the instructions on the quiz, before starting and after finishing the quiz, the user can see their score and have the option to replay. 

This is the second of five Milestone Projects that the developer must complete during his Full Stack Web Development at The Code Institute. The main requirements were to make a responsive and interactive website using primarily *HTML5*, *CSS3* and *JavaScript*.

# UX

## Ideal User Demographic

### The ideal user of this quiz

* People who enjoy food and vegetables quiz
* Lovers of cooking and food
* Vegetarian
* Quiz lovers
* People who want a quick, simple and elegant quiz application.

## User Stories

### As a new user:

* I would like to see where to start playing
* I would like to navigate easiliy to the website
* I would like to know the instructions before starting the quiz
* I would like to know how much time and how many questions I have left
* I would like to leave the quiz whenever I want
* I would like to have a feedback when I finish the quiz
* I would like to be able to ask for help 
* I would like to easily navigate through the Love Vegetables' social media links to be familiar with the Love Vegetables community

### As an old/returning user:

* I would like to navigate easily to the online quiz
* I would like to see new questions

### As a website creator:

* I want to make the quiz fun and interactive
* I want to provide easy access to the user to ask questions
* I want to ensure that there are enough questions
* I want to make sure that the user enjoys the quiz
* I want to provide a communication channel for new and returning customers (social links)

## Development Planes

To create an interactive and fun quiz that displays all data clearly with consistent styling across all pages, Love Vegetables owner worked with its developer to discern the required functionality of the quiz and how it would respond to the stories and expectations of users, as described above. 

### Strategy

The quiz will be focus on the following three categories of target audiences:

1. Demographic
    * All ages
    * Vegetarians

2. Position
    * New users
    * Returning users

3. Centre of interest
    * People who enjoy food and vegetables quiz
    * Lovers of cooking and food
    * Quiz lovers
    * People who want a quick, simple and elegant quiz application.

The online quiz needs to facilitate the user to:

1. Access informations below:
    * The instructions before starting to play
    * Social platforms for the Love Vegetables  
    * The feedback after finishing to play

2. Ask for help and see how to play the quiz

The online quiz needs to facilitate the Love Vegetables Owner to:

1. Maintain an online presence
2. Get more players
3. Receive questions from users in order to improve the quiz

### Scope

There are two categories of requirements that were defined in order to clearly identify what needed to be done to align the functionality with the previously defined strategy.

1. Content Requirements

    * The user will be looking for:
        - Where to start playing
        - How to play
        - The instructions
        - The feedback
        - Where to ask for help
        - Social links

2. Functionality Requirements

    * The user will be able to:
        - Navigate easily through the site to find information he wants
        - Find links to external sites in order to stay connected with the Love Vegetables' community
        - Contact the help centre directly through the site.

### Structure

The structure of the application has been designed to provide a simple and seamless user experience. A simple design will be implemented on all pages. The flow of the pages will be natural and will allow the user to feel comfortable after viewing a single page.

1. Header

    * The logo will serve as a link to the homepage
    * The navigation will be the same on all pages, allowing for quick movement and easy navigation.

2. The Start button

    * The button that will lead directly to the instructions

3. The instructions box

    * The box with the instructions will contain the instructions and two buttons at the bottom: 
        - Exit: will take the user back to the home page
        - Continue: will lead the user directly to the quiz 

4. Quiz

    * A counter to show what question you are on
    * A counter that shows you how much time you have left
    * Questions
    * Four answers buttons of which onli one is correct
    * Two buttons:
        - Restart: will restart the quiz
        - Next: will pass to another question

5. Feedback

    * A small message that will tell the user their score
    * Two butons:
        - Exit: Will take the user back to the home page
        - Play again: will lead again the user directly to the quiz

6. Help

    * Quick and brief description on how to play the quiz
    * Contact form

7. Footer

    * Social media links
        - Facebook
        - Instagram
        - YouTube

### Skeleton

Wireframes moch-up were created in a balsamiq workspace with providing a responsiviness and positive user experience in mind.

* Desktop:

<details>
<summary>Home page, Instructions box, Quiz box, feedback box and Help page</summary>
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
</details>

* Tablet:

<details>
<summary>Home page, Instructions box, Quiz box, feedback box and Help page</summary>
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
</details>

* Phone:

<details>
<summary>Home page, Instructions box, Quiz box, feedback box and Help page</summary>
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
</details>

## Design

1. Typography

    * A combination of [Mate SC](https://fonts.google.com/specimen/Mate+SC?query=mate+sc) and [Montserrat](https://fonts.google.com/specimen/Montserrat?query=monts) fonts are used throughout the quiz, with Sans Sérif as a back-up font in case of import failure.
    * For elements that need to be coloured, they have just been styled with the desired colour.

2. Colour Scheme

    * The colours used throughout the site for its main styling are shown below, this mix of colours comes from [coolors](https://coolors.co/) and they have been picked to keep within the design brief of maintaining a simplified pleasure.

    * These colours are used in a specific and complementary way, maintaining a good level of contrast.

3. Images and Icons

    * A single authentic and aesthetic image has been used on all pages as a background. This image is eye-catching and visually represents the theme of the website. This image was taken from[Pexels](https://www.pexels.com/).

    * Several icons have been used in the site. [Font Awesome](https://fontawesome.com/) was the main source of icons.




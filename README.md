#Intro
This project was born out of a mutual love. For food! Pema and Max designed the initial concept to help with a common problem: memory gaps! Specifically, the all too common conversation question "What was that restaurant we went to? What was that dish I had? The one that I really liked?" Fear no more - our website is here to help. The main focus/intent of this website is to offer users a place to dock their thoughts on a dish they really liked - as well as the name&address of where they had it, and any specific thoughts that came to them about it.
Users who come to the site are faced with several options, laid out in the `<NavBar>` component:
-They can peruse the master list of contributions and suggestions
-They can search that same list by restaurant name or dish name
-They can add to the list and see it update in real time
-They can see the list broken down by contributions from a given user.
    -On the Recommendations page, each user has their own button; clicking that link resets the list to show only that user's contributions, which is itself "stored" in a link with the extension of _that user's name_.

#Functionality

##Backend
Pooling together our mental resources, as well as contributions from our friends, we built a JSON database of recommendations from scratch, full of our favorite odds'n'ends. Although time consuming and detail oriented, that was the easy part.

##Overview
The central list is pulled from the "backend," and maintained by mapping/displaying a `list` array variable, which itself is tracked with a `useState` declaration (and corresponding `setList` functions). There is also a backup `masterList`/`setMasterList` array variable for comparison purposes (such as the search and filter operators).

##NavBar
Routes are declared in the `MasterList` file, with links provided in the `NavBar` component. There is a separate `UserNavBar` component that tracks the number of different users who have contributed to the project, and creates a button for each of them (without creating any duplicates). More on this functionality in the _Recommendations_ section.

##Search
The setList function is invoked by filtering the masterList variable (which, of note, is never mutated/the `setMasterList` function is never invoked). Having `list` tracked by state means the displayed list is always adjusted.

##"Add New" Form
The form itself is an HTML element, but is controlled by state. When the form is submitted, the new data is posted to the JSON database, and the `setList`/`setMasterList` functions are invoked to update their corresponding arrays. Note: The new objects are deliberately added to the front of the array so the user can see their new object display in front of them.

##Recommendations
Within the recommendations page, the `UserNavBar` renders a button for each user who has contributed to the project. Clicking on each button will open the `UserFilter` component. That component has several functions:
###UserFilter.js
The main effect is to display a filtered `list`;filtered by the clicked user's name. Functionally speaking, that re-rendering of `list` had to be wrapped in a `useEffect` call to prevent infinite re-rendering. In that call's Dependency Array is the `userObj`, which is redefined each time the button is clicked.
Technically, each user's corresponding `UserFilter` component is a separate object. And (we're very proud of this): each object has its own link. The main return/export of the `UserFilter` component is a link to that user's `UserFilter` component, with the suffix `/recommendations/userName`. Functionally, that link is declared using `react-router-dom`'s _Dynamic_ property - in the `MasterList.js` file, along with the other routes, a route is declared using the `:` operator, followed by a variable, called `user`. 
Within the `UserFilter` page, that `user` variable is accessed by importing `react-router-dom`'s `useParams` feature. This allowed us to pull that user's name to render the rest of the page with.

##Styling
Once the components came together, the page was styled using react's `styled-components` functionaliity. All of it from scratch.

I think that's all we've got to say about it. Feel free to reach out with any questions. Thanks for reading!
-Max, Okera and Pema
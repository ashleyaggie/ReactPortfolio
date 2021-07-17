import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    id: "1a",
    image: "https://ashleyaggie.github.io/Portfolio/assets/images/gamerGroups.png",
    title: "Gamer Groups",
    desc: "This website is made to provide an easier way for users to find or make groups for playing games together.",
    website: "https://gamer-groups.herokuapp.com/",
    repo: "https://github.com/mmorrisonlk/gamerGroupFinder"
  },
  {
    id: "2b",
    image: "https://ashleyaggie.github.io/Portfolio/assets/images/MarvelCharacterDirectory.png",
    title: "Marvel Character Directory",
    desc: "Users can search a Marvel character using a drop-down list to see information about them as well as movies they have been in and the rating of those movies.",
    website: "https://leviathan902.github.io/Marvel-Character-Movie-Selector/",
    repo: "https://github.com/leviathan902/Marvel-Character-Movie-Selector"
  },
  {
    id: "3c",
    image: "https://raw.githubusercontent.com/ashleyaggie/GoogleBooksSearch/main/client/public/images/savedPage.png",
    title: "Google Books Search",
    desc: "An application that allows users to search Google books for books and save them to a list.",
    website: "https://quiet-books-search.herokuapp.com/",
    repo: "https://github.com/ashleyaggie/GoogleBooksSearch"
  },
  {
    id: "4d",
    image: "https://ashleyaggie.github.io/Portfolio/assets/images/horiseonRefactor.png",
    title: "Horiseon Code Refactor",
    desc: "For this application, we were tasked with refactoring the code to make it more accessible.",
    website: "https://ashleyaggie.github.io/HoriseonCodeRefactor/",
    repo: "https://github.com/ashleyaggie/HoriseonCodeRefactor"
  },
  {
    id: "5e",
    image: "https://raw.githubusercontent.com/ashleyaggie/TechBlog/main/public/images/homepage.png",
    title: "Tech Blog",
    desc: "A website developed from scratch using Model-View-Controller format and MySql database to allow users to create, edit, delete, and view posts. Users can also comment on the posts.",
    website: "https://morning-tech-blog.herokuapp.com/",
    repo: "https://github.com/ashleyaggie/TechBlog"
  },
  {
    id: "6f",
    image: "https://raw.githubusercontent.com/ashleyaggie/BudgetTracker/main/public/homepage.png",
    title: "Budget Tracker",
    desc: "This is an application where users can track their deposits and expenses and keep track of their total even while offline.",
    website: "https://intense-budget-tracker.herokuapp.com/",
    repo: "https://github.com/ashleyaggie/BudgetTracker"
  }
];

function Work() {
    return <>
      <ul className="list-group" style={{marginTop: "40px"}}>
        {projects.map(project => {
          return <li><Project key={project.id} {...project}/></li>
        })}
      </ul>
      
    </>
};


export default Work;

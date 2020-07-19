## The Blog

#### Created by Dongeun Paeng

The Blog project is my personal blog built with React.<br>
This project will include the following steps.<br>
The whole process will evolve continuously.<br><br>

I'll be building the website and learning React at the same time.<br>
All the sources I refer to will be on my 'da Vinci' page.

---

#### To do list

##### 2020. 07. 15.

- [x] Open up the base tutorial
  - Referred link: https://www.youtube.com/watch?v=aI3E8mQa41w&list=PL7NAk9A3ueyXGX00zl7FzuaCAQhQTFPxJ
- [x] Understand component concept
  - Referred link: https://www.youtube.com/watch?v=wzii1e_QWgc&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=11
- [x] npx create-react-app
- [x] npm audit fix
- [x] npm install autoprefixer@9.8.0
  - I needed this because my create-react-app spit compile error right after installation.
  - Referred link: https://stackoverflow.com/questions/39959900/npm-start-error-with-create-react-app
- [x] git init and git remote
- [x] Delete unneccesary boiler plate from App.js
- [x] Delete App.css, index.css, and logo.svg
- [x] Delete the link to 'index.css' from index.js
- [x] Change the site's name in index.html in the public folder
- [x] Make 'components' directory in the src folder
- [x] Make Navigation function with nav tag with span and ul inside
- [x] npm install node-sass sass-loader
- [x] Make 'assets' directory and make another directory called 'scss' inside assets folder
- [x] Make base.scss inside 'scss' folder
- [x] Import \_variable.scss and \_navigation.scss to base.scss
- [x] Import base.scss into index.js
- [x] Apply styles to base, \_variables, and \_navigation.scss
- [x] npm install react-router react-router-dom
- [x] Import {Link} from 'react-router-dom'
- [x] Make Link tag inside li tags
- [x] Import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
- [x] Design ul tag and a tag in the nav bar
  - I should use pseudo selector`&:hover` here for the links
- [x] Make Switch tags and Route tags inside of the Switch to make router
- [x] Make page-renderer.js inside src folder
- [x] Make PageRenderer function and generatePage function
- [x] Import PageRenderer function to App.js
- [x] Make 'pages' directory inside src folder
- [x] Make each page.js inside pages folder that returns simple div tags

##### 2020. 07. 16.

- [x] Give className to span tag in the navigation.js
- [x] Wrap ul tag with div tag
- [x] npm install @quasar/extras
- [x] Import quasar files to index.js
  - The base tutorial installs and uses antd to make Avatar, but in my case, I don't need it.
- [x] Change span to .menu-title in \_navigation.scss
- [x] Give className to div tag in the navigation.js
- [x] Give styles to menu-content-container class in the \_navigarion.scss
- [x] Make \$background variable insdie \_variables.scss
- [x] Make hamburger icon inside the div in navigation.js
- [x] Add onClick event handler to the icon
- [x] Import useState from react into the navigation.js
- [x] Make array with menuActive and setMenuActive with useState(false)
  - learn useState at https://www.youtube.com/watch?v=mXWEELlAzKg&feature=youtu.be
- [x] Add styles to the icon and hide it
- [x] Add media query to \_navigation.scss

##### 2020. 07. 18.

- [x] Make menu-content-container to JSX to add 'active' class conditionally via "short-circuit evaluation"
- [x] Style further menu-content-container
- [x] Move out the icon out of the menu-content-container div both in the navigation.js and the \_nagivation.scss
  - All this customization can be referred to 'https://www.youtube.com/watch?v=u3GX39CFUEY&list=PL7NAk9A3ueyXGX00zl7FzuaCAQhQTFPxJ&index=2'
- [x] Add `padding-left: 30px` to ul, not the menu-content-container as in the tutorial; it prevents the side menu to hide perfectly
- [ ] Make side nav bar to hide when users click outside the side menu or when they click any of the 'li'
  - I can refer to academind's video at
- [x] npm install moment
- [x] Change the div tag to a section tag in home.js and give the tag a className 'container home'
- [x] Bring some container styles from bootstrap directly to base.scss
- [x] Add footer
- [x] Make post-masonry.js inside src > components > common directory
- [x] Make "row" div in the section tag in home.js, and make h1 tag and PostMasonry component inside the div tag
- [x] Import PostMasonry and trending into home.js
- [x] Make PostMasonry function inside post-masonry.js and add style of gridTemplateColumns using given arguments - posts, columns, and tagsOnTop
- [x] Make featured.js and trending.js in src > assets > mocks directory
- [x] Make masonry-post.js in the common directory
- [x] Make index.js which imports masonry-post and post-masonry and exports them in {MasonryPost, PostMasonry}
- [x] Make funciton MasonryPost inside the masonry-post.js that returns simple div tags with 'test' html inside
- [x] Make \_home.scss, \_masonry-post.scss, and \_post-masonry.scss and import all these files to base.scss
- [x] Modify MasonryPost function to render clickable posts
- [x] Add styles to \_home.scss, \_masonry-post.scss, and \_post-masonry.scss
- [ ] Understand how the overlay style was constrained to each post by adding `position: relative` to .masonry-post
- [x] Add span tag in the MasonryPost function to show dates of the post
- [x] Import categoryColors from styles.js in common folder, and make styles.js inside the common folder
- [x] Make trendingConfig that has gridArea, and make mergeStyles function to add the configuration to each post
- [x] Apply the configurated styles to each post in masonry-post.js
- [x] Add styles to .image-text, .image-title, .image-date, .tags-container, div
- [x] Make featured posts area in a similar way as 'trending posts' but add tagsOnTop props to its PostMasonry component
- [x] Understand what 'tagsOnTop' does here
- [ ] Understand what 'display: flex' did to the featured posts container
- [x] Add media query to scss files in order to make the posts cards responsive
- [x] Make inline styles conditional to make posts find their spots according to the screen size
- [x] Add inline style to 'image-text' to make the texts go to the bottom of the post
- [ ] Beautify the posts based on Pinterest references (not now)
- [x] Make `recentPosts` in home.js to make pagination
- [x] Make post-grid.js in the common directory
- [x] Import React, { useState, useMemo, useEffect }, { Link }, { Pagination } respectively from react, react-router-dom, and antd
- [x] npm install antd
- [x] Import PostGrid to index.js and home.js
- [x] Make PostGrid function
- [x] Edit home.js to make trending section has its own section tags

##### 2020. 07. 19.

- [x] Fix antd pagination to apply its own css
  - If you see 'user-agent-stylesheet' overriding your intended external design, check if you imported the design properly
- [x] Import 'antd' into the index.js
- [x] Add useMemo to post-grid.js
- [ ] Understand what useMemo is, how to use it, and when to use it
- [x] Add paginatedPosts inside a section in post-grid.js and map it to make Link tag for each post
  - There are current, pageSize, posts in the square bracket in the second parameter of the useMemo
- [x] Move 'tags-container' div from masonry-post.js to tag-row.js that has been newly made and imported to masonry-post.js
  - This is for making the tags-contianer a common component for multiple post sections
- [x] Change `post.categories` to `tags` in TagRow function
- [x] Import and export TagRow to/from index.js
- [x] Move styles for .tag-container from \_masonry-post.scss to \_tag-row.scss that is newly made
- [x] Fill inside the section of PostGrid function with TagRow and post title, author, date, description, and the link
- [x] Make navigation bar to stick to the top by adding `position: fixed`, `z-index: 100`, and `top: 0`
- [x] Change position of menu-content-container to `fixed`
- [x] Make \_post-grid.scss
- [ ] Understand what `grid-template-columns: repeat(auto-full, minmax(275px, 1fr))`, `grid-auto-rows: 1fr` means
- [x] Import \_post-grid.scss into base.scss
- [x] Add styles to \_post-grid.scss
  - I particularly copied styles of image-text from \_masonry-post.scss to h2 inside .post-container in the \_post-grid.scss
  - Unlike in the video, I applied 400, not 400px, to the font-weight of .description-text
- [x] Add useEffect to post-grid.js in order to make it seamless when users click the pagination button
- [x] Add some more styles to home.scss following the tutorial https://youtu.be/u0osiaRdI00?t=1502
  - Here, I got rid of the padding: 1.5em added to h1 inside .home
- [x] Wrap recent posts section with another section with className "bg-white"
- [x] Start working on backend
- [x] mkdir graphql
- [x] cd graphql
- [x] npm init
- [x] npm install apollo-server-koa graphql-tools koa moment
- [x] Make app.js
- [x] Set up the server with Apollo, GraphQL, and Koa
  - Watch tuts on GraphQL (why we need them, what's its competitor)
  - Watch tuts on Koa (why we need them, what's its competitor)
  - Watch tuts on Apollo (why we need them, what's its competitor)
- [x] Make schemas directory and make index.js inside the folder
- [x] Make posts directory inside schemas folder and make index.js inside the folder
- [x] Copy mocks folder from client and paste the entire folder into the posts folder
- [x] Change ES6 syntax in featured.js and trending.js to ES5 syntax
- [x] Require trending, featured, fs, and path into the index.js file in the posts directory
- [x] Make resolvers, query, schema in index.js
- [x] Make post-schema.graphql inside posts folder and make schemas in it
- [x] node app
  - Before updating node version to 14, it didn't work
- [ ] Fix starting position of the app; it starts from somewhere in the middle, not the top
  - Check if the useEffect works everytime the page reloads; it shouldn't
- [x] Install GraphQL Playground for Chrome extension and test if the backend works properly
- [ ] Understand ERD(Entity Relationship Diagram) and cardinality rules when building database
  - You should not have any many-to-many relationship
    - When you encounter many-to-many relationship, you can make another table in order to make two separate one-to-many relationships
  - You should avoid having one-to-one relationship; rather, you're recommended to merge those tables
- [x] npm install mysql2 knex dotenv
  - knex is a query builder for Javascript
- [x] Make .env and .gitignore in qraphql directory
- [x] Add /node_modules/ and .env to .gitignore
- [x] Make database directory and make mysql.js inside the folder
- [x] Require dotenv to mysql.js
- [x] Set up basic connection in mysql.js and export the module with requiring 'knex'
- [x] Make actions direcotry inside database folder
- [x] Make db-connect.js inside actions folder
- [x] Require knex from '../mysql' into the db-connect.js
- [x] Set up basic knex.raw request and response

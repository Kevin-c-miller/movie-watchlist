# movie-watchlist
Student project for General Assembly. 

### Description
Create a list of movies that you want to watch. Omce you watch the movie, you can add a reivew of the movie
API that stores all of the movies that you want to watch and have watched and review them. This will let you keep track of your watch history. 

## MVP
- Create API using Ruby/Rails 
- API will consist of Users, Movies, Reviews, and Watch Lists
- Frontend will be a react app and that will consume Rails API 
- React app will allow users to sign up to have ability to create a list of movies they want to watch and review the movies they have seen
- Ability to add new movies into the database
- Users will have the ability to edit reviews and movies that they had entered
- Guest option to check out app without creating account

## Libraries and Dependencies

- Axios             | API Calls
- React-Router-Dom  | Routing
- Bootstrap         | Styling
- React-toastify.   | Styling animation


## Wireframe
https://www.figma.com/file/MaPjfN4xEectl1jpSYmlVJ/Movie-WatchList?node-id=0%3A1

## Component Hierarchy
https://www.figma.com/file/H6UT9Syjpxe26L5vuEcjQB/movie-watchlist-component-hierarchy

## Time Estimates


| Component                                 | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Rails backend setup                       |    H     |      1hrs      |     --        |    --       |
| migrations, models                        |    H     |      1hrs      |     --        |    --       |
| controllers/auth                          |    H     |      4hrs      |     --        |    --       |
| create-react-app and set up               |    H     |      1hrs      |     --        |    --       |
| Navbar component & navbar styling         |    H     |      2hrs      |     --        |    --       |
| api config functions                      |    H     |      2hrs      |     --        |    --       |
| Homepage/Signup/Login                     |    H     |      2hrs      |     --        |    --       |
| home/login/signup styling                 |    H     |      3hrs      |     --        |    --       |
| moviecontainer/movies request             |    H     |      2hrs      |     --        |    --       |
| movie card/styling                        |    H     |      3hrs      |     --        |    --       |
| user movielist                            |    H     |      2hrs      |     --        |    --       |
| user movielist styling                    |    H     |      2hrs      |     --        |    --       |
| movie details                             |    H     |      3hrs      |     --        |    --       |
| movie details styling                     |    H     |      3hrs      |     --        |    --       |
| reviews                                   |    H     |      3hrs      |     --        |    --       |
| review styling                            |    H     |      2hrs      |     --        |    --       |
| create review                             |    H     |      2hrs      |     --        |    --       |
| edit review                               |    H     |      1hrs      |     --        |    --       |
| add movie                                 |    H     |      2hrs      |     --        |    --       |
| edit movie                                |    H     |      1hrs      |     --        |    --       |
| add/edit movie styling                    |    H     |      2hrs      |     --        |    --       |
| footer                                    |    H     |      1hrs      |     --        |    --       |
| misc. media queries                       |    H     |      2hrs      |     --        |    --       |
| debugging                                 |    H     |      4hrs      |     --        |    --       |
| Total                                     |    H     |     52hrs      |     --        |    --       |


## ERD


## Post-MVP
- Sort movies by rating, runtime, director, actors, release year
- Use OMDB API or another movie API for ease of adding movies to watchlists
- Add ability to "follow" other users to see the movies/reviews they leave

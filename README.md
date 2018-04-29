# Github Replica
#### A Website that uses the GitHub API to perform searches on GitHub and display the results to the user , April 29th, 2018
#### By **[Richard Waweru](https://github.com/devwaweru)**

## Description
The Github Replica is a website that uses the Github API to perform searches on Github, and display the results to the users.

The `Find Users` page makes requests based strictly on the user names.

The `Find Repos` on the other hand, makes requests based on repository names.

The website is made using angular js framework, and uses components, custom directives, custom pipes, routing modules and classes to make the finished product.

The components in the application are:

    1. Github users - Responsible for displaying data on users
    2. Github repos - Responsible for displaying Repository search results.
    3. Search - Responsible for feeding data to the components listed above
    4. 404

Other components include:

    1. Routing Module
    2. Git request service
    3. Last name pipe
    4. Font changer directive

## Specifications
| Behavior                  | Input                     | Output                    | 
| ------------------------- | ------------------------- | ------------------------- |
| Show github profile | Enter the Username in the search box without spaces and hit search | Displays name, username, number of repositories, Hireable, date of creating the repo, followers, following and lists the repos  |
| Searcg for repos      | Click on `Find Repos` and type the name of repository. Spaces are allowed in this case | Displays a list of 10 repositories based on the query. |
| Load more search Results | Click `Load More` button on the Find Repos page | Adds 10 more results in the search results  |
| Redirect to a specific github profile on Github website | Click the username of a Github user to redirect | Opens the profile on the Github website |
| Redirect to a specific Github Repository | Click the repository name to redirect | Opens the Repository on Github website |

## Preview
**[Click here](https://devwaweru.github.io/Quotes)** to see the live site.

## Known Bugs
No bugs so far. If found, email me at developer.waweru@gmail.com

## Technologies Used
    1. HTML
    2. Bootstrap
    3. Angular JS

## Support and contact details
Contact me on developer.waweru@gmail.com for any comments, reviews or advice.

### License
Copyright (c) **Richard Waweru**

# REST API GitHub

Created Nest.JS App connecting to the Github API for WTT Solutions.

The application consists of one route, where fetch the last 25 commits:
````
GET: /:user/:repo/:branch
````
It is possible to filter commits
``````
filter=message  - Commit's message
filter=date - Date created commit
``````
###Heroku host
https://nest-git.herokuapp.com/
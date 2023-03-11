# MongoDB Social Media Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
The MongoDB Social Media Backend is a use case for utilizing MongoDB as a noSQL approach in handling database calls and performing CRUD operations. The structure of this app builds an API for a social media network where users can share their thoughts, react to friends' thoughts, and create a friend list. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Demo Video Link
* https://drive.google.com/file/d/1Kd9sWfr_mcXrSubNPcXnmbCPb6xPBJd5/view


## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [User Story](#user-story) 
- [Acceptance Criteria](#acceptance-criteria) 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

* GIVEN a social network API
* WHEN I enter the command to invoke the application
* THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia for users and thoughts
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia
* THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
Express.js and Mongoose packages were required in developing this application.

## Usage
The use case of this app is for a NoSQL database to efficiently perform CRUD operations of a mock social media site.

---

## Tests
Insomnia was used in order to perform CRUD tests in the development of this app.

## Questions
* For questions, you may contact me on GitHub: [lutz143](https://github.com/lutz143)

---

## License
MIT
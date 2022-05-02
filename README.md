# Singlestone Frontend Technical Exercise

This project is a frontend web development application exercise with guidelines laid out below, to demonstrate the skillset of potential employees. The framework/library I have chosen to write this app in is React due the simple nature and small size of the project. Though my first choice of framework to use when developing enterprise level applications is Angular, I much prefer the flexibility and small size of React when developing smaller websites and SPAs such as this one. As for the rest of the guidelines, I developed the app with as little third-party code as possible. I simply utilized the scripts that come standard with Create React App. I also styled the App completely with CSS3 through CSS Modules. Due to my busy schedule I didn't have time to write any unit testing though that is a standard practice  of mine. With that being said, these are the available scripts for launching the development server and building the SPA:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
## Guidelines:

---

### Overview

You are being challenged to create a simple website for the fictitious company Endless, using the comp provided. The site consists of a single page with a few components on it. All content is static except for the ‘How It Works’ steps at the bottom of the comp. These data elements will be retrieved from an established REST API that we have made available to you. 
The exercise is expected to take 2-4 hours to complete, but there are no constraints on how much time you can devote to it. Please use code comments or the README to explain any unconventional decisions or shortcuts that are apparent in your implementation.

### Requirements
1. Download the design comp and assets: <https://github.com/singlestone/front-end-technical-exercise-assets>
2. Download the font: <https://fonts.google.com/specimen/Lato>
3. You will be creating a responsive website using Angular, React, or Vue
4. Add hover and active state transitions to the “Get Started” button.  The state transitions should include a slight color change over a short duration and should be implemented with CSS only. 
5. The “How It Works” section will be constructed using the steps retrieved from the API.  They will be displayed according to the criteria listed below.  Note that the “How it Works” headline is static.
    - a. Sort the steps in order by the “stepNumber” value
    - b. Extract the content version with the most recent “effectiveDate” value
    - c. Simplify the “step” objects in the resulting array so that extraneous data is removed 
6. The website must work with latest stable version of Google Chrome
7. Upload all files to GitHub, create a README with instructions for building and running the project, and provide a link to us for review

### Things we are looking for
1. Site should look good at every resolution above 320px
2. There should be judicious use of tools, libraries, and frameworks (no bloat)
3. Code should be well-organized and clean (minimize cruft)
4. We have a strong preference for “vanilla” JavaScript in the implementation of the “How it Works” steps (instead of leveraging an external library such as lodash.js)
5. We have a strong preference for achieving responsiveness in this exercise without the use of a responsive framework like Bootstrap

### Bonus points
1. Write a unit test to verify the logic for building the list of steps 
2. Maintaining a small file size for the site by using minification, compressing images, etc.
3. Optimizing images for different DPI screens
4. Creativity: Any extra features you want to add in order to showcase your skills (e.g. parallax scrolling)

The REST API that you will use to retrieve the list of steps is: <https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge>

The steps API request will return a JSON array in the following format:

```
[
  {
    id: string,
    stepNumber: string,
    versionedContent: [
      {
        title: string,
        body: string, 
        effectiveDate: string (example format: “2012-04-23T18:25:43.511Z”)
      },
      …
    ]
  },
  …
]
```

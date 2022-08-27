# Row Counter

Row Counter (formerly Crochet Counter) is a tool to help fiber artists (crocheters, knitters, rug makers, basket weavers, or anyone in need of a counting tool) keep track of the row they are on with a given project. Users can input a project name and the row number that they want the counter to start on, and the project and row count is displayed on the UI. From there, users can increment/decrement to keep an accurate count of where they are on a project. Additionally, users can save their work to later resume their row counting. Upon completion, users can log their project to be saved under their project history.

# Running App Locally

# Getting Started with [JSON Server](https://www.npmjs.com/package/json-server)

This project utilizes JSON Server as a pseudo backend.

## Install JSON Server

### `npm install -g json-server`

## Start JSON Server

### `json-server --watch db.json`

## Go to http://localhost:3000/rowCount

This will show the data of all saved projects and row counts.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
As JSON Server runs on port 3000, you will be prompted in the terminal to use another port to view in your browser. Otherwise, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# How to Use the App

## Entering Information

To enter project information, the user inputs the name of their project, along with the row they are starting/continuing their project on, and click "Submit Entry". The project's name and row count will appear on the UI.

<figure>
<img src="video/RCDemoSubmitEntry20220730.gif" alt="Submit Entry Demo" style="width:25%">
<figcaption align = "left"><b>Submitting Entry for Project and Row Number to appear on UI</b></figcaption>
</figure>

## Increment/Decrement

Once a user has entered their information, they can increment and decrement their count by clicking the "+" and "-" `<button/>`'s, respectively.

<figure>
<img src="video/RCDemoIncrement20220730.gif" alt="Incrementing and Decrementing" style="width:25%">
<figcaption align = "left"><b>Incrementing and Decrementing</b></figcaption>
</figure>

## Saving Work

Should a user stop their work during the course of their project, they have the option of saving their work to continue in the future.

<figure>
<img src="video/RCDemoRetrieveWork20220730.gif" alt="Retrieving Work" style="width:25%">
<figcaption align = "left"><b>Saving and Retrieving Projects</b></figcaption>
</figure>

## Resuming Work and Making Updates

Once work is retrieved, the row counting resumes.

<figure>
<img src="video/RCDemoResumeCounting20220730.gif" alt="Resume Counting" style="width:25%">
<figcaption align = "left"><b>Resuming Row Count from a Saved Project</b></figcaption>
</figure>

Once the user retrieves their saved data, they are able to update their row counts and then save the updated row counts to , keeping the row count on their project current.

<figure>
<img src="video/RCDemoUpdateWork20220812.gif" alt="Updating and Saving Work" style="width:25%">
<figcaption align = "left"><b>Entering, Saving, Retrieving, Updating, and Resaving Previous Projects</b></figcaption>
</figure>

## Deleting Projects

Finally, if a user no longer wants to keep information on a given project, they can delete it.

<figure>
<img src="video/RCDemoDeleteWork20220815.gif" alt="Deleting Work" style="width:25%">
<figcaption align = "left"><b>Deleting Unwanted Projects</b></figcaption>
</figure>


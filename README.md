# Instructions

- Open Terminal and navigate to project root folder.
- Run `npm install`
- Run `npm start`
- Open http://localhost:3000/ in browser of choice.

# Requirements

Create a React App, to manage a movie database. You need to make sure the app can:

- Allow a user to add/remove movies
- Allow a user to search movies by name
- Filter by movie genre
- The app must be responsive
- The app must use Redux or Context Api
- 2 hours of coding time

# Discussion

I wasn't able to get as far along with this project within two hours as I would have liked. Genre filtering works, but that's about it, given the time limit. I wrote out most of the actions and reducers first, then started on the components and wiring everything together. I just ran out of time to keep making components and wiring them up, not to mention styling.

# Next Steps

- finish add movie modal, add a button to trigger the modal to App.js, wire that up to action.
- finish movie details component, add click action to movie poster to show individual movie details, wire up remove movie button.
- add movie search component to search movies by title, wire up to action.
- styling! pull in bootstrap grid for responsiveness. test in multiple browsers.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

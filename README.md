# Redux Crash course

### `Video link`

Dev Ed : https://www.youtube.com/watch?v=CVpUuw9XSjY

### `npx create-react-app app-name`

Creates a new react app named 'app-name'

### `npm install redux react-redux`

Installs all redux files to the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Dev Tools for Redux`

Extension Link : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

Add to index.js of src

const store = createStore( allReducers, window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**() );

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

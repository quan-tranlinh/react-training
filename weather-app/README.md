# Redux training practice Weather Management on Plan Redux

## DESCRIPTION

### Target

- Understand redux basic and redux advanced
- Using components
- Using styled-component and storybook.
- Using react-devtools
- Using redux logger
- Using react perf

### Environment

- Linux 16.04
- VS code
- Git

### Structure

    /
    |- weather-app
    |  |- .storybook
    |  |  |- config.js
    |  |- src
    |  |  |- action
    |  |  |  |- index.js
    |  |  |- components
    |  |  |  |- commons
    |  |  |  |  |- stories
    |  |  |  |  |  |- Button.stories.js
    |  |  |  |  |  |- Card.stories.js
    |  |  |  |  |  |- Description.stories.js
    |  |  |  |  |  |- Input.stories.js
    |  |  |  |  |- styled
    |  |  |  |  |  |- Button.styled.js
    |  |  |  |  |  |- Card.styled.js
    |  |  |  |  |  |- Description.styled.js
    |  |  |  |  |  |- Input.styled.js
    |  |  |  |  |  |- FlexBox.js
    |  |  |  |  |- Button.js
    |  |  |  |  |- Card.js
    |  |  |  |  |- Description.js
    |  |  |  |  |- Input.js
    |  |  |  |- CardList.js
    |  |  |  |- Header.js
    |  |  |  |- WeatherManagement.js
    |  |  |- containers
    |  |  |  |- CardList.js
    |  |  |  |- Header.js
    |  |  |- reducers
    |  |  |  |- index.js
    |  |  |  |- weather.js
    |  |  |  |- weatherDefault.js
    |  |  |- store
    |  |  |  |- configureStore.js
    |  |  |- utils
    |  |  |  |- constant
    |  |  |  |  |- action.js
    |  |  |  |  |- apiKey.js
    |  |  |  |  |- url.js
    |  |  |  |- helper.js
    |  |  |- App.css
    |  |  |- App.js
    |  |  |- App.test.js
    |  |  |- index.css
    |  |  |- index.js
    |  |- public
    |  |- .eslintrc
    |  |- .gitignore
    |  |- .editorconfig
    |  |- README.md
    |  |- package.json
    |  |- yarn.lock
    \

### Build With

- Node v6.0
- NPM v3.3.0

### Guideline

- Clone project: 
 ```
 git clone https://quan.do@gitlab.asoft-python.com/g-quando/react-training.git
 ```

- Move to my app: 
 ```
 cd react-training
 ```

- Checkout to feature/practice-three branch: 
 ```
 git checkout feature/practice-three
 ```

- Run app:
 ```
 cd weather-app
 npm install
 npm start
 ```
- Go to http://localhost:3000 to see my app.

- Run storybook:
 ```
 cd weather-app
 npm install storybook
 npm storybook 
 ```
- Go to http://localhost:9009 to see my storybook.

### Author

[Quan Tran][1]

[1]:https://gitlab.asoft-python.com/quan.do

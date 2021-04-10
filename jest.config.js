module.exports = {
    "setupFilesAfterEnv": [
      "./src/utils/configs/setupTests.js"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./__mocks__/fileMock.js",
      "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
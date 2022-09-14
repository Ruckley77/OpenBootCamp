const logger = require('./logger')

// We used npm init -y to start without inputting
// all of the questions it asks
// then we edited test -> Start node index.js
// then we edited main to index.js
// when we could use console.log or we install winston npm install winston
// then we could use looger. instead of console.
// we could edit the winston stuff to redirect/create new files/logs
// we can also export and import with require ./logger

// logger.log("Im showing up on screen")
logger.info("Informative message")
logger.debug("Debugging message")
logger.warn("Warning message")
logger.error("This is an error")

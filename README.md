Webfaction deployment

webapps/bimandcel_static contains static webpage
do npn run build locally and put the build folder into this with filezilla

server is run through mLab and stored at rhysothomas.webfactional.com/api/comments
put the src into node_bimandcel in webapps

src/server.js is the main file here



Notes
npm config set registry="http://registry.npmjs.org/"


killall node or
pkill -HUP node

upgrade node on webfaction:
https://docs.webfaction.com/software/nodejs.html#installing-packages-with-npm


$  nodemon server.js --exec babel-node --presets=es2015 forever start -c --minUptime 1000 --spinSleepTime 1000

https://stackoverflow.com/questions/16369018/forever-nodemon-running-together

https://stackoverflow.com/questions/33624104/how-do-i-setup-babel-6-with-node-js-to-use-es6-in-my-server-side-code

https://stackoverflow.com/questions/27273993/nodejs-forever-how-to-run-my-npm-application

forever start --minUptime 1000 --spinSleepTime 1000 ./src/server.js


https://stackoverflow.com/questions/30909492/mongoerror-topology-was-destroyed
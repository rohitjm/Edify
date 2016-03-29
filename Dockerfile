FROM node:argon

#install Node modules
RUN apt-get update && apt-get install -y openssh-server
RUN npm install express -g
RUN npm install nodemon -g
RUN npm install webpack -g

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Bundle app source
COPY . /usr/src/app

#Install bcrypt
RUN npm install bcrypt

EXPOSE 3000
CMD [ "npm","start" ]
FROM node:argon

RUN npm install -g nodemon
RUN npm install -g webpack

# Create app directory and copy package.json
WORKDIR /usr/src/app
COPY package.json /usr/src/app/

# Install app dependencies
RUN npm install
RUN webpack --progress --colors

# Bundle app source
COPY . /usr/src/app/

EXPOSE 8000
CMD [ "npm", "start" ]
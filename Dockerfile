FROM node

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm i

COPY . /usr/src/app

EXPOSE 7001
CMD [ "npm", "start" ]

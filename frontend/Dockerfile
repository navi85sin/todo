# pull official base image
FROM node:14

# set working directory
WORKDIR /usr/src


# install app dependencies
COPY ./package.json ./

RUN npm install 

# add app
COPY . .


# start app
CMD ["npm", "start"]
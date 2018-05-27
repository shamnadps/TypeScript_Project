FROM node:8.10
RUN mkdir /typescript_project
ADD . /typescript_project
WORKDIR /typescript_project
CMD ["npm", "start"]
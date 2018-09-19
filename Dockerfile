FROM node:10.10.0-alpine

WORKDIR /backend
ADD ./backend /backend
RUN npm install

ADD ./frontend /frontend
WORKDIR /frontend
RUN npm install
RUN npm run build

RUN cp -r ./dist/angular-pwa ../backend/public

WORKDIR /backend
CMD ["npm", "start"]

EXPOSE 4200

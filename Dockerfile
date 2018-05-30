FROM angular-pwa-backend:latest
ADD ./frontend /frontend
WORKDIR /frontend
RUN npm install
RUN npm run build
RUN cp -r ./dist/angular-pwa ../backend/public
WORKDIR /backend
CMD ["npm", "start"]
EXPOSE 4200
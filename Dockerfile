## Fichier : ./react-docker/Dockerfile
FROM node:18-alpine3.15

WORKDIR /usr/src/app/test_easter

# RUN installe nginx
# COPY nginx.conf /chemin vers nginx.conf
# RUN lance nginx avec daemon

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
# stage1 as builder
FROM node:14.3.0-alpine3.11 as build

WORKDIR /usr/src/app

COPY package.json ./

# Install the dependencies and make the folder
RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=build /usr/src/app/dist/AdminPortal-ClientApp /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
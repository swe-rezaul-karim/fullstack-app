FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN yarn install

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY . .
CMD [ "node", "index.js" ]
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM node:18-alpine
WORKDIR /app
RUN yarn global add serve
COPY --from=build /app/build ./build
CMD [ "serve", "-s", "build" ]
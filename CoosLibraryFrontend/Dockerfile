# ---- Build Stage ----
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --prefer-offline --no-audit

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

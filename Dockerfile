FROM node
WORKDIR /app
COPY ["package-lock.json", "package.json", "vite.config.js", "./"]
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]
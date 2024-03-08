FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ls -la
COPY . ./

CMD ["npm", "run", "dev"]

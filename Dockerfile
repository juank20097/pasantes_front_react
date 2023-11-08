# Container Base

FROM node:14-alpine

# Definition of Metadata

LABEL version="1.0"
LABEL name="React - Devsecops"

# Ports to Export

EXPOSE 3000

WORKDIR /app

RUN npm install

#Change timezone to server

ENV TZ=America/Guayaquil
USER root
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Copy files to deploy

COPY . /app/

# execute run to deploy

CMD ["npm","start"]







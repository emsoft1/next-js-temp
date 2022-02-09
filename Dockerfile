FROM Node:16.14.0

RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/

RUN npm i 




COPY . /app/

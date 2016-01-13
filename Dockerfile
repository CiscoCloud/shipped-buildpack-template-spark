FROM node:4.0.0
EXPOSE 3000
WORKDIR /app
COPY . /app

RUN chmod a+x .shipped/build .shipped/run .shipped/test

RUN [".shipped/build"]
CMD .shipped/run

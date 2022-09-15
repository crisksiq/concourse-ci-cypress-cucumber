FROM cypress/browsers:node18.6.0-chrome105-ff104
RUN mkdir automation
WORKDIR /automation
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run", "headless"]
CMD [""]
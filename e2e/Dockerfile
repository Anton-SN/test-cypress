FROM cypress/included

WORKDIR /e2e

COPY cypress.config.js .
COPY cypress ./cypress

EXPOSE 3000

CMD ["cypress", "run"]

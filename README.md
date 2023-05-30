# Test cypress project

Simple React project with typescript and cypress.
The project's goal is to integrate Cypress into CI/CD pipeline.

## Commands for work with docker

### Commands for local work
- build app image
```shell
cd app
docker build -t test-cypress-app .
```
- build e2e image
```shell
cd e2e
docker build -t test-cypress-e2e .
```

- start app on localhost:3000 
```shell
docker run -p 3000:80 test-cypress-app
```

- start e2e tests on local network
```shell
docker network create local-network
docker run --name app --network local-network test-cypress-app
docker run -it --rm --name e2e --network local-network -e CYPRESS_baseUrl=http://app:80 test-cypress-e2e
```

- docker compose from main directory
```shell
docker-compose up --exit-code-from e2e | grep -v app
```

### Commands for push images to hub and start into CI/CD pipeline

- build for work with ubuntu-latest in github actions (I set platform because I work on mac os)
```shell
docker build --platform=linux/amd64 -t {{ USERNAME }}/test-cypress-e2e:latest .
```

- add tag for existing image
```shell
docker tag test-cypress-e2e {{ USERNAME }}/test-cypress-e2e
```

- push
```shell
docker push {{ USERNAME }}/test-cypress-e2e
```

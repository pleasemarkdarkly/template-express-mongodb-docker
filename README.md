# template express/mongodb docker app

# build

```
pico .env
docker-compose build
docker-compose up -d
docker logs template_app -f
```

# build details

To run this app locally, do the following:

Review the `.env` file with the following contents:
```
APPLICATION=template
APPLICATION_MONGO_DB=mongodb://mongo:27017/${APPLICATION}
NODE_ENV=development
```

Run `npm install`

Build the Docker image running `docker-compose build`

Run the app in Docker by running `docker-compose up` (be patient ~20ish seconds the first time)
The app will not be accessible until you see the message `APPLICATION RUNNING`

Then, navigate to http://localhost:3030/

To stop the app, run `Control+C` on a Mac.

To stop app using Docker run:
`docker-compose down`

You may view Docker images by running the below command:
`docker images`

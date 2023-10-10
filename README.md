### Mini Wallet - Telegram Mini App
##### Manage your day-to-day finances inside Telegram

Setup Instructions:

###### Client:
Client is developed using React.

1. Clone the project.
2. Go to the client directory `cd client`
3. `npm install`
4. Rename the *.env.test* file to *.env* and change the production URL.
5. `npm run dev` (for development)
6. Or to build your project: `npm run build`

###### Server:
Backend is created using NodeJS with Mongoose and MongoDB. (Hosted using a Docker container)

1. Rename the *.env.test* file to *.env* and change the DB String and Private Key fields
2. `cd server` and `npm install`
3. Build the docker image: `docker build -t your-image-name:tag`
4. Tag the docker image: `docker tag your_image_name:tag your_dockerhub_username/your_repository_name:tag
`
5. Login to docker: `docker login`
6. Push to DockerHub: `docker push your_dockerhub_username/your_repository_name:tag
`
6. Now you can pull this image and serve it using a cloud provider like Google Cloud (Cloud Run), AWS or Azure (etc.) 

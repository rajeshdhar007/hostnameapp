# hostnameapp
This is a simple node application on express that outputs the hostname of the server on which the app is running. Ideal to demo and test kubernetes scaling pods. This would show the different names of the pods when redirected via a LoadBalancer or Service (from K8s)

## To install:
run ``npm install``

## To run:
run ``node index.js``

## To access the application:
Navigate to ``http://localhost:8000``

## To build the docker image:
run ``docker build -t <project_name>/<image_name>:v1 .``

example:
	``docker build -t rajeshdhar007/hostnameapp:v1 .``

## To list all the docker images on the system:
run ``docker images``

## To run the docker container from the image:
run ``docker run -p 8000:8000 rajeshdhar007/hostnameapp:v1``
And then navigate to ``http://localhost:8000``

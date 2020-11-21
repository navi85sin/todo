

cd backend

docker build -t api-server .

cd ..

cd frontend

docker build -t react-app .

cd ..

docker-compose up

For running individual image run
docker run -i -d -p 5000:5000 api-server
## Points of interest

This project was inspired by the challenge [Pontos de Interesse](https://github.com/backend-br/desafios/tree/master/3%20-%20Hard/Pontos%20de%20Interesse) presented in the backend-br/desafios repo. The challenge consists in the following:

1- must receive a request with a 'point of interest' payload and save it to the database.
2- must return all the points inside the database.
3- when receiving request with point position and a distance, should return only the points that are inside the distance.

### point payload

```json
{
  "name": "Point of interest",
  "x": 10,
  "y": 12
}
```

### routes

| Method | Route | Description |
| ---- | ------- | ----------- |
| POST | /points | save a point of interest |
| GET  | /points | get all points of interest |
| GET  | /points?x=4&y=7&d=15 | get all points of interest inside a distance |

### How to run

Create a .env file with the following variables:
```
DATABASE_URL=mongodb://localhost/test
```

Then run the following command:

1. Run ```npm install```
2. Run ```npm start``` or ```npm run start:dev``` to run the server in development mode
3. Run ```npm run test``` to run the tests

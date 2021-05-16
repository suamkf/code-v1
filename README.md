### Params:

1 - green : true/false (show or not)

2 - blue : true/false (show or not)

3 - red : true/false (show or not)

4 - white : true/false (show or not)

5 - black : true/false (show or not)

6 - array with the order to print color in string split by "," ["red", "blue", "green", "white", "black"]

7 - async/sync : if you want to show all under one promise async or one by one sync

### Example to run application:

node ~/code-challenge/src/index.js true true true true true '["red", "blue", "green", "white", "black"]' sync

out put:
{ R: 255, G: 0, B: 0 }
{ R: 0, G: 0, B: 255 }
{ R: 0, G: 255, B: 0 }
{ R: 255, G: 255, B: 255 }
{ R: 0, G: 0, B: 0 }

### Example to run application:

node ~/code-challenge/src/index.js true true true true true '["red", "blue", "green", "white", "black"]' async

out put:
[
{ R: 255, G: 0, B: 0 },
{ R: 0, G: 0, B: 255 },
{ R: 0, G: 255, B: 0 },
{ R: 255, G: 255, B: 255 },
{ R: 0, G: 0, B: 0 }
]

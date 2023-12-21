let arr = [
    [
        [0 , 1 , 2] ,
        [3 , 4 , 5]
     ],
     [
        [0, -1 , -2],
        [-3 , -4 , -5]
     ]
   ];
   
   
   let i = 0;
   let j = 0;
   let k = 0;
   
   while (i < arr.length) {
     debugger;
     while (j < arr[i].length) {
        while (k < arr[i][j].length) {
           console.log(arr[i][j][k] * 4)
                   k = k + 1
        }
        j = j + 1 
        k = 0
     }
     i = i + 1
     j = 0
   }
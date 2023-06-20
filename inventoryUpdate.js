function updateInventory(arr1, arr2) {
    for(let i=0;i<arr2.length;i++)
    {
        let modified = false;
        for(let j=0;j<arr1.length;j++)
        {
            if(arr1[j][1] == arr2[i][1])
            {
                //found
                modified = true;
                arr1[j][0] += arr2[i][0];
                break;
            }
        }
        if(!modified)
        {
            arr1.push(arr2[i]);
        }
    }


    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr1.length-1;j++)
        {
            if(arr1[j][1] > arr1[j+1][1])
            {
                //swap
                let temp = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = temp;
            }
        }
    }
    // console.log(JSON.stringify(arr1));
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];


var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];



updateInventory(curInv, newInv);
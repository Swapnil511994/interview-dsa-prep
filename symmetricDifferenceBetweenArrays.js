function diffCalculator(acc,arr)
{
    // console.log(acc);
    // console.log(arr);
    const set = new Set(arr);
    for(let val of set)
    {
        if(acc.has(val))
        {
            acc.delete(val);
        }
        else
        {
            acc.add(val);
        }
    }
    return acc;
}
function symmetricDiff(...args)
{
    // console.log(args);
    return [...args.reduce(diffCalculator,new Set())];
}

console.log(symmetricDiff([1,2,3],[2,3,4])); //[1,4]
console.log(symmetricDiff([2,1,3,4],[1,9,4,4,5])); //[2,3,9,5]
console.log(symmetricDiff([1, 2, 5], [2, 3, 5], [3, 4, 5])); //[1,4,5]





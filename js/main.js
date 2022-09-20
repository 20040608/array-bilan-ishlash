// bozorga bordik va narsalar xarid qilyapmiz ikki 
//marta 1 narsa olsak ro'yxatga qo'shmasin  ... bilan
// oddy if else 

// let arr = ['banan', 'banan', 'olma', 'sher']

// function narsa(arrey){
//     let a = 'nok'
   
//     if (arrey.includes(a)){
//         return console.log(arrey);

//     } else{
//         arr.push(a)
//         return  console.log(arrey);
        
//     }
   
// }
// narsa(arr);




function optinal(a, b){
    if ( +a >= +b){
        return console.log(true);
    } else {
        return console.log(false);
    }
}

optinal(7, '9')
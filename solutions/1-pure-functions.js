// BEGIN
const sayPrimeOrNot = (number) => {
    let bool = true;
    if(number === 0 || number === 1 || number < 0){
        console.log('no');
        bool = false;
    }else{
        for(let i = 1; i <= Math.round(Math.sqrt(number)); i++){
            if(number % i === 0 && i !== 1){
                console.log('no');
                bool = false;
                break;
            }
        }
    }
    if(bool){
        console.log('yes');
    }
};

export default sayPrimeOrNot;
// END
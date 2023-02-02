const container = document.querySelector('.container');

container.addEventListener('submit', (event)=>{
    event.preventDefault();

    let decimal =0;
    let counter = 0;

    const result = document.querySelector('.result');
    let binary = document.querySelector('#binary').ariaValueMax;

    while(binary >0){
        let lastDig = Math.round(binary%10);
        decimal+= Math.pow(2,counter) * lastDig;
        counter ++;
        binary /=10;
    }
    result.textContent = `Decimal Number : ${decimal}`;

});
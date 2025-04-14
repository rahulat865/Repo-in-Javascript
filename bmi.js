const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const Height = parseInt (document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const Results = document.querySelector('#Results');

    if( Height === '' || Height < 0 || isNaN(Height)) {
        Results.innerHTML = `Please give valid height $(Height)`;
    }
    else if( Weight === '' || Weight < 0 || isNaN(Weight)) {
        Results.innerHTML = `Please give valid weight $(Weight)`;
    }
    else {
        const bmi = (Weight/((Weight*Height)/10000)).toFixed(2);
        Results.innerHTML = `<span>${bmi}</span>` ;
    }
})
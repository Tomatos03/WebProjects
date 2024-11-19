const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.innerHTML = '0';
    const target = +number.getAttribute('data-target');
    console.log(target);
    const increment = target / 200;

    const updateCount = () => {
        const count= +number.innerHTML;
        if(count < target) {
            number.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCount, 1);
        } else {
            number.innerHTML = target;
        }
    };
    
    updateCount();
});
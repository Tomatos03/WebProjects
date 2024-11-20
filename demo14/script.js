const cups_small = document.querySelectorAll('.cup-small');
const usedPercent = document.querySelector('.percentage');
const curLiter = document.querySelector('#liter');
const bigCupTotalLiter = parseInt(curLiter.textContent) * 1000;
const smallCupTotalLiter = parseInt(document.querySelector('.cup-small').textContent);
const cupHeight = document.querySelector('.cup').clientHeight;
const remained = document.querySelector('.remained');
const cupCount = cups_small.length;

function updateSmallCupStatus(cup, index, cups) {
    const n = cups.length;
    let mid = index;
    if(cup.classList.contains('full')) --mid;

    for(let i = 0; i < n; ++i) {
        if(i <= mid) {
            cups[i].classList.add('full');
        } else {
            cups[i].classList.remove('full');
        }
    }
    updateBigCupSatus(mid + 1);
}

function updateBigCupSatus(cnt) {
    const percent = smallCupTotalLiter / bigCupTotalLiter * cnt;
    const scale = percent * 100;
    if(percent == 1) {
        remained.style.height = `${0}px`;
    } 
    if(scale != 0) {
        usedPercent.textContent = `${scale}%`;
    } else {
        usedPercent.textContent = '';
    }
    usedPercent.style.height = `${cupHeight * percent}px`;
    curLiter.textContent = `${(bigCupTotalLiter - smallCupTotalLiter * cnt) / 1000}L`;
}

cups_small.forEach((cup_small, index, arr) => {
    cup_small.addEventListener('click', () => updateSmallCupStatus(cup_small, index, arr));
});
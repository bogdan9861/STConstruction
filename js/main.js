window.addEventListener('DOMContentLoaded', () => {
    const statikImg = document.querySelector('#statikImg'),
        dinamicImg = document.querySelector('#dinamicImg'),
        yellow = document.querySelector('.main__img-dec img'),
        spoilerBtn = document.querySelector('.spoiler__btn'),
        spoilerContent = document.querySelector('.spoiler__hidden-content'),
        top = document.querySelector('.top'),
        aboutItems = document.querySelectorAll('.about__item');

    let yellowHeight = 0;
    let timer = null;

    // scroll function

    window.addEventListener('scroll', () => {

        yellowHeight = window.scrollY;

        if (yellowHeight >= 900) {
            yellowHeight = 900;
            yellow.style.height = `${yellowHeight - 50}px`;
        } else {
            yellow.style.height = `${yellowHeight - 50}px`;
        }

        statikImg.classList.remove('active');
        dinamicImg.classList.add('active');

        clearTimeout(timer);
        timer = setTimeout(function () {
            statikImg.classList.add('active');
            dinamicImg.classList.remove('active');
        }, 100);

        if (window.scrollY >= 750) {
            top.classList.add('active')
            aboutItems.forEach(item => {
                item.classList.add('active');
            })
        } else {
            top.classList.remove('active')
        }

    });

    // show hidden content

    spoilerBtn.addEventListener('click', () => {
        spoilerContent.classList.toggle('hidden');
    });


    // modal

    const modal = document.querySelector('.modal'),
        openModal = document.querySelector('#openModal'),
        openModal2 = document.querySelector('#openModal2'),
        modalClose = document.querySelector('#modalClose'),
        lastInput = document.querySelector('#last-input'),
        modalBg = document.querySelector('.modal-bg');

    openModal.addEventListener('click', () => {
        modal.classList.add('active');
        modalBg.style.display = 'block'
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        modalBg.style.display = 'none'
    })

    openModal2.addEventListener('click', () => {
        modal.classList.add('active');
        modalBg.style.display = 'block';
        lastInput.style.display = 'none';
    });

    modalBg.addEventListener('click', () => {
        modal.classList.remove('active');
        modalBg.style.display = 'none'
    })

    //fill navigation dots

    const dots = document.querySelectorAll('.siteNav__list-item');

    dots.forEach((item, i) => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= 800 ) {
                dots[0].classList.add('active')
            } else {
                dots[0].classList.remove('active')
            }

            if (window.scrollY >= 1400) {
                dots[1].classList.add('active')
            } else {
                dots[1].classList.remove('active')
            }

            if (window.scrollY >= 2000) {
                dots[2].classList.add('active')
            } else {
                dots[2].classList.remove('active')
            }

            if (window.scrollY >= 2600) {
                dots[3].classList.add('active')
            } else {
                dots[3].classList.remove('active')
            }

            if (window.scrollY >= 3200) {
                dots[4].classList.add('active')
            } else {
                dots[4].classList.remove('active')
            }

            if (window.scrollY >= 3800) {
                dots[5].classList.add('active')
            } else {
                dots[5].classList.remove('active')
            }

            if (window.scrollY >= 4400) {
                dots[6].classList.add('active')
            } else {
                dots[6].classList.remove('active')
            }

            if (window.scrollY >= 5000) {
                dots[6].classList.add('active')
            } else {
                dots[6].classList.remove('active')
            }

            if (window.scrollY >= 5600) {
                dots[7].classList.add('active')
            } else {
                dots[7].classList.remove('active')
            }

            if (window.scrollY >= 6200) {
                dots[8].classList.add('active')
            } else {
                dots[8].classList.remove('active')
            }

            if (window.scrollY >= 6800) {
                dots[9].classList.add('active')
            } else {
                dots[9].classList.remove('active')
            }
        })
    })

})
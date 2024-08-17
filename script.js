let selectMenu_btn = document.querySelector('.selectMenu-btn'),
    selectMenu_btn_text = document.querySelector('.selectMenu-btn_text'),
    selectMenu_btn_icon = document.querySelector('.selectMenu-btn_icon'),
    selectMenu_content = document.querySelector('.selectMenu-content'),
    selectMenu_content__input = document.querySelector('.selectMenu-content__input'),
    selectMenu_content__icon = document.querySelector('.selectMenu-content__icon'),
    list = document.querySelector('.selectMenu-content__list'),
    item = document.querySelector('.selectMenu-content__item')


const Countries = ['Iran', 'France', 'Turkey', 'India', 'Pakistan', 'Danmark', 'Germany', 'Italia', 'Canada']

let flag = false;

selectMenu_btn.addEventListener('click', () => {
    selectMenu_content.classList.toggle('active');

    if (flag === false) {
        chevronUp()
    }
    else {
        chevronDown()
    }
})


function addCountry() {
    let li = null

    Countries.forEach((country) => {
        li = `<li class="selectMenu-content__item" onclick="updateName(this)">${country}</li>`
        list.insertAdjacentHTML('beforeend', li)
    })
}

function updateName(el) {
    selectMenu_content__input.value = ''
    selectMenu_btn_text.innerHTML = el.textContent
    selectMenu_content.classList.remove('active');
    chevronDown()

    for (let item of list.children) {
        if (item.textContent === el.textContent) {
            item.classList.add('active')
        }
        else {
            item.classList.remove('active')
        }
    }
}


selectMenu_content__input.addEventListener('keyup', () => {
    searchWord = selectMenu_content__input.value.toLowerCase()

    let userCountries = Countries.filter(country => country.toLowerCase().startsWith(searchWord))
        .map(country => `<li class="selectMenu-content__item" onclick="updateName(this)">${country}</li>`)
        .join('')

    list.innerHTML = userCountries
})



function chevronUp() {
    selectMenu_btn_icon.className = 'bx bx-chevron-up selectMenu-btn_icon'
    flag = true
}

function chevronDown() {
    selectMenu_btn_icon.className = 'bx bx-chevron-down selectMenu-btn_icon'
    flag = false
}


window.addEventListener('load', addCountry)


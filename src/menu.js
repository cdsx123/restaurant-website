const menu = () => {
    const bcard = document.createElement('div');
    const fcard = document.createElement('div');
    const scard = document.createElement('div');
    const pcard = document.createElement('div');
    const content = document.querySelector('#content');
    const order = document.createElement('a');
    const bimg = document.createElement('img');
    const fimg = document.createElement('img');
    const simg = document.createElement('img');
    const pimg = document.createElement('img');
    const bh1 = document.createElement('h1');
    const fh1 = document.createElement('h1');
    const sh1 = document.createElement('h1');
    const ph1 = document.createElement('h1');
    const buorder = document.createElement('a');
    const forder = document.createElement('a');
    const sorder = document.createElement('a');
    const porder = document.createElement('a');
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')
    const br6 = document.createElement('br')
    const br7 = document.createElement('br')
    const br8 = document.createElement('br')

    content.style.cssText = 'width:750px; height: 850px; justify-content: space-around; \
    align-items: center; top: 53%;'

    bimg.src = '../dist/burger.jpeg'
    fimg.src = '../dist/fries.jpeg'
    simg.src = '../dist/sundae.jpeg'
    pimg.src = '../dist/pancake.jpeg'

    bimg.classList.add('menuimg')
    fimg.classList.add('menuimg')
    simg.classList.add('menuimg')
    pimg.classList.add('menuimg')

    bh1.textContent = 'Burger'
    fh1.textContent = 'Fries'
    sh1.textContent = 'Sundae'
    ph1.textContent = 'Pancake'

    bcard.classList.add('card')
    fcard.classList.add('card')
    scard.classList.add('card')
    pcard.classList.add('card')

    buorder.classList.add('menua')
    buorder.textContent = 'Order Now'
    forder.classList.add('menua')
    forder.textContent = 'Order Now'
    sorder.classList.add('menua')
    sorder.textContent = 'Order Now'
    porder.classList.add('menua')
    porder.textContent = 'Order Now'

    



    content.appendChild(bcard)
    content.appendChild(fcard)
    content.appendChild(scard)
    content.appendChild(pcard)

    bcard.appendChild(bh1)
    bcard.appendChild(bimg)
    bcard.appendChild(br1)
    bcard.appendChild(br2)
    bcard.appendChild(buorder)
    fcard.appendChild(fh1)
    fcard.appendChild(fimg)
    fcard.appendChild(br3)
    fcard.appendChild(br4)
    fcard.appendChild(forder)
    scard.appendChild(sh1)
    scard.appendChild(simg)
    scard.appendChild(br5)
    scard.appendChild(br6)
    scard.appendChild(sorder)
    pcard.appendChild(ph1)
    pcard.appendChild(pimg)
    pcard.appendChild(br7)
    pcard.appendChild(br8)
    pcard.appendChild(porder)
}



export default menu
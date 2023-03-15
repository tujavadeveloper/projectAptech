const listProduct = [
    {
        id: 1,
        name: 'Readable content DX22',
        description: 'this is description',
        img: 'assets/images/shop/1.webp',
        price: '210.00',

    },
    {
        id: 2,
        name: 'Modern Eye Brush',
        description: 'this is description',
        img: 'assets/images/shop/2.webp',
        price: '210.00',

    },
    {
        id: 3,
        name: 'Voyage face cleaner',
        description: 'this is description',
        img: 'assets/images/shop/3.webp',
        price: '210.00',

    },
    {
        id: 4,
        name: 'Impulse Duffle',
        description: 'this is description',
        img: 'assets/images/shop/4.webp',
        price: '210.00',

    },
    {
        id: 5,
        name: 'Sprite Yoga Straps1',
        description: 'this is description',
        img: 'assets/images/shop/5.webp',
        price: '210.00',

    },
    {
        id: 6,
        name: 'Fusion facial cream',
        description: 'this is description',
        img: 'assets/images/shop/6.webp',
        price: '210.00',

    },
    {
        id: 7,
        name: 'Readable content DX22',
        description: 'this is description',
        img: 'assets/images/shop/7.webp',
        price: '210.00',

    },
    {
        id: 8,
        name: 'Voyage face cleaner',
        description: 'this is description',
        img: 'assets/images/shop/8.webp',
        price: '210.00',

    },
    {
        id: 9,
        name: 'Impulse Duffle',
        description: 'this is description',
        img: 'assets/images/shop/9.webp',
        price: '210.00',

    },
    
]




class CartItem{
    constructor(name, img, price){
        this.name = name
        this.img=img
        this.price = price
        this.quantity = 1
   }
}

class LocalCart{
    static key = "cartItems"

    static getLocalCartItems(){
        let cartMap = new Map()
        const cart = localStorage.getItem(LocalCart.key)   
     if(cart===null || cart.length===0)  return cartMap
        return new Map(Object.entries(JSON.parse(cart)))
    }

    static addItemToLocalCart(id, item) {
        let cart = LocalCart.getLocalCartItems()
        console.log('====================================');
        console.log('cart',cart);
        console.log('====================================');
        if (cart.has(id)) {
            console.log('da ton tai');
            let mapItem = cart.get(id)
            mapItem.quantity +=1 
            cart.set(id, mapItem)
        }
        else {
            console.log('da ton tai');
            cart.set(id, item)
        }
        console.log('====================================');
        console.log('cart update',cart);
        console.log('====================================');
        localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
       updateCartUI()
        
    }

    static removeItemFromCart(id){
    let cart = LocalCart.getLocalCartItems()
    if(cart.has(id)){
        let mapItem = cart.get(id)
        if(mapItem.quantity>1)
       {
        mapItem.quantity -=1
        cart.set(id, mapItem)
       }
       else
       cart.delete(id)
    } 
    if (cart.length===0)
    localStorage.clear()
    else
    localStorage.setItem(LocalCart.key,  JSON.stringify(Object.fromEntries(cart)))
       updateCartUI()
    }
}

const addToCartBtns = document.querySelectorAll('.action-btn-cart')
addToCartBtns.forEach( (btn)=>{
    btn.addEventListener('click', (e)=>addItemFunction(e))
}  )

function addItemFunction(e) {
    const idGet = e.target.parentElement.parentElement.dataset.id;
    // const img = e.target.parentElement.parentElement.children[0].children[0].getAttribute('src');
    // const name = e.target.parentElement.parentElement.nextElementSibling.childNodes[3].innerText;
    // let price = e.target.parentElement.parentElement.nextElementSibling.childNodes[5].innerText;
        const datas = listProduct.find((item) => item.id == idGet);
        price = datas.price.replace("$", '')
        const item = new CartItem(datas.name, datas.img, price, 1)
        LocalCart.addItemToLocalCart(datas.id+'', item)
}

function updateCartUI(){
    const cartWrapper = document.querySelector('.aside-cart-product-list')
    cartWrapper.innerHTML=""
    const items = LocalCart.getLocalCartItems()
    if(items === null) return
    let count = 0
    let total = 0
    for(const [key, value] of items.entries()){
        const cartItem = document.createElement('li')
        cartItem.classList.add('aside-product-list-item')
        let price = value.price*value.quantity
        price = Math.round(price*100)/100
        count+=1
        total += price
        total = Math.round(total*100)/100
        cartItem.innerHTML =
            `
            <a href="product-details.html">
            <img src="${value.img}" width="68" height="84" alt="Image">
            <span class="product-title">${value.name}</span>
            </a>
            <span class="product-price">${value.quantity}</span> -
            <span class="product-price">${price}$</span>
            <a href="#/" class="remove">×</a>
            `
       cartItem.lastElementChild.addEventListener('click', ()=>{
           LocalCart.removeItemFromCart(key)
           
        const i = document.getElementsByClassName('number-product-count');
        i.innerHTML = items.size
       })
        cartWrapper.append(cartItem)
    }

    const subtotal = document.querySelector('.amount-price')
    if (count > 0) {
        subtotal.innerHTML = `SubTotal: $${total}`
    } else {
        subtotal.innerHTML = 'SubTotal: $0'
    }

        const i = document.querySelector('.number-product-count');
    i.innerHTML = items.size
    
}
// document.addEventListener('DOMContentLoaded', () => { updateCartUI() })
updateCartUI()
// window.addEventListener('DOMContentLoaded', () => { updateCartUI() });
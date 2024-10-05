const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "img/discount.svg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "img/discount_2.svg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "img/gift.svg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "img/delivery.svg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "img/discount_3.svg"
    }
];

const promocodeArr = [
    {
        promocode: 'PROM10',
        gift: "Скидка 10%"
    },
    {
        promocode: 'PROM50',
        gift: "Скидка 50%"
    },
    {
        promocode: 'GIFT',
        gift: "Подарок в корзине"
    }
];

const getRandomGift = () => {
    const randomIndex = Math.floor(Math.random() * giftArr.length);
    return giftArr[randomIndex];
};

const showGiftPopup = () => {
    const { title, icon } = getRandomGift();
    document.getElementById('gift-title').innerText = title;
    document.getElementById('gift-icon').src = icon;
    document.getElementById('gift-popup').classList.remove('hidden');
};

const closePopup = () => {
    document.getElementById('gift-popup').classList.add('hidden');
};

const checkPromoCode = (enteredCode) => {
    const promocode = promocodeArr.find(item => item.promocode === enteredCode);
    if (promocode) {
        alert(`Промокод активирован: ${promocode.gift}`);
        document.cookie = `promoCode=${enteredCode}; path=/; max-age=31536000`; 
        document.getElementById('promo-code').value = ''; 
    } else {
        alert("Неверный промокод.");
    }
};

const getCookies = () => {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});
};

const loadPromoCodeFromCookie = () => {
    const cookies = getCookies();
    if (cookies.promoCode) {
        alert(`Промокод уже активирован: ${cookies.promoCode}`);
    }
};

document.getElementById('close-popup').addEventListener('click', closePopup);
document.getElementById('promo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredCode = document.getElementById('promo-code').value;
    checkPromoCode(enteredCode);
});

setTimeout(showGiftPopup, 3000);

document.addEventListener('DOMContentLoaded', loadPromoCodeFromCookie);

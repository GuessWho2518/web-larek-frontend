# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Описание проекта:

Проект "WEB-ларёк" - реализует пример онлайн-магазина. Пользователь может просматривать информацию о товаре и оформлять заказ. Проект реализован на TypeScript и представляет собой SPA (Single Page Application) с использованием API для получения данных о товаре.

Особенности реализации:
- Из списка можно выбрать любой товар, но не более 1 позиции каждого артикула

## Архитектура проекта (MVP)
Model - слой данных, отвечает за хранение и изменение данных
View - слой представления, отвечает за отображение данных на странице,
Presenter - презентер, отвечает за связь представления и данных.


## Описание интерфейса:




## Отображение данных
# Ключевые типы данных приложения
```typescript
// товар
interface Product{
    title: string; // название товара
    description: string; // описание товара
    price: number; // цена товара
    category: string; // категория товара
    imageURL: string; // ссылка на картинку товара
    id: number; // идентификатор товара
}

// заказ
interface Order{
    payment: string; // способ оплаты
    adress: string; // адрес
    email: string; // почта
    phone: string; // номер телефона
    isProcessed: boolean; // оформлен заказ
}

//корзина
interface Basket {
    counterProducts: number; // счетчик товаров в корзине
    totalPrice: number; // общая сумма заказа
    productsList: string[]; // список товаров добавленных в корзину
}

# Основные события
// основные события в приложении
enum Events{
    OPEN__PRODUCT__IN__MODAL = 'product: openModal' // клик по товару
    ADD__IN__CART = 'product: addToBasket' // добавить товар в корзину
    OPEN__MODAL = 'modal: open' // открытие модалки
    CLOSE__MODAL = 'modal: close' // закрытие модалки
    CART__OPEN = 'basket: open' // открытие корзины
    DELETE__PRODUCT = 'basket: deleteProduct' // удалить товар из корзины
    SET__PAYMENT__TUPE = 'order: setPaymentType'// выбрать способ оплаты
    FORM__ERRORS = 'form: errors' // ошибки в заполнении формы
    BASKET__CLEAR = 'basket: clear' // очистка корзины после оформления заказа
}

#Глобальные классы
// Глобавльный класс для управления товарами
class ProductManager {
    private products: Product[] = []// массив для хранения всех продуктов
    private cart: Product[] = [] // массив для хранения продуктов в корзине
    
    //Метод для добавления товара в корзину
    addToCart(productId: string): void{
        // проверяем есть ли товар уже в корзине
        const inTheCart = this.cart.some(p => p.id === productId);
        if(!inTheCart){//если товара нет
            const product = this.products.find(p => p.id === productId);//находим продукт по id среди всех продуктов
            if(product){// если нашли
                this.cart.push(product)//добавляем в корзину
            }
        }
    }
    
    //Метод для удаления товара из корзины
    reoveFromCart(productId: string): void{
        this.cart = this.cart.filter(p => p.id !== productId);
    }
    
    //Метод для получения всех товаров из корзины
    getCartProducts(): Product[]{
        return this.cart
    }
}

```

## Хранение и изменение данных


1. Типы с которыми будем работать 
2. Интерфейс api 
3. Интерфейс модели данных
4. Интерфейсы отображений 
5. Интерфейсы базовых классов 
6. Перечисление событий и их интерфейсы (для брокера)
7. Типы и интерфейсы, которые сами заложили 
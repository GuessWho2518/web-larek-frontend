export type ProductCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';
//товар
export interface IProduct {
    id: string;
    category: ProductCategory;
    title: string;
    description: string;
    price: number;
    imageURL: string;
}

export type PaymentOrder = 'online' | 'cash';

// заказ
export interface IOrder {
    payment: PaymentOrder;
    adress: string;
    email: string;
    phone: string;
    items: string[];
    total: number;
}

//корзина
export interface ICart {
    counter: number;
    total: number;
    items: string[];
}



// состояние приложения
export interface IHomePage {
    catalog: IProduct[];
    cart: ICart[] | null;
    cartTotal: number;
}

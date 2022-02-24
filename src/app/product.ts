export enum categoryEnum{
    "jewelery", "electronics", "men's clothing", "women's clothing"
}


export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    category:categoryEnum  ;
    image:string;
    rating:number[];
    quantity:number;
}
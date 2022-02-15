export enum categoryEnum{
    "jewelery", "electronics", "men's clothing", "women's clothing"
}


export interface Product {
    id:number;
    author:string;
    title:string;
    price:number;
    description:string;
    category:categoryEnum  ;
    image:string;
    rating:number[];
}
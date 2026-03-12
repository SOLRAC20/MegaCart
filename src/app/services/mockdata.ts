import { Category, Product } from "./interfaces";

export const categories: Category[] = [
    { id: 1, name: 'Phones',      iconUrl: 'assets/icons/cat-phone.svg' },
    { id: 2, name: 'Computers',   iconUrl: 'assets/icons/cat-computer.svg' },
    { id: 3, name: 'SmartWatch',  iconUrl: 'assets/icons/cat-smartwatch.svg' },
    { id: 4, name: 'Camera',      iconUrl: 'assets/icons/cat-camera.svg' },
    { id: 5, name: 'HeadPhones',  iconUrl: 'assets/icons/cat-headphones.svg' },
    { id: 6, name: 'Gaming',      iconUrl: 'assets/icons/cat-gaming.svg' },
];

export const destaques: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        imageUrl: "assets/img/products/ak-900-01-500x500 1.png",
        description: "Description for Product 1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        imageUrl: "assets/img/products/ak-900-01-500x500 1.png",
        description: "Description for Product 2"
    },
];

export const productPromosToday: Product[] = [
    {
        id: 3,
        name: "Product 3",
        price: 150,
        imageUrl: "assets/img/products/ak-900-01-500x500 1.png",
        description: "Description for Product 3"
    },
    {
        id: 4,
        name: "Product 4",
        price: 250,
        imageUrl: "assets/img/products/g27cq4-500x500 1.png",
        description: "Description for Product 4"
    },
    {
        id: 4,
        name: "Product 4",
        price: 250,
        imageUrl: "assets/img/products/g92-2-500x500 1.png",
        description: "Description for Product 4"
    },
    {
        id: 4,
        name: "Product 4",
        price: 250,
        imageUrl: "assets/img/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
        description: "Description for Product 4"
    },
    {
        id: 4,
        name: "Product 4",
        price: 250,
        imageUrl: "assets/img/products/ak-900-01-500x500 1.png",
        description: "Description for Product 4"
    },
    {
        id: 4,
        name: "Product 4",
        price: 250,
        imageUrl: "assets/img/products/ak-900-01-500x500 1.png",
        description: "Description for Product 4"
    },
    {
        id: 4,
        name: "Product 4",
        price: 250,
        imageUrl: "assets/img/products/ak-900-01-500x500 1.png",
        description: "Description for Product 4"
    }
];

export const exploreProducts: Product[] = [
    { id: 20, name: 'Breed Dry Dog Food',       price: 100,  imageUrl: 'assets/img/products/ak-900-01-500x500 1.png',                          description: '' },
    { id: 21, name: 'CANON EOS DSLR Camera',    price: 360,  imageUrl: 'assets/img/products/g27cq4-500x500 1.png',                             description: '' },
    { id: 22, name: 'ASUS FHD Gaming Laptop',   price: 700,  imageUrl: 'assets/img/products/g92-2-500x500 1.png',                               description: '' },
    { id: 23, name: 'Curology Product Set',     price: 500,  imageUrl: 'assets/img/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png',  description: '' },
    { id: 24, name: 'Kids Electric Car',        price: 960,  imageUrl: 'assets/img/products/ak-900-01-500x500 1.png',                          description: '' },
    { id: 25, name: 'Jr. Zoom Soccer Cleats',   price: 1160, imageUrl: 'assets/img/products/g27cq4-500x500 1.png',                             description: '' },
    { id: 26, name: 'GP11 Shooter USB Gamepad', price: 660,  imageUrl: 'assets/img/products/g92-2-500x500 1.png',                               description: '' },
    { id: 27, name: 'Quilted Satin Jacket',     price: 660,  imageUrl: 'assets/img/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png',  description: '' },
];
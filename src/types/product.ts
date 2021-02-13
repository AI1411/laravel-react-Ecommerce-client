export class ProductType {
    id: number;
    product_name: string;
    description: string;
    price: number;
    image: string;

    constructor(id = 0, product_name = "", description = "", price = 0, image = "") {
        this.id = id;
        this.product_name = product_name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

export class ProductType {
    id: number;
    product_name: string;
    description: string;
    price: number;
    image: string;
    category_id: number;

    constructor(id = 0, product_name = "", description = "", price = 0, image = "", category_id = 0) {
        this.id = id;
        this.product_name = product_name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category_id = category_id;
    }
}

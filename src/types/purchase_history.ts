export class PurchaseHistoryType {
    id: number;
    user_id: number;
    product_id: number;

    constructor(id = 0, user_id = 0, product_id = 0) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
    }
}

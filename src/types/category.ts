export class CategoryType {
    id: number;
    name: string;
    slug: string;
    main_category: string;
    main_category_id: number;

    constructor(id = 0, name = "", slug = "", main_category = '', main_category_id = 0) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.main_category = main_category;
        this.main_category_id = main_category_id;
    }
}

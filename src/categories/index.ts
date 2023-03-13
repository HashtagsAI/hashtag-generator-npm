import { Base } from "src/base";
import { CategoriesResponse, Category, HashtagsResponse } from "src/types";

export class Categories extends Base {
    getCategories(): Promise<CategoriesResponse> {
        return this.invoke('/categories');
    }

    getCategory(id: number): Promise<Category> {
        return this.invoke('/categories/' + id);
    }

    getHashtagsByCategory(id: number): Promise<HashtagsResponse> {
        return this.invoke('/categories/' + id + '/tags');
    }
}
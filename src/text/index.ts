import { Base } from "src/base";
import { CountResponse, HashtagsResponse } from "src/types";

export class Tag extends Base {
    getTop(): Promise<HashtagsResponse> {
        return this.invoke('/tag/top');
    }
    getSimilar(tag: string): Promise<HashtagsResponse> {
        return this.invoke('/tag/predict?keyword=' + tag);
    }
    getPostCount(tag: string): Promise<CountResponse> {
        return this.invoke('/tag/count?tag=' + tag);
    }
}
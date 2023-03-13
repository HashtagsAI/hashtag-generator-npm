import { Base } from "src/base";
import { HashtagsResponse } from "src/types";

export class Image extends Base {
    generateHashtagsFromImage(base64Image: String): Promise<HashtagsResponse> {
        return this.invoke('/tag/generate',{
            method: "POST",
            body: JSON.stringify({ image: base64Image })
        });
    }
}
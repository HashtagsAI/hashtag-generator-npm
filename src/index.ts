import { Base } from "./base";
import { Categories } from "./categories";
import { Image } from "./image";
import { Tag } from "./text";
import { Trending } from "./trending";
import { applyMixins } from "./utils";

class HashtagAPI extends Base {}

interface HashtagAPI extends Tag {}
interface HashtagAPI extends Trending {}
interface HashtagAPI extends Categories {}
interface HashtagAPI extends Image {}

applyMixins(HashtagAPI, [Tag, Trending, Categories, Image]);

export default HashtagAPI;
import { Base } from "src/base";
import { CountriesResponse, HashtagsResponse } from "src/types";

export class Trending extends Base {
    getTrending(): Promise<HashtagsResponse> {
        return this.invoke('/tag/trending');
    }
    
    getCountryList(): Promise<CountriesResponse> {
        return this.invoke('/trending/countries');
    }

    getTrendingByCountry(country: string): Promise<HashtagsResponse> {
        return this.invoke('/trending/' + country + '/tags');
    }
}
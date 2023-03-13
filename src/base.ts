type Config = {
    apiKey: string;
}

export abstract class Base {
    private apiKey: string;
    private baseUrl: string = 'https://hashtag5.p.rapidapi.com/api/v2.1';
    private host: string = 'hashtag5.p.rapidapi.com';

    constructor(config: Config) {
        this.apiKey = config.apiKey;
    }

    protected invoke<T>(endpoint: String, option?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers ={
            'X-RapidAPI-Key': this.apiKey,
            'X-RapidAPI-Host': this.host,
            'content-type': 'application/json',
            'Content-Type': 'application/json'
        }
        const config = {
            ...option,
            headers
        }
        return fetch(url, config).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
    }
}
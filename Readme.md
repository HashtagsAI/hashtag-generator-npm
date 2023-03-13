# Hashtag Generator - NPM Package
An npm package to generate hashtags using https://hashtagsai.github.io/API-Docs/

## Installation
```bash
npm i @hashtags-ai/hashtag-generator
```

## Usage
```javascript
import HashtagAPI from '@hashtags-ai/hashtag-generator';

const generator = new HashtagAPI({
    apiKey: 'Your API Key',
});
```

## Methods
### Top Hashtags
```javascript
generator.getTop().then((tags) => {
    console.log(tags);
})
```

### Related Hashtags
```javascript
generator.getSimilar("insta").then((tags) => {
    console.log(tags);
})
```

### Post count for a hashtag
```javascript
generator.getPostCount("insta").then((count) => {
    console.log(count);
})
```

### Trending Hashtags
```javascript
generator.getTrending().then((tags) => {
    console.log(tags);
})
```

### Trending Hashtags by Country
```javascript
generator.getTrendingByCountry("India").then((tags) => {
    console.log(tags);
})

// get a list of countries from here
generator.getCountryList().then((tags) => {
    console.log(tags);
})
```

### Categories
```javascript
generator.getCategories().then((tags) => {
    console.log(tags);
})
```

### HashTags by Category
```javascript
generator.getHashtagsByCategory(1).then((tags) => {
    console.log(tags);
})
```

### Hashtags based on Image
```javascript
generator.generateHashtagsFromImage("base64Image").then((tags) => {
    console.log(tags);
})
```
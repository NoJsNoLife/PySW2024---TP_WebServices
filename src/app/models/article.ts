interface mainMedia {
    gallery: {
        url: string;
        alt: string;
    }
}

export class Article {
    id: string
    mainMedia: mainMedia[]
    categoryLabel: string
    categoryUrl: string
    updatedAt: {}
    publishedAt: string
    title: string
    shortTitle: boolean
    type: null
    url:string
    related: {}
    publishedRegions: []
    isAdultContent:boolean

    constructor(id: string, mainMedia: [], categoryLabel: string, categoryUrl: string, updatedAt: {}, publishedAt: string, title: string, shortTitle: boolean, type: null, url:string, related: {}, publishedRegions: [], isAdultContent:boolean) {
        this.id = id
        this.mainMedia = mainMedia
        this.categoryLabel = categoryLabel
        this.categoryUrl = categoryUrl
        this.updatedAt = updatedAt
        this.publishedAt = publishedAt
        this.title = title
        this.shortTitle = shortTitle
        this.type = type
        this.url = url
        this.related = related
        this.publishedRegions = publishedRegions
        this.isAdultContent = isAdultContent
    }
}

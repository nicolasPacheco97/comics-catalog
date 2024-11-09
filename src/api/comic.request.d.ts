export interface ComicRequest {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: ResultComic[];
}

export interface ResultComic {
    id:                 number;
    digitalId:          number;
    title:              string;
    issueNumber:        number;
    variantDescription: string;
    description:        null | string;
    modified:           string;
    isbn:               string;
    upc:                string;
    diamondCode:        DiamondCode;
    ean:                string;
    issn:               string;
    format:             Format;
    pageCount:          number;
    textObjects:        TextObject[];
    resourceURI:        string;
    urls:               URL[];
    series:             Series;
    variants:           Series[];
    collections:        [];
    collectedIssues:    [];
    dates:              DateElement[];
    prices:             Price[];
    thumbnail:          Thumbnail;
    images:             Thumbnail[];
    creators:           Creators;
    characters:         Characters;
    stories:            Stories;
    events:             Characters;
}

export interface Characters {
    available:     number;
    collectionURI: string;
    items:         Series[];
    returned:      number;
}

export interface Series {
    resourceURI: string;
    name:        string;
}

export interface Creators {
    available:     number;
    collectionURI: string;
    items:         CreatorsItem[];
    returned:      number;
}

export interface CreatorsItem {
    resourceURI: string;
    name:        string;
    role:        Role;
}

export enum Role {
    Colorist = "colorist",
    Editor = "editor",
    PencillerCover = "penciller (cover)",
    Writer = "writer",
}

export interface DateElement {
    type: DateType;
    date: string;
}

export enum DateType {
    DigitalPurchaseDate = "digitalPurchaseDate",
    FocDate = "focDate",
    OnsaleDate = "onsaleDate",
    UnlimitedDate = "unlimitedDate",
}

export enum DiamondCode {
    Empty = "",
    Jul190068 = "JUL190068",
}

export enum Format {
    Comic = "Comic",
    Empty = "",
}

export interface Thumbnail {
    path:      string;
    extension: Extension;
}

export enum Extension {
    Jpg = "jpg",
}

export interface Price {
    type:  PriceType;
    price: number;
}

export enum PriceType {
    DigitalPurchasePrice = "digitalPurchasePrice",
    PrintPrice = "printPrice",
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        ItemType;
}

export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
}

export interface TextObject {
    type:     string;
    language: string;
    text:     string;
}

export interface URL {
    type: string;
    url:  string;
}

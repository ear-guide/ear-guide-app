// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import MarkdownIt from 'markdown-it';

export interface Element {
  tag: string,
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private readonly md = new MarkdownIt();

  constructor(private readonly http: HttpClient) {}

  public request(url: string): Observable<Array<Element>> {
    return this.http
      .get(url, {
        responseType: 'text',
        // necessary if using ngrok for content
        // headers: { 'ngrok-skip-browser-warning': 'true' }
      })
      .pipe(map(content => this.parse(content)));
  }

  private parse(text: string): Array<Element> {
    const tokens = this.md.parse(text, {});
    const result: Array<Element> = [];

    tokens.forEach(token => {
      switch (token.type) {
        case 'heading_open':
        case 'paragraph_open':
          result.push({ tag: token.tag, text: '' });
          break;
        case 'inline':
          result[result.length - 1].text = token.content;
          break;
        case 'heading_close':
        case 'paragraph_close':
          break;
        default:
          throw new Error();
      }
    });

    return result;
  }
}

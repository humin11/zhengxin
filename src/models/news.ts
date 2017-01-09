'use strict';

export class News {

  public title: string;
  public content: string;
  public source: string;
  public create_at: string;

  constructor(title: string, content: string, source: string, create_at: string) {
    this.title = title;
    this.content = content;
    this.source = source;
    this.create_at = create_at;
  }

}

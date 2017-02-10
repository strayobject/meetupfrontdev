import {JsonApiModelConfig, JsonApiModel, Attribute} from "angular2-jsonapi";
@JsonApiModelConfig({
  type: 'events/',
})
export class Event extends JsonApiModel {
  @Attribute()
  id: string;

  @Attribute()
  title: string;

  @Attribute()
  description: string;

  @Attribute()
  format: string;

  @Attribute()
  tags: string;

  @Attribute()
  date: string;

  @Attribute()
  created_at: string;

  @Attribute()
  updated_at: string;
}

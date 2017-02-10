import {JsonApiModelConfig, JsonApiModel, Attribute} from "angular2-jsonapi";
@JsonApiModelConfig({
  type: 'sponsors/',
})
export class Sponsor extends JsonApiModel {
  @Attribute()
  id: string;

  @Attribute()
  name: string;

  @Attribute()
  image_url: string;

  @Attribute()
  link_to_url: string;

  @Attribute()
  type: string;

  @Attribute()
  created_at: Date;

  @Attribute()
  updated_at: Date;
}

import {JsonApiModelConfig, JsonApiModel, Attribute} from "angular2-jsonapi";
@JsonApiModelConfig({
  type: 'venues/',
})
export class Venue extends JsonApiModel {
  @Attribute()
  id: string;

  @Attribute()
  name: string;

  @Attribute()
  description: string;

  @Attribute()
  address_line: string;

  @Attribute()
  address_line1: string;

  @Attribute()
  address_line2: string;

  @Attribute()
  town: string;

  @Attribute()
  country_code: string;

  @Attribute()
  latitude: string;

  @Attribute()
  longitude: string;

  @Attribute()
  created_at: string;

  @Attribute()
  updated_at: string;
}

import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity() //this tells the Mikro ORM that this is an entity/table
export class Post {
  @PrimaryKey() //
  id!: number;

  @Property() // this is just used to spcify columns in table.
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() }) // onUpdate is a hook that creats and sets new Date everytime a document has updated.
  updatedAt: Date = new Date();
}

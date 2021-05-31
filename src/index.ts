import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./entities/constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__,
  });

  const post = orm.em.create(Post, { title: "My first Post" }); //this creates an obejct of Post
  await orm.em.persistAndFlush(post); // insert Post into the Database
  //above is same as
  console.log("-------------------sql 2------------------------------");

  await orm.em.nativeInsert(Post, { title: "my Second Post" });
};
main().catch((err) => console.log(err));
console.log("hi");

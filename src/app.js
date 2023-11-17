/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "some", "another", "one"];
let adj = ["great", "big", "Amazing", "funny", "cool"];
let noun = ["jogger", "racoon", "website", "blog"];
let dom = [".ve", ".de", ".com", ".org"];

let domainGenerator = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let o = 0; o < adj.length; o++) {
      for (let e = 0; e < noun.length; e++) {
        for (let u = 0; u < dom.length; u++) {
          console.log(pronoun[i] + adj[o] + noun[e] + dom[u]);
        }
      }
    }
  }
};

domainGenerator();

console.log("Hello World");

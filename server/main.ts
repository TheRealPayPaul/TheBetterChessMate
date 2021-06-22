import bird from "./testclass";
import test from "./test.json";
import { person } from "./types";

let x: bird = new bird();
x.what();

console.log(test);
console.log("hi");

function y(per: person) {
    console.log(per);
}
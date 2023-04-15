/*

Chapter - 02
 
Parcel Featurs:

1. HMR - Hot Module Replacement:
    File watcher algorithems - C++
2. Bundling
3. Minification
4. Cleaning code
5. Dev and prod builds
6. Super fast build algorithm
7. Image optimazation
8. Caching while development
9. Compression
10. Compatable with older version of teh browser
11. HTTPS on dev: npx parcel index.html --https
12. Port Numbers
13. Consistent Hashing Algorithm
14. Zero Configuration
15. Tree shaking - Removing unwanted code

Transitive Dependencies => Dependencies over other dependencies

Chapter - 03

npx == npm run
Every div should have uniqe "Key"
React.createElement => object => HTML(DOM)

*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "h1", 
    {
        id: "title",
        key: "h1"
    },
    "Namaste React!!"
);
const heading2 = React.createElement(
    "h2",
    {
        key: "h2"
    },
    "Hello World!!"
);
const container = React.createElement("div", {hello: "world"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
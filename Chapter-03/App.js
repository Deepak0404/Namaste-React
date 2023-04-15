import React from "react";
import ReactDOM from "react-dom/client";

// React.creatElement => Object => HTML(DOM)
// React Element is an Object

const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        key: "h1"
    },
    "Hello World!!"
);

/*JSX => HTML like syntax into JS file
        JSX Expression
        Every attribute in camlecase

    Adv:
    1. Readabiltiy
    2. Developer Experience
    3. Less code
    4. No repetation

JSX => React.creatElemet => Object => HTML(DOM)
*/

const heading2 = (
    <h2 id="title" key="h2">
        Namaste React!!
    </h2>
);

const Heading3 = () => (
    <h2 id="title" key="h3">
        heading3
    </h2>
);

// Component => Everythig is component in React
/*  
    1. Functional based component => New way
        - Every funtion name start with capital letter
        - Call it using <abc /> or {abc()}
    2. Classe based component => Old way
*/

// Composing Components
const HeaderComponent = () => {
    return (
        <div>
            <h1>I am Functional Component</h1>
            {heading2}
            <Heading3/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// Passing react element inside the root
// root.render(heading2);
root.render(<HeaderComponent/>);
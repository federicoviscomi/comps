import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'asdfsdf',
            label: 'Can I use react on a project?',
            content: 'up to you'
        },
        {
            id: 'fdsafdsa',
            label: 'Can I use javascript on a project?',
            content: 'up to you'
        },
        {
            id: 'dfdfdfdfdf',
            label: 'Can I use css on a project?',
            content: 'up to you'
        },
    ];
    return <Accordion items={items}></Accordion>;
}

export default App;

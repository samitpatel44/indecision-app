console.log('App.js is running!');

//JSX - JavaScript XML
const app = {
    title : 'Indecision App',
    subtitle : 'this is subtitle',
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp();
    }
    
};

const RemoveAll = () => {
    app.options = [];
    renderFormApp();
};

const appRoot = document.getElementById('app');

const renderFormApp = () => { 
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options ': 'no option'}</p>
        <p>{app.options.length}</p>
        <button onClick={RemoveAll}>Remove All</button>

        <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>    
    </div>
);


ReactDOM.render(template,appRoot);
};

renderFormApp();
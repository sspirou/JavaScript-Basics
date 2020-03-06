//////////////////
//  JavaScript Basics - Template Literals (HTML Injection)
//////////////////

{
    const name = 'Stratton';
    const age = 24;
    const job = 'Developer';
    const city = 'Miami';

    let html;

    // Without template literals (es5)
    html = '<ul>' + 
                '<li>Name: ' + name + '</li>' +
                '<li>Age: ' + age + '</li>' +
                '<li>Job: ' + job + '</li>' + 
                '<li>City: ' + city + '</li>' +
            '</ul>';

    // With template literals
    html = `
        <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
        </ul>
    `;
    // ${any js expression can go here (i.e. function calls, conditionals, operations, etc.)}

    document.body.innerHTML = html;
}
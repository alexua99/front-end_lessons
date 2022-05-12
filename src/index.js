function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Test', 'Js'], ' ');

    return element;
}

document.body.appendChild(component());
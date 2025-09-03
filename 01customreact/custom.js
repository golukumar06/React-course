
//    this is not proper code for this because if it has more than two or more property 
// function customRender(reactElement,container){
//     const newElement = document.createElement(reactElement.type);
//     newElement.setAttribute('href',reactElement.props.href)
//     newElement.setAttribute('target', reactElement.props.target)
//     newElement.innerHTML = reactElement.children
//     container.append(newElement)
// }

function customRender(reactElement,container){
        const newElement = document.createElement(reactElement.type)
        for (let prop in reactElement.props) {
            newElement.setAttribute(`${prop}`,prop)
            newElement.setAttribute(`${prop}`,prop)
        }
        newElement.innerHTML = reactElement.children

        container.append(newElement)
}

const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target : '_blank'
    },
    children : "click me to visit google.com"
}

const container = document.getElementById("root");
customRender(reactElement,container)
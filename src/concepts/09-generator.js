
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionComponent = (element) => {
// console.log('generatorFunctionComponent');
// const myGenerator = myFirstGeneratorFunction();
const genId = idGenerator();


const button = document.createElement('button');
button.innerHTML = 'Click me';
element.append(button);

const renderButton = () => {
    const {value} = genId.next();
    button.innerText = `Click ${value}`;
}

button.addEventListener('click', renderButton) ;



}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++ currentId;
    }
}




function* myFirstGeneratorFunction(){
    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi terceo valor';
    yield 'Mi cuarto valor';
  
    return 'No hay valores';
    yield 'Ya no pueden hacer nada';
}



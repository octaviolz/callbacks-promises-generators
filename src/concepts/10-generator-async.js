import {heroes} from "../concepts/data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatosrsAsyncComponent = async(element) => {

const getHeroGenerator = getHeroGenerator();
let isFinished = false;


do {
    const {value, done} = await getHeroGenerator.next();
    isFinished = done;

    element.innerHTML = value;

}while(!isFinished)
  
}

async function* getHeroGenerator() {
    for ( const hero of heroes) {
        await sleep();
        yield hero.name;
    }
    return 'no hay mas';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve();
        }, 1000);
    })
}
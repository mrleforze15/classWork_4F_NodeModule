function add(a, b){
    return a+b
}

let sub=(a, b)=> {return a-b}

let mul=(a, b)=> {return a*b}

let div=(a, b)=> {return a/b}

module.exports = {
    addition : add,
    difference : sub,
    multiple : mul,
    division : div

}
//en este archivo creo el arbol rojo-negro
//que se utilizara para la web

//clase nodo, airve para crear un nuevo nodo 
//en el arbol
class Nodo{
    constructor(codigo, nombre){
        this.codigo = codigo;   //el codigo y nombre del producto de la cafeteria
        this.nombre = nombre;     //cantidad del producto que hay en el inventario

        this.color = "rojo"; //nodo nuevo, siempe rojo
        this.derecho = null; //hijo derecho del nodo
        this.izquierdo = null //hijo izquierdo del nodo
        this.padre = null //nodo padre

    }
}

//clase arbolRojoNegro, sirve para darle la estructura al arbol
class ArbolRojo_Negro{
    constructor(){
        this.raiz = null //raiz del arbol
    }

    //metodo para ver si el nodo es rojo
    esRojo(nodo){
        if(nodo =! null && nodo.color === "rojo")
            return true;
    }
}

//metodos insertar del arbol
ArbolRojo_Negro.prototype.insertar = function(codigo, nombre){
    const nuevoNodo = new Nodo(codigo, nombre); 
    if(this.raiz === null){
        nuevoNodo.color = "negro"; //la raiz siempre tiene que ser negra
        this.raiz = nuevoNodo;
    }
    else{
        this.raiz = this.insertarNodo(this.raiz, nuevoNodo);
        this.ajustarInsercion(nuevoNodo);
    }
};
ArbolRojo_Negro.prototype.insertarNodo = function(actual, nuevoNodo){
    if(nuevoNodo.codigo < actual.codigo){
        if(actual.izquierdo === null){
            actual.izquierdo = nuevoNodo;
            nuevoNodo.padre = actual;
        }
        else{
            this.insertarNodo(actual.izquierdo, nuevoNodo)
        }
    } else if(nuevoNodo.codigo > actual.codigo){
        if(actual.derecho === null){
            actual.derecho = nuevoNodo;
            nuevoNodo.padre = actual;
        }
        else{
            this.insertarNodo(actual.derecho, nuevoNodo);
        }
    }
    return actual;
};

//metodos para ajustar la insercion, para que cumpla con las reglas del arbol
ArbolRojo_Negro.prototype.ajustarInsercion = function(nodo){
    while(nodo.padre !== null && nodo.padre.color === "rojo"){
        let abuelo = nodo.padre.padre;
        if(nodo.padre === abuelo.izquierdo){//si el padre este en la rama izquierda
            let tio = abuelo.derecho;
            if(tio !== null && tio.color === "rojo"){ //si el tio es rojo
                nodo.padre.color = "negro";
                tio.color = "negro";
                abuelo.color = "rojo";
                nodo = abuelo;
            }
            else{
                if(nodo === nodo.padre.derecho){ //posicion triangular
                    nodo = nodo.padre;
                    this.girarIzquierda(nodo);
                }
                nodo.padre.color = "negro"; //posicion lineal
                abuelo.color = "rojo";
                this.girarDerecha(abuelo);
            }
        } 
        else{ //si el padre esta en la rama derecha
            let tio = abuelo.izquierdo;
            if(tio !== null && tio.color === "rojo"){ //tio es rojo
                nodo.padre.color = "negro";
                tio.color = "negro";
                abuelo.color = "rojo";
                nodo = abuelo;
            }
            else{
                if(nodo === nodo.padre.izquierdo){ //si es posicion triangular
                    nodo = nodo.padre;
                    this.girarDerecha(nodo);
                }
                nodo.padre.color = "negro"; // si esta en posicion lineal
                abuelo.color = "negro";
                this.girarIzquierda(abuelo);
            }
        }
    }
    this.raiz.color = "negro";
};

//metodos de rotacion para que cumpla con las normas
ArbolRojo_Negro.prototype.girarIzquierda = function(nodo){
    const derecho = nodo.derecho;
    nodo.derecho = derecho.izquierdo
    if(derecho.izquierdo !== null){
        derecho.izquierdo.padre = nodo;
    }
    derecho.padre = nodo.padre;
    if(nodo.padre === null){
        this.raiz = derecho;
    }else if(nodo === nodo.padre.izquierdo){
        nodo.padre.izquierdo = derecho;
    }
    else{
        nodo.padre.derecho = derecho;
    }
};

ArbolRojo_Negro.prototype.girarDerecha = function(nodo){
    const izquierdo = nodo.izquierdo;
    nodo.izquierdo = izquierdo.derecho;
    if(izquierdo.derecho !== null){
        izquierdo.derecho.padre = nodo;
    }
    else if(nodo === nodo.padre.derecho){
        nodo.padre.derecho = izquierdo;
    }
    else{
        nodo.padre.izquierdo = izquierdo;
    }
    izquierdo.derecho = nodo;
    nodo.padre = izquierdo;
};

//metodo para buscar en el arbol
ArbolRojo_Negro.prototype.buscar = function(codigo){
    let actual = this.raiz;
    while(actual !== null){
        if(codigo === actual.codigo){
            return actual; //se encontro
        }
        else if(codigo < actual.codigo){
            actual = actual.izquierdo; //ir a la rama izquierda
        }
        else{
            actual = actual.derecho;
        }
    }
    return null; //no se encontro
};

//metodo para recorrer el arbol
ArbolRojo_Negro.prototype.recorrer = function(callback) {
    const recorrerNodo = (nodo) => {  
        if (nodo !== null) {
            callback(nodo); 
            recorrerNodo(nodo.izquierdo); //rama izquierdo
            recorrerNodo(nodo.derecho); //rama derecho
        }
    };
    recorrerNodo(this.raiz); 
};




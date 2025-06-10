    // METODOS DE CADENA EN JAVASCRIPT
    /*

    1- startsWith( parametro 1 , (opcional) parametro 2)
        *parametro 1: La subcadena que estás buscando al principio. 
        *parametro 2(OPCIONAL): Desde qué índice empezar a verificar.
    NOTA: 

    */
    //           "012345 ....        ...";    
    let cadena = "hola como estas modoro";
    let str = cadena.startsWith("co", 5);

    //let str = cadena.startsWith("co"); Imprime : false
    //let str = cadena.startsWith("ho"); Imprime : true

    console.log(str); // Imprime : true

    /*

    2- endsWith( subcadena , longitudOpcional (opcional))
        *subcadena: Lo que queremos verificar al final de la cadena.
        *longitudOpcional (opcional): Si se proporciona, se considera solo hasta ese índice (como si cortaras la cadena allí).
    NOTA: 

    */
    //        "123456789 ....     ...";
    let txt = "hola como estas modoro";
    let fin = txt.endsWith("co", 7);
    //let fin = txt.endsWith("ro"); Imprime : true
    //let fin = txt.endsWith("ho"); Imprime : false

    console.log(fin); // Imprime : true
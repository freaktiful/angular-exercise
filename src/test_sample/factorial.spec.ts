
import { factorial } from './factorial'

describe('Calculo de un factorial', () => {
    
    it('should be 1 factorial de 0', () => {
        expect(factorial(0)).toEqual(1);
    });

    it('should be 1 factorial de 1', () => {
        expect(factorial(1)).toEqual(1);
    });

    it('should be 120 factorial de 5', () => {
        expect(factorial(5)).toEqual(120);
    });
});

/* Angular tiene definido que todos los ficheros "spec" los lanza como testing */

/* qué hace un fichero de testin? */

/* un describe es un conjunto de pruebas. puede haber diferentes describes en un fichero
pero lo normal es uno por fichero*/
/* fijar el describe, poniendole una f delante de describe, hace que solo se ejecute
ese. Se puede también fijar un it. */

/* angular solo busca ficheros spec que estén dentro de la carpeta src */

/* en angular no podemos probar directamente funciones sino componentes (esta prueba era de jasmine puro)
 */
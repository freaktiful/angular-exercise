import { browser, by, element } from 'protractor';

/* estas clases son las páginas, cada clase es una página */
export class AppPage {
  /* metodo para "navegar" a cierta pagina (en este caso es la home) */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /* para moverme por los elementos de la página se usa la función de protractor "element"
  y el selector que sea se le mete en by.css*/
  getTitleText() {
    return element(by.css('aub-header h1')).getText() as Promise<string>;
  }
  /*element tiene un montón de metodos para manipular los elementos del DOM */
}

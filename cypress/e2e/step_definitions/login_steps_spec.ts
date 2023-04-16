import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LupaAgi from '../pages/page_actions/lupa_actions';
import LupaElements from '../pages/page_elements/lupa_elements.js';

Given('que acesso o site da agi', function () { 
  LupaAgi.abriSite();
});

When ('estiver na tela inicial', function () {
  LupaAgi.validaElement(LupaElements.BTN_INSTA)
});

Then('vizualizo a lupa no inicio da pagina', function () {
  LupaAgi.validaElement(LupaElements.BTN_LUPA)
});

When('optar por pesquisar um item inexistente', function () {
  LupaAgi.click(LupaElements.BTN_LUPA)
  LupaAgi.inputTexto(LupaElements.INPUT_LUPA, 'ggg')
  LupaAgi.click(LupaElements.BTN_PESQUISAR)
});

Then('valido a msg de retorno', function () {
  LupaAgi.validaTexto(LupaElements.RESULT_BUSCA, 'Nenhum resultado')
});
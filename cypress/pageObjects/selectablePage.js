import { BasePage } from "./basePage";


export class SelectablePage extends BasePage
{
  static get url()
  {
    return '/selectable';
  }

  static get tabGrid()
  {
    return cy.get('#demo-tab-grid')
  }

  static get gridItemOne()
  {
    return cy.contains("#row1 li", "One");
  }

  static get gridItemTwo()
  {
    return cy.contains("#row1 li", "Two");
  }

  static get gridItemThree()
  {
    return cy.contains("#row1 li", "Three");
  }

  static get gridItemFour()
  {
    return cy.contains("#row2 li", "Four");
  }

  static get gridItemFive()
  {
    return cy.contains("#row2 li", "Five");
  }

  static get gridItemSix()
  {
    return cy.contains("#row2 li", "Six");
  }

  static get gridItemSeven()
  {
    return cy.contains("#row3 li", "Seven");
  }

  static get gridItemEight()
  {
    return cy.contains("#row3 li", "Eight");
  }

  static get gridItemNine()
  {
    return cy.contains("#row3 li", "Nine");
  }
}
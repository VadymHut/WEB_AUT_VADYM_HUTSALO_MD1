import { SelectablePage } from "../pageObjects/selectablePage";


describe('HW1', () => {
  context('Selectable tests', () =>
    {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it('Click on items and validate', () => {
      SelectablePage.tabGrid.click();
      SelectablePage.gridItemTwo.click();
      SelectablePage.gridItemFour.click();
      SelectablePage.gridItemSix.click();
      SelectablePage.gridItemEight.click();
      
      SelectablePage.gridItemTwo.should('have.class', 'active');
      SelectablePage.gridItemFour.should('have.class', 'active');
      SelectablePage.gridItemSix.should('have.class', 'active');
      SelectablePage.gridItemEight.should('have.class', 'active');

      SelectablePage.gridItemOne.should('not.have.class', 'active');
      SelectablePage.gridItemThree.should('not.have.class', 'active');
      SelectablePage.gridItemFive.should('not.have.class', 'active');
      SelectablePage.gridItemSeven.should('not.have.class', 'active');
      SelectablePage.gridItemNine.should('not.have.class', 'active');
    });
  });
});

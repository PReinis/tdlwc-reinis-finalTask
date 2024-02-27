import pageHeader from "../page-objects/page.header.js";
import productPage from "../page-objects/product.page.js";

export async function getCartItemCount() {
    const itemCountText = await pageHeader.cartItemCount.getText();
    return parseInt(itemCountText, 10) || 0;
};
export async function chooseProductSize(size) {
    await productPage.chooseSizeMenu.click();
    await productPage.chooseSizeMenu.selectByVisibleText(size);
};
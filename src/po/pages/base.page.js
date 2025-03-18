const { CreateBoardModal, Header } = require("./../components");

class BasePage{
    constructor(url) {
        this.url = url;
        this.createBoardModal = new CreateBoardModal();
        this.header = new Header();
    }

    open() {
        return browser.url(this.url);
    }
}

module.exports = BasePage;

const QPAGES = require("./.quarkly/qpages");

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
    if (!QPAGES.includes(page.path)) {
      deletePage(page)
    }
}

exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
    createRedirect({
        fromPath: "/index",
        toPath: "/",
        isPermanent: true,
        redirectInBrowser: true,
    });
};

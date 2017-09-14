const <%=PascalCaseName%>ViewModel = require("./<%=OriginalName%>-view-model");

const viewModel = new <%=PascalCaseName%>ViewModel();

function onNavigatingTo(args) {
    /* ***********************************************************
     * Use the "onNavigatingTo" handler to initialize data for the whole
     * home layout as a whole.
     *************************************************************/

    const page = args.object;

    page.bindingContext = viewModel;
}

exports.onNavigatingTo = onNavigatingTo;
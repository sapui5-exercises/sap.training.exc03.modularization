sap.ui.define(['sap/m/MessageBox', 'sap/training/exc03/modularization/myLib/Formatter'], function(MessageBox, Formatter) {
	return {
		reportSuccess: function(sMsg, sTitle) {
			MessageBox.show(
				Formatter.capitalizeFirstLetter(sMsg), {
					title: Formatter.capitalizeFirstLetter(sTitle)
				});
		}
	};
});
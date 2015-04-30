angular.module('beispielProjekt', ['pascalprecht.translate'])

.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		'PROJECT_NAME': 'Example',
		'LANGUAGE_SELECTION': 'Language Selection',
		'LANGUAGE_SELECTION_SUBTITLE': 'Please select a language',
		'LANG_GERMAN': 'German',
		'LANG_ENGLISH': 'English',
		'LANG_SPANISH': 'Spanish',
		'SAMPLE_TEXT': 'This is a sample text.'
	});

	$translateProvider.translations('de', {
		'PROJECT_NAME': 'Beispiel',
		'LANGUAGE_SELECTION': 'Sprachauswahl',
		'LANGUAGE_SELECTION_SUBTITLE': 'Bitte wählen Sie eine Sprache aus',
		'LANG_GERMAN': 'Deutsch',
		'LANG_ENGLISH': 'Englisch',
		'LANG_SPANISH': 'Spanisch',
		'SAMPLE_TEXT': 'Das ist ein Beispieltext.'
	});

	$translateProvider.translations('es', {
		'PROJECT_NAME': 'Ejemplo',
		'LANGUAGE_SELECTION': 'Selección del idioma',
		'LANGUAGE_SELECTION_SUBTITLE': 'Seleccione el idioma',
		'LANG_GERMAN': 'Aleman',
		'LANG_ENGLISH': 'Inglés',
		'LANG_SPANISH': 'Español',
		'SAMPLE_TEXT': 'Eso es un ejemplo.'
	});

	$translateProvider.preferredLanguage('en');
}])

.controller('HomeCtrl', function($scope, $translate){
	$scope.changeLanguage = function (languageKey) {
		$translate.use(languageKey);
	};
});
/**
 * 
 * @name:       eo-translatorjs
 * @version:    3.0.0
 * @author:     EOussama
 * @license     MIT
 * @source:     https://github.com/EOussama/eo-translatorjs
 * 
 * A simple javascript library for translating web content.
 * 
 */

'use strict';

window.addEventListener('load', () => {

	// The dictionary
	var dictionary = {
		'en': {
			'greeting': 'Hello {name}!',
			'nested': {
				'a': 'first value',
				'b': 'second value',
				'c': {
					'd': 'third value'
				}
			}
		},
		'fr': {
			'greeting': 'Bonjour {name}!',
			'nested': {
				'c': {
					'd': 'troisième valeur',
					'e': 'Je m\'appelle {name}, je suis {age} ans'
				}
			}
		},
		'es': {
			'greeting': 'Hola {name}!'
		},
		'br': {
			'greeting': 'Jola {name}!'
		}
	};

	// The translator
	var translator = new EOTranslator(dictionary);

	// Translating an input
	document
		.getElementById('translateBtn')
		.addEventListener('click', function () {
			var input = translator.translate('greeting', { lang: 'en', params: { name: 'Oussama' } });
			alert(input);
		});

	// Translating a DOM element
	var target = document.getElementById('target');
	translator.translateElement(target);

	// Global translation
	var globalParent = document.getElementById('global-parent');
	var globalTranslateSelect = document.getElementById('globalTranslate');

	globalTranslateSelect.value = translator.language;

	translator.translateDOM(globalParent);
	globalTranslateSelect.addEventListener('change', function (e) {
		translator.translateDOM(globalParent, e.target.value);
	});

	console.log({ translator });
});

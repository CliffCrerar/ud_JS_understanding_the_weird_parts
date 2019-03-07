(function (global,$) {

	var Greetr = function(firstName,lastName,language){
		return new Greetr.init(firstName,lastName,language);
	};
	
	var supportedLangs = ['en','es'];
	
	// Private variables
	var greetings = {
		en: 'hello',
		es: 'Hola'
	};
	
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};
	
	var logMessages = {
		en: 'logged in',
		es: 'Inicio Sesion'
	};
	
	Greetr.prototype = {
		
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		}
		
		validate: function(){
			supportedLangs.indexOf(this.language)=== -1){
				throw "Invalid Languages"
			};
		
		},
 		
 		greeting: function(){
			return greetingsp[this.language] + ' ' + this.firstName + '!'
		}
	
	Greetr.init = function(firstName,lastName,language){
		
		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

	};
	
	Greetr.init.prototype=Greetr.prototype;
	
	global.Greetr = global.G$ = Greetr;
 
}(window,jQuery));


window.panelbear = window.panelbear || function(){ window.panelbearQ = window.panelbearQ || []; panelbearQ.push(arguments); };

panelbear('config', {
	site: process.env.PANELBEAR_ID,
	debug: process.env.NODE_ENV === 'development' ? true : false,
	honorDNT: true,
});

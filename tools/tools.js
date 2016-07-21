var printRefs = function() {
	var retour;
    var refs = [];
    
    refs.push("NUS-NALP-EUR");
    refs.push("NUS-NBCP-EUR");
    refs.push("NUS-NBKP-EUR");
    refs.push("NUS-NBUP-EUR");
    refs.push("NUS-NCEP-EUR");
    refs.push("NUS-NCSP-EUR");
    refs.push("NUS-NDMP-EUR");
    refs.push("NUS-NDNP-FRA");
    refs.push("NUS-NDOP-EUR");
    refs.push("NUS-NDSF-FAH");
    refs.push("NUS-NDYP-EUR");
    refs.push("NUS-NEPP-EUR");
    refs.push("NUS-NFUP-EUR");
    refs.push("NUS-NFZP-EUR");
    refs.push("NUS-NGEP-EUR");
    refs.push("NUS-NHXF-FRA");
    refs.push("NUS-NKTP-EUR");
    refs.push("NUS-NM8P-EUR");
    refs.push("NUS-NMWP-EUR");
    refs.push("NUS-NPDP-EUR");
    refs.push("NUS-NPWP-EUR");
    refs.push("NUS-NSMP-EUR");
    refs.push("NUS-NTRP-FRA");
    refs.push("NUS-NV3P-EUR");
    refs.push("NUS-NWPP-EUU");
    refs.push("NUS-NWRP-EUR");
    refs.push("NUS-NWTP-EUR");
    refs.push("NUS-NZLP-EUR");
    refs.push("NUS-NTUP-EUR-1");

    
    
    $(refs).each(function( index, ref ) {
    	  retour += '  {    "brand": "Nintendo",    "platform": "Nintendo 64",    "type": "game",    "players": 0,    "name": "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",    "year": "",    "reference": "'+ref.trim()+'",    "purchaseDate": "",    "purchasePrice": "",    "value": 0  },';
    });
    return retour;
}
$( document ).ready(function() {
	$(document.body).append(printRefs());
});
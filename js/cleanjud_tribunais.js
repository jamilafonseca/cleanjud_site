// ---------------------------------------------------------------------------- 
//  CNJ Inova -  HACKATHON - Desafio 2 - #Saneamento de Dados                   
// ---------------------------------------------------------------------------- 
//  SOLUCAO:  CleaNJud - Decisoes mais Eficazes com a Qualidade do DATAJUD      
// ---------------------------------------------------------------------------- 
//  Purpose:  www.cleanjud.com.br      
//  JAVASCRIPT  - Funcao de Conversao - Ramo Justica e UF nas Siglas dos Tribunais                                         
// ---------------------------------------------------------------------------- 
//  AUTORES:  (GRUPO 11 - desafio 2)                                            
//                                                                              
//            Jamila Fonseca - ADV - (jamila.fonseca@hotmail.com)               
//                             www.linkedin.com/in/jamila-fonseca-41b07a19a     
//            Luis Assuncao  - TI  - (lcpassuncao@gmail.com)                    
//            Luciana Weiler - UX  - (luciana.weiler.2020@gmail.com)            
// ---------------------------------------------------------------------------- 
// VERSAO:    Novembro - 2020                                                   
// ---------------------------------------------------------------------------- 


// Array Global 
// Faz um DE-PARA  do Tribunal a partir do Ramo de Justica e da UF
//  Array utilizado em conjunto com os COMBOBOX 

var arrayTribunais = {
   'todos' : [ 'todos', 'Total Brasil' ], 
   'STF' : [ 'STF', 'Supremo Tribunal Federal' ], 
   'CNJ' : [ 'CNJ', 'Conselho Nacional de Justiça' ], 
   'STJ' : [ 'STJ', 'Superior Tribunal de Justiça' ], 
   'TRF' : [ 'TRF', 'Justiça Federal - TRF' ], 
   'TRFAC' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFAP' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFAM' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFBA' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFGO' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFMA' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFMT' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFMG' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFPA' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFPI' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFRO' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFRR' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFTO' : [ 'TRF1', 'TRF da 1a Região' ], 
   'TRFRJ' : [ 'TRF2', 'TRF da 2a Região' ], 
   'TRFES' : [ 'TRF2', 'TRF da 2a Região' ], 
   'TRFSP' : [ 'TRF3', 'TRF da 3a Região' ], 
   'TRFMS' : [ 'TRF3', 'TRF da 3a Região' ], 
   'TRFPR' : [ 'TRF4', 'TRF da 4a Região' ], 
   'TRFSC' : [ 'TRF4', 'TRF da 4a Região' ], 
   'TRFRS' : [ 'TRF4', 'TRF da 4a Região' ], 
   'TRFAL' : [ 'TRF5', 'TRF da 5a Região' ], 
   'TRFCE' : [ 'TRF5', 'TRF da 5a Região' ], 
   'TRFPE' : [ 'TRF5', 'TRF da 5a Região' ], 
   'TRFRN' : [ 'TRF5', 'TRF da 5a Região' ], 
   'TRFSE' : [ 'TRF5', 'TRF da 5a Região' ], 
   'TRT'   : [ 'TRT1', 'Tribunal Regional do Trabalho' ], 
   'TRTRJ' : [ 'TRT1', 'Tribunal Regional do Trabalho - TRT1' ], 
   'TRTSP' : [ 'TRT2', 'Tribunal Regional do Trabalho - TRT2' ], 
   'TRTMG' : [ 'TRT3', 'Tribunal Regional do Trabalho - TRT3' ], 
   'TRTRS' : [ 'TRT4', 'Tribunal Regional do Trabalho - TRT4' ], 
   'TRTBA' : [ 'TRT5', 'Tribunal Regional do Trabalho - TRT5' ], 
   'TRTCE' : [ 'TRT7', 'Tribunal Regional do Trabalho - TRT7' ], 
   'TRTPA' : [ 'TRT8', 'Tribunal Regional do Trabalho - TRT8' ], 
   'TRTPR' : [ 'TRT9', 'Tribunal Regional do Trabalho - TRT9' ], 
   'TRTDF' : [ 'TRT10', 'Tribunal Regional do Trabalho - TRT10' ], 
   'TRTTO' : [ 'TRT10', 'Tribunal Regional do Trabalho - TRT10' ], 
   'TRTAM' : [ 'TRT11', 'Tribunal Regional do Trabalho - TRT11' ], 
   'TRTSC' : [ 'TRT12', 'Tribunal Regional do Trabalho - TRT12' ], 
   'TRTPB' : [ 'TRT13', 'Tribunal Regional do Trabalho - TRT13' ], 
   'TRTRO' : [ 'TRT14', 'Tribunal Regional do Trabalho - TRT14' ], 
   'TRTAC' : [ 'TRT14', 'Tribunal Regional do Trabalho - TRT14' ], 
   'TRTSP' : [ 'TRT15', 'Tribunal Regional do Trabalho - TRT15' ], 
   'TRTMA' : [ 'TRT16', 'Tribunal Regional do Trabalho - TRT16' ], 
   'TRTES' : [ 'TRT17', 'Tribunal Regional do Trabalho - TRT17' ], 
   'TRTGO' : [ 'TRT18', 'Tribunal Regional do Trabalho - TRT18' ], 
   'TRTAL' : [ 'TRT19', 'Tribunal Regional do Trabalho - TRT19' ], 
   'TRTSE' : [ 'TRT20', 'Tribunal Regional do Trabalho - TRT20' ], 
   'TRTRN' : [ 'TRT21', 'Tribunal Regional do Trabalho - TRT21' ], 
   'TRTPI' : [ 'TRT22', 'Tribunal Regional do Trabalho - TRT22' ], 
   'TRTMT' : [ 'TRT23', 'Tribunal Regional do Trabalho - TRT23' ], 
   'TRTMS' : [ 'TRT24', 'Tribunal Regional do Trabalho - TRT24' ], 
   'TRE'   : [ 'TRE',    'Tribunal Regional Eleitoral' ], 
   'TREAC' : [ 'TRE-AC', 'Tribunal Regional Eleitoral - TRE-AC' ], 
   'TREAL' : [ 'TRE-AL', 'Tribunal Regional Eleitoral - TRE-AL' ], 
   'TREAP' : [ 'TRE-AP', 'Tribunal Regional Eleitoral - TRE-AP' ], 
   'TREAM' : [ 'TRE-AM', 'Tribunal Regional Eleitoral - TRE-AM' ], 
   'TREBA' : [ 'TRE-BA', 'Tribunal Regional Eleitoral - TRE-BA' ], 
   'TRECE' : [ 'TRE-CE', 'Tribunal Regional Eleitoral - TRE-CE' ], 
   'TREDF' : [ 'TRE-DF', 'Tribunal Regional Eleitoral - TRE-DF' ], 
   'TREES' : [ 'TRE-ES', 'Tribunal Regional Eleitoral - TRE-ES' ], 
   'TREGO' : [ 'TRE-GO', 'Tribunal Regional Eleitoral - TRE-GO' ], 
   'TREMA' : [ 'TRE-MA', 'Tribunal Regional Eleitoral - TRE-MA' ], 
   'TREMT' : [ 'TRE-MT', 'Tribunal Regional Eleitoral - TRE-MT' ], 
   'TREMS' : [ 'TRE-MS', 'Tribunal Regional Eleitoral - TRE-MS' ], 
   'TREMG' : [ 'TRE-MG', 'Tribunal Regional Eleitoral - TRE-MG' ], 
   'TREPA' : [ 'TRE-PA', 'Tribunal Regional Eleitoral - TRE-PA' ], 
   'TREPB' : [ 'TRE-PB', 'Tribunal Regional Eleitoral - TRE-PB' ], 
   'TREPR' : [ 'TRE-PR', 'Tribunal Regional Eleitoral - TRE-PR' ], 
   'TREPE' : [ 'TRE-PE', 'Tribunal Regional Eleitoral - TRE-PE' ], 
   'TREPI' : [ 'TRE-PI', 'Tribunal Regional Eleitoral - TRE-PI' ], 
   'TRERJ' : [ 'TRE-RJ', 'Tribunal Regional Eleitoral - TRE-RJ' ], 
   'TRERN' : [ 'TRE-RN', 'Tribunal Regional Eleitoral - TRE-RN' ], 
   'TRERS' : [ 'TRE-RS', 'Tribunal Regional Eleitoral - TRE-RS' ], 
   'TRERO' : [ 'TRE-RO', 'Tribunal Regional Eleitoral - TRE-RO' ], 
   'TRERR' : [ 'TRE-RR', 'Tribunal Regional Eleitoral - TRE-RR' ], 
   'TRESC' : [ 'TRE-SC', 'Tribunal Regional Eleitoral - TRE-SC' ], 
   'TRESE' : [ 'TRE-SE', 'Tribunal Regional Eleitoral - TRE-SE' ], 
   'TRESP' : [ 'TRE-SP', 'Tribunal Regional Eleitoral - TRE-SP' ], 
   'TRETO' : [ 'TRE-TO', 'Tribunal Regional Eleitoral - TRE-TO' ], 
   'STM'   : [ 'STM', 'Superior Tribunal Militar' ], 
   'STMRJ' : [ '1a CJM', '1ª Circunscrição Judiciária Militar' ], 
   'STMES' : [ '1a CJM', '1ª Circunscrição Judiciária Militar' ], 
   'STMSP' : [ '2a CJM', '2ª Circunscrição Judiciária Militar' ], 
   'STMRS' : [ '3a CJM', '3ª Circunscrição Judiciária Militar' ], 
   'STMMG' : [ '4a CJM', '4ª Circunscrição Judiciária Militar' ], 
   'STMPR' : [ '5a CJM', '5ª Circunscrição Judiciária Militar' ], 
   'STMSC' : [ '5a CJM', '5ª Circunscrição Judiciária Militar' ], 
   'STMBA' : [ '6a CJM', '6ª Circunscrição Judiciária Militar' ], 
   'STMSE' : [ '6a CJM', '6ª Circunscrição Judiciária Militar' ], 
   'STMPE' : [ '7a CJM', '7ª Circunscrição Judiciária Militar' ], 
   'STMAL' : [ '7a CJM', '7ª Circunscrição Judiciária Militar' ], 
   'STMPB' : [ '7a CJM', '7ª Circunscrição Judiciária Militar' ], 
   'STMRN' : [ '7a CJM', '7ª Circunscrição Judiciária Militar' ], 
   'STMPA' : [ '8a CJM', '8ª Circunscrição Judiciária Militar' ], 
   'STMAP' : [ '8a CJM', '8ª Circunscrição Judiciária Militar' ], 
   'STMMA' : [ '8a CJM', '8ª Circunscrição Judiciária Militar' ], 
   'STMMS' : [ '9a CJM', '9ª Circunscrição Judiciária Militar' ], 
   'STMMT' : [ '9a CJM', '9ª Circunscrição Judiciária Militar' ], 
   'STMCE' : [ '10a CJM', '10ª Circunscrição Judiciária Militar' ], 
   'STMPI' : [ '10a CJM', '10ª Circunscrição Judiciária Militar' ], 
   'STMDF' : [ '11a CJM', '11ª Circunscrição Judiciária Militar' ], 
   'STMGO' : [ '11a CJM', '11ª Circunscrição Judiciária Militar' ], 
   'STMTO' : [ '11a CJM', '11ª Circunscrição Judiciária Militar' ], 
   'STMAM' : [ '12a CJM', '12ª Circunscrição Judiciária Militar' ], 
   'STMAC' : [ '12a CJM', '12ª Circunscrição Judiciária Militar' ], 
   'STMRO' : [ '12a CJM', '12ª Circunscrição Judiciária Militar' ], 
   'STMRR' : [ '12a CJM', '12ª Circunscrição Judiciária Militar' ],
   'TJ'    : [ 'TJ',   'Tribunal de Justiça Estadual' ],   
   'TJAC'  : [ 'TJAC', 'Tribunal de Justiça Estadual - TJAC' ], 
   'TJAL'  : [ 'TJAL', 'Tribunal de Justiça Estadual - TJAL' ], 
   'TJAP'  : [ 'TJAP', 'Tribunal de Justiça Estadual - TJAP' ], 
   'TJAM'  : [ 'TJAM', 'Tribunal de Justiça Estadual - TJAM' ], 
   'TJBA'  : [ 'TJBA', 'Tribunal de Justiça Estadual - TJBA' ], 
   'TJCE'  : [ 'TJCE', 'Tribunal de Justiça Estadual - TJCE' ], 
   'TJDF'  : [ 'TJDFT', 'Tribunal de Justiça Estadual - TJDFT' ], 
   'TJES'  : [ 'TJES', 'Tribunal de Justiça Estadual - TJES' ], 
   'TJGO'  : [ 'TJGO', 'Tribunal de Justiça Estadual - TJGO' ], 
   'TJMA'  : [ 'TJMA', 'Tribunal de Justiça Estadual - TJMA' ], 
   'TJMT'  : [ 'TJMT', 'Tribunal de Justiça Estadual - TJMT' ], 
   'TJMS'  : [ 'TJMS', 'Tribunal de Justiça Estadual - TJMS' ], 
   'TJMG'  : [ 'TJMG', 'Tribunal de Justiça Estadual - TJMG' ], 
   'TJPA'  : [ 'TJPA', 'Tribunal de Justiça Estadual - TJPA' ], 
   'TJPB'  : [ 'TJPB', 'Tribunal de Justiça Estadual - TJPB' ], 
   'TJPR'  : [ 'TJPR', 'Tribunal de Justiça Estadual - TJPR' ], 
   'TJPE'  : [ 'TJPE', 'Tribunal de Justiça Estadual - TJPE' ], 
   'TJPI'  : [ 'TJPI', 'Tribunal de Justiça Estadual - TJPI' ], 
   'TJRJ'  : [ 'TJRJ', 'Tribunal de Justiça Estadual - TJRJ' ], 
   'TJRN'  : [ 'TJRN', 'Tribunal de Justiça Estadual - TJRN' ], 
   'TJRS'  : [ 'TJRS', 'Tribunal de Justiça Estadual - TJRS' ], 
   'TJRO'  : [ 'TJRO', 'Tribunal de Justiça Estadual - TJRO' ], 
   'TJRR'  : [ 'TJRR', 'Tribunal de Justiça Estadual - TJRR' ], 
   'TJSC'  : [ 'TJSC', 'Tribunal de Justiça Estadual - TJSC' ], 
   'TJSE'  : [ 'TJSE', 'Tribunal de Justiça Estadual - TJSE' ], 
   'TJSP'  : [ 'TJSP', 'Tribunal de Justiça Estadual - TJSP' ], 
   'TJTO'  : [ 'TJTO', 'Tribunal de Justiça Estadual - TJTO' ], 
   'TJM'   : [ 'TJM',  'Tribunal Justiça Militar Estadual' ], 
   'TJMMG' : [ 'TJMMG', 'Tribunal Justiça Militar do Estado de MG' ], 
   'TJMRS' : [ 'TJMRS', 'Tribunal Justiça Militar do Estado de RS' ], 
   'TJMSP' : [ 'TJMSP', 'Tribunal Justiça Militar do Estado de SP' ], 
   'AC'    : [ 'AC',    'Totalização do Estado do Acre' ], 
   'AL'    : [ 'AL',    'Totalização do Estado de Alagoas' ], 
   'AP'    : [ 'AP',    'Totalização do Estado do Amapá' ], 
   'AM'    : [ 'AM',    'Totalização do Estado do Amazonas' ], 
   'BA'    : [ 'BA',    'Totalização do Estado da Bahia' ], 
   'CE'    : [ 'CE',    'Totalização do Estado do Ceará' ], 
   'DF'    : [ 'DF',    'Totalização do Estado do Dist Federal' ], 
   'ES'    : [ 'ES',    'Totalização do Estado do Espírito Santo' ], 
   'GO'    : [ 'GO',    'Totalização do Estado de Goiás' ], 
   'MA'    : [ 'MA',    'Totalização do Estado do Maranhão' ], 
   'MT'    : [ 'MT',    'Totalização do Estado do Mato Grosso' ], 
   'MS'    : [ 'MS',    'Totalização do Estado do Mato Grosso do Sul' ], 
   'MG'    : [ 'MG',    'Totalização do Estado de Minas Gerais' ], 
   'PA'    : [ 'PA',    'Totalização do Estado do Pará' ], 
   'PB'    : [ 'PB',    'Totalização do Estado da Paraíba' ], 
   'PR'    : [ 'PR',    'Totalização do Estado do Paraná' ], 
   'PE'    : [ 'PE',    'Totalização do Estado de Pernambuco' ], 
   'PI'    : [ 'PI',    'Totalização do Estado do Piauí' ], 
   'RJ'    : [ 'RJ',    'Totalização do Estado do Rio de Janeiro' ], 
   'RN'    : [ 'RN',    'Totalização do Estado do Rio Gde do Norte' ], 
   'RS'    : [ 'RS',    'Totalização do Estado do Rio Gde do Sul' ], 
   'RO'    : [ 'RO',    'Totalização do Estado de Rondônia' ], 
   'RR'    : [ 'RR',    'Totalização do Estado de Roraima' ], 
   'SC'    : [ 'SC',    'Totalização do Estado de Santa Catarina' ], 
   'SE'    : [ 'SE',    'Totalização do Estado de Sergipe' ], 
   'SP'    : [ 'SP',    'Totalização do Estado de São Paulo' ], 
   'TO'    : [ 'TO',    'Totalização do Estado de Tocantins' ], 

}

//
// Calcula a SIGLA do Tribunal a partir da UF + Ramo Justica
//

function jsSelecionaSiglaTribunal(var_uf, var_ramo) {

    var var_indice = "todos";
	
	if (var_uf == "" && var_ramo == "" ) {
		var_indice = "todos";
	}
	
	if (var_uf == "todos" && var_ramo == "todos" ) {
		var_indice = "todos";
	}
	
    if ( var_ramo == "CNJ" || var_ramo == "STF" || var_ramo == "STJ" || var_ramo == "TRF" ) {
		var_indice = var_ramo;
	}

    if ( var_ramo == "TJM" ) {
		if ( var_uf != "RS" && var_uf != "SP" && var_uf != "MG" ) {
		   var_indice = var_ramo;
		}
	}
	
    if ( var_indice == "" && var_ramo == "todos" ) {
		var_indice = var_uf;
	}	

    if ( var_indice == "" && var_uf == "todos" ) {
		var_indice = var_ramo;
	}	

    if ( var_indice == "" ) {
		var_indice = var_ramo + var_uf;
	}		
	
	return arrayTribunais[var_indice][0];
	
}        

//
// Calcula o NOME do Tribunal a partir da UF + Ramo Justica
//  a ser utilizado no titulo do Relatorio


function jsSelecionaNomeTribunal(var_uf, var_ramo) {

    var var_indice = "todos";
	
	if (var_uf == "" && var_ramo == "" ) {
		var_indice = "todos";
	}
	
	if (var_uf == "todos" && var_ramo == "todos" ) {
		var_indice = "todos";
	}
	
    if ( var_ramo == "CNJ" || var_ramo == "STF" || var_ramo == "STJ" || var_ramo == "TRF" ) {
		var_indice = var_ramo;
	}

    if ( var_ramo == "TJM" ) {
		if ( var_uf != "RS" && var_uf != "SP" && var_uf != "MG") {
		   var_indice = var_ramo;
		}
	}
	
    if ( var_indice == "" && var_ramo == "todos" ) {
		var_indice = var_uf;
	}	

    if ( var_indice == "" && var_uf == "todos" ) {
		var_indice = var_ramo;
	}	

    if ( var_indice == "" ) {
		var_indice = var_ramo + var_uf;
	}		
	
	return arrayTribunais[var_indice][1];
	
} 
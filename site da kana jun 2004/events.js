
// This is the Database of Upcoming Events
// Please Edit with Care.
//
// 8 Fields (surrounded by brackets[]) are used for EACH event:
// 	["Recurring", "Month", "Day", "Year", "StartTime", "EndTime", "Name", "Description"]
// 	Each event field must be be surrounded by quotation marks followed by a comma ("",) EXCEPT the "Description" field.
//	The "Description" field is surrounded by quotation marks only ("").
//
// Each event has a comma after the closing bracket IF another event is below it on the next line down.
//	Note: The last event in this file should NOT have a comma after the closing bracket
//
// The Recurring field uses:
//	"D" = Daily; "W" = Weekly; "M" = Monthly; "Y" = Yearly; "F" = Floating Holiday
//
// One Time only events should leave the Recurring field blank
//	(ex. "")
//
// Daily events do NOT require that anything be in the Month Day and Year fields
//	Everything in the Month Day and Year fields will be ignored
//
// Weekly events should have the day of the week field set to 1 - 7
//	1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thurday, 6=Friday, 7=Saturday
//
// "F"loating events uses:
//	the Month field for the Month.
//	the Day field as the Cardinal Occurrence
//		1=1st, 2=2nd, 3=3rd, 4=4th, 5=5th, 6=6th occurrence of the day listed next
//	the Year field as the Day of the week the event/holiday falls on
//		1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thurday, 6=Friday, 7=Saturday
//	example: "F",	"1",	"3",	"2", = Floating holiday in January on the 3rd Monday of that month.
//
//	Note: Easter has it's own special formula so Please don't change anything related to Easter below
//
// "Y"early events are specific dates that never change - the Year field is ignored
//	example - Christmas is: "12","25","",
events = new Array(
	["Y",	"1",	"1",	"2005",	"00:00",	"",	"",	"É ANO NOVO! FELIZ ANO NOVO! ! ! Também é dia de confraternização entre os povos."],
	["",	"1",	"17",	"2006",	"21:00",	"",	"",	"Lançamento do CD: 'MÚSICA para Raros' - Vol. 1 - Com as participações de Alváro Cueva, Fernando Cavallieri, KANA, Lis Rodrigues, Max Gonzaga, Sonekka, Tito Pinheiro e Vlado Lima se reuniram no teatro Crowne Plaza na Rua Frei Caneca, 1360 - Fone 3289-0985. Nesta data, cada ingresso valeu um exemplar do CD - Música para Raros - Vol. 1."],
	["",	"1",	"20",	"2006",	"21:30",	"",	"",	"Show do grupo Baião de 4 + 1 - Alváro Cueva, KANA, Alê Cueva, Márcio Policastro - parceiros do Caiubí. Nesta data se reuniram no Clube Caiubí de compositores. Endereço: Rua Caiubí, 420 - Fone 8359-7796."],
	["",	"1",	"7",	"2006",	"21:30",	"",	"",	"Show 'Um Banquinho, um Violão' - Projeto MPB e autoral. Endereço: Rua Treze de Maio, 180 - Bela Vista - Fone 3258-5323."],
	["Y",	"12",	"25",	"2005",	"00:00",	"",	"",	"É Natal. Feliz NATAL!"],
	["",	"2",	"23",	"2006",	"21:00",	"",	"",	"Show do grupo Baião de 4 + 1 - Alváro Cueva, KANA, Alê Cueva, Márcio Policastro - Convidado especial: Élio Camalle. LOCAL: VILLAGGIO CAFÉ, Praça Dom Orione, 298 - Bixiga. Telefone: 3251.3730 - Valor dos ingressos R$10,00. Valor de meia entrada para idosos e estudantes."],
   	["",	"4",	"20",	"2006",	"21:00",	"",	"",	"Show do grupo Baião de 4 + 1 - Alváro Cueva, KANA, Alê Cueva, Márcio Policastro cantam no projeto Caretas Canta. LOCAL: CARETAS BAR, Rua Aspicuelta, 208 - Vila Madalena - São Paulo. Telefone/reservas: 11 3814.7581 - Valor dos ingressos R$5,00. Site: http://www.caretas.com.br"],
   	["",	"4",	"22",	"2006",	"19:00",	"",	"",	"Show do grupo Baião de 4 + 1 - Alváro Cueva, KANA, Alê Cueva, Márcio Policastro - Convidado especial: Zé Rodrix. LOCAL: CENTRO CULTURAL DE SÃO PAULO, Rua Vergueiro, 1000 - Paraíso - São Paulo. Entrada: R$8,00. Site: http://sampa3.prodam.sp.gov.br/ccsp/"],
  	["",	"5",	"20",	"2006",	"21:00",	"",	"",	"Show KANA. LOCAL: MAURO DISCOS, Rua Clélia, 33, loja 38, Shopping Pompéia Nobre, ao lado do Sesc Pompéia em São Paulo. Telefone: 3803-9106. Entrada: GRÁTIS. Site: http://www.maurodiscos.com.br"],
    ["",	"5",	"26",	"2006",	"21:30",	"",	"",	"Show do grupo Baião de 4 + 1 - Alváro Cueva, KANA, Alê Cueva, Márcio Policastro - Convidado especial: Tavito. LOCAL: VILLAGGIO CAFÉ, Praça Dom Orione, 298 - Bixiga. Telefone: 3251.3730 - Valor dos ingressos R$10,00."]
// Please omit the final comma after the ] from the last line above unless you are going to add another event at this time.
);





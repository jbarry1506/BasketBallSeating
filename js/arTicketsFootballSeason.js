//TicketID~Section~Row~Seat~Claimed~AdvanceID~SeatID

var arTickets = 
"302~J~105~14FB012306~0~~302RowJSeat105~@" +
"302~J~106~14FB012307~0~~302RowJSeat106~@" +
"302~J~107~14FB012308~0~~302RowJSeat107~@" +
"302~J~108~14FB012309~0~~302RowJSeat108~@" +
"302~J~109~14FB012310~0~~302RowJSeat109~@" +
"302~J~110~14FB012311~0~~302RowJSeat110~@" +
"308~A~100~14FB012312~McConnell, Mitch ~14FB010000105602~308RowASeat100~Yes@" +
"308~A~101~14FB012313~McConnell, Mitch ~14FB010000105602~308RowASeat101~Yes@" +
"308~D~101~14FB012314~McConnell, Mitch ~14FB010000105602~308RowDSeat101~Yes@" +
"308~D~102~14FB012315~McConnell, Mitch ~14FB010000105602~308RowDSeat102~Yes@" +
"308~E~101~14FB012316~McConnell, Mitch ~14FB010000105602~308RowESeat101~Yes@" +
"308~E~102~14FB012317~McConnell, Mitch ~14FB010000105602~308RowESeat102~Yes@" +
"308~E~103~14FB012318~McConnell, Mitch ~14FB010000105602~308RowESeat103~Yes@" +
"308~E~104~14FB012319~McConnell, Mitch ~14FB010000105602~308RowESeat104~Yes@" +
"308~F~101~14FB012320~McConnell, Mitch ~14FB010000105602~308RowFSeat101~Yes@" +
"308~F~102~14FB012321~McConnell, Mitch ~14FB010000105602~308RowFSeat102~Yes@" +
"308~F~103~14FB012322~McConnell, Mitch ~14FB010000105602~308RowFSeat103~Yes@" +
"308~F~104~14FB012323~McConnell, Mitch ~14FB010000105602~308RowFSeat104~Yes@" +
"316~M~105~14FB012324~Public Health~14FB01Temp_1~316RowMSeat105~Yes@" +
"316~M~106~14FB012325~Public Health~14FB01Temp_1~316RowMSeat106~Yes@" +
"316~M~107~14FB012326~0~~316RowMSeat107~Yes@" +
"316~M~108~14FB012327~0~~316RowMSeat108~Yes@" +
"316~M~109~14FB012328~0~~316RowMSeat109~@" +
"316~M~110~14FB012329~0~~316RowMSeat110~@" +
"316~M~111~14FB012330~0~~316RowMSeat111~@" +
"316~M~112~14FB012331~0~~316RowMSeat112~@" +
"316~M~113~14FB012332~0~~316RowMSeat113~@" +
"316~M~114~14FB012333~0~~316RowMSeat114~@" +
"317~J~1~14FB012334~Conway, Jack~14FB010000925801~317RowJSeat1~Yes@" +
"317~J~2~14FB012335~Conway, Jack~14FB010000925801~317RowJSeat2~Yes@" +
"317~J~3~14FB012336~0~~317RowJSeat3~@" +
"317~J~4~14FB012337~0~~317RowJSeat4~@" +
"317~K~1~14FB012338~0~~317RowKSeat1~@" +
"317~K~2~14FB012339~0~~317RowKSeat2~@" +
"317~K~3~14FB012340~0~~317RowKSeat3~@" +
"317~K~4~14FB012341~0~~317RowKSeat4~@" +
"317~K~5~14FB012342~0~~317RowKSeat5~@" +
"317~K~6~14FB012343~0~~317RowKSeat6~@" +
"317~K~7~14FB012344~0~~317RowKSeat7~@" +
"317~K~8~14FB012345~0~~317RowKSeat8~@" +
"317~K~9~14FB012346~0~~317RowKSeat9~@" +
"317~K~10~14FB012347~0~~317RowKSeat10~@" +
"317~K~11~14FB012348~0~~317RowKSeat11~@" +
"317~K~12~14FB012349~0~~317RowKSeat12~@" +
"317~K~13~14FB012350~0~~317RowKSeat13~@" +
"317~K~14~14FB012351~0~~317RowKSeat14~@" +
"317~K~15~14FB012352~0~~317RowKSeat15~@" +
"317~K~16~14FB012353~0~~317RowKSeat16~@" +
"317~L~1~14FB012354~0~~317RowLSeat1~@" +
"317~L~2~14FB012355~0~~317RowLSeat2~@" +
"317~L~3~14FB012356~0~~317RowLSeat3~@" +
"317~L~4~14FB012357~0~~317RowLSeat4~@" +
"317~L~5~14FB012358~0~~317RowLSeat5~@" +
"317~L~6~14FB012359~0~~317RowLSeat6~@" +
"317~L~7~14FB012360~0~~317RowLSeat7~@" +
"317~L~8~14FB012361~0~~317RowLSeat8~@" +
"317~L~9~14FB012362~0~~317RowLSeat9~@" +
"317~L~10~14FB012363~0~~317RowLSeat10~@" +
"317~L~11~14FB012364~0~~317RowLSeat11~@" +
"317~L~12~14FB012365~0~~317RowLSeat12~@" +
"317~L~13~14FB012366~0~~317RowLSeat13~@" +
"317~L~14~14FB012367~0~~317RowLSeat14~@" +
"317~L~15~14FB012368~0~~317RowLSeat15~@" +
"317~L~16~14FB012369~0~~317RowLSeat16~@" +
"214~BB~5~14FB012370~Riggs, Steven~14FB010000922575~214RowBBSeat5~@" +
"214~BB~6~14FB012371~Riggs, Steven~14FB010000922575~214RowBBSeat6~@" +
"214~BB~7~14FB012372~Blackwell, Rick~14FB010000925474~214RowBBSeat7~Yes@" +
"214~BB~8~14FB012373~Blackwell, Rick~14FB010000925474~214RowBBSeat8~Yes@" +
"214~EE~13~14FB012374~Brown, John~14FB010000116185~214RowEESeat13~Yes@" +
"214~EE~14~14FB012375~Brown, John~14FB010000116185~214RowEESeat14~Yes@" +
"214~EE~15~14FB012376~0~~214RowEESeat15~@" +
"214~EE~16~14FB012377~0~~214RowEESeat16~@" +
"214~JJ~19~14FB012378~0~~214RowJJSeat19~@" +
"214~JJ~20~14FB012379~0~~214RowJJSeat20~@" +
"214~JJ~21~14FB012380~0~~214RowJJSeat21~@" +
"214~JJ~22~14FB012381~0~~214RowJJSeat22~@" +
"214~KK~19~14FB012382~Parrett, Dennis~14FB010000977306~214RowKKSeat19~Yes@" +
"214~KK~20~14FB012383~Parrett, Dennis~14FB010000977306~214RowKKSeat20~Yes@" +
"214~KK~21~14FB012384~Yates, Charles~14FB010000877513~214RowKKSeat21~Yes@" +
"214~KK~22~14FB012385~Yates, Charles~14FB010000877513~214RowKKSeat22~Yes@" +
"214~LL~19~14FB012386~0~~214RowLLSeat19~@" +
"214~LL~20~14FB012387~0~~214RowLLSeat20~@" +
"214~LL~21~14FB012388~0~~214RowLLSeat21~@" +
"214~LL~22~14FB012389~0~~214RowLLSeat22~@" +
"214~MM~1~14FB012390~Mills, Terry~14FB010000956474~214RowMMSeat1~Yes@" +
"214~MM~2~14FB012391~Mills, Terry~14FB010000956474~214RowMMSeat2~Yes@" +
"214~MM~3~14FB012392~0~~214RowMMSeat3~@" +
"214~MM~4~14FB012393~0~~214RowMMSeat4~@" +
"214~MM~9~14FB012394~0~~214RowMMSeat9~@" +
"214~MM~10~14FB012395~0~~214RowMMSeat10~@" +
"214~MM~11~14FB012396~0~~214RowMMSeat11~@" +
"214~MM~12~14FB012397~0~~214RowMMSeat12~@" +
"214~MM~13~14FB012398~Bechler, Lynn~14FB01Temp_2~214RowMMSeat13~Yes@" +
"214~MM~14~14FB012399~Bechler, Lynn~14FB01Temp_2~214RowMMSeat14~Yes@" +
"214~MM~15~14FB012400~0~~214RowMMSeat15~Yes@" +
"214~MM~16~14FB012401~0~~214RowMMSeat16~Yes@" +
"214~MM~19~14FB012402~0~~214RowMMSeat19~@" +
"214~MM~20~14FB012403~Kramer, Kevin~14FB010000858903~214RowMMSeat20~Yes@" +
"214~MM~21~14FB012404~Kramer, Kevin~14FB010000858903~214RowMMSeat21~Yes@" +
"214~MM~22~14FB012405~Kramer, Kevin~14FB010000858903~214RowMMSeat22~Yes@" +
"214~N~5~14FB012406~Semonin~14FB01Semonin~214RowNSeat5~Yes@" +
"214~N~6~14FB012407~Semonin~14FB01Semonin~214RowNSeat6~Yes@" +
"214~N~7~14FB012408~Semonin~14FB01Semonin~214RowNSeat7~Yes@" +
"214~N~8~14FB012409~Semonin~14FB01Semonin~214RowNSeat8~Yes@" +
"214~U~5~14FB012410~Clark, Larry~14FB010000423045~214RowUSeat5~Yes@" +
"214~U~6~14FB012411~Clark, Larry~14FB010000423045~214RowUSeat6~Yes@" +
"214~U~7~14FB012412~0~~214RowUSeat7~@" +
"214~U~8~14FB012413~0~~214RowUSeat8~@" +
"214~V~1~14FB012414~0~~214RowVSeat1~@" +
"214~V~2~14FB012415~0~~214RowVSeat2~@" +
"214~V~3~14FB012416~Clark, Perry~14FB010000891220~214RowVSeat3~Yes@" +
"214~V~4~14FB012417~Clark, Perry~14FB010000891220~214RowVSeat4~Yes@" +
"214~V~5~14FB012418~Neal, Gerald~14FB010000128869~214RowVSeat5~Yes@" +
"214~V~6~14FB012419~Neal, Gerald~14FB010000128869~214RowVSeat6~Yes@" +
"214~V~7~14FB012420~Harper Angel, Denise~14FB010000922528~214RowVSeat7~Yes@" +
"214~V~8~14FB012421~Harper Angel, Denise~14FB010000922528~214RowVSeat8~Yes@" +
"214~Z~6~14FB012422~Carney, John~14FB010000953060~214RowZSeat6~Yes@" +
"214~Z~7~14FB012423~Carney, John~14FB010000953060~214RowZSeat7~Yes@" +
"214~Z~8~14FB012424~Embry, C.~14FB010000922607~214RowZSeat8~Yes@" +
"214~Z~9~14FB012425~Embry, C.~14FB010000922607~214RowZSeat9~Yes@" +
"129~E~1~14FB012426~0~~129RowESeat1~@" +
"129~E~2~14FB012427~0~~129RowESeat2~@" +
"129~E~3~14FB012428~0~~129RowESeat3~@" +
"129~E~4~14FB012429~0~~129RowESeat4~@" +
"129~E~5~14FB012430~0~~129RowESeat5~@" +
"129~E~6~14FB012431~0~~129RowESeat6~@" +
"129~E~7~14FB012432~0~~129RowESeat7~@" +
"129~E~8~14FB012433~0~~129RowESeat8~@" +
"129~E~9~14FB012434~0~~129RowESeat9~@" +
"129~E~10~14FB012435~0~~129RowESeat10~@" +
"129~F~1~14FB012436~0~~129RowFSeat1~@" +
"129~F~2~14FB012437~0~~129RowFSeat2~@" +
"129~F~3~14FB012438~0~~129RowFSeat3~@" +
"129~F~4~14FB012439~0~~129RowFSeat4~@" +
"129~F~5~14FB012440~0~~129RowFSeat5~@" +
"129~F~6~14FB012441~0~~129RowFSeat6~@" +
"129~F~7~14FB012442~0~~129RowFSeat7~@" +
"129~F~8~14FB012443~0~~129RowFSeat8~@" +
"129~F~9~14FB012444~0~~129RowFSeat9~@" +
"129~F~10~14FB012445~0~~129RowFSeat10~@" +
"130~K~101~14FB012446~Rand, Rick~14FB010000922570~130RowKSeat101~Yes@" +
"130~K~102~14FB012447~Rand, Rick~14FB010000922570~130RowKSeat102~Yes@" +
"130~K~103~14FB012448~Miller, Charlie~14FB010000922553~130RowKSeat103~Yes@" +
"130~K~104~14FB012449~Miller, Charlie~14FB010000922553~130RowKSeat104~Yes@" +
"130~K~105~14FB012450~Stivers, Robert~14FB010000411374~130RowKSeat105~Yes@" +
"130~K~106~14FB012451~Stivers, Robert~14FB010000411374~130RowKSeat106~Yes@" +
"130~K~107~14FB012452~Thayer, David~14FB010000922598~130RowKSeat107~Yes@" +
"130~K~108~14FB012453~Thayer, David~14FB010000922598~130RowKSeat108~Yes@" +
"130~K~109~14FB012454~Floyd, David~14FB010000922610~130RowKSeat109~Yes@" +
"130~K~110~14FB012455~Floyd, David~14FB010000922610~130RowKSeat110~Yes@" +
"130~K~111~14FB012456~Driskell, Jane~14FB010000983789~130RowKSeat111~Yes@" +
"130~K~112~14FB012457~Driskell, Jane~14FB010000983789~130RowKSeat112~Yes@" +
"130~K~113~14FB012458~Butler, Denver~14FB010000877903~130RowKSeat113~Yes@" +
"130~K~114~14FB012459~Butler, Denver~14FB010000877903~130RowKSeat114~Yes@" +
"130~K~115~14FB012460~Burch, Thomas~14FB010000423043~130RowKSeat115~Yes@" +
"130~K~116~14FB012461~Burch, Thomas~14FB010000423043~130RowKSeat116~Yes@" +
"130~L~101~14FB012462~Flanery, Lori~14FB010000938886~130RowLSeat101~Yes@" +
"130~L~102~14FB012463~Flanery, Lori~14FB010000938886~130RowLSeat102~Yes@" +
"130~L~103~14FB012464~0~~130RowLSeat103~Yes@" +
"130~L~104~14FB012465~0~~130RowLSeat104~Yes@" +
"130~L~105~14FB012466~0~~130RowLSeat105~Yes@" +
"130~L~106~14FB012467~0~~130RowLSeat106~Yes@" +
"130~L~107~14FB012468~0~~130RowLSeat107~@" +
"130~L~108~14FB012469~0~~130RowLSeat108~@" +
"130~L~109~14FB012470~0~~130RowLSeat109~@" +
"130~L~110~14FB012471~0~~130RowLSeat110~@" +
"130~L~111~14FB012472~Jenkins, Joni~14FB010000892113~130RowLSeat111~Yes@" +
"130~L~112~14FB012473~Jenkins, Joni~14FB010000892113~130RowLSeat112~Yes@" +
"130~L~113~14FB012474~Owens, Darryl~14FB010000304196~130RowLSeat113~Yes@" +
"130~L~114~14FB012475~Owens, Darryl~14FB010000304196~130RowLSeat114~Yes@" +
"130~M~101~14FB012476~Abramson, Jerry~14FB010000163150~130RowMSeat101~Yes@" +
"130~M~102~14FB012477~Abramson, Jerry~14FB010000163150~130RowMSeat102~Yes@" +
"130~M~103~14FB012478~0~~130RowMSeat103~@" +
"130~M~104~14FB012479~0~~130RowMSeat104~@" +
"130~M~105~14FB012480~0~~130RowMSeat105~@" +
"130~M~106~14FB012481~0~~130RowMSeat106~@" +
"130~M~107~14FB012482~0~~130RowMSeat107~@" +
"130~M~108~14FB012483~0~~130RowMSeat108~@" +
"130~M~109~14FB012484~0~~130RowMSeat109~@" +
"130~M~110~14FB012485~0~~130RowMSeat110~@" +
"130~M~111~14FB012486~0~~130RowMSeat111~@" +
"130~M~112~14FB012487~0~~130RowMSeat112~@" +
"130~N~109~14FB012488~0~~130RowNSeat109~@" +
"130~N~110~14FB012489~0~~130RowNSeat110~@" +
"130~N~111~14FB012490~0~~130RowNSeat111~@" +
"130~N~112~14FB012491~0~~130RowNSeat112~@" +
"130~P~113~14FB012492~0~~130RowPSeat113~@" +
"130~P~114~14FB012493~0~~130RowPSeat114~@" +
"130~Q~103~14FB012494~0~~130RowQSeat103~@" +
"130~Q~104~14FB012495~0~~130RowQSeat104~@" +
"130~Q~113~14FB012496~0~~130RowQSeat113~@" +
"130~Q~114~14FB012497~0~~130RowQSeat114~@" +
"132~E~111~14FB012498~0~~132RowESeat111~@" +
"132~E~112~14FB012499~0~~132RowESeat112~@" +
"132~E~113~14FB012500~0~~132RowESeat113~@" +
"132~E~114~14FB012501~0~~132RowESeat114~@" +
"132~E~115~14FB012502~0~~132RowESeat115~@" +
"132~E~116~14FB012503~0~~132RowESeat116~@" +
"132~E~117~14FB012504~0~~132RowESeat117~@" +
"132~E~118~14FB012505~0~~132RowESeat118~@" +
"132~E~119~14FB012506~0~~132RowESeat119~@" +
"132~E~120~14FB012507~0~~132RowESeat120~@" +
"132~F~111~14FB012508~0~~132RowFSeat111~@" +
"132~F~112~14FB012509~0~~132RowFSeat112~@" +
"132~F~113~14FB012510~0~~132RowFSeat113~@" +
"132~F~114~14FB012511~0~~132RowFSeat114~@" +
"132~G~111~14FB012512~Moore, Brucie~14FB010000126563~132RowGSeat111~Yes@" +
"132~G~112~14FB012513~Moore, Brucie~14FB010000126563~132RowGSeat112~Yes@" +
"132~G~113~14FB012514~Moore, Brucie~14FB010000126563~132RowGSeat113~Yes@" +
"132~G~114~14FB012515~Moore, Brucie~14FB010000126563~132RowGSeat114~Yes@" +
"204~AA~15~14FB012516~0~~204RowAASeat15~@" +
"204~AA~16~14FB012517~0~~204RowAASeat16~@" +
"229~CC~1~14FB012518~0~~229RowCCSeat1~@" +
"229~CC~2~14FB012519~0~~229RowCCSeat2~@" +
"229~CC~3~14FB012520~0~~229RowCCSeat3~@" +
"229~CC~4~14FB012521~0~~229RowCCSeat4~@" +
"229~CC~5~14FB012522~0~~229RowCCSeat5~@" +
"229~CC~6~14FB012523~0~~229RowCCSeat6~@" +
"229~CC~7~14FB012524~0~~229RowCCSeat7~@" +
"229~CC~8~14FB012525~0~~229RowCCSeat8~@" +
"229~CC~9~14FB012526~0~~229RowCCSeat9~@" +
"229~CC~10~14FB012527~0~~229RowCCSeat10~@" +
"229~DD~1~14FB012528~0~~229RowDDSeat1~@" +
"229~DD~2~14FB012529~0~~229RowDDSeat2~@" +
"230~T~101~14FB012530~0~~230RowTSeat101~@" +
"230~T~102~14FB012531~0~~230RowTSeat102~@" +
"230~T~103~14FB012532~0~~230RowTSeat103~@" +
"230~T~104~14FB012533~0~~230RowTSeat104~@" +
"230~T~105~14FB012534~0~~230RowTSeat105~@" +
"230~T~106~14FB012535~0~~230RowTSeat106~@" +
"230~T~107~14FB012536~0~~230RowTSeat107~@" +
"230~T~108~14FB012537~0~~230RowTSeat108~@" +
"230~U~101~14FB012538~0~~230RowUSeat101~@" +
"230~U~102~14FB012539~0~~230RowUSeat102~@" +
"230~U~103~14FB012540~0~~230RowUSeat103~@" +
"230~U~104~14FB012541~0~~230RowUSeat104~@" +
"230~U~105~14FB012542~0~~230RowUSeat105~@" +
"230~U~106~14FB012543~0~~230RowUSeat106~@" +
"230~U~107~14FB012544~0~~230RowUSeat107~@" +
"230~U~108~14FB012545~0~~230RowUSeat108~@" +
"230~V~101~14FB012546~0~~230RowVSeat101~@" +
"230~V~102~14FB012547~0~~230RowVSeat102~@" +
"230~V~103~14FB012548~0~~230RowVSeat103~@" +
"230~V~104~14FB012549~0~~230RowVSeat104~@" +
"230~V~105~14FB012550~0~~230RowVSeat105~@" +
"230~V~106~14FB012551~0~~230RowVSeat106~@" +
"230~V~107~14FB012552~0~~230RowVSeat107~@" +
"230~V~108~14FB012553~0~~230RowVSeat108~@" +
"230~W~101~14FB012554~0~~230RowWSeat101~@" +
"230~W~102~14FB012555~0~~230RowWSeat102~@" +
"230~W~103~14FB012556~0~~230RowWSeat103~@" +
"230~W~104~14FB012557~0~~230RowWSeat104~@" +
"230~W~105~14FB012558~0~~230RowWSeat105~@" +
"230~W~106~14FB012559~0~~230RowWSeat106~@" +
"230~W~107~14FB012560~0~~230RowWSeat107~@" +
"230~W~108~14FB012561~0~~230RowWSeat108~@" +
"231~AA~1~14FB012562~0~~231RowAASeat1~@" +
"231~AA~2~14FB012563~0~~231RowAASeat2~@" +
"231~AA~3~14FB012564~0~~231RowAASeat3~@" +
"231~AA~4~14FB012565~0~~231RowAASeat4~@" +
"231~U~15~14FB012566~0~~231RowUSeat15~@" +
"231~U~16~14FB012567~0~~231RowUSeat16~@" +
"231~U~17~14FB012568~0~~231RowUSeat17~@" +
"231~U~18~14FB012569~0~~231RowUSeat18~@" +
"231~Y~1~14FB012570~0~~231RowYSeat1~@" +
"231~Y~2~14FB012571~0~~231RowYSeat2~@" +
"231~Y~3~14FB012572~0~~231RowYSeat3~@" +
"231~Y~4~14FB012573~0~~231RowYSeat4~@" +
"231~Y~5~14FB012574~0~~231RowYSeat5~@" +
"231~Y~6~14FB012575~0~~231RowYSeat6~@" +
"231~Z~1~14FB012576~0~~231RowZSeat1~@" +
"231~Z~2~14FB012577~0~~231RowZSeat2~@" +
"231~Z~3~14FB012578~0~~231RowZSeat3~@" +
"231~Z~4~14FB012579~0~~231RowZSeat4~@" +
"231~Z~5~14FB012580~0~~231RowZSeat5~@" +
"231~Z~6~14FB012581~0~~231RowZSeat6~@" +
"232~DD~105~14FB012582~0~~232RowDDSeat105~@" +
"232~DD~106~14FB012583~0~~232RowDDSeat106~@" +
"232~DD~107~14FB012584~0~~232RowDDSeat107~@" +
"232~DD~108~14FB012585~0~~232RowDDSeat108~@" +
"232~DD~109~14FB012586~0~~232RowDDSeat109~@" +
"232~DD~110~14FB012587~0~~232RowDDSeat110~@" +
"232~DD~111~14FB012588~0~~232RowDDSeat111~@" +
"232~DD~112~14FB012589~0~~232RowDDSeat112~@" +
"232~DD~113~14FB012590~0~~232RowDDSeat113~@" +
"232~DD~114~14FB012591~0~~232RowDDSeat114~@" +
"232~EE~103~14FB012592~0~~232RowEESeat103~@" +
"232~EE~104~14FB012593~0~~232RowEESeat104~@" +
"232~EE~105~14FB012594~0~~232RowEESeat105~@" +
"232~EE~106~14FB012595~0~~232RowEESeat106~@" +
"232~EE~107~14FB012596~0~~232RowEESeat107~@" +
"232~EE~108~14FB012597~0~~232RowEESeat108~@" +
"232~EE~109~14FB012598~0~~232RowEESeat109~@" +
"232~EE~110~14FB012599~0~~232RowEESeat110~@" +
"232~EE~111~14FB012600~0~~232RowEESeat111~@" +
"232~EE~112~14FB012601~0~~232RowEESeat112~@" +
"232~FF~103~14FB012602~0~~232RowFFSeat103~@" +
"232~FF~104~14FB012603~0~~232RowFFSeat104~@" +
"232~FF~105~14FB012604~0~~232RowFFSeat105~@" +
"232~FF~106~14FB012605~0~~232RowFFSeat106~@" +
"232~FF~107~14FB012606~0~~232RowFFSeat107~@" +
"232~FF~108~14FB012607~0~~232RowFFSeat108~@" +
"232~FF~109~14FB012608~0~~232RowFFSeat109~@" +
"232~FF~110~14FB012609~0~~232RowFFSeat110~@" +
"232~FF~111~14FB012610~0~~232RowFFSeat111~@" +
"232~FF~112~14FB012611~0~~232RowFFSeat112~@" +
"232~GG~103~14FB012612~0~~232RowGGSeat103~@" +
"232~GG~104~14FB012613~0~~232RowGGSeat104~@" +
"232~GG~105~14FB012614~0~~232RowGGSeat105~@" +
"232~GG~106~14FB012615~0~~232RowGGSeat106~@" +
"232~GG~107~14FB012616~0~~232RowGGSeat107~@" +
"232~GG~108~14FB012617~0~~232RowGGSeat108~@" +
"232~GG~109~14FB012618~0~~232RowGGSeat109~@" +
"232~GG~110~14FB012619~0~~232RowGGSeat110~@" +
"232~GG~111~14FB012620~0~~232RowGGSeat111~@" +
"232~GG~112~14FB012621~0~~232RowGGSeat112~@" +
"L4~C~117~14FB012622~0~~L4RowCSeat117~@" +
"L4~C~118~14FB012623~0~~L4RowCSeat118~@" +
"L4~C~119~14FB012624~0~~L4RowCSeat119~@" +
"L4~C~120~14FB012625~0~~L4RowCSeat120~@" +
"L4~D~105~14FB012626~0~~L4RowDSeat105~@" +
"L4~D~106~14FB012627~0~~L4RowDSeat106~@" +
"L4~D~107~14FB012628~0~~L4RowDSeat107~@" +
"L4~D~108~14FB012629~0~~L4RowDSeat108~@" +
"L4~D~109~14FB012630~0~~L4RowDSeat109~@" +
"L4~D~110~14FB012631~0~~L4RowDSeat110~@" +
"L4~D~119~14FB012632~0~~L4RowDSeat119~@" +
"L4~D~120~14FB012633~0~~L4RowDSeat120~@" +
"L4~D~121~14FB012634~0~~L4RowDSeat121~@" +
"L4~D~122~14FB012635~0~~L4RowDSeat122~@" +
"L4~D~123~14FB012636~0~~L4RowDSeat123~@" +
"L4~D~124~14FB012637~0~~L4RowDSeat124~@" +
"L4~F~106~14FB012638~0~~L4RowFSeat106~@" +
"L4~F~107~14FB012639~0~~L4RowFSeat107~@" +
"L4~F~108~14FB012640~0~~L4RowFSeat108~@" +
"L4~F~109~14FB012641~0~~L4RowFSeat109~@" +
"L4~F~110~14FB012642~0~~L4RowFSeat110~@" +
"L4~F~111~14FB012643~0~~L4RowFSeat111~@" +
"L4~G~112~14FB012644~0~~L4RowGSeat112~@" +
"L4~G~113~14FB012645~0~~L4RowGSeat113~@" +
"L4~G~114~14FB012646~0~~L4RowGSeat114~@" +
"L4~G~115~14FB012647~0~~L4RowGSeat115~@" +
"L6~A~121~14FB012648~0~~L6RowASeat121~@" +
"L6~A~122~14FB012649~0~~L6RowASeat122~@" +
"L6~A~123~14FB012650~0~~L6RowASeat123~@" +
"L6~A~124~14FB012651~0~~L6RowASeat124~@" +
"L8~B~107~14FB012652~0~~L8RowBSeat107~@" +
"L8~B~108~14FB012653~0~~L8RowBSeat108~@" +
"L8~B~109~14FB012654~0~~L8RowBSeat109~@" +
"L8~B~110~14FB012655~0~~L8RowBSeat110~@" +
"L8~B~111~14FB012656~0~~L8RowBSeat111~@" +
"L8~B~112~14FB012657~0~~L8RowBSeat112~@" +
"L8~C~113~14FB012658~0~~L8RowCSeat113~@" +
"L8~C~114~14FB012659~0~~L8RowCSeat114~@" +
"L8~C~115~14FB012660~0~~L8RowCSeat115~@" +
"L8~C~116~14FB012661~0~~L8RowCSeat116~@" +
"L8~C~117~14FB012662~0~~L8RowCSeat117~@" +
"L8~C~118~14FB012663~0~~L8RowCSeat118~@" +
"L8~E~101~14FB012664~0~~L8RowESeat101~@" +
"L8~E~102~14FB012665~0~~L8RowESeat102~@" +
"L8~E~103~14FB012666~0~~L8RowESeat103~@" +
"L8~E~104~14FB012667~0~~L8RowESeat104~@" +
"L8~E~105~14FB012668~0~~L8RowESeat105~@" +
"L8~E~106~14FB012669~0~~L8RowESeat106~@" +
"L8~E~119~14FB012670~0~~L8RowESeat119~@" +
"L8~E~120~14FB012671~0~~L8RowESeat120~@" +
"L8~E~121~14FB012672~0~~L8RowESeat121~@" +
"L8~E~122~14FB012673~0~~L8RowESeat122~@" +
"L8~E~123~14FB012674~0~~L8RowESeat123~@" +
"L8~E~124~14FB012675~0~~L8RowESeat124~@" +
"503~A~1~14FB012676~0~~503RowASeat1~@" +
"503~A~2~14FB012677~0~~503RowASeat2~@" +
"503~A~3~14FB012678~0~~503RowASeat3~@" +
"503~A~4~14FB012679~0~~503RowASeat4~@" +
"503~A~5~14FB012680~0~~503RowASeat5~@" +
"503~A~6~14FB012681~0~~503RowASeat6~@" +
"503~A~7~14FB012682~0~~503RowASeat7~@" +
"503~A~8~14FB012683~0~~503RowASeat8~@" +
"503~A~9~14FB012684~0~~503RowASeat9~@" +
"503~A~10~14FB012685~0~~503RowASeat10~@" +
"503~A~11~14FB012686~0~~503RowASeat11~@" +
"503~A~12~14FB012687~0~~503RowASeat12~@" +
"503~A~13~14FB012688~0~~503RowASeat13~@" +
"503~A~14~14FB012689~0~~503RowASeat14~@" +
"503~B~1~14FB012690~0~~503RowBSeat1~@" +
"503~B~2~14FB012691~0~~503RowBSeat2~@" +
"503~B~3~14FB012692~0~~503RowBSeat3~@" +
"503~B~4~14FB012693~0~~503RowBSeat4~@" +
"503~B~5~14FB012694~0~~503RowBSeat5~@" +
"503~B~6~14FB012695~0~~503RowBSeat6~@" +
"503~B~7~14FB012696~0~~503RowBSeat7~@" +
"503~B~8~14FB012697~0~~503RowBSeat8~@" +
"503~B~9~14FB012698~0~~503RowBSeat9~@" +
"503~B~10~14FB012699~0~~503RowBSeat10~@" +
"503~B~11~14FB012700~0~~503RowBSeat11~@" +
"503~B~12~14FB012701~0~~503RowBSeat12~@" +
"503~B~13~14FB012702~0~~503RowBSeat13~@" +
"503~B~14~14FB012703~0~~503RowBSeat14~@" +
"503~SRO~1~14FB012704~0~~503RowSROSeat1~@" +
"503~SRO~2~14FB012705~0~~503RowSROSeat2~@" +
"503~SRO~3~14FB012706~0~~503RowSROSeat3~@" +
"503~SRO~4~14FB012707~0~~503RowSROSeat4~@" +
"503~SRO~5~14FB012708~0~~503RowSROSeat5~@" +
"503~SRO~6~14FB012709~0~~503RowSROSeat6~@" +
"503~SRO~7~14FB012710~0~~503RowSROSeat7~@" +
"503~SRO~8~14FB012711~0~~503RowSROSeat8~@" +
"503~SRO~9~14FB012712~0~~503RowSROSeat9~@" +
"503~SRO~10~14FB012713~0~~503RowSROSeat10~@" +
"503~SRO~11~14FB012714~0~~503RowSROSeat11~@" +
"503~SRO~12~14FB012715~0~~503RowSROSeat12~@" +
"503~SRO~13~14FB012716~0~~503RowSROSeat13~@" +
"503~SRO~14~14FB012717~0~~503RowSROSeat14~@" +
"503~SRO~15~14FB012718~0~~503RowSROSeat15~@" +
"503~SRO~16~14FB012719~0~~503RowSROSeat16~@" +
"503~SRO~17~14FB012720~0~~503RowSROSeat17~@" +
"503~SRO~18~14FB012721~0~~503RowSROSeat18~@" +
"503~SRO~19~14FB012722~0~~503RowSROSeat19~@" +
"503~SRO~20~14FB012723~0~~503RowSROSeat20~@" +
"S21~A~1~14FB012724~0~~S21RowASeat1~@" +
"S21~A~2~14FB012725~0~~S21RowASeat2~@" +
"S21~A~3~14FB012726~0~~S21RowASeat3~@" +
"S21~A~4~14FB012727~0~~S21RowASeat4~@" +
"S21~A~7~14FB012728~0~~S21RowASeat7~@" +
"S21~A~8~14FB012729~0~~S21RowASeat8~@" +
"S21~B~1~14FB012730~0~~S21RowBSeat1~@" +
"S21~B~2~14FB012731~0~~S21RowBSeat2~@" +
"S21~B~3~14FB012732~0~~S21RowBSeat3~@" +
"S21~B~4~14FB012733~0~~S21RowBSeat4~@" +
"S21~B~7~14FB012734~0~~S21RowBSeat7~@" +
"S21~B~8~14FB012735~0~~S21RowBSeat8~@" +
"S21~C~1~14FB012736~0~~S21RowCSeat1~@" +
"S21~C~2~14FB012737~0~~S21RowCSeat2~@" +
"S21~C~3~14FB012738~0~~S21RowCSeat3~@" +
"S21~C~4~14FB012739~0~~S21RowCSeat4~@" +
"S21~C~7~14FB012740~0~~S21RowCSeat7~@" +
"S21~C~8~14FB012741~0~~S21RowCSeat8~@" +
"S21~SRO~1~14FB012742~0~~S21RowSROSeat1~@" +
"S21~SRO~2~14FB012743~0~~S21RowSROSeat2~@" +
"S21~SRO~3~14FB012744~0~~S21RowSROSeat3~@" +
"S21~SRO~4~14FB012745~0~~S21RowSROSeat4~@" +
"S21~SRO~5~14FB012746~0~~S21RowSROSeat5~@" +
"S21~SRO~6~14FB012747~0~~S21RowSROSeat6~@" +
"~~~~0~~RowSeat~@";

			//After the split, each element in arSeats will contain seat info in the form of  
				//Section, 
				//Row, 
				//Seat,
                //ETID,				 
				//Claimed,
                //ticketID,				  
				//SeatID,
				//SeasonTix

			var arSeats = arTickets.split('@');
			
			for(var i = 0; i<arSeats.length; i++){
				arSeats[i] = arSeats[i].split('~');
				if (arSeats[i][4] == 0) {
					arSeats[i][4] = '&nbsp';
				}				
			}

			//Create an initial JSON object with dummy values because i haven't figured out how else to do it yet
			var JSONObject = {  //ticket 
				"seats" : [{
					"section" : 0,			//arSeats[ ][0] = jso[0]
					"row" : 0,		//arSeats[ ][1] = jso[1]
					"seat" : 0,			//arSeats[ ][2] = jso[2]
					"etid" : 0,			//arSeats[ ][3] = jso[3]
					"claimed" : 0,		//arSeats[ ][4] = jso[4]
					"evipid" : 0,		//arSeats[ ][5]	= jso[5]										
					"seatID" : 0,		//arSeats[ ][6] = jso[6]
					"seasonTix" : 0     //arSeats[ ][7] = jso[7]
				}]
			};
						
			var seatsThisRow = arSeats.length;
			//Loop through arSeats, which contains all of our seats for this section
			for (var ticket = 0; ticket < seatsThisRow; ticket++) {
				//Split arSeats such that 
					//arSeats[ ][0] = section, 
					//arSeats[ ][1] = row, 
					//arSeats[ ][2] = seat, 
					//arSeats[ ][3] = etid, 
					//arSeats[ ][4] = claimed, 
					//arSeats[ ][5] = evipid, 
					//arSeats[ ][6] = seatID,
					//arSeats[ ][7] = seasonTix

/*				var seatInfo = {
					"section" : "arSeats[ticket][1]",
					"sectionSeats" : {
						"etid" : "arSeats[ticket][0]",
						"row" : "arSeats[ticket][2]",
						"seat" : "arSeats[ticket][3]",
						"claimed" : "arSeats[ticket][4]",					
						"evipid" : "0",
						"seatID" : "arSeats[ticket][6]"
						"seasonTix" : "arSeats[ticket][7]"
					}

				};
*/
				var seatInfo = {
					"section" : arSeats[ticket][0],		//ticket id		
					"row" : arSeats[ticket][1],		//			
					"seat" : arSeats[ticket][2],
					"etid" : arSeats[ticket][3],
					"claimed" : arSeats[ticket][4],					
					"evipid" : arSeats[ticket][5],
					"seatID" : arSeats[ticket][6],
					"seasonTix" : arSeats[ticket][7]
				};
				JSONObject.seats.push(seatInfo);
			}
			
			//Remove the first element with the dummy values
			JSONObject.seats.shift();
			//Remove the last element because it contains undefined values, since our array ended with an @ symbol
			JSONObject.seats.pop();

// for (var i = 0; i < JSONObject.seats.length; i++) {
    // if (JSONObject.seats[i].seasonTix.toLowerCase() == 'yes') {
        // console.log(JSONObject.seats[i].claimed + ' in seat ' + JSONObject.seats[i].seatID + 
            // ' is a season ticket holder. \n');
    // }
// }

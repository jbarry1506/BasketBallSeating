//TicketID~Section~Row~Seat~Claimed~AdvanceID~SeatID

var arTickets = 
'1504~129~E~1~Miles, Dillon~~129RowESeat1@' + 
'1505~129~E~2~Miles, Dillon~~129RowESeat2@' + 
'1506~129~E~3~Miles, Dillon~~129RowESeat3@' + 
'1507~129~E~4~Miles, Dillon~~129RowESeat4@' + 
'1508~129~E~5~0~~129RowESeat5@' + 
'1509~129~E~6~0~~129RowESeat6@' + 
'1510~129~E~7~Gingles, Julie~~129RowESeat7@' + 
'1511~129~E~8~Gingles, Julie~~129RowESeat8@' + 
'1512~129~E~9~Gingles, Julie~~129RowESeat9@' + 
'1513~129~E~10~Gingles, Julie~~129RowESeat10@' + 
'1514~129~F~1~Lindley, David~~129RowFSeat1@' + 
'1515~129~F~2~Lindley, David~~129RowFSeat2@' + 
'1516~129~F~3~Skoner, Thomas~~129RowFSeat3@' + 
'1517~129~F~4~Skoner, Thomas~~129RowFSeat4@' + 
'1518~129~F~5~Laing, Jack~~129RowFSeat5@' + 
'1519~129~F~6~Laing, Jack~~129RowFSeat6@' + 
'1520~129~F~7~Robertson, Jake~~129RowFSeat7@' + 
'1521~129~F~8~Robertson, Jake~~129RowFSeat8@' + 
'1522~129~F~9~McCormick~~129RowFSeat9@' + 
'1523~129~F~10~McCormick~~129RowFSeat10@' + 
'1524~130~K~101~Stivers, Robert~0000411374~130RowKSeat101@' + 
'1525~130~K~102~Stivers, Robert~0000411374~130RowKSeat102@' + 
'1526~130~K~103~Miller, Charlie~0000922553~130RowKSeat103@' + 
'1527~130~K~104~Miller, Charlie~0000922553~130RowKSeat104@' + 
'1528~130~K~105~Floyd, David~0000922610~130RowKSeat105@' + 
'1529~130~K~106~Floyd, David~0000922610~130RowKSeat106@' + 
'1530~130~K~107~Floyd, David~0000922610~130RowKSeat107@' + 
'1531~130~K~108~Floyd, David~0000922610~130RowKSeat108@' + 
'1532~130~K~109~Floyd, David~0000922610~130RowKSeat109@' + 
'1533~130~K~110~Floyd, David~0000922610~130RowKSeat110@' + 
'1534~130~K~111~Driskell, Jane~0000877903~130RowKSeat111@' + 
'1535~130~K~112~Driskell, Jane~0000877903~130RowKSeat112@' + 
'1536~130~K~113~Butler, Denver~0000983789~130RowKSeat113@' + 
'1537~130~K~114~Butler, Denver~0000983789~130RowKSeat114@' + 
'1538~130~K~115~Martin, Charlie~~130RowKSeat115@' + 
'1539~130~K~116~Martin, Charlie~~130RowKSeat116@' + 
'1540~130~L~101~Hynes, Tim~~130RowLSeat101@' + 
'1541~130~L~102~Hynes, Tim~~130RowLSeat102@' + 
'1542~130~L~103~Hynes, Tim~~130RowLSeat103@' + 
'1543~130~L~104~Hynes, Tim~~130RowLSeat104@' + 
'1544~130~L~105~Hynes, Tim~~130RowLSeat105@' + 
'1545~130~L~106~Meeks, Garry~~130RowLSeat106@' + 
'1546~130~L~107~Meeks, Garry~~130RowLSeat107@' + 
'1547~130~L~108~Sturtzel, Barbara~~130RowLSeat108@' + 
'1548~130~L~109~Sturtzel, Barbara~~130RowLSeat109@' + 
'1549~130~L~110~Stone, Patricia~~130RowLSeat110@' + 
'1550~130~L~111~Stone, Patricia~~130RowLSeat111@' + 
'1551~130~L~112~Burkhardt, Joseph~~130RowLSeat112@' + 
'1552~130~L~113~Burkhardt, Joseph~~130RowLSeat113@' + 
'1553~130~L~114~0~~130RowLSeat114@' + 
'1554~130~M~101~Abramson, Jerry~0000163150~130RowMSeat101@' + 
'1555~130~M~102~Abramson, Jerry~0000163150~130RowMSeat102@' + 
'1556~130~M~103~Hellmann, William~~130RowMSeat103@' + 
'1557~130~M~104~Hellmann, William~~130RowMSeat104@' + 
'1558~130~M~105~Turner, Cecil~~130RowMSeat105@' + 
'1559~130~M~106~Turner, Cecil~~130RowMSeat106@' + 
'1560~130~M~107~Callahan, Sandy~~130RowMSeat107@' + 
'1561~130~M~108~Callahan, Sandy~~130RowMSeat108@' + 
'1562~130~M~109~Holman, Thomas~~130RowMSeat109@' + 
'1563~130~M~110~Holman, Thomas~~130RowMSeat110@' + 
'1564~130~M~111~Windchy, William~~130RowMSeat111@' + 
'1565~130~M~112~Windchy, William~~130RowMSeat112@' + 
'1566~130~N~109~Dunn, Kevin~~130RowNSeat109@' + 
'1567~130~N~110~Dunn, Kevin~~130RowNSeat110@' + 
'1568~130~N~111~Hendrix, Bonnie~~130RowNSeat111@' + 
'1569~130~N~112~Hendrix, Bonnie~~130RowNSeat112@' + 
'1570~130~P~113~Knoop, Christopher~~130RowPSeat113@' + 
'1571~130~P~114~Knoop, Christopher~~130RowPSeat114@' + 
'1572~130~Q~103~Waller, Charles~~130RowQSeat103@' + 
'1573~130~Q~104~Waller, Charles~~130RowQSeat104@' + 
'1574~130~Q~113~0~~130RowQSeat113@' + 
'1575~130~Q~114~0~~130RowQSeat114@' + 
'1576~132~E~111~Ornstein, Mark~~132RowESeat111@' + 
'1577~132~E~112~Ornstein, Mark~~132RowESeat112@' + 
'1578~132~E~113~Ornstein, Mark~~132RowESeat113@' + 
'1579~132~E~114~Smith, Sandra~~132RowESeat114@' + 
'1580~132~E~115~Smith, Sandra~~132RowESeat115@' + 
'1581~132~E~116~Smith, Sandra~~132RowESeat116@' + 
'1582~132~E~117~Smith, Sandra~~132RowESeat117@' + 
'1583~132~E~118~Burke, Kelly~~132RowESeat118@' + 
'1584~132~E~119~Burke, Kelly~~132RowESeat119@' + 
'1585~132~E~120~0~~132RowESeat120@' + 
'1586~132~F~111~Burns, Suzanne~~132RowFSeat111@' + 
'1587~132~F~112~Burns, Suzanne~~132RowFSeat112@' + 
'1588~132~F~113~0~~132RowFSeat113@' + 
'1589~132~F~114~0~~132RowFSeat114@' + 
'1590~132~G~111~Moore, Brucie~0000126563~132RowGSeat111@' + 
'1591~132~G~112~Moore, Brucie~0000126563~132RowGSeat112@' + 
'1592~132~G~113~Moore, Brucie~0000126563~132RowGSeat113@' + 
'1593~132~G~114~Moore, Brucie~0000126563~132RowGSeat114@' + 
'1594~204~AA~15~Davis, Brian~~204RowAASeat15@' + 
'1595~204~AA~16~Davis, Brian~~204RowAASeat16@' + 
'1448~214~BB~5~Riggs, Steven~0000922575~214RowBBSeat5@' + 
'1449~214~BB~6~Riggs, Steven~0000922575~214RowBBSeat6@' + 
'1450~214~BB~7~Blackwell, Rick~0000925474~214RowBBSeat7@' + 
'1451~214~BB~8~Blackwell, Rick~0000925474~214RowBBSeat8@' + 
'1452~214~EE~13~Brown, John~0000116185~214RowEESeat13@' + 
'1453~214~EE~14~Brown, John~0000116185~214RowEESeat14@' + 
'1454~214~EE~15~0~~214RowEESeat15@' + 
'1455~214~EE~16~0~~214RowEESeat16@' + 
'1456~214~JJ~19~Riggs, Steven~~214RowJJSeat19@' + 
'1457~214~JJ~20~Riggs, Steven~~214RowJJSeat20@' + 
'1458~214~JJ~21~Riggs, Steven~~214RowJJSeat21@' + 
'1459~214~JJ~22~0~~214RowJJSeat22@' + 
'1460~214~KK~19~0~~214RowKKSeat19@' + 
'1461~214~KK~20~0~~214RowKKSeat20@' + 
'1462~214~KK~21~Yates, David~PO_TEMP1~214RowKKSeat21@' + 
'1463~214~KK~22~Yates, David~PO_TEMP1~214RowKKSeat22@' + 
'1464~214~LL~19~Cecil, Nancy~~214RowLLSeat19@' + 
'1465~214~LL~20~Cecil, Nancy~~214RowLLSeat20@' + 
'1466~214~LL~21~Cecil, Nancy~~214RowLLSeat21@' + 
'1467~214~LL~22~Cecil, Nancy~~214RowLLSeat22@' + 
'1468~214~MM~1~Mills, Terry~0000956474~214RowMMSeat1@' + 
'1469~214~MM~2~Mills, Terry~0000956474~214RowMMSeat2@' + 
'1470~214~MM~3~Jenkins, Joni~0000892113~214RowMMSeat3@' + 
'1471~214~MM~4~Jenkins, Joni~0000892113~214RowMMSeat4@' + 
'1472~214~MM~9~0~~214RowMMSeat9@' + 
'1473~214~MM~10~0~~214RowMMSeat10@' + 
'1474~214~MM~11~0~~214RowMMSeat11@' + 
'1475~214~MM~12~0~~214RowMMSeat12@' + 
'1476~214~MM~13~0~~214RowMMSeat13@' + 
'1477~214~MM~14~0~~214RowMMSeat14@' + 
'1478~214~MM~15~Sallengs, Betty~~214RowMMSeat15@' + 
'1479~214~MM~16~Sallengs, Betty~~214RowMMSeat16@' + 
'1480~214~MM~19~Sallengs, Betty~~214RowMMSeat19@' + 
'1481~214~MM~20~Sallengs, Betty~~214RowMMSeat20@' + 
'1482~214~MM~21~Kramer, Kevin~0000858903~214RowMMSeat21@' + 
'1483~214~MM~22~Kramer, Kevin~0000858903~214RowMMSeat22@' + 
'1484~214~N~5~Semonin~Semonin~214RowNSeat5@' + 
'1485~214~N~6~Semonin~Semonin~214RowNSeat6@' + 
'1486~214~N~7~Semonin~Semonin~214RowNSeat7@' + 
'1487~214~N~8~Semonin~Semonin~214RowNSeat8@' + 
'1488~214~U~5~Clark, Larry~0000423045~214RowUSeat5@' + 
'1489~214~U~6~Clark, Larry~0000423045~214RowUSeat6@' + 
'1490~214~U~7~0~~214RowUSeat7@' + 
'1491~214~U~8~0~~214RowUSeat8@' + 
'1492~214~V~1~0~~214RowVSeat1@' + 
'1493~214~V~2~0~~214RowVSeat2@' + 
'1494~214~V~3~Clark, Perry~0000891220~214RowVSeat3@' + 
'1495~214~V~4~Clark, Perry~0000891220~214RowVSeat4@' + 
'1496~214~V~5~0~~214RowVSeat5@' + 
'1497~214~V~6~0~~214RowVSeat6@' + 
'1498~214~V~7~0~~214RowVSeat7@' + 
'1499~214~V~8~0~~214RowVSeat8@' + 
'1500~214~Z~6~Carney, John~0000953060~214RowZSeat6@' + 
'1501~214~Z~7~Carney, John~0000953060~214RowZSeat7@' + 
'1502~214~Z~8~Embry, C.~0000922607~214RowZSeat8@' + 
'1503~214~Z~9~Embry, C.~0000922607~214RowZSeat9@' + 

'1596~229~CC~1~Tomney, Annell~~229RowCCSeat1@' + 
'1597~229~CC~2~Tomney, Annell~~229RowCCSeat2@' + 
'1598~229~CC~3~Tomney, Annell~~229RowCCSeat3@' + 
'1599~229~CC~4~Tomney, Annell~~229RowCCSeat4@' + 
'1600~229~CC~5~Heitzman, John~~229RowCCSeat5@' + 
'1601~229~CC~6~Heitzman, John~~229RowCCSeat6@' + 
'1602~229~CC~7~Heitzman, John~~229RowCCSeat7@' + 
'1603~229~CC~8~Heitzman, John~~229RowCCSeat8@' + 
'1604~229~CC~9~0~~229RowCCSeat9@' + 
'1605~229~CC~10~0~~229RowCCSeat10@' + 
'1606~229~DD~1~0~~229RowDDSeat1@' + 
'1607~229~DD~2~0~~229RowDDSeat2@' + 
'1608~230~T~101~Shircliff, Jeanne~~230RowTSeat101@' + 
'1609~230~T~102~Shircliff, Jeanne~~230RowTSeat102@' + 
'1610~230~T~103~Shircliff, William~~230RowTSeat103@' + 
'1611~230~T~104~Shircliff, William~~230RowTSeat104@' + 
'1612~230~T~105~Thompson, Jay~~230RowTSeat105@' + 
'1613~230~T~106~Thompson, Jay~~230RowTSeat106@' + 
'1614~230~T~107~Craver, Tony~~230RowTSeat107@' + 
'1615~230~T~108~Craver, Tony~~230RowTSeat108@' + 
'1616~230~U~101~Elbert, Norbert~~230RowUSeat101@' + 
'1617~230~U~102~Elbert, Norbert~~230RowUSeat102@' + 
'1618~230~U~103~Mathis, Tony~~230RowUSeat103@' + 
'1619~230~U~104~Mathis, Tony~~230RowUSeat104@' + 
'1620~230~U~105~Kugele, Carolyn~~230RowUSeat105@' + 
'1621~230~U~106~Kugele, Carolyn~~230RowUSeat106@' + 
'1622~230~U~107~0~~230RowUSeat107@' + 
'1623~230~U~108~0~~230RowUSeat108@' + 
'1624~230~V~101~Poe, David~~230RowVSeat101@' + 
'1625~230~V~102~Poe, David~~230RowVSeat102@' + 
'1626~230~V~103~Poe, Virginia~~230RowVSeat103@' + 
'1627~230~V~104~Poe, Virginia~~230RowVSeat104@' + 
'1628~230~V~105~Jones, Herff~~230RowVSeat105@' + 
'1629~230~V~106~Jones, Herff~~230RowVSeat106@' + 
'1630~230~V~107~0~~230RowVSeat107@' + 
'1631~230~V~108~0~~230RowVSeat108@' + 
'1632~230~W~101~0~~230RowWSeat101@' + 
'1633~230~W~102~0~~230RowWSeat102@' + 
'1634~230~W~103~0~~230RowWSeat103@' + 
'1635~230~W~104~0~~230RowWSeat104@' + 
'1636~230~W~105~0~~230RowWSeat105@' + 
'1637~230~W~106~0~~230RowWSeat106@' + 
'1638~230~W~107~0~~230RowWSeat107@' +
'1640~231~AA~1~0~~231RowAASeat1@' + 
'1641~231~AA~2~0~~231RowAASeat2@' + 
'1642~231~AA~3~0~~231RowAASeat3@' + 
'1643~231~AA~4~0~~231RowAASeat4@' + 
'1644~231~U~15~0~~231RowUSeat15@' + 
'1645~231~U~16~0~~231RowUSeat16@' + 
'1646~231~U~17~0~~231RowUSeat17@' + 
'1647~231~U~18~0~~231RowUSeat18@' + 
'1648~231~Y~1~0~~231RowYSeat1@' + 
'1649~231~Y~2~0~~231RowYSeat2@' + 
'1650~231~Y~3~0~~231RowYSeat3@' + 
'1651~231~Y~4~0~~231RowYSeat4@' + 
'1652~231~Y~5~0~~231RowYSeat5@' + 
'1653~231~Y~6~0~~231RowYSeat6@' + 
'1654~231~Z~1~0~~231RowZSeat1@' + 
'1655~231~Z~2~0~~231RowZSeat2@' + 
'1656~231~Z~3~0~~231RowZSeat3@' + 
'1657~231~Z~4~0~~231RowZSeat4@' + 
'1658~231~Z~5~0~~231RowZSeat5@' + 
'1659~231~Z~6~0~~231RowZSeat6@' + 
'1660~232~DD~105~Mullins, Nick~~232RowDDSeat105@' + 
'1661~232~DD~106~Mullins, Nick~~232RowDDSeat106@' + 
'1662~232~DD~107~Mullins, Nick~~232RowDDSeat107@' + 
'1663~232~DD~108~Mullins, Nick~~232RowDDSeat108@' + 
'1664~232~DD~109~Thomas, Joseph~~232RowDDSeat109@' + 
'1665~232~DD~110~Thomas, Joseph~~232RowDDSeat110@' + 
'1666~232~DD~111~Thomas, Joseph~~232RowDDSeat111@' + 
'1667~232~DD~112~Thomas, Joseph~~232RowDDSeat112@' + 
'1668~232~DD~113~0~~232RowDDSeat113@' + 
'1669~232~DD~114~0~~232RowDDSeat114@' + 
'1670~232~EE~103~Harper, Danny~~232RowEESeat103@' + 
'1671~232~EE~104~Harper, Danny~~232RowEESeat104@' + 
'1672~232~EE~105~Harper, Danny~~232RowEESeat105@' + 
'1673~232~EE~106~Harper, Danny~~232RowEESeat106@' + 
'1674~232~EE~107~Karner, Matt~~232RowEESeat107@' + 
'1675~232~EE~108~Karner, Matt~~232RowEESeat108@' + 
'1676~232~EE~109~Karner, Matt~~232RowEESeat109@' + 
'1677~232~EE~110~Karner, Matt~~232RowEESeat110@' + 
'1678~232~EE~111~Cardinal Host~~232RowEESeat111@' + 
'1679~232~EE~112~Cardinal Host~~232RowEESeat112@' + 
'1680~232~FF~103~0~~232RowFFSeat103@' + 
'1681~232~FF~104~0~~232RowFFSeat104@' + 
'1682~232~FF~105~0~~232RowFFSeat105@' + 
'1683~232~FF~106~0~~232RowFFSeat106@' + 
'1684~232~FF~107~0~~232RowFFSeat107@' + 
'1685~232~FF~108~Novesl, Aleque~~232RowFFSeat108@' + 
'1686~232~FF~109~Cardinal Host~~232RowFFSeat109@' + 
'1687~232~FF~110~Cardinal Host~~232RowFFSeat110@' + 
'1688~232~FF~111~Cardinal Host~~232RowFFSeat111@' + 
'1689~232~FF~112~Cardinal Host~~232RowFFSeat112@' + 
'1690~232~GG~103~UofL Cares Campaign~~232RowGGSeat103@' + 
'1691~232~GG~104~UofL Cares Campaign~~232RowGGSeat104@' + 
'1692~232~GG~105~UofL Cares Campaign~~232RowGGSeat105@' + 
'1693~232~GG~106~UofL Cares Campaign~~232RowGGSeat106@' + 
'1694~232~GG~107~UofL Cares Campaign~~232RowGGSeat107@' + 
'1695~232~GG~108~UofL Cares Campaign~~232RowGGSeat108@' + 
'1696~232~GG~109~MacGeorge, Janice~~232RowGGSeat109@' + 
'1697~232~GG~110~MacGeorge, Janice~~232RowGGSeat110@' + 
'1698~232~GG~111~MacGeorge, Janice~~232RowGGSeat111@' + 
'1699~232~GG~112~MacGeorge, Janice~~232RowGGSeat112@' + 
'1384~302~J~105~Stivers, Ellie~~302RowJSeat105@' + 
'1385~302~J~106~Stivers, Ellie~~302RowJSeat106@' + 
'1386~302~J~107~Kakar, Sham~~302RowJSeat107@' + 
'1387~302~J~108~Kakar, Sham~~302RowJSeat108@' + 
'1388~302~J~109~Kakar, Sham~~302RowJSeat109@' + 
'1389~302~J~110~Kakar, Sham~~302RowJSeat110@' + 
'1390~308~A~101~McConnell, Mitch ~0000105602~308RowASeat100@' + //this seat is listed as 100?  Changed to make seats show properly
'1391~308~A~102~McConnell, Mitch ~0000105602~308RowASeat101@' + //this seat is listed as 101
'1392~308~D~101~McConnell, Mitch ~0000105602~308RowDSeat101@' + 
'1393~308~D~102~McConnell, Mitch ~0000105602~308RowDSeat102@' + 
'1394~308~E~101~McConnell, Mitch ~0000105602~308RowESeat101@' + 
'1395~308~E~102~McConnell, Mitch ~0000105602~308RowESeat102@' + 
'1396~308~E~103~McConnell, Mitch ~0000105602~308RowESeat103@' + 
'1397~308~E~104~McConnell, Mitch ~0000105602~308RowESeat104@' + 
'1398~308~F~101~McConnell, Mitch ~0000105602~308RowFSeat101@' + 
'1399~308~F~102~McConnell, Mitch ~0000105602~308RowFSeat102@' + 
'1400~308~F~103~McConnell, Mitch ~0000105602~308RowFSeat103@' + 
'1401~308~F~104~McConnell, Mitch ~0000105602~308RowFSeat104@' + 
'1402~316~M~105~Dennison, Ken~~316RowMSeat105@' + 
'1403~316~M~106~Dennison, Ken~~316RowMSeat106@' + 
'1404~316~M~107~Hall, Jennifer~~316RowMSeat107@' + 
'1405~316~M~108~Hall, Jennifer~~316RowMSeat108@' + 
'1406~316~M~109~Kesterson, Patricia~~316RowMSeat109@' + 
'1407~316~M~110~Kesterson, Patricia~~316RowMSeat110@' + 
'1408~316~M~111~Gainous, Sherry~~316RowMSeat111@' + 
'1409~316~M~112~Gainous, Sherry~~316RowMSeat112@' + 
'1410~316~M~113~Steele, Brett~~316RowMSeat113@' + 
'1411~316~M~114~Steele, Brett~~316RowMSeat114@' + 
'1412~317~J~1~Conway, Jack~0000925801~317RowJSeat1@' + 
'1413~317~J~2~Conway, Jack~0000925801~317RowJSeat2@' + 
'1414~317~J~3~Nalley, Karen~~317RowJSeat3@' + 
'1415~317~J~4~Nalley, Karen~~317RowJSeat4@' + 
'1416~317~K~1~Dean, Bonnie~~317RowKSeat1@' + 
'1417~317~K~2~Dean, Bonnie~~317RowKSeat2@' + 
'1418~317~K~3~Thornberry, Bridgett~~317RowKSeat3@' + 
'1419~317~K~4~Thornberry, Bridgett~~317RowKSeat4@' + 
'1420~317~K~5~Gilliland, Rhonda~~317RowKSeat5@' + 
'1421~317~K~6~Gilliland, Rhonda~~317RowKSeat6@' + 
'1422~317~K~7~Logsdon, Anthony~~317RowKSeat7@' + 
'1423~317~K~8~Logsdon, Anthony~~317RowKSeat8@' +
'1424~317~K~9~Cotton, Stephen~~317RowKSeat9@' + 
'1425~317~K~10~Cotton, Stephen~~317RowKSeat10@' + 
'1426~317~K~11~Harper, Sean~~317RowKSeat11@' + 
'1427~317~K~12~Harper, Sean~~317RowKSeat12@' + 
'1428~317~K~13~Riede, Jill~~317RowKSeat13@' + 
'1429~317~K~14~Riede, Jill~~317RowKSeat14@' + 
'1430~317~K~15~Peavey, Meg~~317RowKSeat15@' + 
'1431~317~K~16~Peavey, Meg~~317RowKSeat16@' + 
'1432~317~L~1~Williams, Patti~~317RowLSeat1@' + 
'1433~317~L~2~Williams, Patti~~317RowLSeat2@' + 
'1434~317~L~3~Stith, Erika~~317RowLSeat3@' + 
'1435~317~L~4~Stith, Erika~~317RowLSeat4@' + 
'1436~317~L~5~Hora, Chandler~~317RowLSeat5@' + 
'1437~317~L~6~Hora, Chandler~~317RowLSeat6@' + 
'1438~317~L~7~Fryer, Jackie~~317RowLSeat7@' + 
'1439~317~L~8~Fryer, Jackie~~317RowLSeat8@' + 
'1440~317~L~9~Norton, Carol~~317RowLSeat9@' + 
'1441~317~L~10~Norton, Carol~~317RowLSeat10@' + 
'1442~317~L~11~Taylor, LeAnn~~317RowLSeat11@' + 
'1443~317~L~12~Taylor, LeAnn~~317RowLSeat12@' + 
'1444~317~L~13~Reid, Amy~~317RowLSeat13@' + 
'1445~317~L~14~Reid, Amy~~317RowLSeat14@' + 
'1446~317~L~15~Brzezinski, Vickie~~317RowLSeat15@' + 
'1447~317~L~16~Brzezinski, Vickie~~317RowLSeat16@' + 

'1700~L4~C~117~LaJoie, Scott~~L4RowCSeat117@' + 
'1701~L4~C~118~LaJoie, Scott~~L4RowCSeat118@' + 
'1702~L4~C~119~Mills, Rose~~L4RowCSeat119@' + 
'1703~L4~C~120~Mills, Rose~~L4RowCSeat120@' + 
'1704~L4~D~105~Stirling, David~~L4RowDSeat105@' + 
'1705~L4~D~106~Stirling, David~~L4RowDSeat106@' + 
'1706~L4~D~107~Myers, Steven~~L4RowDSeat107@' + 
'1707~L4~D~108~Myers, Steven~~L4RowDSeat108@' + 
'1708~L4~D~109~Jortani, Saeed~~L4RowDSeat109@' + 
'1709~L4~D~110~Jortani, Saeed~~L4RowDSeat110@' +
'1711~L4~D~120~Arnold, Forest~~L4RowDSeat120@' + 
'1712~L4~D~121~Simmons, Tom~~L4RowDSeat121@' + 
'1713~L4~D~122~Simmons, Tom~~L4RowDSeat122@' + 
'1714~L4~D~123~Barker, Robert~~L4RowDSeat123@' +
'1716~L4~F~106~Simpson, David~~L4RowFSeat106@' + 
'1717~L4~F~107~Simpson, David~~L4RowFSeat107@' + 
'1718~L4~F~108~Brown, David~~L4RowFSeat108@' + 
'1719~L4~F~109~Brown, David~~L4RowFSeat109@' + 
'1720~L4~F~110~Finnegan, Renee~~L4RowFSeat110@' + 
'1721~L4~F~111~Finnegan, Renee~~L4RowFSeat111@' + 
'1722~L4~G~112~Atlas, LouAnn~~L4RowGSeat112@' + 
'1723~L4~G~113~Atlas, LouAnn~~L4RowGSeat113@' + 
'1724~L4~G~114~Deutsch, Burt~~L4RowGSeat114@' + 
'1725~L4~G~115~Deutsch, Burt~~L4RowGSeat115@' + 
'1726~L6~A~121~Reinhardt, Dana~~L6RowASeat121@' +
'1728~L6~A~123~McCormick, Dennis~~L6RowASeat123@' + 
'1729~L6~A~124~McCormick, Dennis~~L6RowASeat124@' + 
'1730~L8~B~107~Laemmle, Phil~~L8RowBSeat107@' + 
'1731~L8~B~108~Laemmle, Phil~~L8RowBSeat108@' + 
'1732~L8~B~109~porter, Stephen ~~L8RowBSeat109@' + 
'1733~L8~B~110~porter, Stephen ~~L8RowBSeat110@' + 
'1734~L8~B~111~Dearen, Doug~~L8RowBSeat111@' + 
'1735~L8~B~112~Dearen, Doug~~L8RowBSeat112@' + 
'1736~L8~C~113~Higgins, James~~L8RowCSeat113@' + 
'1737~L8~C~114~Higgins, James~~L8RowCSeat114@' + 
'1738~L8~C~115~Renn, Patrick~~L8RowCSeat115@' + 
'1739~L8~C~116~Renn, Patrick~~L8RowCSeat116@' + 
'1740~L8~C~117~Horlander, Dave~~L8RowCSeat117@' + 
'1741~L8~C~118~Horlander, Dave~~L8RowCSeat118@' + 
'1742~L8~E~101~Ford, George~~L8RowESeat101@' + 
'1743~L8~E~102~Ford, George~~L8RowESeat102@' + 
'1744~L8~E~103~Montgomery, Wally~~L8RowESeat103@' + 
'1745~L8~E~104~Montgomery, Wally~~L8RowESeat104@' + 
'1746~L8~E~105~Montgomery, Wally~~L8RowESeat105@' + 
'1747~L8~E~106~Montgomery, Wally~~L8RowESeat106@' + 
'1748~L8~E~119~Montgomery, Wally~~L8RowESeat119@' + 
'1749~L8~E~120~Montgomery, Wally~~L8RowESeat120@' + 
'1750~L8~E~121~Montgomery, Wally~~L8RowESeat121@' + 
'1751~L8~E~122~Montgomery, Wally~~L8RowESeat122@' + 
'1752~L8~E~123~McSweeny, Matt~~L8RowESeat123@' + 
'1753~L8~E~124~McSweeny, Matt~~L8RowESeat124@' + 
'1754~503~A~1~Kemelgor, Bruce~~503RowASeat1@' + 
'1755~503~A~2~Kemelgor, Bruce~~503RowASeat2@' + 
'1756~503~A~3~Kemelgor, Bruce~~503RowASeat3@' + 
'1757~503~A~4~Moore, John~~503RowASeat4@' + 
'1758~503~A~5~Moore, John~~503RowASeat5@' + 
'1759~503~A~6~Beshear, Andy~~503RowASeat6@' + 
'1760~503~A~7~Beshear, Andy~~503RowASeat7@' + 
'1761~503~A~8~Bond, Larry~~503RowASeat8@' + 
'1762~503~A~9~Bond, Larry~~503RowASeat9@' + 
'1763~503~A~10~Wood, Phoebe~~503RowASeat10@' + 
'1764~503~A~11~Wood, Phoebe~~503RowASeat11@' + 
'1765~503~A~12~0~~503RowASeat12@' + 
'1766~503~A~13~0~~503RowASeat13@' + 
'1767~503~A~14~0~~503RowASeat14@' + 
'1768~503~B~1~Feldhoff, Pamela~~503RowBSeat1@' + 
'1769~503~B~2~Feldhoff, Pamela~~503RowBSeat2@' + 
'1770~503~B~3~Warren, Martyna~~503RowBSeat3@' + 
'1771~503~B~4~Warren, Martyna~~503RowBSeat4@' + 
'1772~503~B~5~Jenkins, Susan~~503RowBSeat5@' + 
'1773~503~B~6~Jenkins, Susan~~503RowBSeat6@' + 
'1774~503~B~7~Casey, Valerie~~503RowBSeat7@' + 
'1775~503~B~8~Casey, Valerie~~503RowBSeat8@' + 
'1776~503~B~9~Hurley, Skip~~503RowBSeat9@' + 
'1777~503~B~10~Hurley, Skip~~503RowBSeat10@' + 
'1778~503~B~11~McKinney, Laura~~503RowBSeat11@' + 
'1779~503~B~12~McKinney, Laura~~503RowBSeat12@' + 
'1780~503~B~13~Abrams, Marie~~503RowBSeat13@' + 
'1781~503~B~14~Abrams, Marie~~503RowBSeat14@' + 
'1782~503~SRO~1~Lewis-Klein, Angela~~503RowSROSeat1@' + 
'1783~503~SRO~2~Lewis-Klein, Angela~~503RowSROSeat2@' + 
'1784~503~SRO~3~Steffen, Joe~~503RowSROSeat3@' + 
'1785~503~SRO~4~Steffen, Joe~~503RowSROSeat4@' + 
'1786~503~SRO~5~Coe, Randy~~503RowSROSeat5@' + 
'1787~503~SRO~6~Coe, Randy~~503RowSROSeat6@' + 
'1788~503~SRO~7~Benz, Larry~~503RowSROSeat7@' + 
'1789~503~SRO~8~Benz, Larry~~503RowSROSeat8@' + 
'1790~503~SRO~9~Cosby, Kevin~~503RowSROSeat9@' + 
'1791~503~SRO~10~Cosby, Kevin~~503RowSROSeat10@' + 
'1792~503~SRO~11~Chlebowy, Diane~~503RowSROSeat11@' + 
'1793~503~SRO~12~Chlebowy, Diane~~503RowSROSeat12@' + 
'1794~503~SRO~13~Thompson, Rusty~~503RowSROSeat13@' + 
'1795~503~SRO~14~Thompson, Rusty~~503RowSROSeat14@' + 
'1796~503~SRO~15~Hynes, Tim~~503RowSROSeat15@' + 
'1797~503~SRO~16~0~~503RowSROSeat16@' + 
'1798~503~SRO~17~0~~503RowSROSeat17@' + 
'1799~503~SRO~18~0~~503RowSROSeat18@' + 
'1800~503~SRO~19~0~~503RowSROSeat19@' + 
'1801~503~SRO~20~0~~503RowSROSeat20@' + 
'1802~S21~A~1~Edwards, Bob~~S21RowASeat1@' + 
'1803~S21~A~2~Edwards, Bob~~S21RowASeat2@' + 
'1804~S21~A~3~Ferre, John~~S21RowASeat3@' + 
'1805~S21~A~4~Ferre, John~~S21RowASeat4@' + 
'1806~S21~A~7~George, Salem~~S21RowASeat7@' + 
'1807~S21~A~8~George, Salem~~S21RowASeat8@' + 
'1808~S21~B~1~Sarin, Lalit~~S21RowBSeat1@' + 
'1809~S21~B~2~Sarin, Lalit~~S21RowBSeat2@' + 
'1810~S21~B~3~Oxley, Debby~~S21RowBSeat3@' + 
'1811~S21~B~4~Oxley, Debby~~S21RowBSeat4@' + 
'1812~S21~B~7~Watkins, Jr., Lowry~~S21RowBSeat7@' +
'1813~S21~B~8~Watkins, Jr., Lowry~~S21RowBSeat8@' + 
'1814~S21~C~1~Whitaker, Robert~~S21RowCSeat1@' + 
'1815~S21~C~2~Whitaker, Robert~~S21RowCSeat2@' + 
'1816~S21~C~3~Whitaker, Robert~~S21RowCSeat3@' + 
'1817~S21~C~4~Whitaker, Robert~~S21RowCSeat4@' + 
'1818~S21~C~7~0~~S21RowCSeat7@' + 
'1819~S21~C~8~0~~S21RowCSeat8@' + 
'1820~S21~SRO~1~0~~S21RowSROSeat1@' + 
'1821~S21~SRO~2~0~~S21RowSROSeat2@' + 
'1822~S21~SRO~3~0~~S21RowSROSeat3@' + 
'1823~S21~SRO~4~0~~S21RowSROSeat4@' + 
'1824~S21~SRO~5~0~~S21RowSROSeat5@' + 
'1825~S21~SRO~6~0~~S21RowSROSeat6@' + 
'~~~~0~~RowSeat@'

			//After the split, each element in arSeats will contain seat info in the form of 
				//ticketID, 
				//Section, 
				//Row, 
				//Seat, 
				//Claimed, 
				//ETID, 
				//SeatID

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
					"etid" : 0,			//arSeats[ ][0] = jso[0]
					"section" : 0,		//arSeats[ ][1] = jso[1]
					"row" : 0,			//arSeats[ ][2] = jso[2]
					"seat" : 0,			//arSeats[ ][3] = jso[3]
					"claimed" : 0,		//arSeats[ ][4] = jso[4]
					"evipid" : 0,		//arSeats[ ][5]	= jso[5]										
					"seatID" : 0		//arSeats[ ][6] = jso[6]
				}]
			};
						
			var seatsThisRow = arSeats.length;
			//Loop through arSeats, which contains all of our seats for this section
			for (var ticket = 0; ticket < seatsThisRow; ticket++) {
				//Split arSeats such that 
					//arSeats[ ][0] = etid, 
					//arSeats[ ][1] = section, 
					//arSeats[ ][2] = row, 
					//arSeats[ ][3] = seat, 
					//arSeats[ ][4] = claimed, 
					//arSeats[ ][5] = evipid, 
					//arSeats[ ][6] = seatID

/*				var seatInfo = {
					"section" : "arSeats[ticket][1]",
					"sectionSeats" : {
						"etid" : "arSeats[ticket][0]",
						"row" : "arSeats[ticket][2]",
						"seat" : "arSeats[ticket][3]",
						"claimed" : "arSeats[ticket][4]",					
						"evipid" : "0",
						"seatID" : "arSeats[ticket][6]"
					}

				};
*/
				var seatInfo = {
					"etid" : arSeats[ticket][0],		//ticket id		
					"section" : arSeats[ticket][1],		//			
					"row" : arSeats[ticket][2],
					"seat" : arSeats[ticket][3],
					"claimed" : arSeats[ticket][4],					
					"evipid" : 0,
					"seatID" : arSeats[ticket][6]
				};
				JSONObject.seats.push(seatInfo);
			}
			
			//Remove the first element with the dummy values
			JSONObject.seats.shift();
			//Remove the last element because it contains undefined values, since our array ended with an @ symbol
			JSONObject.seats.pop();


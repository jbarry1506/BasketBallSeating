//arSection[ ][0]:  section number
//arSection[ ][1]:  number of seats total
//arSection[ ][2]:  number of seats available
//arSection[ ][3][ ][0]:  section row
//arSection[ ][3][ ][1]:  row seats
//arSection[ ][3][ ][2]:  total row seats  //if seat numbers are greater than 100, then this number must have 100 added to it
//arSection[ ][4]:  section image 
//arSection[ ][5]:  section x-coordinate
//arSection[ ][6]:  section y-coordinate
//arSection[ ][7]:  section x-dimension
//arSection[ ][8]:  section y-dimension

var arSection = 
[
// [101,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_101.jpg)',690,315,30,30],  //101
// [102,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_102.jpg)',681,332,30,30],  //102
// [103,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_103.jpg)',670,350,30,30],  //103
// [104,12,12,[['Q',[1,2,3,4,5,6],14],['R',[1,2,3,4,5,6],15]],'url(../arrayObjectsFootball/resources/VR_Section_104.jpg)',630,370,88,101],  //104
// [105,16,16,[['D',[14,15,16,17],17],['P',[9,10,11,12,13,14,15,16],16],['Q',[1,2,3,4],16]],'url(../arrayObjectsFootball/resources/VR_Section_105.jpg)',620,390,68,196],  //105
// [106,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_106.jpg)',620,410,30,30],  //106
// [107,16,16,[['C',[1,2,3,4,5,6,7,8],17],['P',[1,2,3,4,5,6,7,8],16]],'url(../arrayObjectsFootball/resources/VR_Section_107.jpg)',570,430,75,195],  //107
// [108,16,16,[['L',[1,2,3,4,5,6,7,8],8],['M',[4,5,6,7,8,9],9],['S',[1,2],16]],'url(../arrayObjectsFootball/resources/VR_Section_108.jpg)',558,448,52,109],  //108
// [109,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_109.jpg)',543,462,30,30],  //109
// [110,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_110.jpg)',515,478,30,30],  //110
// [111,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_111.jpg)',485,493,30,30],  //111
// [112,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_112.jpg)',452,508,30,30],  //112
// 
// [116,4,4,[['N',[4,5,6,7],16]],'url(../arrayObjectsFootball/resources/VR_Section_116.jpg)',420,506,30,30],  //116
// [117,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_117.jpg)',392,490,30,30],  //117
// [118,14,14,[['R',[1,2,3,4,5,6,7,8,9,10,11,12,13,14],14]],'url(../arrayObjectsFootball/resources/VR_Section_118.jpg)',364,470,30,30],  //118
// [119,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_119.jpg)',340,453,30,30],  //119
// [120,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_120.jpg)',318,430,30,30],  //120
// [121,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_121.jpg)',308,410,30,30],  //121
// 
// [125,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_125.jpg)',253,382,132,50],  //125
// [126,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_126.jpg)',270,360,132,50],  //126
// [127,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_127.jpg)',290,338,132,50],  //127
// [128,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_128.jpg)',312,318,132,50],  //128
[129,20,20,[['E',[1,2,3,4,5,6,7,8,9,10],10],['F',[1,2,3,4,5,6,7,8,9,10],10]],'url(../arrayObjectsFootball/resources/VR_Section_129.jpg)',385,302,30,30],  //129
[130,52,52,[['K',[101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],16],['L',[101,102,103,104,105,106,107,108,109,110,111,112,113,114],14],['M',[101,102,103,104,105,106,107,108,109,110,111,112],12],['N',[109,110,111,112],12],['P',[113,114],14],['Q',[103,104,113,114],14]],'url(../arrayObjectsFootball/resources/VR_Section_130.jpg)',410,286,30,30],  //130
// [131,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_131.jpg)',378,268,132,50],  //131
[132,18,18,[['E',[111,112,113,114,115,116,117,118,119,120],20],['F',[111,112,113,114],14],['G',[111,112,113,114],14]],'url(../arrayObjectsFootball/resources/VR_Section_132.jpg)',450,255,30,30],  //132
// [133,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_133.jpg)',424,242,132,50],  //133
// [134,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_134.jpg)',448,230,132,50],  //134
// [135,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_135.jpg)',472,218,132,50],  //135
// [136,'0','0','0','url(../arrayObjectsFootball/resources/VR_Section_136.jpg)',496,210,132,50],  //136

// [201,'0','0','0','url(../arrayObjects/resources/section201.png)',750,320,30,30],  //201
// [202,'0','0','0','url(../arrayObjects/resources/section202.png)',745,338,30,30],  //202
// [203,'0','0','0','url(../arrayObjects/resources/section203.png)',730,360,30,30],  //203
[204,2,2,[['AA',[15,16],16]],'url(../arrayObjectsFootball/resources/VR_Section_204.jpg)',710,383,30,30],  //204
// [205,'0','0','0','url(../arrayObjects/resources/section204.png)',688,405,30,30],  //205
// [206,'0','0','0','url(../arrayObjects/resources/section204.png)',668,428,30,30],  //206
// [207,'0','0','0','url(../arrayObjects/resources/section204.png)',642,450,30,30],  //207
// [208,'0','0','0','url(../arrayObjects/resources/section204.png)',615,470,30,30],  //208
// [209,30,30,[['C',[5,6,7,8,9,10,18,19,20,21,22,23],24],['D',[5,6,7,8,9,10,19,20,21,22,23,24],25],['E',[5,6,7,8,9,10],26]],'url(../arrayObjects/resources/section209.png)',585,488,30,30],  //209
// [210,30,30,[['C',[5,6,7,8,9,10,19,20,21,22,23,24],24],['D',[5,6,7,8,9,10,22,23,24,25],25],['E',[5,6,7,8,9,10,23,24,25,26],26]],'url(../arrayObjects/resources/section210.png)',552,505,30,30],  //210
// [211,30,30,[['A',[1,2,3,4,5,6],22],['C',[1,2,3,4],24],['D',[1,2,3,4],25],['E',[1,2,3,4],26],['G',[13,14,15,16,17,18],28],['H',[13,14,15,16,17,18],28]],'url(../arrayObjects/resources/section211.png)',517,522,30,30],  //211
// [212,30,30,[['C',[1,2,3,4,5,6],23],['D',[1,2,3,4,5,6],24],['E',[1,2,3,4,5,6],24],['F',[1,2,3,4,5,6],25],['G',[1,2,3,4,5,6],25]],'url(../arrayObjects/resources/section212.png)',487,540,30,30],  //212
// [213,'0','0','0','url(../arrayObjects/resources/section204.png)',457,550,30,30],  //213
[214,56,56,[['BB',[5,6,7,8],8],['EE',[13,14,15,16],16],['JJ',[19,20,21,22],22],['KK',[19,20,21,22],22],['LL',[19,20,21,22],22],['MM',[1,2,3,4,9,10,11,12,13,14,15,16,19,20,21,22],22],['N',[5,6,7,8],8],['U',[5,6,7,8],8],['V',[1,2,3,4,5,6,7,8],8],['Z',[6,7,8,9],9]],'url(../arrayObjectsFootball/resources/VR_Section_214.jpg)',425,555,30,30],  //214
// [215,'0','0','0','url(../arrayObjects/resources/section204.png)',392,550,30,30],  //215
// [216,'0','0','0','url(../arrayObjects/resources/section204.png)',362,538,30,30],  //216
// [217,'0','0','0','url(../arrayObjects/resources/section217.png)',335,520,30,30],  //217
// [218,'0','0','0','url(../arrayObjects/resources/section218.png)',305,495,30,30],  //218
// [219,'0','0','0','url(../arrayObjects/resources/section219.png)',278,472,30,30],  //219
// [220,'0','0','0','url(../arrayObjects/resources/section220.png)',252,450,30,30],  //220
// [221,'0','0','0','url(../arrayObjects/resources/section204.png)',235,428,30,30],  //221
// [222,'0','0','0','url(../arrayObjects/resources/section204.png)',225,405,30,30],  //222
// [223,'0','0','0','url(../arrayObjects/resources/section204.png)',226,382,30,30],  //223
// [224,'0','0','0','url(../arrayObjects/resources/section204.png)',235,358,30,30],  //224
// [225,'0','0','0','url(../arrayObjects/resources/section204.png)',250,340,30,30],  //225
// [226,'0','0','0','url(../arrayObjects/resources/section204.png)',275,322,30,30],  //226
// [227,'0','0','0','url(../arrayObjects/resources/section204.png)',298,300,30,30],  //227
// [228,'0','0','0','url(../arrayObjects/resources/section204.png)',325,280,30,30],  //228
[229,12,12,[['CC',[1,2,3,4,5,6,7,8,9,10],10],['DD',[1,2],2]],'url(../arrayObjectsFootball/resources/VR_Section_229.jpg)',350,265,30,30],  //229
[230,32,32,[['T',[101,102,103,104,105,106,107,108],8],['U',[101,102,103,104,105,106,107,108],8],['V',[101,102,103,104,105,106,107,108],8],['W',[101,102,103,104,105,106,107,108],8]],'url(../arrayObjectsFootball/resources/VR_Section_230.jpg)',375,250,30,30],  //230
[231,20,20,[['AA',[1,2,3,4],4],['U',[15,16,17,18],18],['Y',[1,2,3,4,5,6],6],['Z',[1,2,3,4,5,6],6]],'url(../arrayObjectsFootball/resources/VR_Section_231.jpg)',400,235,30,30],  //231
[232,40,40,[['DD',[105,106,107,108,109,110,111,112,113,114],14],['EE',[103,104,105,106,107,108,109,110,111,112],12],['FF',[103,104,105,106,107,108,109,110,111,112],12],['GG',[103,104,105,106,107,108,109,110,111,112],12]],'url(../arrayObjectsFootball/resources/VR_Section_232.jpg)',425,220,30,30],  //232
// [233,'0','0','0','url(../arrayObjects/resources/section204.png)',450,205,30,30],  //233
// [234,'0','0','0','url(../arrayObjects/resources/section204.png)',475,190,30,30],  //234
// [235,'0','0','0','url(../arrayObjects/resources/section204.png)',502,179,30,30],  //235
// [236,'0','0','0','url(../arrayObjects/resources/section204.png)',526,171,30,30],  //236

// [301,'0','0','0','url(../arrayObjects/resources/section301.png)',226,295,30,30],  //301
[302,6,6,[['J',[105,106,107,108,109,110],10]],'url(../arrayObjectsFootball/resources/VR_Section_302.jpg)',250,280,30,30],  //302
// [303,'0','0','0','url(../arrayObjects/resources/section303.png)',268,265,30,30],  //303
// [304,'0','0','0','url(../arrayObjects/resources/section304.png)',288,250,30,30],  //304
// [305,'0','0','0','url(../arrayObjects/resources/section305.png)',306,237,30,30],  //305
// [306,'0','0','0','url(../arrayObjects/resources/section306.png)',324,224,30,30],  //306
// [307,10,10,[['B',[14,15,16,17,18,19,20,21,22,23],23]],'url(../arrayObjects/resources/section307.png)',340,214,30,30],  //307
[308,12,12,[['A',[101,102],2],['D',[101,102],2],['E',[101,102,103,104],4],['F',[101,102,103,104],4]],'url(../arrayObjectsFootball/resources/VR_Section_308.jpg)',345,210,30,30],  //308
// [309,10,10,[['E',[1,2,3,4,5,6,7,8,9,10],23]],'url(../arrayObjects/resources/section309.png)',371,194,30,30],  //309
// [310,'0','0','0','url(../arrayObjects/resources/section316.png)',980,480,30,30],  //310
// [311,'0','0','0','url(../arrayObjects/resources/section317.png)',980,548,30,30],  //311
// [312,'0','0','0','url(../arrayObjects/resources/section310.png)',388,184,30,30],  //312
// [313,'0','0','0','url(../arrayObjects/resources/section311.png)',407,174,30,30],  //313
// [314,'0','0','0','url(../arrayObjects/resources/section312.png)',427,164,30,30],  //314
// [315,'0','0','0','url(../arrayObjects/resources/section313.png)',447,154,30,30],  //315
[316,10,10,[['M',[105,106,107,108,109,110,111,112,113,114],14]],'url(../arrayObjectsFootball/resources/VR_Section_316.jpg)',467,144,30,30],  //316
[317,36,36,[['J',[1,2,3,4],4],['K',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],16],['L',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],16]],'url(../arrayObjectsFootball/resources/VR_Section_317.jpg)',487,134,30,30],  //317
['L4',26,26,[['C',[117,118,119,120],20],['D',[105,106,107,108,109,110,119,120,121,122,123,124,],24],['F',[106,107,108,109,110,111],11],['G',[112,113,114,115],15]],'url(../arrayObjectsFootball/resources/VR_Section_L4.jpg)',745,392,30,30],
['L6',4,4,[['A',[121,122,123,124],24]],'url(../arrayObjectsFootball/resources/VR_Section_L6.jpg)',695,440,30,30],
['L8',24,24,[['B',[107,108,109,110,111,112],12],['C',[113,114,115,116,117,118],18],['E',[101,102,103,104,105,106,119,120,121,122,123,124],24]],'url(../arrayObjectsFootball/resources/VR_Section_L8.jpg)',628,490,30,30],
['S21',24,24,[['A',[1,2,3,4,7,8],8],['B',[1,2,3,4,7,8],8],['C',[1,2,3,4,7,8],8],['SRO',[1,2,3,4,5,6],6]],'url(../arrayObjects/resources/sectionB52.png)',615,525,60,30],
['503',48,48,[['A',[1,2,3,4,5,6,7,8,9,10,11,12,13,14],14],['B',[1,2,3,4,5,6,7,8,9,10,11,12,13,14],14],['SRO',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],20]],'url(../arrayObjects/resources/sectionB53.png)',265,200,60,30],
]
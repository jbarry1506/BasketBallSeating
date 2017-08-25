//Guests array from filemaker
var arGuests = 
"14JSTEST3EAE3A08-42DB-F64C-B6CF-C5F95F06160D~Jones~Lindsay~4~Certificate Winner-Mailed~~4~~~~@@" +
"14JSTEST0000115042~Watkins~Lowry~3~~REDACTED~3~3~~~@@" +
"14JSTESTE906FD41-8D1A-2242-9A49-3F3AD2485680~Freeman ~Sara~4~Certificate- mailed~~4~~~~@@" +
"14JSTESTD7CC47AE-AEF0-9340-82EB-43A0B04ABB14~Graziose~Sanela~2~sec 115 row t-John Moore~~2~~~~@@" +
"14JSTEST2DF5BD67-CD40-D14C-AEFE-83F5A36A1183~Kelting~Brenda~4~Certificate-mailed~~4~~~~@@" +
"14JSTEST0BF5F85E-7395-2749-B600-3479655CF0C1~McKinley~Cindy~4~Certificate-Mailed~~4~~~~@@" +
"14JSTESTAA16CBBB-17FD-F147-9132-6AF451976094~Meeron~Steven~4~Certificate-Mailed~~4~~~~@@" +
"14JSTEST0000913467~Wood~Phoebe~2~BOT~REDACTED~2~~~~@@" +
"14JSTEST0000423045~Clark~Larry~2~Legislator~REDACTED~2~2~~~@@" +
"14JSTEST0000406277~Atlas~LouAnn~2~Jewish Hospital~REDACTED~2~~~~@@" +
"14JSTEST0000404077~Coe~Randy~2~Kosair~REDACTED~2~~~~@@" +
"14JSTEST0000306086~Steffen~Joe~2~~REDACTED~2~~~~@@" +
"14JSTEST0000150017~Hughes~Robert~2~BOT~REDACTED~2~~~~@@" +
"14JSTEST0000128483~Benson~Bob~2~BOT~REDACTED~2~~~~@@" +
"14JSTEST0000987063~Campbell~Stephen~4~Floor Seats~0~4~~~~@@" +
"14JSTEST2F8653CC-22DA-BB4C-94D2-1E259C489546~Abney~Doug~2~Julep Ball~~2~~~~@@" +
"14JSTESTCA58D6A4-3514-F144-BD7C-B42B58C3406D~Porter~Jack~4~Capital Campaign-mailed~~4~~~~@@" +
"14JSTEST0000139701~Conn~Hank~4~~REDACTED~4~4~~~@@" +
"14JSTESTF72436C7-6C28-6947-9816-06215C88C097~Law School~~4~Capital Campaign~~4~~~~@@" +
"14JSTEST7E4C95EA-C63F-2240-B90B-F529AA11C51E~Endres~Ridge~2~Capital Campaign-Jimmy Ford~~2~~~~@@" +
"14JSTEST0000878469~Barber~Houston~2~Capital Campaign - Edu~REDACTED~2~~2~~@@" +
"14JSTEST0000121956~Buckman~Carol~2~Capital Campaign - Edu~REDACTED~2~~2~~@@" +
"14JSTEST0000123247~Lancaster~Susan~2~Capital Campaign - Edu~REDACTED~2~~2~~@@" +
"14JSTEST0000938999~Mooneyhan~David~2~Capital Campaign - Edu~REDACTED~2~~2~~@@" +
"14JSTEST0000123463~Owens~Faye~2~Capital Campaign - Edu~REDACTED~2~~2~~@@" +
"14JSTEST0000110321~Fugate~Allan~2~Capital Campaign - A&S~REDACTED~2~~~2~@@" +
"14JSTEST0000419152~Gilderbloom~Hans~2~Capital Campaign - A&S~REDACTED~2~~~2~@@" +
"14JSTEST0000111197~Hance~Michael~2~Capital Campaign - A&S~REDACTED~2~~~2~@@" +
"14JSTEST0000906449~Hilleary~Bobbie~2~Capital Campaign - A&S~REDACTED~2~~~2~@@" +
"14JSTEST0000159651~Price~John~2~Capital Campaign - A&S~REDACTED~2~~~2~@@" +
"14JSTEST0000410026~Sims~Stanley~2~Capital Campaign - A&S~5REDACTED~2~~~2~@@" +
"14JSTEST0000947461~Toufar~Helge~2~Capital Campaign - A&S~REDACTED~2~~~2~@@" +
"14JSTEST0000140481~Moore~Richard~2~Capital Campaign - Speed~REDACTED~2~~~~@@" +
"14JSTEST0000129919~Rice~Brent~2~Capital Campaign - Speed~REDACTED~2~~~~@@" +
"14JSTEST0000416243~Tran~Van~4~Capital Campaign - Speed~REDACTED~4~~~~@@" +
"14JSTEST4E9E4801-8CA8-734A-9D30-F0A9C4E85ED6~Fuller~Elizabeth~2~Guest of President~~2~~~~@@" +
"14JSTEST6CF38CF2-8882-8049-916C-4758A2AD7094~Surrey~Nate~2~Military Initiatives~~2~~~~@@" +
"14JSTEST5D30BBDE-42E0-8349-9E44-77E69803903C~Stewart~Beth~4~Certificate-mailed~~4~~~~@@" +
"14JSTEST14F8D183-25DC-1543-B14B-40DFED085558~Graham~Rep. Derrick~2~Gov. Premium-pd~~2~~~~@@" +
"14JSTEST130C3A1B-D48D-5A4F-AE46-EE81514388B9~Lavin~Brian~6~Sec 107 P-Capital Campaign~~6~~~~@@" +
"14JSTEST0522B52C-3A90-0742-B45D-6E6699CB2170~Haney~Nathan~2~Young Alumni~~2~~~~@@" +
"14JSTEST0000110025~Conkling~Becky~2~~REDACTED~2~~~~@@" +
"14JSTEST4506DAFF-A54C-1144-A780-944D297CA9EB~Kaelin~Darryl~2~Military Initiatives~~2~~~~@@" +
"14JSTEST5BF5F71E-69C6-554B-8D98-96E932CEE747~Ackerman~Mark~2~Dr. Salem George Req.~~2~~~~@@" +
"14JSTEST0000876117~Phelps~David~3~~REDACTED~3~3~~~@@" +
"14JSTEST0000318107~Alagia~Clair~2~~REDACTED~2~~~~@@" +
"14JSTESTB565B13A-D71F-1F45-8D20-6C097B76E64D~Gailhaus~Marilyn ~3~REGULAR WILL CALL - BENSON~~3~~~~@@" +
"14JSTESTB51D39B3-E07E-AA41-9954-F6D5D563E420~Brooks~Troy~2~Purchase~~2~~~~@@" +
"14JSTEST04212B72-302D-A445-A72E-E9EE6018A8DF~Brunton~Timothy~2~Purchase - Sen. P Clark~~2~~~~@@" +
"14JSTEST9A4C16EC-910B-114F-AB3D-D99732892813~Cantrell~Elizabeth~4~Young Alumni~~4~~~~@@" +
"14JSTESTA04B6F8B-ECBC-A14F-AC73-AA317ED3135B~Soloman~Dr.~2~Capital Campaign~~2~~~~@@" +
"14JSTESTEF19DAA6-5715-FA4F-9873-F780CD7A0828~Dearing~Bobby~2~Cassin-Capital Campaign~~2~~~~@@" +
"14JSTESTF8094790-E634-1E41-876E-CCEEE13A4AFA~Purvis~Neil~4~Cassin-Capital Campaign~~4~~~~@@" +
"14JSTESTEDEE2A99-800C-544F-94BC-57A6F2AB6B70~Redden~Rick~2~Gov. Premium request~~2~~~~@@" +
"14JSTEST990E7658-D290-2345-A76E-035C1ED49C49~Miles~Dillon~4~~~4~~~~@@" +
"14JSTEST4737197F-BBD5-DD41-AB85-AAAC85535C44~Inman~Gary~6~Capital Campaign~~6~~~~@@" +
"14JSTEST41B04664-1A04-7F43-ACC9-7B215F8886D3~Reed~Michael~2~~~2~~~~@@" +
"14JSTESTBA832374-ACEE-5647-BC5D-5ECD25E282D2~McDaniel~Ryan~4~~~10~~~~@@" +
"14JSTEST6381066D-BDC6-8142-BD90-67D83C790AC5~Sawyer~Jenny and Katherine~2~~~2~~~~@@" +
"14JSTEST6C2C23B3-08B0-E045-9AB3-910FB3695EB1~Dougherty~Debbie~2~~~2~~~~@@" +
"14JSTEST1A2EF390-CBC8-5C41-89DD-7352B9BF0AA0~Smith~Trisha~4~~~4~~~~@@" +
"14JSTEST812F2847-AFE8-8743-ADC4-37FA9295FB60~Meeron~Steven~4~~~4~~~~@@" +
"14JSTEST75FEF714-76DD-B049-BB41-172C1462A329~Henderson~Jimmy~2~~~2~~~~@@" +
"14JSTESTA1146F55-E661-E344-8011-63CFB3468994~Williams~Steve~2~~~2~~~~@@";
//After the split, each element in arSeats will contain guest info
//guestId ~ LastName ~ FirstName ~ RSVP'd ~ InvitedVia ~ Giving ~ guestsPlaced ~ Suite 11 ~ Suite 47 ~ Suite 55 ~ @@

var arRecords = arGuests.split('@@');

// initial guestObject like Ryan's JSON seat object     
var guestObject = {
    "guests" : [{
        "guestId": 0,
        "lName": 0,
        "fName": 0,
        "rsvp": 0,
        "invVia": 0,
        "donation": 0,
        "guestsPlaced": 0,
        "suite11": 0,
        "suite47": 0,
        "suite55": 0
    }]  
};

for(var i = 0; i < arRecords.length; i++){
    //split arRecords such that 
        //arTableRecords[0] = guestId,  // == AdvanceId in arTickets
        //arTableRecords[1] = lName,
        //arTableRecords[2] = fName,
        //arTableRecords[3] = rsvp,
        //arTableRecords[4] = invVia,
        //arTableRecords[5] = donation,
        //arTableRecords[6] = guestsPlaced
        //arTableRecords[7] = suite11
        //arTableRecords[8] = suite47
        //arTableRecords[9] = suite55
    var arTableRecords = arRecords[i].split('~');
    
    var guestInfo = {
        "guestId": arTableRecords[0],
        "lName": arTableRecords[1],
        "fName": arTableRecords[2],
        "rsvp": arTableRecords[3],
        "invVia": arTableRecords[4],
        "donation": arTableRecords[5],
        "guestsPlaced": arTableRecords[6],
        "suite11": arTableRecords[7],
        "suite47": arTableRecords[8],
        "suite55": arTableRecords[9]
    };
    guestObject.guests.push(guestInfo); 
}

//Remove the first element with the dummy values
guestObject.guests.shift();
//Remove the last element because it contains undefined values, since our array ended with an @ symbol
guestObject.guests.pop();
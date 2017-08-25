			//Guests array from filemaker

var arGuests = 
"14FB01endscholar1~Evans~Kayla ~2~Dr. Milton W. and Ruth I. Roggenkamp Scholarship Fund~~0@" +
"14FB01endscholar6~Kah~Cherno~2~Joseph and Joan McSweeny Diversity Endowed Fellowship in the Natural Sciences - state~~0@" +
"14FB01endscholar21~Temple~Kayla~2~Curtin Family Fund~~0@" +
"14FB01endscholar22~Raggard~Matthew~2~Taylor Leadership Prize~~0@" +
"14FB01endscholar25~Ball~Joachim~2~Viswanathan Mahesh Endowed MBA Scholarship Fund~~0@" +
"14FB01endscholar27~Brown~Aaron~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar28~Veigel~Cory~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar32~Thompson~Taryn~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar45~Clark~Jacob~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar46~Bell~Shelby~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar52~Ivey~Elizabeth~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar57~Jenkins~Julia~2~Dr. Edward P. Smith and Mary Klein Smith Grants~~0@" +
"14FB01endscholar62~Hiner~Dylan~2~Doris J. Bouse Trautwein Scholarship Endowment Fund~~0@" +
"14FB01endscholar65~Spolski~Don~2~Franzman Family Fund~~0@" +
"14FB01endscholar66~Stiles~Stephanie~2~Franzman Family Fund~~0@" +
"14FB01endscholar67~Beck~Deirdra~2~Franzman Family Fund~~0@" +
"14FB01endscholar69~Hollingsworth~Jacqueline~2~Franzman Family Fund~~0@" +
"14FB01endscholar72~Douglas~Cicely~2~Franzman Family Fund~~0@" +
"14FB01endscholar74~Hughes~Je'Vonte~2~Franzman Family Fund~~0@" +
"14FB01endscholar82~Hamby~Ron~2~Franzman Family Fund~~0@" +
"14FB01endscholar87~Reddick~Sarah~2~William Marshall Bullitt Memorial Award Fund in Law~~0@" +
"14FB01endscholar96~Miller~Lauren~2~Selman Franzman Charitable Trust~~0@" +
"14FB01endscholar100~Sears~Samantha~2~Selman Franzman Charitable Trust~~0@" +
"14FB01endscholar108~Edwards~Caitlin~2~Virginia Kershner Schneider Scholarship Fund~~0@" +
"14FB01endscholar124~Shelton~Heather~2~Doris Owen Bickel Charitable Endowment Fund~~0@" +
"14FB01endscholar139~Boling~Kelsey~2~Sharon D. and Robert O. Harris III Fund~~0@" +
"14FB01endscholar143~Jones~Aaron~2~Sharon D. and Robert O. Harris III Fund~~0@" +
"14FB01endscholar150~Stucker~Janella~2~Sharon D. and Robert O. Harris III Fund~~0@" +
"14FB01endscholar151~Zwart~Mandy~2~Sharon D. and Robert O. Harris III Fund~~0@" +
"14FB01endscholar153~Kaelin~Brenna~2~Dr. Sava M. and Emma C. Roberts Memorial Scholarship~~0@" +
"14FB01endscholar161~Dowell~James~2~Fortwengler Family Schloarship Endowment Fund~~0@" +
"14FB01endowdon3~Trautwein~Doris~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon7~Hohman~Kenneth~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon13~Watkins, Jr.~Lowry~1~Endowed Scholarship Donor~~0@" +
"14FB01endowdon21~Adams-Rodgers~Lois~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon22~Raderer~Janet~3~Endowed Scholarship Donor~~0@" +
"14FB01endowdon39~Fortwengler~Tony~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon42~Diebold~Frank~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon45~Toutant~Roy~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon58~Adrio~Jennifer~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon61~Heuser, Jr.~Henry~3~Endowed Scholarship Donor~~0@" +
"14FB01endowdon65~Carothers~Roz~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon68~Adams~David~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon82~Farnsworth~Amy~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon87~Calhoun, II~Douglas~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon96~Koenig~Steven~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon103~Morehead~David~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon109~Hanzalik~Adam~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon111~Foster~T. Vernon~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon115~Huber~Barbara~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon123~Schrage~Robert~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon125~Badgett~J. Rogers~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon127~Muller~Janet~2~Endowed Scholarship Donor~~0@" +
"14FB01endowdon129~Baker~Jim~2~Endowed Scholarship Donor~~0@" +
"14FB010000913467~Wood~Phoebe~2~BOT~26503.37~0@" +
"14FB010000875898~Cosby~Kevin~2~BOT~6417.53~0@" +
"14FB010000862579~Butt~Ronald~2~BOT~184787.84~0@" +
"14FB010000319329~Hall~Douglas~2~BOT~121069.55~0@" +
"14FB010000305999~Feldhoff~Pamela~2~BOT~32959.02~0@" +
"14FB010000150970~Lewis-Klein~Angela~2~BOT~440~0@" +
"14FB010000104438~Abrams~Marie~2~BOT~191527.77~0@" +
"14FB010000309030~Minnifield~Frank~2~ULF~2118.59~0@" +
"14FB010000132875~George~Salem~2~ULF~222545.3~0@" +
"14FB010000116903~Denny~Chuck~2~ULF~73515.62~0@" +
"14FB010000110007~Bridgeman~Junior~2~ULF~2324387.59~0@" +
"14FB010000914522~Greenberg~Craig~2~BOT~4000~0@" +
"14FB01943E3AE4-A22D-284F-A63D-F7B359C90505~Fuller~Nancy~2~Purchase - Scoppechio~~0@" +
"14FB010000163150~Abramson~Jerry~1~purchase in addition to season tickets~12760~0@" +
"14FB01BF7FD9C4-CE7C-FE43-BD85-D445D60C4264~Howarth~Susan~2~Request-pd B&W club~~0@" +
"14FB017811C2A5-3EEC-9F4E-8577-2E27A8EB0670~Butterfield~Miami~6~Request-Potential Transfer Students~~0@" +
"14FB017E6E529B-6A95-C543-92FE-3496466970C2~Burr~Olivia~2~Ticket Winner- Paducah~~0@" +
"14FB010610FB00-FE78-824D-B0A6-41B6201FCF9A~Harper~Jeffrey~2~Gift Certificate-Mailed~~0@" +
"14FB01EFDAA86B-D673-E04D-9A31-6C7E7421D4E6~Fleck~Sanford~2~Gift Certificate-Mailed~~0@" +
"14FB01B138F929-4286-C745-B3AE-F4923113F670~SGA~Presidents~13~SGA Presidents~~0@" +
"14FB010000419445~Willihnganz~Shirley~2~~138936~0@" +
"14FB01EA294710-B456-3D47-8E9E-59E38C1B478C~Miranda~Jorge~1~KY Youth Advocates~~0@" +
"14FB0176B6F006-9AE4-B047-B232-453A80AE0F57~Conttreras Lidvigsen~Ana~1~KY Youth Advocates~~0@" +
"14FB0154B5B495-0BC7-7F44-BDA7-6C4C984FE192~Straub~Cary~1~KY Youth Advocates~~0@" +
"14FB016A2E1399-6B80-1949-ABA4-5A2E6DA0F952~Miranda~Marta~1~KY Youth Advocates~~0@" +
"14FB01D8CB4D38-CD31-CC4D-BC2D-85F2AD9C67AF~Salsman~Russ~2~purchase - Jerry Johnson~~0@" +
"14FB016CF6434E-9274-A74C-B092-03511FB300CF~Horlander~Dennis~4~Request-Pd LL119-122~~0@" +
"14FB010000878469~Barber~Houston~4~Purchase - BOO~5250~0@" +
"14FB010000404077~Coe~Randy~2~~30836~0@" +
"14FB010000142729~Oxley~Debby~2~~2105525~0@" +
"14FB010000869663~Ramsey~Jim~4~~529971.37~0@";

            //After the split, each element in arSeats will contain guest info

            var arRecords = arGuests.split('@');
            
            // initial guestObject like Ryan's JSON seat object     
            var guestObject = {
                "guests" : [{
                    "guestId": 0,
                    "lName": 0,
                    "fName": 0,
                    "rsvp": 0,
                    "invVia": 0,
                    "donation": 0,
                    "guestsPlaced": 0
                }]  
            }
            
            for(var i = 0; i < arRecords.length; i++){
                //split arRecords such that 
                    //arTableRecords[0] = guestId,  // == AdvanceId in arTickets
                    //arTableRecords[1] = lName,
                    //arTableRecords[2] = fName,
                    //arTableRecords[3] = rsvp,
                    //arTableRecords[4] = invVia,
                    //arTableRecords[5] = donation,
                    //arTableRecords[6] = guestsPlaced
                var arTableRecords = arRecords[i].split('~');
                
                var guestInfo = {
                    "guestId": arTableRecords[0],
                    "lName": arTableRecords[1],
                    "fName": arTableRecords[2],
                    "rsvp": arTableRecords[3],
                    "invVia": arTableRecords[4],
                    "donation": arTableRecords[5],
                    "guestsPlaced": arTableRecords[6]
                };
                guestObject.guests.push(guestInfo); 
            }
            
            //Remove the first element with the dummy values
            guestObject.guests.shift();
            //Remove the last element because it contains undefined values, since our array ended with an @ symbol
            guestObject.guests.pop();						
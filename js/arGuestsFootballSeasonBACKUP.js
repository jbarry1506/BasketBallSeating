			//Guests array from filemaker

var arGuests = 
'14JSFBTEST0000913467~Wood~Phoebe~2~BOT~26503.37~0@' +
'14JSFBTEST0000128917~Windchy~William~2~Capital Campaign~18503.8~0@' +
'14JSFBTESTstaffsen46~Williams~Patti~2~Staff Senate~~0@' +
'14JSFBTESTD731349B-F3C6-614B-9CEC-F51FF7D4E9A9~Whitaker~Robert~2~Capital Campaign - Gardner~~1@' +
'14JSFBTEST115042~Watkins, Jr.~Lowry~2~DO Request~~0@' +
'14JSFBTESTstaffsen62~Warren~Martyna~2~Staff Senate - EC~~0@' +
'14JSFBTEST0000135978~Waller~Charles~2~Capital Campaign~15300~0@' +
'14JSFBTEST0000304720~Turner~Cecil~2~Capital Campaign~21300~0@' +
'14JSFBTEST31860EBD-60DA-074E-BA1C-9DE8FEE85B35~Tomney~Annell~4~Gift Certificate-Mailed~~0@' +
'14JSFBTESTstaffsen70~Thornberry~Bridgett~2~Staff Senate~~0@' +
'14JSFBTEST0000828434~Thompson~Jay~2~Capital Campaign~2000~0@' +
'14JSFBTEST8737CE8F-962D-8848-A02B-71C625538C0C~Thompson~Rusty~2~Guest of President~~0@' +
'14JSFBTEST8D3BDA51-95C2-4546-994A-C2FF57D00B14~Thomas~Joseph~4~Certificate-mailed~~0@' +
'14JSFBTESTstaffsen28~Taylor~LeAnn~2~Staff Senate~~0@' +
'14JSFBTEST0000308123~Sturtzel~Barbara~2~Capital Campaign~29435.13~0@' +
'14JSFBTEST0000122713~Stone~Patricia~2~Capital Campaign~35306.75~0@' +
'14JSFBTESTDC019C3E-76FF-5445-8342-D2F569DF838C~Stivers~Ellie~2~with Mitch McConnell~~-1@' +
'14JSFBTESTstaffsen43~Stith~Erika~2~Staff Senate~~0@' +
'14JSFBTESTFacSen43~Stirling~David~2~Faculty Senate~~0@' +
'14JSFBTEST0000306086~Steffen~Joe~2~Faculty Senate - EC~505~0@' +
'14JSFBTESTstaffsen17~Steele~Brett~2~Staff Senate~~0@' +
'14JSFBTEST7DF6A472-AAF2-0341-835F-4A2B1791D922~Smith~Sandra~4~Capital Campaign - Speed~~0@' +
'14JSFBTEST0000107852~Skoner~Thomas~2~Capital Campaign~46073~0@' +
'14JSFBTESTFacSen7~Simpson~David~2~Faculty Senate~~0@' +
'14JSFBTESTFacSen23~Simmons~Tom~2~Faculty Senate~~0@' +
'14JSFBTEST0000411318~Shircliff~William~2~Capital Campaign~2980~-1@' +
'14JSFBTEST0000409531~Shircliff~Jeanne~2~Capital Campaign~2980~-2@' +
'14JSFBTEST0000855940~Sarin~Lalit~2~Capital Campaign~74850.94~0@' +
'14JSFBTEST59F7E07F-D8BA-914C-BC7D-CDFC3174932E~Sallengs~Betty~4~Betty Sallengs~~0@' +
'14JSFBTESTAFFACFBF-BD7E-6548-AD9E-C8E04D9D70D2~Robertson~Jake~2~Young Alumni~~0@' +
'14JSFBTEST0000922575~Riggs~Steven~3~Purchased-no premium~0~0@' +
'14JSFBTESTstaffsen52~Riede~Jill~2~Staff Senate~~0@' +
'14JSFBTEST0000165191~Renn~Patrick~2~Capital Campaign~13355~0@' +
'14JSFBTEST0000117004~Reinhardt~Dana~2~~545905~0@' +
'14JSFBTESTstaffsen27~Reid~Amy~2~Staff Senate~~0@' +
'14JSFBTEST128450~porter~Stephen ~2~DO Request~~0@' +
'14JSFBTEST0000150314~Poe~Virginia~2~Capital Campaign~1792.5~-1@' +
'14JSFBTEST0000141632~Poe~David~2~Capital Campaign~1792.5~-1@' +
'14JSFBTESTstaffsen48~Peavey~Meg~2~Staff Senate~~0@' +
'14JSFBTEST0000142729~Oxley~Debby~2~~2105525~0@' +
'14JSFBTESTstaffsen30~Norton~Carol~2~Staff Senate~~0@' +
'14JSFBTESTstaffsen7~Nalley~Karen~2~Staff Senate~~0@' +
'14JSFBTESTFacSen41~Myers~Steven~2~Faculty Senate~~0@' +
'14JSFBTEST9AC9D29D-5406-0447-8666-EF20F1C8A5C2~Mullins~Nick~4~Certificate-mailed~~0@' +
'14JSFBTEST8061F1A5-CFB3-254F-B59B-9CEC0F49B257~Moore~John~2~Guest of the President~~0@' +
'14JSFBTEST0000133161~Montgomery~Wally~8~~1157135.24~0@' +
'14JSFBTESTFacSen52~Mills~Rose~2~Faculty Senate~~0@' +
'14JSFBTEST0000861787~Meeks~Garry~2~Capital Campaign~30020.13~0@' +
'14JSFBTEST108237~McSweeny~Matt~2~DO Request~~0@' +
'14JSFBTESTstaffsen6~McKinney~Laura~2~Staff Senate - EC~~0@' +
'14JSFBTEST0000140227~McCormick~Dennis~2~Capital Campaign~12950~0@' +
'14JSFBTEST0000842944~Mathis~Tony~2~Capital Campaign~1245~-1@' +
'14JSFBTESTEC3043E0-B830-1549-BDF7-4680C4175767~Martin~Charlie~2~Young Alumni~~0@' +
'14JSFBTEST62AB5658-F3C8-A841-AC5A-3DB316B8183D~MacGeorge~Janice~3~Auction Winner~~0@' +
'14JSFBTESTstaffsen58~Logsdon~Anthony~2~Staff Senate~~0@' +
'14JSFBTEST0000115999~Lindley~David~2~Capital Campaign~3450~0@' +
'14JSFBTEST0000150970~Lewis-Klein~Angela~2~Staff Senate - EC/ BOT~440~0@' +
'14JSFBTESTFacSen57~LaJoie~Scott~2~Faculty Senate~~0@' +
'14JSFBTEST0000303964~Laing~Jack~2~Capital Campaign~42145~3@' +
'14JSFBTEST628C62D1-33D0-B64E-9860-9B3010ACEBA3~Laemmle~Phil~2~OOP~~0@' +
'14JSFBTEST0000415807~Kugele~Carolyn~2~Capital Campaign~1750~-1@' +
'14JSFBTEST0000164866~Knoop~Christopher~2~Capital Campaign~14000~0@' +
'14JSFBTESTstaffsen22~Kesterson~Patricia~2~Staff Senate~~0@' +
'14JSFBTESTFacSen14~Kemelgor~Bruce~3~Faculty Senate - EC~~0@' +
'14JSFBTESTAE82A319-ABD4-0D49-AE2D-5B943AD5D4C5~Karner~Matt~4~Certificate-mailed~~0@' +
'14JSFBTESTFacSen38~Kakar~Sham~2~Faculty Senate~~0@' +
'14JSFBTESTFacSen37~Jortani~Saeed~2~Faculty Senate~~0@' +
'14JSFBTEST71EBC244-AFDC-C54A-9726-3E6491BFE1E3~Jones~Herff~2~Commencement Apparel ~~-1@' +
'14JSFBTESTstaffsen61~Jenkins~Susan~2~Staff Senate - EC~~0@' +
'14JSFBTEST9E131DED-8709-C440-98E9-B33A1EF12BAD~Hynes~Tim~5~Guest of the Provost~~0@' +
'14JSFBTESTstaffsen16~Hurley~Skip~2~Staff Senate - EC~~0@' +
'14JSFBTEST0000114811~Horlander~Dave~2~Capital Campaign~1305~0@' +
'14JSFBTESTstaffsen39~Hora~Chandler~2~Staff Senate~~0@' +
'14JSFBTEST0000303659~Holman~Thomas~2~Capital Campaign~19580~0@' +
'14JSFBTEST0000927336~Higgins~James~2~Capital Campaign~68050~0@' +
'14JSFBTEST0000404337~Hendrix~Bonnie~2~Capital Campaign~17525~0@' +
'14JSFBTEST0000129797~Hellmann~William~2~Capital Campaign~23070~0@' +
'14JSFBTESTA9E0A224-A32C-FD4A-92AD-8CEE7BEF5AC9~Heitzman~John~4~Certificate-mailed~~0@' +
'14JSFBTEST41C716CF-5F2C-2543-B33D-F75CBDA5D8EE~Harper~Danny~4~Certificate-mailed~~3@' +
'14JSFBTESTstaffsen53~Harper~Sean~2~Staff Senate~~0@' +
'14JSFBTESTstaffsen24~Hall~Jennifer~2~Staff Senate~~0@' +
'14JSFBTEST0000972592~Gingles~Julie~2~Young Alumni~~0@' +
'14JSFBTESTstaffsen60~Gilliland~Rhonda~2~Staff Senate~~0@' +
'14JSFBTEST0000132875~George~Salem~2~ULF~222545.3~0@' +
'14JSFBTESTstaffsen21~Gainous~Sherry~2~Staff Senate~~0@' +
'14JSFBTESTstaffsen33~Fryer~Jackie~2~Staff Senate~~0@' +
'14JSFBTEST0000303059~Ford~George~2~Capital Campaign~60620~0@' +
'14JSFBTEST5FAC2A30-E084-CE4C-AB3F-733F88501751~Finnegan~Renee~2~~~0@' +
'14JSFBTEST9D7912B7-4B61-DF4D-8868-8CF66C626D6A~Ferre~John~2~Dean - A&S~~2@' +
'14JSFBTESTFacSen36~Feldhoff~Pamela~2~Faculty Senate-EC~~0@' +
'14JSFBTEST0000115375~Elbert~Norbert~2~Capital Campaign~4294.7~-2@' +
'14JSFBTEST0000107118~Edwards~Bob~2~Capital Campaign - Ferre~~4@' +
'14JSFBTEST0000876492~Dunn~Kevin~2~Capital Campaign~15800~0@' +
'14JSFBTEST0000128686~Deutsch~Burt~2~EveryGame~26708.49~0@' +
'14JSFBTEST5DF10109-8C4A-1147-8689-AC927C58CCB6~Dennison~Ken~2~Gift Certificate-Mailed~~0@' +
'14JSFBTEST0000866311~Dearen~Doug~2~Capital Campaign~93785~0@' +
'14JSFBTESTstaffsen71~Dean~Bonnie~2~Staff Senate~~0@' +
'14JSFBTEST0000113266~Craver~Tony~2~Capital Campaign~3840~0@' +
'14JSFBTESTstaffsen57~Cotton~Stephen~2~Staff Senate~~0@' +
'14JSFBTEST0000875898~Cosby~Kevin~2~BOT~6417.53~0@' +
'14JSFBTEST0000404077~Coe~Randy~2~Kosair~30836~0@' +
'14JSFBTESTFacSen47~Chlebowy~Diane~2~Faculty Senate - EC~~0@' +
'14JSFBTESTA3904E3B-6056-234E-AAC7-1F6502390D0B~Cecil~Nancy~4~Gift Certificate-Mailed~~0@' +
'14JSFBTESTstaffsen44~Casey~Valerie~2~Staff Senate - EC~~0@' +
'14JSFBTEST0000315701~Callahan~Sandy~2~Capital Campaign~19337~0@' +
'14JSFBTEST0000402051~Burns~Suzanne~2~Capital Campaign~14480~0@' +
'14JSFBTEST0000114164~Burkhardt~Joseph~2~Capital Campaign~22520~0@' +
'14JSFBTEST0000116882~Burke~Kelly~2~Capital Campaign - Libraries~859765~0@' +
'14JSFBTESTstaffsen25~Brzezinski~Vickie~2~Staff Senate~~0@' +
'14JSFBTESTFacSen2~Brown~David~2~Faculty Senate~~0@' +
'14JSFBTESTFDD29A9B-A9A8-F54A-9040-5FD7820C4640~Bond~Larry~2~Auction Winner~~0@' +
'14JSFBTEST0000937113~Beshear~Andy~2~Stites~6000~0@' +
'14JSFBTEST0000832346~Benz~Larry~2~BOT~775172.67~0@' +
'14JSFBTESTFacSen12~Barker~Robert~2~Faculty Senate~~0@' +
'14JSFBTESTFacSen56~Austin~Raymond~2~Faculty Senate - EC~~0@' +
'14JSFBTEST0000406277~Atlas~LouAnn~2~EveryGame~19382~0@' +
'14JSFBTESTFacSen34~Arnold~Forest~2~Faculty Senate~~0@' +
'14JSFBTEST0000104438~Abrams~Marie~2~BOT~191527.77~0@';

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
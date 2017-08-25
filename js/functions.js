    $('button').click(function buttonClicked() {
        for (var thisTicket = 0; thisTicket < arTickets.length; thisTicket++) {
            if (this.id == jso[thisTicket].seatID) {
                if ($(this).hasClass('taken')|| $(this).hasClass('highlightGray')) 
                {   //If this seat is taken or has been selected but nobody placed in it yet
                    if (tempData == true && jso[thisTicket].claimed == '&nbsp') 
                    {   //If a person is selected and this seat is selected but nobody placed in it yet
                        this.setAttribute('class', 'available');    //Toggle it back to available
                    } 
                    else if (removeMe == 'remove') 
                    {   //If removeMe is selected
                        if (jso[thisTicket].seasonTix.toLowerCase() === 'yes')
                        {   //Check if the seat is a season ticket holder
                            alert("I'm sorry, but that patron is a season ticket holder and can't be removed from the seat.");
                            break;
                        }
                        else 
                        {   //If removeMe is selected and this is not a season ticket seat
                            for(var thisGuest = 0; thisGuest < guestObject.guests.length; thisGuest++)
                            {   //Loop through the guest list to match a guest object with the person in this seat
                                if (jso[thisTicket].evipid == guestObject.guests[thisGuest].guestId)
                                {   //decrement guestsPlaced and update the tempData area with the info of the person that is being removed
                                    guestObject.guests[thisGuest].guestsPlaced -= 1;                                   
                                    $('#tempDataName').html('Name:&nbsp&nbsp&nbsp&nbsp' + guestObject.guests[thisGuest].fName + ' ' + guestObject.guests[thisGuest].lName);
                                    $('#tempDataRSVP').html('RSVP:&nbsp&nbsp&nbsp&nbsp' + guestObject.guests[thisGuest].rsvp);
                                    $('#tempDataInvVia').html('Invited Via:&nbsp&nbsp&nbsp&nbsp' + guestObject.guests[thisGuest].invVia);
                                    $('#tempDataDon').html('Placed:&nbsp&nbsp&nbsp&nbsp' + guestObject.guests[thisGuest].guestsPlaced);  //changed to guests placed for testing  
                                    rowColor(guestObject.guests[thisGuest].rsvp,guestObject.guests[thisGuest].guestsPlaced,guestObject.guests[thisGuest].guestId);

                                }
                             }
                            $(this).html(jso[thisTicket].seat + '</br><span style="font-size:8">' + '&nbsp' + '</span>');
//var url =  "FMP://136.165.242.26/President's Office Events.fmp12?script=JSPassDataToDB&$claimed=remove&$etid=" + jso[thisTicket].etid;
//window.location = url;
                            //Update the seats available
                            globalAvailable += 1;
                                   arSection[globalSecIndex][2] = globalAvailable;
                                                        
                            $('h2').html('Section: ' + globalSection + '<br\>Rows: ' + globalRows + '<br\>Seats: ' + globalSeats + '<br\>Available: ' + globalAvailable);
                            //Update the ticket object to remove claimed and evipid
                            jso[thisTicket].claimed = '&nbsp';
                            jso[thisTicket].evipid = '';
                            this.setAttribute('class', 'highlight');
                            mapSet.mapset[globalSecIndex].available+=1; 
                        }
                    }
                }
                else if ($(this).hasClass('available') || $(this).hasClass('highlight')) {
                    if (tempData == false) {
                        alert('I\'m sorry, but you have not selected a patron to place in this seat.  Please select a patron from the table to the left.');
                    }
                    else 
                    {
                        $(this).html(jso[thisTicket].seat + '</br><span style="font-size:8">' + jso[thisTicket].claimed + '</span>');
                        this.setAttribute('class', 'highlightGray');
                        //TODO need RSVP placed counter
                    }
                }
                break;
            }
        }
    });



function buttonClicked() {
        for(var )
    }
    
    $('button').click(buttonClicked);
    
function available(sectionNumber){
    var numberAvailable = 0;
    for (var avSec = 0; avSec < jso.length; avSec++){
        
        
        
        
    var sectionKey = 'sec'+jso[avSec].section;
        if(sectionKey == sectionNumber){
            console.log('it is working');
            for(var avRow = 0; avRow < stadiumArray[avSec][3].length; avRow++){
                for(var avObj = 0; avObj < stadiumArray[avSec][3][avRow][1].length; avObj++){
                    console.log(stadiumArray[avSec][3][avRow][1][avObj]);
                    if(stadiumArray[avSec][3][avRow][1][avObj].claimed == '&nbsp'){
                        numberAvailable++;
                    }
                    //console.log(stadiumArray[avSec][3][avRow][1][avObj].claimed);
                }
            }
        }        
    } 
    return numberAvailable;       
} 
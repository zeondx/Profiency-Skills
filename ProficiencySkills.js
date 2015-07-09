$('document').ready(addRow);
$('document').ready(deleteRow);
$('document').ready(addStars);


function addStars()
{
    var $select = $('select:last');
    
    console.log($select);

    $select.on('change', function(event){
                                            var starTableData = $select.parent().next();
                                            var selectBoxValue = event.target.value;
                                            if(selectBoxValue == '0')
                                            {
                                                starTableData.empty();
                                            }
                                            if(selectBoxValue == '1')
                                            {
                                                starTableData.empty();
                                                starTableData.append('*');
                                            }
        
                                            if(selectBoxValue == '2')
                                            {   
                                                starTableData.empty();
                                                starTableData.append('**');
                                            }
        
                                            if(selectBoxValue == '3')
                                            {   
                                                starTableData.empty();
                                                starTableData.append('***');
                                            }
                                            
                                            if(selectBoxValue == '4')
                                            {   
                                                starTableData.empty();
                                                starTableData.append('****');
                                            }
        
                                            if(selectBoxValue == '5')
                                            {   
                                                starTableData.empty();
                                                starTableData.append('*****');
                                            }

                                       }
                
                                       
                  )
}

function addRow()
{
    $('#addRow').on('click', function(){ $('table').append('<tr> <td> <input type = "text"/> </td> <td> <select name = "Proficiency Stars"> <option value = "0"/> <option value = "1">*</option>                                                                           <option value = "2">**</option> <option value = "3">***</option> <option value = "4">****</option> <option value = "5">*****</option> </select>                                                               </td> <td></td> </tr>'
                                                          );
                                          addStars();
                                        
                                       }
                   );
}

function deleteRow()
{
    $('#deleteRow').on('click', function(){$('tr:last').remove();});
}

$(document).ready(function(){	
		
	
		var storageTest = function(){
			if(typeof localStorage =="undefined")
				alert("Sorry, your browser does not support web storage...");
		}
		
		var init = function(){
			
			if(!localStorage.index00)
				clearall();
			
			if(localStorage.length <= 1)
					localStorage.index00 = 1;
					
			k = localStorage.index00;	
		}
	
	
		var bindEvents = function(){
		  
				$('#home-button').on('click',function(){
						resetall();
				});
				  
				  $('#add-button').on('click',function(){
						$('#addcontainer').show();
						$('#listcontainer').hide();
					});
					
				  $('#addtask').on('click',function(){
					if( $('#myinput').val() ){	
						localStorage.setItem('key'+k, $('#myinput').val() );
						$('#added-message').slideDown();
						$('#added-message').delay(500).slideUp(3000);
						k++;
						localStorage.index00 = k;
						$('#myinput').val('');
					}
						
				  });
				  
				  $('#listcontainer').on('click','.delete',function(){
						localStorage.removeItem($(this).attr('id'));
						$('#deleted-message').slideDown();
						$('#deleted-message').delay(500).slideUp(3000);
						$('#listcontainer').hide();
						
						if(k==1 || localStorage.length<=1){
							$('#empty-message').slideDown();
							$('#empty-message').delay(1000).slideUp(3000);
						}
						else
							loadList();
						
					//	k--;
					//	localStorage.index00 = k;
				  });	
				  
				  $('#list-button').on('click',function(){
						$('#addcontainer').hide();
						if(k==1 || localStorage.length<=1){
							$('#empty-message').slideDown();
							$('#empty-message').delay(500).slideUp(3000);
						}
						else
							loadList();
				  });
				  
				  
				  $('#listcontainer').on('click','#deleteall',function(){
							clearall();
				  });
				 

				 
				  function loadList(){
				  
					$('#listcontainer').html('<table></table>');
					
					for(var i=0; i< localStorage.length; i++){
						if( localStorage.key(i) != 'index00'){
							var item = localStorage.getItem(localStorage.key(i));
							$('#listcontainer table').append('<tr><td>'+ item +'</td><td><a href="#" id='+ localStorage.key(i) +' class="delete">delete</a></td></tr>');
						}	
					}
					$('#listcontainer table').append('<tr><td><a href="#" id="deleteall" class="delete">DeleteAll</a></td></tr>');
					$('#listcontainer').show();
				  
				  }
				  
				  function resetall(){
						location.reload();
				  }
				  
				  function clearall(){
						localStorage.clear();
				  }
		}
		
		  storageTest();
		  init();
		  bindEvents();
	});	  
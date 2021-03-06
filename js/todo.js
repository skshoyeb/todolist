$(document).ready(function(){	
		
	
		var storageTest = function(){
			if(typeof localStorage =="undefined")
				alert("Sorry, your browser does not support web storage...");
			
		}
		
		var init = function(){
			
			if(!localStorage.index00)
				localStorage.clear();
			
			if(localStorage.length <= 1)
					localStorage.index00 = 1;
					
			k = localStorage.index00;	
		}
	
	
		var bindEvents = function(){
		  
				$('#home-button').on('click',function(){
						resetall();
				  });
				  
				  $('#add-button').on('click',function(){
						$('#add-container').show();
						$('#list-container').hide();
						$('#message .empty-message').slideUp();
					});
					
				  $('#add-task').on('click',function(){
					if( $('#myinput').val() ){	
						localStorage.setItem('key'+k, $('#myinput').val() );
						$('#message .added-message').slideDown();
						$('#message .added-message').delay(100).slideUp(3000);
						k++;
						localStorage.index00 = k;
						$('#myinput').val('');
					}
						
				  });
				  
				  $('#list-container').on('click','.delete',function(){
						localStorage.removeItem($(this).attr('id'));
						$('#message .deleted-message').slideDown();
						$('#message .deleted-message').delay(500).slideUp(3000);
						$('#list-container').hide();
						$('#message .empty-message').slideUp();
						
						if(k==1 || localStorage.length<=1){
							$('#message .empty-message').slideDown();
						}
						else
							loadList();
						
					//	k--;
					//	localStorage.index00 = k;
				  });	
				  
				  $('#list-button').on('click',function(){
						$('#add-container').hide();
						$('#message .empty-message').slideUp();
						if(k==1 || localStorage.length<=1){
							$('#message .empty-message').slideDown();
							
						}
						else
							loadList();
				  });
				  
				  
				  $('#list-container').on('click','#deleteall',function(){
							clearall();
							$('#add-container').hide();
							$('#list-container').hide();
							$('#message .empty-message').slideDown();
							$('#message .empty-message').delay(100).slideUp(3000);
							
				  });
				  
				  function loadList(){
				  
					$('#list-container').html('<table></table>');
					
					for(var i=0; i< localStorage.length; i++){
						if( localStorage.key(i) != 'index00'){
							var item = localStorage.getItem(localStorage.key(i));
							$('#list-container table').append('<tr><td>'+ item +'</td><td><a href="#" id='+ localStorage.key(i) +' class="delete">delete</a></td></tr>');
						}	
					}
					$('#list-container table').append('<tr><td><a href="#" id="deleteall" class="delete">DeleteAll</a></td></tr>');
					$('#list-container').show();
				  
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
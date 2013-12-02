$(document).ready(function(){	
		
	if(typeof localStorage !=="undefined"){	
			if(localStorage.length <= 1)
					localStorage.index = 1;
				k = localStorage.index;	
	}
		
	else{
		  alert("Sorry, your browser does not support web storage...");
	}
		  
		  $('#home').on('click',function(){
				resetall();
		  });
		  
		  $('#add').on('click',function(){
				$('#addcontainer').show();
				$('#listcontainer').hide();
			});
			
		  $('#addtask').on('click',function(){
			if( $('#myinput').val() ){	
				localStorage.setItem('key'+k, $('#myinput').val() );
				$('#addsuccess').slideDown();
				$('#addsuccess').delay(500).slideUp(3000);
				k++;
				localStorage.index = k;
				$('#myinput').val() ='';
			}
				
		  });
		  
		  $('#listcontainer').on('click','.delete',function(){
				localStorage.removeItem($(this).attr('id'));
				$('#deletesuccess').slideDown();
				$('#deletesuccess').delay(500).slideUp(3000);
				$('#listcontainer').hide();
			//	k--;
			//	localStorage.index = k;
		  });	
		  
		  $('#list').on('click',function(){
				$('#addcontainer').hide();
				if(k==1){
					$('#empty-message').slideDown();
					$('#empty-message').delay(500).slideUp(3000);
				}
				loadList();
		  });
		  
		  function loadList(){
		  
			$('#listcontainer').html('<table></table>');
			
			for(var i=1; i< localStorage.length; i++){
				var item = localStorage.getItem(localStorage.key(i));
				$('#listcontainer table').append('<tr><td>'+ item +'</td><td><a href="#" id='+ localStorage.key(i) +' class="delete">delete</a></td></tr>');
			}
			$('#listcontainer').show();
		  
		  }
		  
		  function resetall(){
				location.reload();
		  }
		  
		  
		  
	});	  
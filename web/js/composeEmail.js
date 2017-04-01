	$('#compose-email').click(function(){				
				$('.overlay').css('height', $(document).height());
				$('.up-arrow').hide();				
				$('.overlay').fadeIn(100);
			});
			$(document).on('click', function(e) {
				if ( $(e.target).closest('#compose-email').length ) {
					$('.overlay').fadeIn(10);
				}else if ( ! $(e.target).closest('form').length ) {
					$('.overlay').fadeOut(100);
				}
			});
			$('#cancel-email').click(function(){				
				$('.overlay').fadeOut(100);				
			});
			$('.text').addClass('active');
			$('body').on('click', '.html-text-buttons', function(e) {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			});
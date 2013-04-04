(function($){

	$.fn.james_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "500",
			width : "700",
			title:"Sign Up",
			account: 'Don\'t have an account? <a class="james_modal_2" href="#">Sign in</a>',
			description: "Example of how to create a modal box.",
			buttonval: "CREATE MY ACCOUNT",
			top: (($(window).height() / 2) - 250), // half of the window height minus half of the height of the box
			left: ($(window).width() / 2) - 350, // half of the window width minus half of the width of the box
		},prop);
				
		//Click event on element
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			$('.james_modal_box').fadeIn("slow");
		});
		
		/**
		 * Add styles to the html markup
		 */
		 function add_styles(){
			$('.james_modal_box').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'5px',
				'-moz-border-radius':'5px',
				'-webkit-border-radius':'5px',
				'background': '#f2f2f2', 
				'z-index':'50',
			});
			$('.james_modal_close').css({
				'position':'relative',
				'top':'-25px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(img/close.png) no-repeat',
				'background-position': '15px 10px'
			});
			
			/*Block page overlay*/
			var pageHeight = $(window).height();
			var pageWidth = $(window).width();

			$('.james_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(255,255,255,0.8)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			$('.james_inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}
		
		 /**
		  * Create the block page div
		  */
		 function add_block_page(){
			var block_page = $('<div class="james_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 	
		 /**
		  * Creates the modal box
		  */
		 function add_popup_box(){
			 var pop_up = $(".popup");
			 $(".james_inner_modal_box h2").text(options.title);
			 $(".james_inner_modal_box .account").html(options.account);
			 $("#submit").val(options.buttonval);
			 $(pop_up).appendTo('.james_block_page');
			 			 
			 $('.james_modal_close').click(function(){
					$(this).parent().fadeOut("slow");
					$('.james_block_page').fadeOut("slow");
			 });
		}

		return this;
	};
	
})(jQuery);
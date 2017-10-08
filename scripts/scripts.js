// JavaScript Document

const $body = document.querySelector('body');   
const $btnMobileMenu = document.querySelector('.btn-mobile-menu');  

$btnMobileMenu.addEventListener('click', function(){
	
	
	$body.classList.toggle('show-mobile-menu');	
	
});
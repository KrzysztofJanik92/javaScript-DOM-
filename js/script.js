function zmien(fun) {
   var html = document.getElementById('innerContent');
   
   if (fun.value == 1) {
   var imgLink = "img/shawshank.jpg";
   var topic = "The Shawshank Redemption";
   var content = document.getElementById('shawshank').textContent;
   }
   
   if (fun.value == 2) {
   var imgLink = "img/greenMile.jpg";
   var topic = "The Green Mile";
   var content = document.getElementById('greenMile').textContent;
   }
    
   if (fun.value == 3) {
   var imgLink = "img/mist.jpg";
   var topic = "The Mist";
   var content = document.getElementById('mist').textContent;
   }
   
   innerContent.innerHTML = '<div class="text"><h2>' + topic +'</h2><img src="'+imgLink+ '"><p>' + content + '</p></div>';
    
}

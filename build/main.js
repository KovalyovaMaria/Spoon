function openModal(){document.getElementById("modal").style.display="block"}function closeModal(){document.getElementById("modal").style.display="none"}function openContacts(){document.getElementById("contact").style.display="block"}function closeContacts(){document.getElementById("contact").style.display="none"}document.getElementById("openModalBtn").addEventListener("click",openModal),document.getElementById("closeModalBtn").addEventListener("click",closeModal),window.addEventListener("click",function(e){e.target===document.getElementById("modal")&&closeModal()}),document.getElementById("openContact").addEventListener("click",openContacts),document.getElementById("closeContact").addEventListener("click",closeContacts),window.addEventListener("click",function(e){e.target===document.getElementById("contact")&&closeContacts()});
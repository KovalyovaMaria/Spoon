
document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);

function openModal() {

    document.getElementById('modal').style.display = 'block';

}

function closeModal() {

    document.getElementById('modal').style.display = 'none';

}

window.addEventListener('click', function (event) {

    if (event.target === document.getElementById('modal')) {

        closeModal();

    }

});

document.getElementById('openContact').addEventListener('click', openContacts);
document.getElementById('closeContact').addEventListener('click', closeContacts);

function openContacts() {

    document.getElementById('contact').style.display = 'block';

}

function closeContacts() {

    document.getElementById('contact').style.display = 'none';

}

window.addEventListener('click', function (event) {

    if (event.target === document.getElementById('contact')) {

        closeContacts();

    }

});


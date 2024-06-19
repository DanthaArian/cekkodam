// scripts.js
document.getElementById('kodamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        alert("Nama tidak boleh kosong!");
    } else {
        const kodam = getKodam(name);
        window.location.href = `result.html?name=${encodeURIComponent(name)}&kodam=${encodeURIComponent(kodam)}`;
    }
});

function getKodam(name) {
    // Algoritma untuk menentukan kodam berdasarkan nama
    const kodams = ['Kodam A', 'Kodam B', 'Kodam C', 'Kodam D', 'Kodam E'];
    const index = name.length % kodams.length;
    return kodams[index];
}

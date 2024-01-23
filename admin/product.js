const API_URL = 'http://localhost:3000/';
function showProduct() {
    let stt = 1;
    let html = "";
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('sanpham');
            data.forEach(element => {
                html += `
                <tr>
                <td class="cell">${stt++}</td>
                <td class="cell"><span class="truncate">${element.name}</span></td>
                <td class="cell"><img src="../client/images/${element.image}" width="100px height="100px"></td>
                <td class="cell">
                    <a class="btn-sm app-btn-secondary bg-info" href="#">Sửa</a>
                    <a class="btn-sm app-btn-secondary bg-danger text-white" href="#">Xóa</a>
                </td>
            </tr>
                `;
            });
            shows.innerHTML = html;
        })
        .catch(error => {
        });
}
showProduct();
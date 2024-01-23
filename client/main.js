// var pro_hotdeal = products.filter(function(item){
//     return item.cate_id==1;
// })
// console.log(pro_hotdeal);

// var pro_donghochauau= data.filter(function(item){
//     return item.hotdeal=='đồng hồ châu âu'
// })
// console.log(pro_donghochauau);

// var pro_donghochaua= data.filter(function(item){
//     return item.category=='đồng hồ châu á'
// })
// console.log(pro_donghochaua);
// var pro_donghochauphi= data.filter(function(item){
//     return item.hotdeal==3
// })
// console.log(pro_donghochauphi);

// const cate_hotdeal = document.querySelector("#hotdeal")
// const cate_donghochaua = document.querySelector("#chaua")
// const cate_donghochauphi = document.querySelector("#chauphi")

// pro_hotdeal.forEach(function(item){
//     cate_hotdeal.innerHTML +=`
//     <div class="box">
//     <div class="box-content">
//       <div class="img-box">
//         <img src="images/${item.image}" alt="">
//       </div>
//       <div class="detail-box">
//         <div class="text">
//           <h6>
//            ${item.name}
//           </h6>
//           <h6>
//           ${item.category}
//          </h6>
//           <h5><del>${item.price}</del></h5>
//           <h5>
//            ${item.sale} <span>VND</span>
//           </h5>

//         </div>
//         <div class="like">
//           <h6>
//              ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//           </h6>

//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         Add To Cart
//       </a>
//     </div>
//   </div>
//     `
// })
// pro_donghochauau.forEach(function(item){
//     cate_donghochauau.innerHTML +=`
//     <div class="box">
//     <div class="box-content">
//       <div class="img-box">
//         <img src="images/${item.image}" alt="">
//       </div>
//       <div class="detail-box">
//         <div class="text">
//           <h6>
//            ${item.name}
//           </h6>
//           <h6>
//           ${item.category}
//          </h6>
//           <h5><del>${item.price}</del></h5>
//           <h5>
//            ${item.sale} <span>VND</span>
//           </h5>

//         </div>
//         <div class="like">
//           <h6>
//              ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//           </h6>

//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         Add To Cart
//       </a>
//     </div>
//   </div>
//     `
// })
// pro_donghochauphi.forEach(function(item){
//     cate_donghochauphi.innerHTML +=`
//     <div class="box">
//     <div class="box-content">
//       <div class="img-box">
//         <img src="images/${item.image}" alt="">
//       </div>
//       <div class="detail-box">
//         <div class="text">
//           <h6>
//            ${item.name}
//           </h6>
//           <h6>
//           ${item.category}
//          </h6>
//           <h5><del>$${item.price}</del></h5>
//           <h5>
//            ${item.sale} <span>VND</span>
//           </h5>

//         </div>
//         <div class="like">
//           <h6>
//              ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//           </h6>

//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         Add To Cart
//       </a>
//     </div>
//   </div>
//     `
// })
// pro_donghochaua.forEach(function(item){
//   cate_donghochaua.innerHTML +=`
//   <div class="box">
//   <div class="box-content">
//     <div class="img-box">
//       <img src="images/${item.image}" alt="">
//     </div>
//     <div class="detail-box">
//       <div class="text">
//         <h6>
//          ${item.name}
//         </h6>
//         <h6>
//         ${item.category}
//        </h6>
//         <h5><del>$${item.price}</del></h5>
//         <h5>
//          ${item.sale} <span>VND</span>
//         </h5>

//       </div>
//       <div class="like">
//         <h6>
//            ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//         </h6>

//       </div>
//     </div>
//   </div>
//   <div class="btn-box">
//     <a href="">
//       Add To Cart
//     </a>
//   </div>
// </div>
//   `
// })

const API_URL = "http://localhost:3000/";
function hienthi() {
  let html = "";
  fetch(API_URL + "products").then(function (response) {
    response.json().then(function (data) {
      const cai_sanpham = document.getElementById('hienthi');
      data.forEach((element) => {
        html += `
      <div class="box">
       <div class="box-content">
         <div class="img-box">
           <img src="images/${element.image}" alt="">
         </div>
         <div class="detail-box">
           <div class="text">
             <h6>
              ${element.name}
             </h6>
             <h6>
             ${element.price}
            </h6>
            
               
             
         
           </div>
           <div class="like">
             <h6>
             ${element.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
             </h6>
         
           </div>
         </div>
       </div>
       <div class="btn-box">
        <a href="./products-detail.html">
         chi tiết sản phẩm
        </a>
      </div>
     </div>
      `;
      });
      cai_sanpham.innerHTML = html;
    });
    
  })
  .catch(error => {
    // Handle error
});

}
hienthi();

function hienthi1(){
  let html = "";
  fetch(API_URL+ "products")
  .then(function(response){
    response.json().then(function(data){
     const cai_sanpham1 = document.getElementById('chaua');
     data.map(element => {
      html += `
      <div class="box">
       <div class="box-content">
         <div class="img-box">
           <img src="images/${element.image}" alt="">
         </div>
         <div class="detail-box">
           <div class="text">
             <h6>
              ${element.name}
             </h6>
             <h6>
             ${element.price}
            </h6>
             
             

           </div>
           <div class="like">
             <h6>
             ${element.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
             </h6>

           </div>
         </div>
       </div>
       <div class="btn-box">
        <a href="./products-detail.html">
          chi tiết sản phẩm
        </a>
      </div>
     </div>
      `
     });
     cai_sanpham1.innerHTML = html;
    })
  })
}
hienthi1()

function hienthi2(){
  let html = "";
  fetch(API_URL+ "products")
  .then(function(response){
    response.json().then(function(data){
     const cai_sanpham = document.getElementById('chauphi');
     data.map(element => {
      html += `
      <div class="box">
       <div class="box-content">
         <div class="img-box">
           <img src="images/${element.image}" alt="">
         </div>
         <div class="detail-box">
           <div class="text">
             <h6>
              ${element.name}
             </h6>
           
             <h6>
             ${element.price}
            </h6>
            
            

           </div>
           <div class="like">
             <h6>
             ${element.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
             </h6>

           </div>
         </div>
       </div>
       <div class="btn-box">
       <a href="./products-detail.html">
         chi tiết sản phẩm
       </a>
     </div>
     </div>
      `
     });
     cai_sanpham.innerHTML = html;
    })
  })
}
hienthi2()

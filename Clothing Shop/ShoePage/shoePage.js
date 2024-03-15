//! toggleButton oluşturma kodu
let container = document.querySelector(".container");
let toggleButtons = document.querySelector(".toggleButtons");
let urunMiktari = 48;
let tSOBUS = 15;
let olusacakButonSayisi = Math.ceil(urunMiktari / tSOBUS);
let buttonInnerHtml = "";

/*
for (let i = 0; i < urunMiktari; i++) {
  container.innerHTML += `<div class="card">
                <div class="card-information">
                    <div class="discount-tag">-30%</div>
                    <i class="like-button fas fa-heart"></i>
                </div>
                <div class="shoes-image"
                    data-first="https://contents.mediadecathlon.com/p1794832/kb72c47d735ab09aaddc6ef6e8310201a/run-active-spor-ayakkabi.jpg?format=auto&quality=60&f=500x0"
                    data-second="https://contents.mediadecathlon.com/p1811197/k$6bfbcc16aaf7b9bea8b50fe7f584f458/sq/8558959.jpg?format=auto&f=800x0">
                </div>
                <div class="shoes-image-list">
                    <div class="shoes-image-list-item"></div>
                    <div class="shoes-image-list-item"></div>
                    <div class="shoes-image-list-item"></div>
                </div>
                <div class="shoe-sizes">
                    <div class="shoe-sizes-item">36</div>
                    <div class="shoe-sizes-item">37</div>
                    <div class="shoe-sizes-item">38</div>
                    <div class="shoe-sizes-item">39</div>
                    <div class="shoe-sizes-item">40</div>
                    <div class="shoe-sizes-item">41</div>
                    <div class="shoe-sizes-item">42</div>
                    <div class="shoe-sizes-item">43</div>
                    <div class="shoe-sizes-item">44</div>
                    <div class="shoe-sizes-item">45</div>
                    <div class="shoe-sizes-item">46</div>
                    <div class="shoe-sizes-item">47</div>
                </div>
                <div class="shoes-information">
                    <div class="shoes-information-item">
                        <h2 class="shoesName">ATOM CUSTOM</h2>
                        <div class="shoesPrice">
                            <div class="shoesNewPrice">€83.30</div>
                            <div class="shoesDelPrice"><del>€119.00</del></div>
                        </div>
                    </div>
                    <div class="shoes-information-item"><a class="shopping-button" href="#">
                            <i class="fas fa-shopping-bag"></i>
                        </a></div>
                </div>
            </div>`;
}
*/

// for (let i = 0; i < olusacakButonSayisi; i++) {
//   buttonInnerHtml += `<button class="toggleButton">${i + 1}</button>`;
// }

// toggleButtons.innerHTML = buttonInnerHtml;

// let toggleButton = document.getElementsByClassName("toggleButton");
// let min, max;

// for (let i = 0; i < toggleButton.length; i++) {
//   toggleButton[i].addEventListener("click", (e) => {
//     window.scroll(0, 0);
//     let containerInnerHtml = "";
//     let basilanButonunDegeri = Number(toggleButton[i].textContent) - 1;
//     min = basilanButonunDegeri * tSOBUS;
//     if (urunMiktari < (basilanButonunDegeri + 1) * tSOBUS) {
//       max = urunMiktari;
//     } else {
//       max = (basilanButonunDegeri + 1) * tSOBUS;
//     }
//     for (let k = min + 1; k < max + 1; k++) {
//       containerInnerHtml += `<div class="card">
//             <div class="card-information">
//                 <div class="discount-tag">-30%</div>
//                 <i class="like-button fas fa-heart"></i>
//             </div>
//             <div class="shoes-image"
//                 data-first="https://contents.mediadecathlon.com/p1794832/kb72c47d735ab09aaddc6ef6e8310201a/run-active-spor-ayakkabi.jpg?format=auto&quality=60&f=500x0"
//                 data-second="https://contents.mediadecathlon.com/p1811197/k$6bfbcc16aaf7b9bea8b50fe7f584f458/sq/8558959.jpg?format=auto&f=800x0">
//             </div>
//             <div class="shoes-image-list">
//                 <div class="shoes-image-list-item"></div>
//                 <div class="shoes-image-list-item"></div>
//                 <div class="shoes-image-list-item"></div>
//             </div>
//             <div class="shoe-sizes">
//                 <div class="shoe-sizes-item">36</div>
//                 <div class="shoe-sizes-item">37</div>
//                 <div class="shoe-sizes-item">38</div>
//                 <div class="shoe-sizes-item">39</div>
//                 <div class="shoe-sizes-item">40</div>
//                 <div class="shoe-sizes-item">41</div>
//                 <div class="shoe-sizes-item">42</div>
//                 <div class="shoe-sizes-item">43</div>
//                 <div class="shoe-sizes-item">44</div>
//                 <div class="shoe-sizes-item">45</div>
//                 <div class="shoe-sizes-item">46</div>
//                 <div class="shoe-sizes-item">47</div>
//             </div>
//             <div class="shoes-information">
//                 <div class="shoes-information-item">
//                     <h2 class="shoesName">ATOM CUSTOM</h2>
//                     <div class="shoesPrice">
//                         <div class="shoesNewPrice">€83.30</div>
//                         <div class="shoesDelPrice"><del>€119.00</del></div>
//                     </div>
//                 </div>
//                 <div class="shoes-information-item"><a class="shopping-button" href="#">
//                         <i class="fas fa-shopping-bag"></i>
//                     </a></div>
//             </div>
//         </div>`;
//     }
//     container.innerHTML = containerInnerHtml;
//   });
// }

// window.addEventListener("load", (e) => {
//   containerInnerHtml = "";
//   if (urunMiktari < tSOBUS) {
//     max = urunMiktari;
//   } else {
//     max = tSOBUS;
//   }
//   for (let i = 1; i < max + 1; i++) {
//     containerInnerHtml += `<div class="card">
//             <div class="card-information">
//                 <div class="discount-tag">-30%</div>
//                 <i class="like-button fas fa-heart"></i>
//             </div>
//             <div class="shoes-image"
//                 data-first="https://contents.mediadecathlon.com/p1794832/kb72c47d735ab09aaddc6ef6e8310201a/run-active-spor-ayakkabi.jpg?format=auto&quality=60&f=500x0"
//                 data-second="https://contents.mediadecathlon.com/p1811197/k$6bfbcc16aaf7b9bea8b50fe7f584f458/sq/8558959.jpg?format=auto&f=800x0">
//             </div>
//             <div class="shoes-image-list">
//                 <div class="shoes-image-list-item"></div>
//                 <div class="shoes-image-list-item"></div>
//                 <div class="shoes-image-list-item"></div>
//             </div>
//             <div class="shoe-sizes">
//                 <div class="shoe-sizes-item">36</div>
//                 <div class="shoe-sizes-item">37</div>
//                 <div class="shoe-sizes-item">38</div>
//                 <div class="shoe-sizes-item">39</div>
//                 <div class="shoe-sizes-item">40</div>
//                 <div class="shoe-sizes-item">41</div>
//                 <div class="shoe-sizes-item">42</div>
//                 <div class="shoe-sizes-item">43</div>
//                 <div class="shoe-sizes-item">44</div>
//                 <div class="shoe-sizes-item">45</div>
//                 <div class="shoe-sizes-item">46</div>
//                 <div class="shoe-sizes-item">47</div>
//             </div>
//             <div class="shoes-information">
//                 <div class="shoes-information-item">
//                     <h2 class="shoesName">ATOM CUSTOM</h2>
//                     <div class="shoesPrice">
//                         <div class="shoesNewPrice">€83.30</div>
//                         <div class="shoesDelPrice"><del>€119.00</del></div>
//                     </div>
//                 </div>
//                 <div class="shoes-information-item"><a class="shopping-button" href="#">
//                         <i class="fas fa-shopping-bag"></i>
//                     </a></div>
//             </div>
//         </div>`;
//   }
//   container.innerHTML = containerInnerHtml;
// });

//! Ürünler beğeni butonu ile ilgili kodlar

// Todo : Burası tekrar gözden geçirilecek

let likeButtons = document.getElementsByClassName("like-button");
console.log(likeButtons);
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", (e) => {
    likeButtons[i].classList.toggle("like");
  });
}
//! ////////////////////////////////////////////////////////

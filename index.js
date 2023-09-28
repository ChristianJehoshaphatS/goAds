let jobs = [
    {
        id: 1,
        asset:['https://media.suara.com/pictures/970x544/2016/03/02/o_1acqifml01nr7e021raml351jjba.jpg', 'https://www.nusabali.com/article_images/52893/jasa-cuci-kendaraan-banjir-pelanggan-800-2019-05-25-145328_0.jpg'],
        title: 'Jasa Cuci Mobil',
        itemName: 'Cuci Mobil Berkah',
        deskripsi: 'Saat mengiklan pastikan untuk menyebutkan motto kami yaitu "Mobil anda kotor?? hubungi kami skuy!", lakukan pengiklanannya di YouTube, TikTok, Instagram',
        duration: 30,
        target: '100 pelanggan baru',
        milestone:[25, 50, 75, 100],
        salary: 2_500_000,
        status: 'available',
        category: 'jasa',
        recommend: 'yes'
    },
    {
        id: 2,
        asset:['https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg', 'https://www.healthyhomesutah.com/wp-content/uploads/Professional-Cleaning-Services-in-Plain-City-Utah-1000x423.jpg'],
        title: 'Jasa Cleaning Service',
        itemName: 'Clean Kinclong',
        deskripsi: 'Tolong sebarkan jasa kami kerumah-rumah yang membutuhkan jasa Cleaning Service dan kami hanya menyediakan jasa kami di kota Tangrang dan sekitarnya saja, lakukan pengiklanannya di TikTok, Instagram',
        duration: 14,
        target: '10 pelanggan baru',
        milestone:[5, 8, 10],
        salary: 1_000_000,
        status: 'available',
        category: 'jasa',
        recommend: 'yes'
    },
    {
        id: 3,
        asset:['https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/2/8/158bc2e7-e712-4615-a782-d65fb73bfc06.jpg'],
        title: 'Tatakan Laptop Ergonomis',
        itemName: 'EvoMat',
        deskripsi: 'Kami ingin produk Kami bisa di ketahui oleh orang banyak dan kami siap menjual produk kami keseluruh indonesia , lakukan pengiklanan di seluruh platform media sosial',
        duration: 21,
        target: '1000 barang terjual',
        milestone:[100, 500, 1000],
        salary: 4_000_000,
        status: 'available',
        category: 'produk',
        recommend: 'yes'
    },
    {
        id: 4,
        asset:['https://asset-2.tstatic.net/jambi/foto/bank/images/atik-53-teknisi-sekaligus-pemilik-toko-servis-elektronik-sedang-memperbaiki-tv-pelanggannya.jpg', 'https://www.buletinnusantara.com/wp-content/uploads/2020/06/IMG20200607150703-scaled.jpg'],
        title: 'Jasa Service Elektronik',
        itemName: 'goService',
        deskripsi: 'Berikan deskripsi pada jasa kami yaitu kami siap dor tudor di area Tangerang Selatan dan sekitarnya, lakukan pengiklanan di facebook',
        duration: 30,
        target: '17 order service',
        milestone:[8, 12, 15, 17],
        salary: 1_500_000,
        status: 'available',
        category: 'jasa',
        recommend: 'no'
    },
    {
        id: 5,
        asset:['https://down-id.img.susercontent.com/file/87a176a1a1cbd423c6eb84aeaa77a32f', 'https://down-id.img.susercontent.com/file/43c4d66e6942d1885d109627fe395a58'],
        title: 'Botol Air dengan Reminder untuk Minum',
        itemName: 'Botol Reminder',
        deskripsi: 'Sebar luaskan produk Botol Reminder kami di seluruh platform media sosial',
        duration: 60,
        target: '500 botol terjual',
        milestone:[100, 200, 300, 400, 500],
        salary: 5_000_000,
        status: 'taken',
        category: 'produk',
        recommend: 'yes'
    },
    {
        id: 6,
        asset:['https://lzd-img-global.slatic.net/g/p/97a5baeb794b857f418351ac2c5d4e66.jpg_720x720q80.jpg'],
        title: 'Ballpoint Stylus',
        itemName: 'StylePen',
        deskripsi: 'Tolong sebar luaskan produkkami di seluruh platform media sosial dan berikan deskripsi pada produk kami agar terlihat menarik',
        duration: 30,
        target: '800 unit terjual',
        milestone:[200,500,800],
        salary: 5_000_000,
        status: 'available',
        category: 'produk',
        recommend: 'no'
    },
    {
        id: 7,
        asset:['https://www.tukangjakbar.com/wp-content/uploads/sites/17/2021/06/30.-SEDOT-WC.jpg'],
        title: 'Jasa Sedot WC',
        itemName: 'Sedot Berkah',
        deskripsi:'Butuh agen iklan untuk memperluas operasi sedot WC kami, mohon buat draft strategi pemasaran usaha sedot WC. Eksekusi pengiklanan kami serahkan seluruhnya kepada anda.',
        duration: 45,
        target: '30 area',
        milestone:[5, 15, 30],
        salary: 8_000_000,
        status: 'available',
        category: 'jasa',
        recommend: 'yes'
    },
    {
        id: 8,
        asset:['https://www.badut.id/wp-content/uploads/2015/11/IMG_20150822_172002.jpg'],
        title: 'Jasa Badut Ulangtahun',
        itemName: 'Lucuin',
        deskripsi:'Sebarkan informasi jasa sewa badut kami di berbagai media sosial seperti Instagram, Tiktok, Facebook, dll. ',
        duration: 15,
        target: '10 acara',
        milestone:[2, 5, 10],
        salary: 1_500_000,
        status: 'taken',
        category: 'jasa',
        recommend: 'no'
    },
    {
        id: 9,
        asset:['https://inaexport.id/uploads/Eksportir_Product/Image/7201/1618639677_Papertole%203D%20-%20Grebeg%20Gunungan_S2%20086%20-%20Gerebeg%20Gunungan.png','https://www.ponoko.com/blog/wp-content/uploads/2016/05/Vintage-Paper-Tole-2.jpg'],
        title: 'Seni Kriya Papertole',
        itemName: '5 Days Craft',
        deskripsi:'Tolong pasarkan seni Papertole kami ke berbagai pecinta seni, Lakukan riset tentang seni kami dan riset pasarnya sebelum melakukan pengiklanan, silahkan kontak kami untuk bertanya lebih lanjut di nomor 081234567890',
        duration: 20,
        target: '80 papertole terjual',
        milestone:[10,40,60,80],
        salary: 5_000_000,
        status: 'taken',
        category: 'produk',
        recommend: 'no'
    },
    {
        id: 10,
        asset:['https://lzd-img-global.slatic.net/g/p/d66f3c0e565851a5280b126d198ad346.jpg_720x720q80.jpg'],
        title: 'Batik dan Daster',
        itemName: 'Fashion Mpok Sukinah',
        deskripsi:'Sebarkan katalog busana batik dan daster kami ke berbagai media sosial seperti Twitter, Facebook, TikTok',
        duration: 7,
        target: '50 potong baju terjual',
        milestone:[10, 20, 30, 40, 50],
        salary: 1_000_000,
        status: 'available',
        category: 'produk',
        recommend: 'no'
    },
    {
        id: 11,
        asset:['https://i0.wp.com/forestsnews.cifor.org/wp-content/uploads/2020/06/35104418773_ecf1afb468_k.jpg?resize=832%2C415&ssl=1'],
        title: 'Pengrajin Kayu Mebel',
        itemName: 'Sinar Jaya Furniture',
        deskripsi:'Rekomendasikan mebel kami di berbagai platform media sosial kepada orang-orang yang sedang mencari mebel untuk interior ruangan',
        duration: 30,
        target: '70 mebel kayu terjual',
        milestone:[15, 45, 70],
        salary: 7_000_000,
        status: 'available',
        category: 'produk',
        recommend: 'no'
    },
    {
        id: 12,
        asset:['https://id.yamaha.com/id/files/yms_for_adult_1200x480_617716d7715890330b4747baf27de82a.jpg'],
        title: 'Les Musik',
        itemName: 'Mahaya Music',
        deskripsi:'Sebarkan informasi tentang bimbingan musik kami ke berbagai media sosial, pastikan menggunakan gambar dan video yang ada di website kami mahayamusic.com',
        duration: 30,
        target: '25 murid baru',
        milestone:[5, 10, 20, 25],
        salary: 3_000_000,
        status: 'available',
        category: 'jasa',
        recommend: 'no'
    } 
]

function filter(jobs, id) {
    let data = {
        jasa: [],
        produk: [],
        semua: []
    }
    if (id === undefined) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].category === 'jasa') {
                data.jasa.push(jobs[i])
            }
            if (jobs[i].category === 'produk') {
                data.produk.push(jobs[i])
            }
            data.semua.push(jobs[i])
        }
        return data
    } else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === id) {
                return jobs[i]
            }
            
        }
    }

}


function recommend(param) {
    const hasilFilter = filter(jobs)
    let recommendedJasa = []
    let recommededProduk = []

    for (key in hasilFilter) {
        for (let i = 0; i < hasilFilter[key].length; i++) {
            if (hasilFilter[key][i].recommend === 'yes' && key === 'jasa') {
                recommendedJasa.push(hasilFilter[key][i])
            }
            if (hasilFilter[key][i].recommend === 'yes' && key === 'produk') {
                recommededProduk.push(hasilFilter[key][i])
            }
            
        }
    }
    if (param === 'jasa') {
        return recommendedJasa
    }
    if (param === 'produk') {
        return recommededProduk
    }
}

function cards(param) {
    const hasilFilter = filter(jobs)
    let cardsJasa = []
    let cardsProduk = []

    for (key in hasilFilter) {
        for (let i = 0; i < hasilFilter[key].length; i++) {
            if (hasilFilter[key][i].recommend === 'no' && key === 'jasa') {
                cardsJasa.push(hasilFilter[key][i])
            }
            if (hasilFilter[key][i].recommend === 'no' && key === 'produk') {
                cardsProduk.push(hasilFilter[key][i])
            }
            
        }
    }

    if (param === 'jasa') {
        return cardsJasa
    }
    if (param === 'produk') {
        return cardsProduk
    }
}

// AddEventListeners

// document.getElementById("serviceCategory").addEventListener("click", showing('jasa'));
// document.getElementById("productsCategory").addEventListener("click", showing('produk'));

// RECOMMEND SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function showing(param) {
    //show in recommended
    const showRecommended = recommend(param)
    //show in cards
    const showCards = cards(param)

    // tampilkan hasil filter
    let output = {
        recommended: showRecommended,
        card:showCards
    }
    
    const recommendedDiv = document.getElementById('recomend')
    const cardsDiv = document.getElementById('cards')
    cardsDiv.innerHTML = ''
    recommendedDiv.innerHTML = ''

        let toEnglish = ''
        let tagBackground = ''
        let availabletag = ''
       

    for (let i = 0; i < showRecommended.length; i++) {
        if (showCards[i].category === 'jasa') {
            toEnglish = 'SERVICE'
            tagBackground = 'tag-service'
            } else if (showCards[i].category === 'produk') {
            toEnglish = 'PRODUCT'
            tagBackground = 'tag-product'
        }
        
        recommendedDiv.innerHTML += `
        <div class="mySlides fade" id="${showRecommended[i].id}">
            <img src="${showRecommended[i].asset[0]}" style="width:100%">
            <p class="text"><span>[${toEnglish}]</span>${showRecommended[i].title}</p>
            <a onclick="displayDetails(${showRecommended[i].id}, true)" class="btn-recommend">See Detail</a>
        </div>
        `
    }

    recommendedDiv.innerHTML += `
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    `
    plusSlides(1)
    plusSlides(-1)

    for (let i = 0; i < showCards.length; i++) {
        if (showCards[i].category === 'jasa') {
            toEnglish = 'SERVICE'
            tagBackground = 'tag-service'
            } else if (showCards[i].category === 'produk') {
            toEnglish = 'PRODUCT'
            tagBackground = 'tag-product'
        }
        

        if (showCards[i].status === 'available') {
            availabletag = 'tag-available'
        }
        if (showCards[i].status === 'taken') {
            availabletag = 'tag-taken'
        } 

        cardsDiv.innerHTML += `
                <div class="card-box" id="${showCards[i].id}" onclick="displayDetails(${showCards[i].id})">
                    <div class="card-header">
                        <img src="${showCards[i].asset[0]}" alt="">
                    </div>
                    <div class="card-body">
                        <span class="tag ${tagBackground}">${toEnglish}</span>
                        <h4>${showCards[i].title}</h4>
                        <p>${showCards[i].deskripsi}</p>
                        <p>Rp. ${showCards[i].salary}</p>
                        <span class="tag ${availabletag}">${showCards[i].status}</span><br><br>

                    </div>
                </div>
        `
        
        
    }
    return output
}

var idDetailsOld = 0;

function displayDetails(params, fromRecommend = false) {
    const perId = filter(jobs, params)
    const cardDetail = document.getElementById(params)
    const recommendDetail = document.getElementById('recomend')
    const newdetail = document.createElement('div')
    if (document.getElementById(idDetailsOld)) {
        const oldDetail = document.getElementById(idDetailsOld)
        oldDetail.remove()
    }
    console.log(perId);

    newdetail.id = `detail${params}`
    idDetailsOld = newdetail.id
    newdetail.classList.add(`detail`)

    newdetail.innerHTML = `
    
    `
    

    if (fromRecommend === false) {
        if (newdetail.classList.contains('shown')) {
            newdetail.classList.remove('shown')
            newdetail.classList.add('hide')
    
        } else {
            newdetail.classList.remove('hide')
            newdetail.classList.add('shown')
            console.log(newdetail);
        }
        cardDetail.insertAdjacentElement('afterend', newdetail)
        
    } else {
        if (newdetail.classList.contains('shownRecommend')) {
            newdetail.classList.remove('shownRecommend')
            newdetail.classList.add('hide')
    
        } else {
            newdetail.classList.remove('hide')
            newdetail.classList.add('shownRecommend')
            console.log(newdetail);
        }
        recommendDetail.insertAdjacentElement('afterend', newdetail)
    }


}
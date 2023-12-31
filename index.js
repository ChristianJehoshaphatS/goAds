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
        milestone:[2, 5, 8, 10],
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
        milestone:[100, 300, 500, 1000],
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
        milestone:[200, 300, 400, 500],
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
        milestone:[200,400,600,800],
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
        target: '30 order diterima',
        milestone:[5, 15,25, 30],
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
        target: '10 acara berjalan',
        milestone:[2, 5,7, 10],
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
        target: '50 baju terjual',
        milestone:[10, 25, 40, 50],
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
        target: '70 mebel terjual',
        milestone:[15, 30,50, 70],
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
//   dots[slideIndex-1].className += " active";
}

var nowShowing = ''

function showing(param) {
    nowShowing = param
    
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
    recommendedDiv.innerHTML = `
    <h2 class="judul">Recommended</h2>
    `

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


//display details


function displayDetails(params, fromRecommend = false) {
    const perId = filter(jobs, params)
    console.log(perId);
    const cardDetail = document.getElementById(params)
    const recommendDetail = document.getElementById('recomend')
    const newdetail = document.createElement('div')
    if (document.getElementById(idDetailsOld)) {
        const oldDetail = document.getElementById(idDetailsOld)
        oldDetail.remove()
    }

    let toEnglish = ''
    if (perId.category === 'jasa') {
        toEnglish = 'SERVICE'
    } else if (perId.category=== 'produk') {
        toEnglish = "PRODUCT"
    }

    let milestoneText = perId.target.split(' ')
    let milestoneNumber = perId.milestone
    
    newdetail.id = `detail${params}`
    idDetailsOld = newdetail.id
    newdetail.classList.add(`detail`)
    newdetail.innerHTML = `

    <div id="detailContainer" class="small-container">
            <div class="detail-img">
                <img src="${perId.asset[0]}" class="gambar-sepatu">
            </div>
            <div id="newCol" class="col-2">
                <h1>${toEnglish}</h1>
                <h3>${perId.title}</h3>
                <small>${perId.deskripsi}</small>
                <p>Duration: ${perId.duration} days</p>
                <p>Target: ${perId.target}</p>
                <div class="price">
                    <p class="price">Price: Rp. ${perId.salary}</p>
                </div>
                <div class="price">
                    <p id="statusBtn" class="price">Status: ${perId.status}</p>
                </div>
                <a id="acceptBtn" class="btn-accept" onclick="showMilestone(${perId.id}, 'show')">Accept &#x2794;</a>
                <br>
                <input style="display: none" type="checkbox" id="${milestoneNumber[0]}" name="${milestoneNumber[0]}${milestoneText[1]}${milestoneText[2]}" value="">
                <label style="display: none" id="${milestoneNumber[0]}l" for="${milestoneNumber[0]}${milestoneText[1]}${milestoneText[2]}">${perId.milestone[0]} ${milestoneText[1]} ${milestoneText[2]}</label><br>
                <input style="display: none" type="checkbox" id="${milestoneNumber[1]}" name="${milestoneNumber[1]}${milestoneText[1]}${milestoneText[2]}" value="">
                <label style="display: none" id="${milestoneNumber[1]}l" for="${milestoneNumber[1]}${milestoneText[1]}${milestoneText[2]}">${perId.milestone[1]} ${milestoneText[1]} ${milestoneText[2]}</label><br>
                <input style="display: none" type="checkbox" id="${milestoneNumber[2]}" name="${milestoneNumber[2]}${milestoneText[1]}${milestoneText[2]}" value="">
                <label style="display: none" id="${milestoneNumber[2]}l" for="${milestoneNumber[2]}${milestoneText[1]}${milestoneText[2]}">${perId.milestone[2]} ${milestoneText[1]} ${milestoneText[2]}</label><br>
                <input style="display: none" type="checkbox" id="${milestoneNumber[3]}" name="${milestoneNumber[3]}${milestoneText[1]}${milestoneText[2]}" value="">
                <label style="display: none" id="${milestoneNumber[3]}l" for="${milestoneNumber[3]}${milestoneText[1]}${milestoneText[2]}">${perId.milestone[3]} ${milestoneText[1]} ${milestoneText[2]}</label><br>

                <!-- Complete / Cancel -->
                <div id="compcanBtn" class="btn-compcan completeCancel" style="display: none;">
                    <button onclick="completeOrder(${perId.id})" class="btn-complete">Complete Order</button>
                    <button onclick="showMilestone(${perId.id}, 'hide')" class="btn-cancel">Cancel Order</button>
                </div>
            </div>
        </div>
    `

    //milestone
    
    // for (let i = 0; i < perId.milestone.length; i++) {
        
    //     newdetail.innerHTML += `
    //             <input class="milestone" style="display: none" type="checkbox" id="${milestoneNumber}" name="${milestoneNumber}${milestoneText[1]}${milestoneText[2]}" value="">
    //             <label style="display: none" id="${milestoneNumber}l" for="${milestoneNumber}${milestoneText[1]}${milestoneText[2]}">${milestoneNumberText}</label><br>
    //     `
    // }

   
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

function showMilestone(params, toggle) {
    const perId = filter(jobs, params)
    perId.status = 'taken'
    const milestones = perId.milestone
    const statusButton = document.getElementById('statusBtn')

    if (toggle === 'show') {
        console.log('show');
        for (let i = 0; i < milestones.length; i++) {
            const eachMilestone = document.getElementById(milestones[i])
            const eachMilestoneLabel = document.getElementById(`${milestones[i]}l`)
            const accept = document.getElementById('acceptBtn')
            accept.style.display = 'none'
            statusButton.innerText = 'Status: Taken'
            eachMilestone.style=''
            eachMilestoneLabel.style=''
        }
        const compCanBtn = document.getElementById('compcanBtn')
        compCanBtn.style=''
    } else if (toggle === 'hide'){
        console.log('hide');

        for (let i = 0; i < milestones.length; i++) {
            const eachMilestone = document.getElementById(milestones[i])
            const eachMilestoneLabel = document.getElementById(`${milestones[i]}l`)
            const accept = document.getElementById('acceptBtn')
            statusButton.innerText = 'Status: Available'

            accept.style=''
            eachMilestone.style.display = 'none'
            eachMilestoneLabel.style.display = 'none'
        }
        const compCanBtn = document.getElementById('compcanBtn')
        compCanBtn.style.display = 'none'
    }
    
}

function completeOrder(param) {
    const perId = filter(jobs, param)
    const milestones = perId.milestone

    let temp = []
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id !== param) {
            temp.push(jobs[i])
        } 
    }
    const completeArea = document.getElementById('compcanBtn')
    document.getElementById('statusBtn').innerHTML = 'Status: <span class="complete">Completed</span>'

    for (let i = 0; i < milestones.length; i++) {
        const eachMilestone = document.getElementById(milestones[i])
        const eachMilestoneLabel = document.getElementById(`${milestones[i]}l`)

        eachMilestone.style.display = 'none'
        eachMilestoneLabel.style.display = 'none'
    }


    completeArea.innerHTML = `
    <div class="congrats">Congratulations for Completing ${jobs[param-1].title}</div>
    <div class="btn" onclick="deleteDetail()">Browse Other Jobs</div>

    `
    jobs = temp
    showing(nowShowing)


}

function deleteDetail() {
    if (document.getElementById(idDetailsOld)) {
        const oldDetail = document.getElementById(idDetailsOld)
        oldDetail.remove()
    }
    
}

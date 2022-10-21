const mongoose = require('mongoose')
const Category = require('../models/categoryModel')
const NewArrival = require('../models/newArrivalModel')
const PopularCategory = require('../models/popularCategoryModel')
const InstagramImage = require('../models/instagramImageModel')
const FashionBlog = require('../models/fashionBlogModel')
const TrendingNow = require('../models/trendingNowModel')
const Sale = require('../models/saleModel')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const categories = [
  {
    title:"Women's",
    url: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article4221.jpg"
  },
  {
    title:"Men's",
    url: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/06/26/Pictures/_8e6f1136-791b-11e8-8d5f-3f0c905295d2.jpg"
  },
  {
    title:"Kids'",
    url: "https://4.imimg.com/data4/NW/TW/MY-25800967/kids-wear-500x500.jpg"
  }
]

// categories.forEach(category => {
//   const newCategory = new Category({
//     title: category.title,
//     url: category.url
//   })

//   newCategory.save()
// })

const newArrivals = [
  {
    name:"Black and white sport cap",
    price: "$18.15",
    url: "https://deltasport.ua/upload/resize_cache/iblock/d58/501_501_0/8_087723503_a.jpg",
    stars: "5"
  },
  {
    name:"Metal bridge sunglasses",
    price: "$89.95",
    url: "https://m.media-amazon.com/images/I/61IQqeHVXQL._UX569_.jpg",
    stars: "0"
  },
  {
    name:"Green baby romper",
    price: "$20.40",
    url: "https://cdn.elatry.com/pub/company/8f93ba26-1fe4-4398-8ead-8a6d2dc16e70/files/public/products/48/aa06735835f5ffb50722f542b199ab0e_small.jpg",
    stars: "4"
  },
  {
    name:"Mid-rise slim cropped fit jeans",
    price: "$40.00",
    url: "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/3_4Ratio/G28/shotview/1614/U28-791s.jpg",
    stars: "0"
  },
  {
    name:"Red dangle earrings",
    price: "$29.95",
    url: "https://www.eredijovon.com/4207-thickbox_default/red-coral-dangle-earrings-filigree-gold-set.jpg",
    stars: "5"
  },
  {
    name:"Baby shoes with laces",
    price: "$30.60",
    url: "https://www.cachetkids.co.uk/prodimages/POR/UL5397_SHOES_BLUE.jpg",
    stars: "0"
  }
]

// newArrivals.forEach(newArrival => {
//   const brandNewArrivals = new NewArrival({
//     name: newArrival.name,
//     price: newArrival.price,
//     url: newArrival.url,
//     stars: newArrival.stars
//   })

//   brandNewArrivals.save()
// })

const popularCategories = [
  {
    title:"Tops",
    url: "https://m.media-amazon.com/images/I/61l9ah6a4iL._AC_UY1000_.jpg"
  },
  {
    title:"T-shirts",
    url: "https://media.glamourmagazine.co.uk/photos/62a890505deb6cd6c37d9600/1:1/w_1920,h_1920,c_limit/WHITE%20TSHIRTS%20140622%20default-sq-GettyImages-1398817154.jpg"
  },
  {
    title:"Caps",
    url: "https://m.media-amazon.com/images/I/61G6HqHEpZL._UX679_.jpg"
  },
  {
    title:"Sandals",
    url: "https://i.etsystatic.com/9054727/r/il/d9ecb7/1345418302/il_570xN.1345418302_bud0.jpg"
  },
  {
    title:"Jackets",
    url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6832202/2022/2/22/c76c4342-4777-48ee-a72c-5496dcb3988b1645509675836-WROGN-Men-Charcoal-Grey-Solid-Bomber-4691645509675159-1.jpg"
  },
  {
    title:"Coats",
    url: "https://i.etsystatic.com/12506055/r/il/925ed5/1838179340/il_570xN.1838179340_sioa.jpg"
  }
]

// popularCategories.forEach(popularCategory => {
//   const newPopularCategory = new PopularCategory({
//     title: popularCategory.title,
//     url: popularCategory.url
//   })

//   newPopularCategory.save()
// })

const instagramImages = [
  {
    url: "https://i.pinimg.com/736x/fb/b7/87/fbb7878fa4d66724416bcc9e801a1b12.jpg"
  },
  {
    url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/14CCA/production/_126749158_b3d03870-49a8-41de-b031-bf3537e4e15e.jpg"
  },
  {
    url: "https://media.thetab.com/blogs.dir/90/files/2018/11/dress-accessories-accessory-necklace-jewelry-apparel-clothing-pendant-human-person.jpg"
  }
]

// instagramImages.forEach(instagramImage => {
//   const newInstagramImage = new InstagramImage({
//     url: instagramImage.url
//   })

//   newInstagramImage.save()
// })

const fashionBlogs = [
  {
    title: "Bag Trends for Summer 2020",
    url: "https://i.pinimg.com/originals/74/23/37/742337d7f56a72d340ef0062fc33d667.png",
    category: "Fashion",
    date: "August 24, 2020",
    comments: "No comments",
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis..."
  },
  {
    title: "Top 10 of This Season's Hottest Sneakers",
    url: "https://media.gq.com/photos/61b2573eb94bd2fd84f0a015/master/pass/sneakers-refresh.jpg",
    category: "Lifestyle",
    date: "July 16, 2020",
    comments: "4 comments",
    text: "Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus..."
  }
]

// fashionBlogs.forEach(fashionBlog => {
//   const newFashionBlog = new FashionBlog({
//     title: fashionBlog.title,
//     url: fashionBlog.url,
//     category: fashionBlog.category,
//     date: fashionBlog.date,
//     comments: fashionBlog.comments,
//     text: fashionBlog.text,
//   })

//   newFashionBlog.save()
// })

const trendingNowItems = [
  {
    name:"Shirt with insertion lace trims",
    price: "$49.95",
    url: "https://i.pinimg.com/736x/46/a1/90/46a1907c837caa1bf0b1273c46bca4b9.jpg",
    stars: 5
  },
  {
    name:"Chrono watch with blue leather belt",
    price: "$120.60",
    url: "https://www.armani.com/variants/images/17266703523686530/R/w400.jpg",
    stars: 4
  },
  {
    name:"Check coat with colour contrast",
    price: "$183.45",
    url: "https://static.massimodutti.net/3/photos/2020/I/0/1/p/6438/948/710/6438948710_2_2_16.jpg",
    stars: 0
  },
  {
    name:"Shirt",
    price: "$59.75",
    url: "https://assets.ajio.com/medias/sys_master/root/20220812/hgVH/62f55ef4f997dd03e23f2d49/-1117Wx1400H-461866963-blue-MODEL.jpg",
    stars: 5
  },
  {
    name:"Coat",
    price: "$203.25",
    url: "https://thecoat.com.ua/storage/app/uploads/public/624/318/3e1/6243183e15eae486801698.jpg",
    stars: 4
  },
  {
    name:"Watch",
    price: "$132.15",
    url: "https://www.danielwellington.com/product-images/dw00100231_petite_st-jeO78gfr.png",
    stars: 4
  }
]

// trendingNowItems.forEach(trendingNow => {
//   const newTrendingNowItems = new TrendingNow({
//     name: trendingNow.name,
//     url: trendingNow.url,
//     price: trendingNow.price,
//   })

//   newTrendingNowItems.save()
// })

const Sales = [
  {
    name:"Leather crossbody bag with gold hardware",
    price: "$89.50",
    oldprice: "$179.00",
    url: "https://i.etsystatic.com/17789235/r/il/071829/3542388171/il_fullxfull.3542388171_rbh2.jpg",
    stars: 5
  },
  {
    name:"Skinny push-up jeans",
    price: "$40.00",
    oldprice: "$80.00",
    url: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37010104_TO.jpg?ts=1652965721126&imwidth=412&imdensity=2",
    stars: 0
  },
  {
    name:"Wide heel suede ankle boots",
    price: "$119.16",
    oldprice: "$148.95",
    url: "https://www.bodenimages.com/productimages/r1aproductlarge/21wwin_a1068_blk.jpg",
    stars: 5
  },
  {
    name:"Bag",
    price: "$80.00",
    oldprice: "$170.10",
    url: "https://cdn.shopify.com/s/files/1/2780/3536/products/Hadley_Pro_Khaki_Tan_shadow_Canvas_505233-70_1000x.jpg?v=1649163852",
    stars: 0
  },
  {
    name:"Jeans",
    price: "$35.00",
    oldprice: "$79.00",
    url: "http://cdn.shopify.com/s/files/1/0293/9277/products/Our_Favorite_High_Rise_Skinny_Jeans_-_Medium_Blue_Wash_MER_1200x1200.jpg?v=1664238710",
    stars: 0
  },
  {
    name:"Boots",
    price: "$130.15",
    oldprice: "$162.30",
    url: "https://cdn.shopify.com/s/files/1/1678/9107/products/Untitleddesign_7.jpg?v=1624288799",
    stars: 0
  },
]

// Sales.forEach(sale => {
//   const newSale = new Sale({
//     name: sale.name,
//     url: sale.url,
//     price: sale.price,
//     oldprice: sale.oldprice,
//     stars: sale.stars,
//   })

//   newSale.save()
// })

module.exports = connectDB

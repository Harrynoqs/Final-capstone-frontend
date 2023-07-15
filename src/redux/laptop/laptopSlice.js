import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {

  laptoplibrary: [{"image": "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5", "model" : "ThinkBook 16 Gen 4", "name" :"Lenovo", 'id': 1, "description": "HP 15.6 Full HD (1920 x 1080) Laptop, Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 10 Home, Natural"},

  {"image": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07993148.png", "model" : "HP Laptop 15-dw3350ne", "name" :"Hp", 'id': 2, "description": "HP 15.6 Full HD (1920 x 1080) Laptop, Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 10 Home, Natural"},
  {"image": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-7530/media-gallery/laptop-latitude-15-7530-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=666&qlt=100,1&resMode=sharp2&size=666,402&chrss=full", "model" : "Dell Latitude 7530", "name" :"Dell", 'id': 3, "description": "HP 15.6 Full HD (1920 x 1080) Laptop, Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 10 Home, Natural"},
  {"image": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-7530/media-gallery/laptop-latitude-15-7530-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=666&qlt=100,1&resMode=sharp2&size=666,402&chrss=full", "model" : "Dell Latitude 7530", "name" :"Dell", 'id': 3, "description": "HP 15.6 Full HD (1920 x 1080) Laptop, Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 10 Home, Natural"},
  {"image": "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=555&qlt=100,1&resMode=sharp2&size=555,402&chrss=full", "model" : "Latitude 14-Inch 3420", "name" :"Dell", 'id': 4, "description": "HP 15.6 Full HD (1920 x 1080) Laptop, Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 10 Home, Natural"}
  ]
}

const laptopSlice = createSlice({
  name: 'library',
  initialState,

  reducers: {},
  
});



export default laptopSlice.reducer;


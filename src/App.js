import { useEffect } from 'react';
import useState from 'react-usestateref'
import { Carousel22 } from './ButtonGroups';
import { Carousel } from './carousel';
import $ from 'jquery'
import './photo/transparetn_8a6306a2-9c45-4f5b-8c26-1b49afeb002f.png@v=1700953112&width=600'
import video from './images/3.gif'
import video1 from './images/4.gif'
import video2 from './images/5.gif'

import korich from './photo/photo/10.jpg'
import grey from './photo/photo/13.jpg'
import Coral_Pink from './photo/photo/14.jpg'
import blue from './photo/photo/8.jpg'
import pink from './photo/photo/7.jpg'

import set_message from './message';
import { createOrder, getOrder } from './http/orderAPI';
function App() {
	function randomString(length) {
		return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
	}
	var items = 
[ 
	{id: '12309432',name: 'Fluffy Sock Slippers', price: '1190', quantity: 0, color: 'Коричневый', img: korich},
	{id: '12309433',name: 'Fluffy Sock Slippers', price: '1190', quantity: 0, color: 'Серый', img: grey},
	{id: '12309434',name: 'Fluffy Sock Slippers', price: '1190', quantity: 0, color: 'Кораловый', img: Coral_Pink},
	{id: '12309435',name: 'Fluffy Sock Slippers', price: '1190', quantity: 0, color: 'Синий', img: blue},
	{id: '12309435',name: 'Fluffy Sock Slippers', price: '1190', quantity: 0, color: 'Розовый', img: pink},
];
const olLoad = async() => {

			localStorage.setItem('items', JSON.stringify(items));
			summa(items)
			setitemss(items)

			const it = [ ]	
			items.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
			localStorage.setItem('items1', JSON.stringify(it));	
			summa(it)
	        rasschet()
			setit(it)
		
		
		
	}


	useEffect(() => {
		$('.height_154').addClass('border_')
		if(items){
			if(localStorage.getItem('items')!==null){
				
				const items = localStorage.getItem('items')
				setitemss(JSON.parse(items))
				const qw = JSON.parse(items)
				console.log(setitemssRef.current)
				const itemss1 = localStorage.getItem('items1')

			if(itemss1!==null){
			  const it = [ ]	
              qw.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
			  localStorage.setItem('items1', JSON.stringify(it));
			  console.log(it)
			  
			  summa(it)
		rasschet()
			  setit(it)
			}else{
				const it = [ ]	
				qw.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
				localStorage.setItem('items1', JSON.stringify(it));
				console.log(it)
				
				summa(it)
		rasschet()
				setit(it)
			}
			}else{
				localStorage.setItem('items', JSON.stringify(items));
				summa(items)
				setitemss(items)
				console.log(setitemssRef.current)
			}
			
			
		}
		
		
	  }, [])
	  const click = async() => {

		if(col_vo===0){
			set_message("Ваша корзинка пуста",'error')
			return
		}
		if(setphoneRef.current===0){
			set_message("Пожалуйста укажите ваш телефон",'error')
			return
		}
		if(setemailRef.current===0){
			set_message("Пожалуйста укажите вашу почту",'error')
			return
		}
		if(setFamiliaRef.current===0){
			set_message("Пожалуйста укажите все данные ФИО",'error')
			return
		}
		if(setNameRef.current===0){
			set_message("Пожалуйста укажите все данные ФИО",'error')
			return
		}
		if(setOtchestvoRef.current===0){
			set_message("Пожалуйста укажите все данные ФИО",'error')
			return
		}
		if(setGorodRef.current===0){
			set_message("Пожалуйста укажите город доставки",'error')
			return
		}
		if(setStreetRef.current===0){
			set_message("Пожалуйста укажите улицу",'error')
			return
		}
		if(setDomRef.current===0){
			set_message("Пожалуйста укажите дом",'error')
			return
		}
		if(setkvRef.current===0){
			set_message("Пожалуйста укажите квартиру",'error')
			return
		}
		if(setindexRef.current===0){
			set_message("Пожалуйста укажите почтовый индекс",'error')
			return
		}
		const track_number = randomString(10)
		
	const order =  await createOrder(
		setemailRef.current,
		setphoneRef.current,
		`${setGorodRef.current} ${setStreetRef.current} ${setDomRef.current} ${setkvRef.current}`,
		setindexRef.current,
		`TS${track_number}`,
		'Вычисляется',
		'Оплачен и ожидает сборки',
		'Вычисляется',
		'Вычисляется',
		`${setNameRef.current} ${setFamiliaRef.current} ${setOtchestvoRef.current}`,
		)
		olLoad()
		console.log(order)
	  }
	  const handleClick = e => {
		$('.height_154').removeClass('border_')
		$('.height_150').removeClass('border_')

        const link = e.target.getAttribute('activ')
		console.log(link)
		if(link==='height_150'){
			setproduct(0)
		}
		if(link==='height_154'){
		   setproduct(1)
		}
        $(`.${link}`).addClass('border_')
      };

	  

	  const click2 = async() => {
		if(settrack_numberRef.current!==0){
			console.log(settrack_numberRef.current)
			const order = await getOrder(settrack_numberRef.current)
			setzakazchik(order.data.FIO)
			setstatus(order.data.status)
			setpunkt(order.data.punkt)
			setadres(order.data.status)
			setpdata(order.data.data)
			console.log(order)
		}
           
	  }
	const add_item = async() => {

		if(product===1){
			// const img = poisk(setcolorRef.current,setimg)

			const itemss = localStorage.getItem('items')
			const itemsss= JSON.parse(itemss)

			
			
			itemsss.map(ite=>{if(ite.color===setcolorRef.current){
				ite.quantity=ite.quantity+1
				setadd([{name: ite.name, color: ite.color, img: ite.img}])
			} } )
			localStorage.setItem('items', JSON.stringify(itemsss));
			console.log(setaddRef.current)


			const itemss1 = localStorage.getItem('items1')

			if(itemss1!==null){
			  const it = [ ]	
              itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
			  localStorage.setItem('items1', JSON.stringify(it));
			  console.log(it)

			  
			  summa(it)
		rasschet()
			  console.log(it)
			  setit(it)
			}else{
				const it = [ ]	
				itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
				localStorage.setItem('items1', JSON.stringify(it));
				console.log(it)
				
				summa(it)
		rasschet()
				setit(it)
			}
			
			

			// var items1 = 
			// [ 
			// 	{id: '12309432',name: 'Fluffy Sock Slippers', price: '1990', quantity: '1', color: setcolorRef.current, img:setimgRef.current },
            //  ];
			//  localStorage.setItem('items', 1);
		}

		if(product===0){


			const itemss = localStorage.getItem('items')
			const itemsss= JSON.parse(itemss)
			
           const itt_ =[]

			itemsss.map(ite=>{if(ite.color===setcolor1Ref.current){ite.quantity=ite.quantity+1
				itt_.push({name: ite.name, color: ite.color, img: ite.img})
			} } )

			itemsss.map(ite=>{if(ite.color===setcolor2Ref.current){ite.quantity=ite.quantity+1
				itt_.push({name: ite.name, color: ite.color, img: ite.img})
			} } )

			itemsss.map(ite=>{if(ite.color===setcolor3Ref.current){ite.quantity=ite.quantity+1
				itt_.push({name: ite.name, color: ite.color, img: ite.img})
			} } )

			setadd(itt_)
            console.log(setaddRef.current)
			localStorage.setItem('items', JSON.stringify(itemsss));
			console.log(itemsss)

			const itemss1 = localStorage.getItem('items1')

			if(itemss1!==null){
			  const it = [ ]	
              itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
			  localStorage.setItem('items1', JSON.stringify(it));
			  console.log(it)
			  
			  summa(it)
		rasschet()
			  setit(it)
			}else{
				const it = [ ]	
				itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
				localStorage.setItem('items1', JSON.stringify(it));
				
				console.log(it)
				summa(it)
		rasschet()
				setit(it)
			}
			// const img1 = poisk(setcolor1Ref.current,setimg1)
			// const img2 = poisk(setcolor2Ref.current,setimg2)
			// const img3 = poisk(setcolor3Ref.current,setimg3)
			// var items1 = 
			// [ 
			// 	{id: '12309432',name: 'Fluffy Sock Slippers', price: '1990', quantity: '1', color: setcolor1Ref.current, img: setimg1Ref.current},
			// 	{id: '12309432',name: 'Fluffy Sock Slippers', price: '1990', quantity: '1', color: setcolor2Ref.current, img: setimg2Ref.current},
			// 	{id: '12309432',name: 'Fluffy Sock Slippers', price: '1990', quantity: '1', color: setcolor3Ref.current, img: setimg3Ref.current},
			// ];
			// localStorage.setItem('items', 1);
		}
		
      
		// localStorage.setItem('items', 1);
	}

	const summa = async(it) => {
		var x= 0
		
		const col_dev__ = (it.map(d=>(x+=(d.quantity) ),x=0).reverse()[0])
	   console.log(col_dev__)
		setcol_vo(col_dev__)
		if(col_dev__===undefined){
			setcol_vo(0)
			$('.svg_').addClass('svg_activ')
			$('.posithion').addClass('d_none') 
		}else{
			$('.svg_').removeClass('svg_activ')
			$('.posithion').removeClass('d_none') 
		}
	}

	const minus = async(color) => {
	const itemss = localStorage.getItem('items')
	const itemsss= JSON.parse(itemss)

	
	
	itemsss.map(ite=>{if(ite.color===color){ite.quantity=ite.quantity-1} } )
	localStorage.setItem('items', JSON.stringify(itemsss));
	console.log(itemsss)


	const itemss1 = localStorage.getItem('items1')

	if(itemss1!==null){
	  const it = [ ]	
	  itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
	  localStorage.setItem('items1', JSON.stringify(it));
	  console.log(it)
	  
	  summa(it)
		rasschet()
	  setit(it)
	}else{
		const it = [ ]	
		itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
		localStorage.setItem('items1', JSON.stringify(it));
		console.log(it)
		
		summa(it)
		rasschet()
		setit(it)
	}
}
const plus = async(color) => {
	const itemss = localStorage.getItem('items')
	const itemsss= JSON.parse(itemss)

	
	
	itemsss.map(ite=>{if(ite.color===color){ite.quantity=ite.quantity+1} } )
	localStorage.setItem('items', JSON.stringify(itemsss));
	console.log(itemsss)


	const itemss1 = localStorage.getItem('items1')

	if(itemss1!==null){
	  const it = [ ]	
	  itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
	  localStorage.setItem('items1', JSON.stringify(it));
	  console.log(it)
	  
	  summa(it)
		rasschet()
	  setit(it)
	}else{
		const it = [ ]	
		itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
		localStorage.setItem('items1', JSON.stringify(it));
		console.log(it)
		
		summa(it)
		rasschet()
		setit(it)
	}
}

const delet = async(color) => {
	const itemss = localStorage.getItem('items')
	const itemsss= JSON.parse(itemss)

	
	
	itemsss.map(ite=>{if(ite.color===color){ite.quantity=0} } )
	localStorage.setItem('items', JSON.stringify(itemsss));
	console.log(itemsss)


	const itemss1 = localStorage.getItem('items1')

	if(itemss1!==null){
	  const it = [ ]	
	  itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
	  localStorage.setItem('items1', JSON.stringify(it));
	  console.log(it)
	  
	  summa(it)
		rasschet()
	  setit(it)
	}else{
		const it = [ ]	
		itemsss.map(ite=>{if(ite.quantity!==0){it.push(ite);} } )
		localStorage.setItem('items1', JSON.stringify(it));
		console.log(it)
		summa(it)
		rasschet()
		rasschet()
		setit(it)
	}
}

const rasschet = async() => {
	const itemss = localStorage.getItem('items1')
	const itemsss= JSON.parse(itemss)
	var x= 0
	var col_dev__ = (itemsss.map(d=>(x+=(d.quantity*d.price) ),x=0).reverse()[0])
	if(setcol_voRef.current===3 || setcol_voRef.current>3 ){
		setplata(col_dev__-(col_dev__*0.1))
		setskidka(col_dev__+col_dev__+(col_dev__*0.1))
		console.log(col_dev__)
	}else{
		setplata(col_dev__)
        setskidka(col_dev__+col_dev__)
	}
	

}
	const poisk = async(color,number) => {
		items.map(item=> {if(item.color===color){number(item.img)} } )
		console.log(number)
	}

	const [product,setproduct] = useState(1)

const [color1,setcolor1,setcolor1Ref] = useState(items[0].color)
const [color2,setcolor2,setcolor2Ref] = useState(items[0].color)
const [color3,setcolor3,setcolor3Ref] = useState(items[0].color)

const [img1,setimg1,setimg1Ref] = useState(items[0].img)
const [img2,setimg2,setimg2Ref] = useState(items[0].img)
const [img3,setimg3,setimg3Ref] = useState(items[0].img)

const [img,setimg,setimgRef] = useState(items[0].img)
const [color,setcolor,setcolorRef] = useState(items[0].color)
const [itemss,setitemss,setitemssRef] = useState()

const [it,setit,setitRef] = useState()


const [phone,setphone,setphoneRef] = useState(0)
const [email,setemail,setemailRef] = useState(0)
const [Familia,setFamilia,setFamiliaRef] = useState(0)
const [Name,setName,setNameRef] = useState(0)
const [Otchestvo,setOtchestvo,setOtchestvoRef] = useState(0)
const [Gorod,setGorod,setGorodRef] = useState(0)
const [Street,setStreet,setStreetRef] = useState(0)
const [Dom,setDom,setDomRef] = useState(0)
const [kv,setkv,setkvRef] = useState(0)
const [index,setindex,setindexRef] = useState(0)


const [zakazchik,setzakazchik,setzakazchikRef] = useState('-')
const [status,setstatus,setstatusRef] = useState('-')
const [punkt,setpunkt,setpunktRef] = useState('-')
const [adres,setadres,setadresRef] = useState('-')
const [pdata,setpdata,setpdataRef] = useState('-')
const [track_number,settrack_number,settrack_numberRef] = useState('-')


const [plata,setplata,setplataRef] = useState(0)

const [skidka,setskidka,setskidkaRef] = useState(0)
const [col_vo,setcol_vo,setcol_voRef] = useState(0)

var add1 = 
	[{name: 'Fluffy Sock Slippers', color: 'Розовый', img: 'https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'}
	]
const [add,setadd,setaddRef] = useState(add1)


    return (
      <div className="app">
        
<div class='nav_'>
<svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" class='color stroke'  width={'20px'} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="stroke icon icon-hamburger" viewBox="0 0 18 16">
  <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
</path></svg>

<div class='color fs_nav'>
	Fluffy Sock
</div>
<svg   data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample1" width={'45px'}  class=" stroke icon icon-cart-empty" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<div class="cart-count-bubble"><span>{col_vo}</span><span class="visually-hidden">6 items</span>
  </div>
</div>
 <div id="container" class="cf">
 

	<div id="main" role="main">
      <section class="slider">
        <div id="slider" class="flexslider">
          <ul class="slides">
		  {items.map(device =>
			<li>
  	    	    <img class='imgg' src={device.img} />
  	    		</li>
		  )}
           
          </ul>

		  
        </div>
        <div id="carousel" class="flexslider flexslider_">
          <ul class="slides">
		  {items.map(device =>
			<li>
  	    	    <img class='imgg' src={device.img} />
  	    		</li>
		  )}
           
          </ul>
        </div>
      </section>

	  <div class='container_'>

	  
	<div class='d_flex'>



	<svg width={'18px'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.867 53.867" ><polygon style={{fill:'#EFCE4A'}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/></svg>
	<svg width={'18px'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.867 53.867" ><polygon style={{fill:'#EFCE4A'}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/></svg>
	<svg width={'18px'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.867 53.867" ><polygon style={{fill:'#EFCE4A'}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/></svg>
	<svg width={'18px'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.867 53.867" ><polygon style={{fill:'#EFCE4A'}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/></svg>
	<svg width={'18px'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.867 53.867" ><polygon style={{fill:'#EFCE4A'}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/></svg>
   <div class='text_1_'>
   1820 Отзывов
   </div>

   
    </div>
	<div class="product__title color">
                Fluffy Sock Slippers
            
              </div>
<div class='d_fl'>


			  <s class="fs_16_ color price-item price-item--regular">
            
			  2380Р
            
          </s>
		  <span class=" fs_17 ml_10 price-item price-item--sale price-item--last">
		  1190Р
      </span>

	  <div class='but_'>
        -50%
	  </div>

	  </div>
	  <div class="kaching-bundles__block-title">BUNDLE 🎁 FOR XMAS</div>
	
	 
<div class='sale_but_1 height_154'onClick={handleClick} activ='height_154'>
		<div class='ddd'onClick={handleClick} activ='height_154'>
		<div class='container_1 mt_20' onClick={handleClick} activ='height_154'>

	<div class='dflex'onClick={handleClick} activ='height_154'>

	



<div class='d_fl_'onClick={handleClick} activ='height_154'>
	<div class='text_2 c_black'onClick={handleClick} activ='height_154'>
	Со Скидкой
	</div>
	<div class='text_3'onClick={handleClick} activ='height_154'>
		Обычная цена
	</div>
</div>
</div>

<div  onClick={handleClick} activ='height_154' class='d_fl_'>
<span onClick={handleClick} activ='height_154' class=" fs_17 ml_10 price-item price-item--sale price-item--last">
1190Р
      </span>
	<s class="mt_10 color price-item price-item--regular">
            
	2380Р
		  
		</s>
</div>
</div>



</div>
<div onClick={handleClick} activ='height_154' class='select_display'>

<div onClick={handleClick} activ='height_154' class="w_33 w_"></div>
<div onClick={handleClick} activ='height_154' class="w_33 w_ color">x1 COLORS</div>
<div onClick={handleClick} activ='height_154' class="w_33 w_"></div>

</div>

<div onClick={handleClick} activ='height_154' class='select_display select_display_1'>




<div onClick={handleClick} activ='height_154' class="kaching-bundles__bar-variant-selects">

	<select onChange={e => setcolor(e.target.value)}  onClick={handleClick} activ='height_154' class="select_2 kaching-bundles__bar-variant-select">
	{items.map(device =>
			<option  value={device.color}>{device.color} </option>
		  )}
		</select>

		</div>


</div>

</div>
<div class='sale_but_1 height_150'onClick={handleClick} activ='height_150' >
		<div onClick={handleClick} activ='height_150'class='ddd' >
		<div onClick={handleClick} activ='height_150'class='container_1 mt_20'>

	<div onClick={handleClick} activ='height_150' class='dflex'>

	



<div onClick={handleClick} activ='height_150'class='d_fl_'>
	<div onClick={handleClick} activ='height_150'class='text_2 c_black'>
	 С супер скидкой
	</div>
	<div onClick={handleClick} activ='height_150'class='text_3'>
		Обычная цена
	</div>
</div>
</div>

<div onClick={handleClick} activ='height_150'class='d_fl_'>
<span onClick={handleClick} activ='height_150'class=" c_black fs_17 ml_10 price-item price-item--sale price-item--last">
        1190Р
      </span>
	<s onClick={handleClick} activ='height_150'class="mt_10 color price-item price-item--regular">
            
	2380Р
		  
		</s>
</div>
</div>



</div>
<div onClick={handleClick} activ='height_150'class='select_display '>

<div onClick={handleClick} activ='height_150'class="w_33 w_"></div>
<div onClick={handleClick} activ='height_150'class="w_33 w_ color">x3 COLORS</div>
<div onClick={handleClick} activ='height_150'class="w_33 w_"></div>

</div>

<div onClick={handleClick} activ='height_150'class='select_display select_display_1'>


<div onClick={handleClick} activ='height_150'class=" w_33 kaching-bundles__bar-variant-selects">
	<select onChange={e => setcolor1(e.target.value)}  onClick={handleClick} activ='height_150'class=" select_1 kaching-bundles__bar-variant-select">

{items.map(device =>
			<option onClick={()=>setcolor1(device.color)} value={device.color}>{device.color} </option>
		  )}
		</select></div>
		<div onClick={handleClick} activ='height_150' class=" w_33 kaching-bundles__bar-variant-selects">
	<select onChange={e => setcolor2(e.target.value)} activ='height_150' class=" select_1 kaching-bundles__bar-variant-select">

{items.map(device =>
			<option onClick={()=>setcolor2(device.color)} value={device.color}>{device.color} </option>
		  )}
		</select></div>
		<div onClick={handleClick} activ='height_150' class=" w_33 kaching-bundles__bar-variant-selects">
	<select onChange={e => setcolor3(e.target.value)}  activ='height_150' class=" select_1 kaching-bundles__bar-variant-select">

{items.map(device =>
			<option  value={device.color}>{device.color} </option>
		  )}
		</select></div>

</div>

</div>


<div class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={add_item} class='buy_but'>
	Добавить в корзину
</div>

{/* <div class='title_acco aa'>
	<div>
	<svg width={'30px'} class="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
	<path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
	<path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
	<path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path></svg>

	</div>

<div class='pd-l'>
Доставка от 7 до 14 дней по всей России
</div>


</div> */}

<div class="accordion accordion-flush" id="accordionFlushExample">
<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
	
	  <div>
	<svg   width={'30px'} class="fill icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
	<path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
	<path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
	<path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path></svg>

	</div>
	  <div class='pd-l'>
	  Доставка
		</div> 
      </button>
    </h2>
    <div id="flush-collapseOne1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
      <div class="accordion-body">
	   Доставим заказ за 14 дней в ближайший пункт выдачи. Мы заботимся о своих клиентах, поэтому всегда соблюдаем сроки доставки.<br/>Отследить свой заказ вы можете у нас на сайте по трек номеру, который генерируется вам на почту сразу после оплаты заказа.
	  
	  </div>
	
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
	  <svg width={'20px'} class="fill icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 5.2393L8.5149 3.77392C6.79996 2.08174 4.01945 2.08174 2.30451 3.77392C0.589562 5.4661 0.589563 8.2097 2.30451 9.90188L10 17.4952L17.6955 9.90188C19.4104 8.2097 19.4104 5.4661 17.6955 3.77392C15.9805 2.08174 13.2 2.08174 11.4851 3.77392L10 5.2393ZM10.765 3.06343C12.8777 0.978857 16.3029 0.978856 18.4155 3.06343C20.5282 5.148 20.5282 8.52779 18.4155 10.6124L10.72 18.2057C10.3224 18.5981 9.67763 18.5981 9.27996 18.2057L1.58446 10.6124C-0.528154 8.52779 -0.528154 5.14801 1.58446 3.06343C3.69708 0.978859 7.12233 0.978858 9.23495 3.06343L10 3.81832L10.765 3.06343Z" fill-rule="evenodd"></path></svg>
	  <div class='pd-l'>
	  Описание
		</div> 
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
	  Пушистые носки, также известные как пушистые или уютные тапочки, созданы для комфорта и тепла. Вот некоторые общие черты, которые вы можете найти в этих типах тапочек:
	  
	  </div>
	  <div class="accordion-body accordion-body_1">
	  <div class='margin_r_'>
	  •</div>❤️ Изготовлены из мягких и гипоаллергенных материалов . Это обеспечивает ощущение уюта и комфорта на коже.
	  </div>
	  <div class="accordion-body accordion-body_1">
	  <div class='margin_r_'>
	  •</div>❤️ Fluffy Sock имеют универсальный размер, который подойдет и детям и взрослым.
	  </div>

	  <div class="accordion-body accordion-body_1">
	  <div class='margin_r_'>
	  •</div>❤️ Очень удобная эластичная ткань, прекрасный подарок себе или друзьям.
	  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
	  
	  <svg viewBox="0 0 24 24" class="stroke" width={'20px'} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5"  stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 22H9M3 22H5.5"  stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 22V15"  stroke-width="1.5" stroke-linecap="round"></path> <path d="M5 22V15"  stroke-width="1.5" stroke-linecap="round"></path> <path d="M11.9999 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2H16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
	  <div class='pd-l'>
	  Получение
		</div> 
      </button>
    </h2>
    <div id="flush-collapseOne2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
	
	  После того, как заказ придёт в пункт выдачи, вам на почту поступит информация о месте получения и код получения. 
	  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       
	  <svg width={'20px'}  class="fill icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path d="M9.69502 0.6786C9.91338 0.601796 10.1516 0.603123 10.3691 0.682353L18.2151 3.54058C18.61 3.68445 18.8728 4.05988 18.8728 4.48018V14.4287C18.8728 14.8074 18.6588 15.1537 18.32 15.3231L10.4731 19.2465C10.196 19.385 9.87022 19.3873 9.59117 19.2526L1.45405 15.3244C1.10843 15.1576 0.888794 14.8076 0.888794 14.4239V4.48434C0.888794 4.05997 1.15665 3.68181 1.55699 3.541L9.69502 0.6786ZM6.07999 3.01017L2.5346 4.25719L10.149 7.63545L13.5692 6.118L6.07999 3.01017ZM6.78606 2.76183L14.1997 5.83828L17.5367 4.35774L10.0268 1.62195L6.78606 2.76183ZM1.88879 14.4239L1.88879 5.06467L9.64898 8.50762V18.1701L1.88879 14.4239ZM17.8728 14.4287L10.649 18.0405V8.50762L17.8728 5.30263V14.4287Z" fill-rule="evenodd"></path></svg>
	  <div class='pd-l'>
	  Скидка от 3-х
		</div> 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
		При одновременной покупке 3-х носочков автоматически учитывается скидка 10% на весь заказ</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      
	  <svg  class="fill icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M6.31104 9.13574C6.31104 8.99767 6.42296 8.88574 6.56104 8.88574H13.7464C13.8844 8.88574 13.9964 8.99767 13.9964 9.13574C13.9964 9.27381 13.8844 9.38574 13.7464 9.38574H6.56104C6.42296 9.38574 6.31104 9.27381 6.31104 9.13574Z"></path>
      <path d="M6.31104 14.0544C6.31104 13.9164 6.42296 13.8044 6.56104 13.8044H13.439C13.577 13.8044 13.689 13.9164 13.689 14.0544C13.689 14.1925 13.577 14.3044 13.439 14.3044H6.56104C6.42296 14.3044 6.31104 14.1925 6.31104 14.0544Z"></path>
      <path d="M6.92587 11.5952C6.92587 11.4571 7.0378 11.3452 7.17587 11.3452H12.8241C12.9622 11.3452 13.0741 11.4571 13.0741 11.5952C13.0741 11.7333 12.9622 11.8452 12.8241 11.8452H7.17587C7.0378 11.8452 6.92587 11.7333 6.92587 11.5952Z"></path>
      <path d="M5.19623 1.77832C5.19623 0.949892 5.8678 0.27832 6.69623 0.27832H13.3038C14.1322 0.27832 14.8038 0.949893 14.8038 1.77832V3.46728C14.8038 4.29571 14.1322 4.96728 13.3038 4.96728H6.69623C5.8678 4.96728 5.19623 4.29571 5.19623 3.46728V1.77832ZM6.69623 1.27832C6.42009 1.27832 6.19623 1.50218 6.19623 1.77832V3.46728C6.19623 3.74342 6.42009 3.96728 6.69623 3.96728H13.3038C13.5799 3.96728 13.8038 3.74342 13.8038 3.46728V1.77832C13.8038 1.50218 13.5799 1.27832 13.3038 1.27832H6.69623Z"></path>
      <path d="M3.73691 2.50806V18.7232H16.2631V2.50806H14.4981V1.50806H16.2631C16.8154 1.50806 17.2631 1.95577 17.2631 2.50806V18.7232C17.2631 19.2755 16.8154 19.7232 16.2631 19.7232H3.73691C3.18462 19.7232 2.73691 19.2755 2.73691 18.7232V2.50806C2.73691 1.95577 3.18462 1.50806 3.73691 1.50806H5.75974V2.50806L3.73691 2.50806Z"></path></svg>
	  <div class='pd-l'>
	  Возврат
		</div> 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
		Если вам не подошла наша продукция, то можно оформить возврат в течении 14 дней.
		</div>
    </div>
  </div>
</div>

	</div>


	<div class='text_title_3'>
	Видео Носочков
	</div>

	</div>

	<div class='display_flex_'>
<img class='br_40' src={video2} width={'100%'} alt="loading..." />
<div class='display_flex_item_1 '>
<div class='container__'>
	<div class='container__text_1'>
	Незабываемый подарок 🎁
                  
	</div>
	<div class='container__text_2 pd_70_'>

	Секрет комфорта 🎁 - в заботе. Ваши пушистые носки станут незабываемыми подарками, передавая тепло и заботу близким в праздничный сезон и за его пределами.
</div>


<div class='container__but'>
Преобрести со скидкой
</div>
</div>
</div>
</div>
<div class='display_flex_'>
<img class='br_40' src={video1} width={'100%'} alt="loading..." />
<div class='display_flex_item_1 '>
<div class='container__'>
	<div class='container__text_1'>
	Желаем вам уютной зимы! ☃️
                  

	</div>
	<div class='container__text_2 pd_70_'>
	Эти комфортные изделия легко сочетают преимущества обычных носков и тапочек – они сохранят тепло ваших ног, как в любимых носках, и уют, характерный для тапочек. 
</div>


<div class='container__but'>
Преобрести со скидкой
</div>
</div>
</div>
</div>
<div class='display_flex_'>
<img class='br_40' src={video} width={'100%'} alt="loading..." />
<div class='display_flex_item_1 '>
<div class='container__'>
	<div class='container__text_1'>
	Идеально  🎁 для нового года...
	</div>
	<div class='container__text_2'>
	Ищете продуманный и практичный подарок этой зимой?
</div>
<div class='container__text_2 pd_70_'>
Пушистые носки - это восхитительный подарок, который показывает, что вы заботитесь о чьем-то комфорте и благополучии в холодные месяцы.

</div>

<div class='container__but'>
Преобрести со скидкой
</div>
</div>
</div>
</div>


	

<div class='text_title_'>
Идеальный подарок 🎁
</div>

<div class='cards'>

<div class='cards_item bbr'>
<div class='cards_item_title'>
Тепло
</div>
<div class='cards_item_info'>
Сочетание пушистых носков и тапочек обеспечивает дополнительный слой изоляции, сохраняя ваши ноги в тепле при резком падении температуры на улице.</div>
</div>

<div class='cards_item '>
<div class='cards_item_title'>
Наслаждение, которое можно дарить

</div>
<div class='cards_item_info'>

Ищете продуманный и практичный подарок этой зимой? Тапочки с пушистыми носками - восхитительный подарок, который показывает, что вы заботитесь о чьем-то комфорте и благополучии в холодные месяцы.</div></div>
<div class='cards_item '>
<div class='cards_item_title'>
Стильный уют

</div>
<div class='cards_item_info'>
Кто сказал, что тепло не может быть стильным? Тапочки с пушистыми носками бывают самых разных цветов и дизайнов, что позволяет вам выразить свою индивидуальность, оставаясь при этом уютными. Предпочитаете ли вы классические нейтральные тона или смелые узоры, здесь найдется пара на любой вкус.
</div>
</div>
<div class='cards_item bbr1'>
<div class='cards_item_title'>
Облачный комфорт

</div>
<div class='cards_item_info'>
Мягкая, как подушка, текстура тапочек fluffy socks создает ощущение облачности при каждом шаге. Это похоже на прогулку по зимней стране чудес, не выходя из дома.
</div>
</div>

</div>

  </div>

 

  <div class="offcanvas offcanvas-end overflow-y-auto" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel2">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel2">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
  </div>

<div class='delivery_container'>
<div class='text_del'>
	Order
</div>
<div class='delivery_container_1'>

<div class='delivery_title'>
	Contact
</div>

<input class='delivery_input' placeholder='Ваш номер телефона' onChange={e => setphone(e.target.value)}/>
<input class='delivery_input' placeholder='Ваша почта ' onChange={e => setemail(e.target.value)}/>
</div>

<div class='delivery_container_1'>

<div class='delivery_title'>
	Info
</div>
<div class='delivery_title_info'>
	* Все ваши данные защищены
</div>
<input onChange={e => setFamilia(e.target.value)} class='delivery_input' placeholder='Фамилия'/>
<input onChange={e => setName(e.target.value)} class='delivery_input' placeholder='Имя'/>
<input onChange={e => setOtchestvo(e.target.value)} class='delivery_input' placeholder='Отчество'/>

</div>


<div class='delivery_container_1'>

<div class='delivery_title'>
	Delivery
</div>
<div class='delivery_title_info'>
	* Доставка осуществляется в ближайший постмат или пункт выдачи к вашему адресу, мы сообщим вам место и код для получения заказа после его оформления.
</div>
<input onChange={e => setGorod(e.target.value)} class='delivery_input' placeholder='Город'/>
<input onChange={e => setStreet(e.target.value)} class='delivery_input' placeholder='Улица'/>
<input onChange={e => setDom(e.target.value)} class='delivery_input' placeholder='Дом'/>
<input onChange={e => setkv(e.target.value)} class='delivery_input' placeholder='Квартира'/>

<input onChange={e => setindex(e.target.value)} class='delivery_input' placeholder='Почтовый индекс'/>
<div class='delivery_title_info'>
	* Проверьте правильность введённых данных
</div>
</div>

<div class='disp_center'>
<div onClick={click} class="but_sale but_sale1">Перейти к оплате</div>
</div>
</div>


</div>



  <div class="offcanvas offcanvas-end overflow-y-auto"  tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel1">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel1">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
  </div>


  <div class='cont'>
<div class='title_end'>
<div class='title_end_text'>
	Ваша Корзинка
</div>

</div>





<div class='title_end_1'>
<div class='title_end_text_1'>
	Product
</div>
<div class='title_end_link_1'>
	TOTAL
</div>
</div>


{setitRef?.current?.map(ite =>
<div>
<div class='item_'>


<div class='item__'>
<img class='item_img' src={ite.img} />


<div class='item_text_side'>

<div class='item_text_text_1'>
FEMME
</div>

<div class='item_text_text_2'>
Fluffy Sock Slippers
</div>

<div class='item_text_text_3 mt-x color_'>
{ite.price} x{ite.quantity}
</div>

<div class='item_text_text_3 color_'>
Цвет: {ite.color}
</div>

</div>
</div>
<div class='item_text_side_2 mt_14 '>
<s class='item_text_side_2 '>
{ite.price*ite.quantity}Р
</s>
<div class='item_text_side_2 color_'>
{ite.price*ite.quantity}Р
</div>
</div>

</div>
<div class='but_change_label_1'>
<div class='but_change_label '>

<svg width='15px'onClick={()=>minus(ite.color)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
</path></svg>

<div class="number">
{ite.quantity}
</div>

<svg width='15px'onClick={()=>plus(ite.color)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-plus" fill="none" viewBox="0 0 10 10">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
</path></svg>

</div>

<svg width='15px' onClick={()=>delet(ite.color)}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" class="icon icon-remove margin_left">
  <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
  <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
</svg>

</div>		
</div>		
		  )}


{/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="140px" height="140px" viewBox="0 0 1181.000000 1181.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1181.000000) scale(0.100000,-0.100000)"
fill="#0006" stroke="#0006">
<path d="M7345 9494 c-316 -31 -518 -76 -744 -164 -599 -234 -1067 -680 -1389
-1325 -30 -60 -55 -111 -56 -112 0 0 -50 12 -111 28 -60 16 -180 41 -265 56
-142 25 -177 28 -415 28 -227 0 -276 -3 -386 -23 -240 -43 -417 -101 -619
-202 -215 -107 -367 -216 -541 -390 -194 -193 -318 -367 -448 -626 -53 -108
-124 -278 -148 -358 -14 -47 -15 -48 -46 -42 -18 4 -102 9 -187 13 -436 17
-827 -88 -1155 -310 -119 -81 -342 -303 -417 -417 -214 -324 -307 -656 -295
-1055 6 -195 31 -329 96 -523 91 -274 216 -478 410 -673 134 -134 248 -217
401 -294 427 -215 955 -230 1528 -43 l93 30 55 -44 c431 -337 950 -539 1514
-589 168 -15 553 -6 710 16 363 50 689 152 1002 312 l126 65 79 -63 c179 -143
428 -284 633 -358 740 -266 1522 -84 2118 493 71 69 222 235 259 285 2 3 41
-7 86 -21 207 -67 375 -97 589 -105 387 -14 700 72 1008 278 107 72 291 245
387 364 247 308 420 747 464 1179 16 166 7 476 -20 631 -148 859 -705 1472
-1485 1636 l-104 22 -7 36 c-16 90 -80 327 -117 436 -166 486 -428 886 -793
1209 -352 313 -814 527 -1288 597 -125 18 -433 32 -522 23z m540 -212 c413
-75 766 -235 1080 -487 119 -96 312 -296 403 -417 265 -353 447 -786 527
-1252 8 -49 17 -91 19 -93 2 -2 48 -10 102 -18 787 -118 1339 -701 1471 -1555
26 -174 24 -493 -6 -663 -54 -310 -158 -587 -307 -815 -119 -183 -301 -371
-459 -476 -251 -167 -502 -240 -825 -240 -241 1 -400 29 -669 121 l-135 45
-20 -28 c-163 -224 -405 -459 -616 -599 -320 -210 -632 -306 -1000 -307 -480
0 -904 170 -1296 519 l-72 63 -77 -45 c-336 -199 -701 -323 -1125 -382 -175
-24 -585 -24 -760 0 -498 70 -984 276 -1335 568 -42 35 -82 68 -89 73 -7 5
-53 -7 -122 -32 -133 -49 -353 -105 -500 -127 -131 -20 -395 -23 -509 -6 -322
50 -589 179 -798 387 -225 223 -367 499 -439 854 -31 157 -32 410 0 580 123
662 604 1119 1292 1226 151 23 438 22 595 -3 l121 -19 38 121 c224 714 655
1200 1266 1428 179 67 348 102 567 119 271 21 566 -15 889 -107 87 -25 161
-42 164 -38 4 5 17 33 30 63 70 169 214 428 322 579 245 343 520 582 869 755
225 112 498 194 752 226 128 16 527 5 652 -18z"/>
<path d="M4780 6559 c-30 -5 -92 -27 -137 -49 -140 -69 -242 -191 -300 -359
-23 -65 -27 -93 -27 -196 0 -88 4 -136 18 -179 76 -251 265 -417 501 -441 201
-21 424 113 524 316 60 123 74 190 69 329 -4 93 -10 129 -33 190 -76 205 -228
345 -420 385 -77 16 -113 17 -195 4z m328 -193 c63 -33 102 -96 102 -164 0
-90 -45 -156 -125 -182 -93 -31 -205 66 -205 176 0 125 130 221 228 170z
m-347 -515 c21 -22 29 -39 29 -66 0 -27 -8 -44 -29 -66 -33 -33 -50 -35 -90
-14 -78 40 -46 173 42 175 10 0 32 -13 48 -29z"/>
<path d="M7483 6555 c-275 -60 -472 -344 -450 -651 26 -360 337 -627 655 -560
221 46 395 226 447 462 25 112 17 264 -20 364 -76 206 -227 344 -420 385 -84
18 -130 18 -212 0z m340 -189 c39 -16 82 -61 96 -99 40 -105 -29 -233 -135
-253 -45 -8 -121 29 -151 74 -95 144 40 342 190 278z m-342 -515 c21 -22 29
-39 29 -66 0 -27 -8 -44 -29 -66 -49 -48 -109 -32 -131 37 -15 44 1 88 39 109
39 21 59 18 92 -14z"/>
<path d="M6647 4926 c-8 -8 -17 -46 -21 -86 -26 -258 -204 -412 -460 -397
-232 13 -383 152 -402 370 -8 91 -23 117 -68 117 -48 0 -71 -30 -68 -88 13
-305 251 -532 557 -532 248 1 443 135 521 358 13 38 29 103 35 145 10 67 9 80
-5 102 -19 29 -65 34 -89 11z"/>
</g>
</svg> */}
<div class='te svg_'>
<svg class='' viewBox="0 0 24 24" fill='#925c5c1c' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99976 2.25C9.30136 2.25 8.69851 2.65912 8.4178 3.25077C7.73426 3.25574 7.20152 3.28712 6.72597 3.47298C6.15778 3.69505 5.66357 4.07255 5.29985 4.5623C4.93292 5.05639 4.76067 5.68968 4.5236 6.56133L4.47721 6.73169L3.96448 9.69473C3.77895 9.82272 3.61781 9.97428 3.47767 10.1538C2.57684 11.3075 3.00581 13.0234 3.86376 16.4552C4.40943 18.6379 4.68227 19.7292 5.49605 20.3646C6.30983 21 7.43476 21 9.68462 21H14.3153C16.5652 21 17.6901 21 18.5039 20.3646C19.3176 19.7292 19.5905 18.6379 20.1362 16.4552C20.9941 13.0234 21.4231 11.3075 20.5222 10.1538C20.382 9.97414 20.2207 9.82247 20.035 9.69442L19.5223 6.73169L19.4759 6.56133C19.2388 5.68968 19.0666 5.05639 18.6997 4.5623C18.336 4.07255 17.8417 3.69505 17.2736 3.47298C16.798 3.28712 16.2653 3.25574 15.5817 3.25077C15.301 2.65912 14.6982 2.25 13.9998 2.25H9.99976ZM18.4177 9.14571L18.0564 7.05765C17.7726 6.01794 17.6696 5.69121 17.4954 5.45663C17.2996 5.19291 17.0335 4.98964 16.7275 4.87007C16.5077 4.78416 16.2421 4.75888 15.5803 4.75219C15.299 5.34225 14.697 5.75 13.9998 5.75H9.99976C9.30252 5.75 8.70052 5.34225 8.41921 4.75219C7.75738 4.75888 7.4918 4.78416 7.272 4.87007C6.96605 4.98964 6.69994 5.19291 6.50409 5.45662C6.32988 5.6912 6.22688 6.01794 5.9431 7.05765L5.58176 9.14577C6.57992 9 7.9096 9 9.68462 9H14.3153C16.0901 9 17.4196 9 18.4177 9.14571ZM8 12.25C8.41421 12.25 8.75 12.5858 8.75 13V17C8.75 17.4142 8.41421 17.75 8 17.75C7.58579 17.75 7.25 17.4142 7.25 17V13C7.25 12.5858 7.58579 12.25 8 12.25ZM16.75 13C16.75 12.5858 16.4142 12.25 16 12.25C15.5858 12.25 15.25 12.5858 15.25 13V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V13ZM12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V13C11.25 12.5858 11.5858 12.25 12 12.25Z" ></path> </g></svg>

 {"Пустенько :("} </div>


<div class='posithion'>

<div class='bot_title_disp'>
<div class='bot_title'>
Итоговая сумма: 

</div>
<s class='bot_title_1_'>
{setskidkaRef.current}Р
</s>
<div class='bot_title_'>
{setplataRef.current}Р
	</div>
</div>
<div class='bot_title_1 color_'>
Скидка в 10% от 3-х вещей учитывается независимо от других скидок

</div>
<div data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2" class='but_sale'>
	Оформить заказ
</div>

</div>





</div>

</div>

<div class="offcanvas offcanvas-start overflow-y-auto" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
  </div>
  <div class='cont cont1'>
<div class='title_end'>
	
<div class='title_end_text'>
	Отследить заказ
</div>

</div>





<div class='title_end_1'>
<div class='title_end_text_1'>
Info
</div>
<div class='title_end_link_1'>

</div>






</div>
<div class='order_check_1'>
<div class='order_check_1_item'>
<div class='order_check_1_item_title'>

	
	<div >
	Заказ № <div class='order_check_1_item_title_1'>TS434RGS45DQ</div>
	</div>
	
	
	<div class='order_check_1_item_info'>
		<div class='order_check_1_item_info_items'>
          <div class='teext_1'>Заказчик</div>
			 <div class='teext'> {setzakazchikRef.current}</div>
		</div>

		<div class='order_check_1_item_info_items'>
          <div class='teext_1'>Статус</div>
			 <div class='teext'>{setstatusRef.current}</div>
		</div>
		<div class='order_check_1_item_info_items'>
          <div class='teext_1'>Пункт</div>
			 <div class='teext'>{setpunktRef.current}</div>
		</div>
		<div class='order_check_1_item_info_items'>
          <div class='teext_1'>Адрес доставки</div>
			 <div class='teext'>{setadresRef.current}</div>
		</div>
		<div class='order_check_1_item_info_items'>
          <div class='teext_1'>Приблизительная дата доставки</div>
			 <div class='teext'>{setpdataRef.current}</div>
		</div>
		
    </div>
</div>

</div>
<div class='text_-_'>
	*Введите ваш трек номер, высланный на почту и отследите посылку
</div>
<div class='order_check'>
<input onChange={e => settrack_number(e.target.value)}   placeholder='TS434RGS45DQ'  class='widt_70_ but_sale'/>


<div onClick={click2} class='but_sale'>
	Оформить заказ
</div>
</div>

</div>


</div>
  {/* <div class='te '>
<svg class='' viewBox="0 0 24 24" fill='#925c5c1c' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99976 2.25C9.30136 2.25 8.69851 2.65912 8.4178 3.25077C7.73426 3.25574 7.20152 3.28712 6.72597 3.47298C6.15778 3.69505 5.66357 4.07255 5.29985 4.5623C4.93292 5.05639 4.76067 5.68968 4.5236 6.56133L4.47721 6.73169L3.96448 9.69473C3.77895 9.82272 3.61781 9.97428 3.47767 10.1538C2.57684 11.3075 3.00581 13.0234 3.86376 16.4552C4.40943 18.6379 4.68227 19.7292 5.49605 20.3646C6.30983 21 7.43476 21 9.68462 21H14.3153C16.5652 21 17.6901 21 18.5039 20.3646C19.3176 19.7292 19.5905 18.6379 20.1362 16.4552C20.9941 13.0234 21.4231 11.3075 20.5222 10.1538C20.382 9.97414 20.2207 9.82247 20.035 9.69442L19.5223 6.73169L19.4759 6.56133C19.2388 5.68968 19.0666 5.05639 18.6997 4.5623C18.336 4.07255 17.8417 3.69505 17.2736 3.47298C16.798 3.28712 16.2653 3.25574 15.5817 3.25077C15.301 2.65912 14.6982 2.25 13.9998 2.25H9.99976ZM18.4177 9.14571L18.0564 7.05765C17.7726 6.01794 17.6696 5.69121 17.4954 5.45663C17.2996 5.19291 17.0335 4.98964 16.7275 4.87007C16.5077 4.78416 16.2421 4.75888 15.5803 4.75219C15.299 5.34225 14.697 5.75 13.9998 5.75H9.99976C9.30252 5.75 8.70052 5.34225 8.41921 4.75219C7.75738 4.75888 7.4918 4.78416 7.272 4.87007C6.96605 4.98964 6.69994 5.19291 6.50409 5.45662C6.32988 5.6912 6.22688 6.01794 5.9431 7.05765L5.58176 9.14577C6.57992 9 7.9096 9 9.68462 9H14.3153C16.0901 9 17.4196 9 18.4177 9.14571ZM8 12.25C8.41421 12.25 8.75 12.5858 8.75 13V17C8.75 17.4142 8.41421 17.75 8 17.75C7.58579 17.75 7.25 17.4142 7.25 17V13C7.25 12.5858 7.58579 12.25 8 12.25ZM16.75 13C16.75 12.5858 16.4142 12.25 16 12.25C15.5858 12.25 15.25 12.5858 15.25 13V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V13ZM12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V13C11.25 12.5858 11.5858 12.25 12 12.25Z" ></path> </g></svg>

</div> */}
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
	  <svg width={'15px'}  class="icon icon-checkmark margin_r" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
</svg>
        <h1 class="modal-title fs-5" id="exampleModalLabel">Товары добавлены в корзину</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
		
		{setaddRef.current?.map(ite =>
		<div class='item_'>

		
<div class='item__'>
<img class='item_img' src={ite.img} />


<div class='item_text_side'>

<div class='item_text_text_1'>
FEMME
</div>

<div class='item_text_text_2'>
{ite.name}
</div>



<div class='item_text_text_3 color_'>
Цвет: {ite.color}
</div>
<div class='item_text_text_3 color_'>
X 1
</div>
</div>
</div>

</div>

)}

	  </div>
 
    </div>
  </div>
</div>
<div class="message-box"></div>
      </div>
      )
  }
  export default App;

import 'swiper/css';
import axios from "axios"

import "./style/index.css"
import "./slider"
import "./burger"
import { OpenCloseByElement } from "./OpenCloseByElement";
import SearchCity from "./SearchFilms";
import ElementСache from "./ElementСache";

const openClose = new OpenCloseByElement('.search__content', '.search__input','search__content--open')
const city = new SearchCity()
const citiesRes = new ElementСache('.search-form__result', 'cities')




// Реализация в фнкциональном стиле
// type Coords = {
//     "lat": number,
//     "lon": number
// }

// interface ICity {
//     coords: Coords
//     "district": string,
//     "name": string,
//     "population": number,
//     "subject": string
// }

// function debounce( callback: () => void, delay: number ) {
//     let timeout: NodeJS.Timeout;
//     return function() {
//         clearTimeout( timeout );
//         timeout = setTimeout( callback, delay );
//     }
// }

// window.onload = () => {
//     const searchResult = document.querySelector(".search-form__result")
//     const cities = localStorage.getItem('cities')
//     if(cities){
//         searchResult.innerHTML = cities
//     }
// }

// const searchButton = document.querySelector('.search__input')
// const searchContent = document.querySelector('.search__content')
// const seachInput = document.querySelector('.search-form__input') as HTMLInputElement
// const loader = document.querySelector(".search-form__loader")


// const loadCities = async () => {
//     loader.classList.remove("search-form__loader--none")
//     const cities = await axios.post<ICity[]>("http://localhost:8081/cities", { name: seachInput.value})
//     loader.classList.add("search-form__loader--none")
//     addCitiesToList(cities.data, seachInput.value)
// }

// const addCitiesToList = (cities: ICity[], searchText: string) => {
//     const citiesList = document.querySelector(".search-form-list")
//     citiesList.innerHTML = ""
//     cities.forEach(city => {
//         citiesList.append(createCity(city, searchText))
//     })
// }

// const createCity = (city: ICity, searchText: string) => {
//     const cityName = city.name.replace(new RegExp(searchText, 'gi'), `<span class="text-blue">${searchText}</span>`)
//     const cityInner = document.createElement("li")
//     cityInner.classList.add("search-form-list__item")

//     const cityBtn = document.createElement("button")
//     cityBtn.classList.add("search-form-list__btn")
//     cityBtn.innerHTML = cityName
//     cityBtn.onclick = () => addCityToSearchResult(city.name)

//     cityInner.append(cityBtn)
//     return cityInner
// }

// const saveSearchResult = () => {
//     const searchResult = document.querySelector(".search-form__result")
//     localStorage.setItem('cities', searchResult.innerHTML)
// }

// const addCityToSearchResult = (text: string) => {
//     const searchResult = document.querySelector(".search-form__result")
//     searchResult.append(createSearchResultItem(text))
//     saveSearchResult()
// }


// const createSearchResultItem = (text: string) => {
//     const searchItemResultInner = document.createElement("div")
//     searchItemResultInner.classList.add("search-form__result-item")

//     const searchItemResultTextBlock = document.createElement('span')
//     searchItemResultTextBlock.textContent = text

//     const btnDel = document.createElement("search-form__result-del")
//     btnDel.classList.add("search-form__result-del")
//     btnDel.textContent = "X"
//     btnDel.onclick = () => {
//         searchItemResultInner.remove()
//         // saveSearchResult()
//     }

//     searchItemResultInner.append(searchItemResultTextBlock)
//     searchItemResultInner.append(btnDel)
//     return searchItemResultInner
// }

// document.addEventListener('click', event => {
//     const element = event.target as HTMLElement
//     if(element.classList.contains("search-form__result-del")){
//         element.remove()
//     }
// })


// const config = {
//     attributes: true,
//     childList: true,
//     subtree: true,

// };

// const observer = new MutationObserver(saveSearchResult);
// const searchResult = document.querySelector(".search-form__result")
// observer.observe(searchResult, config)


// seachInput.addEventListener("keyup", debounce(loadCities, 700 ))

// searchButton.addEventListener('click', () => {
//     searchContent.classList.add('search__content--open')
// })
import axios from "axios";
import ElementObserver from "./ElementObserver";
import { debounce } from "./functions";
import ShowHideElement from "./ShowHideElement";
type Coords = {
  lat: number;
  lon: number;
};

interface ICity {
  coords: Coords;
  district: string;
  name: string;
  population: number;
  subject: string;
}

export default class SearchCity {
  private seachInput: HTMLInputElement;
  private loader: ShowHideElement;
  private citiesList: Element;
  private citiesSelected: Element;
    private btn: HTMLButtonElement

  constructor() {
    this.seachInput = document.querySelector(".search-form__input");
    this.loader = new ShowHideElement(
      ".search-form__loader",
      "search__content--open"
    );
    this.citiesList = document.querySelector(".search-form-list");
    this.citiesSelected = document.querySelector(".search-form__result");
    this.btn = document.querySelector(".search-form__btn") as HTMLButtonElement

    this.installEvents();
  }

  private addCitiesToList(cities: ICity[], searchText: string) {
    this.citiesList.innerHTML = "";
    cities.forEach((city) => {
      this.citiesList.append(this.createCity(city, searchText));
    });
  }

  private createCity(city: ICity, searchText: string) {
    const cityName = city.name.replace(
      new RegExp(searchText, "gi"),
      `<span class="text-blue">${searchText}</span>`
    );
    const cityInner = document.createElement("li");
    cityInner.classList.add("search-form-list__item");

    const cityBtn = document.createElement("button");
    cityBtn.classList.add("search-form-list__btn");
    cityBtn.innerHTML = cityName;
    cityBtn.onclick = () => this.addCityToSearchResult(city);

    cityInner.append(cityBtn);
    return cityInner;
  }

  private addCityToSearchResult = async (city: ICity) => {
    // const response = await axios.post('', city)
    this.btn.disabled= false
    this.citiesSelected.append(this.createSearchResultItem(city.name));
  };

  private createSearchResultItem = (text: string) => {
    const searchItemResultInner = document.createElement("div");
    searchItemResultInner.classList.add("search-form__result-item");

    const searchItemResultTextBlock = document.createElement("span");
    searchItemResultTextBlock.textContent = text;

    const btnDel = document.createElement("search-form__result-del");
    btnDel.classList.add("search-form__result-del");
    btnDel.textContent = "X";
    btnDel.onclick = () => {
      searchItemResultInner.remove();
    };

    searchItemResultInner.append(searchItemResultTextBlock);
    searchItemResultInner.append(btnDel);
    return searchItemResultInner;
  };

  public async sendToBackSelectedSitiees() {
    const response = await axios.post("", this.citiesSelected);
  }

  private async loadCities() {
    this.loader.show();
    const cities = await axios.post<ICity[]>("http://localhost:8081/cities", {
      name: this.seachInput.value,
    });
    this.loader.hide();
    this.addCitiesToList(cities.data, this.seachInput.value);
  }

  public deleteResultCities(event: MouseEvent) {
    const element = event.target as HTMLElement;
    if (element.classList.contains("search-form__result-del")) {
      element.parentElement.remove();
    }
  }

  public installEvents() {
    this.seachInput.addEventListener(
      "keyup",
      debounce(this.loadCities.bind(this), 700)
    );
    document.addEventListener("click", this.deleteResultCities.bind(this));

    this.btn.addEventListener('click', this.sendToBackSelectedSitiees.bind(this))
  }
}

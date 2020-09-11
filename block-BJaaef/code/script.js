let section = document.querySelector('section');
for (let house of got.houses) {
  for (let boxDetails of house.people) {
    let divElm = document.createElement('div');
    divElm.classList.add('box');
    let introElm = document.createElement('div');
    introElm.classList.add('flex');
    let imgElm = document.createElement('img');
    imgElm.setAttribute('src', boxDetails.image);
    let nameElm = document.createElement('h2');
    nameElm.innerText = boxDetails.name;
    let dscElm = document.createElement('p');
    dscElm.innerText = boxDetails.description;
    let btnElm = document.createElement('button');
    btnElm.innerText = 'Learn More!';
    introElm.append(imgElm, nameElm);
    divElm.append(introElm, dscElm, btnElm);
    section.append(divElm);
  }
}

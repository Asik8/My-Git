const loadPhones = async (inputText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`);
    const data = await res.json();
    console.log(data);
    const phoneDetails = data.data;
    //    console.log(phoneDetails);
    displayPhones(phoneDetails);

}


const displayPhones = phones => {
    console.log(phones);
    const postContainer = document.getElementById('card-container');
    postContainer.textContent='';


    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-base-100 shadow-xl flex flex-col item-center align-center`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;

        postContainer.appendChild(phoneCard);
    });
} 


// Search Button
const searchBtn = () =>{
 const inputText = document.getElementById('input-text').value;
 loadPhones(inputText);
}
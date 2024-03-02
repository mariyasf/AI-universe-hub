// alert('');

const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    const ai = data.data.tools;
    // console.log(ai);
    displayData(ai);
}

const displayData = (aidata) => {
    console.log(aidata);

    const aiContainer = document.getElementById('aiContainer');

    aidata.forEach(aiElement => {
        const aiCard = document.createElement('div');
        aiCard.classList = `card w-96 p-4 bg-base-100 shadow-xl`;

        aiCard.innerHTML = `
            <figure>
                <img
                    src="${aiElement.image}"
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="text-2xl font-bold">Features</h2>
                <div id="features-list" class="spac-y-2 mb-5">
                </div>
                <hr>

                <h2 class="text-2xl font-bold">${aiElement.name}</h2>
                <div class="flex gap-2 justify-between mt-2">
                    <div class="flex gap-2 justify-between">
                        <img
                            src="image/Frame.svg"
                            alt="Shoes" />
                        <p class="font-bold pt-2">${aiElement.published_in}</p>
                    </div>
                    <div>
                        <img
                            src="image/31.svg"
                            alt="Shoes" />
                    </div>

                </div>

            </div>
        `
        const featuresList = aiCard.querySelector('#features-list');

        aiElement.features.forEach(feature => {

            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            // console.log(feature);
            featuresList.appendChild(featureItem);
        });

        aiContainer.appendChild(aiCard);

    });
}
loadData();
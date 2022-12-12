const { createApp } = Vue;

const photoShow = {
    data() {
        return {
            // h2Text: "In case you are not done with them yet...",
            // alert1: "No previous photo!",
            // alert2: "Last photo already!",
            currentIndex: 0,
            indexBeforeMouseover: 0,
            lastPhoto: false,
            firstPhoto: false,
            imgID: "image",
            photos: [
                {
                    src: "./Photos/baby.jpg",
                    alt: "baby Gab",
                    figcaption: "Gabriel is 3 months old",
                },
                {
                    src: "./Photos/toddler.jpg",
                    alt: "toddler Gab",
                    figcaption: "Gabriel is 20 months old",
                },
                {
                    src: "./Photos/puppy1.jpg",
                    alt: "puppy Sam and Milo",
                    figcaption: "Sam and Milo are 3 months old",
                },
                {
                    src: "./Photos/bigdog1.jpg",
                    alt: "adult Sam and Milo",
                    figcaption: "Sam and Milo are 3 years old",
                },
                {
                    src: "./Photos/puppy2.jpg",
                    alt: "puppy Winston",
                    figcaption: "Winston is 4 months old",
                },
                {
                    src: "./Photos/bigdog2.jpg",
                    alt: "adult Winston",
                    figcaption: "Winston is 10 years old",
                },
                {
                    src: "./Photos/kitten.jpg",
                    alt: "kitten Teemo",
                    figcaption: "Teemo is 4 months old",
                },
                {
                    src: "./Photos/cat.jpg",
                    alt: "adult Teemo",
                    figcaption: "Teemo is 10 years old",
                }
            ]
        };
    },
    methods: {
        getNextPhoto: function () {
            if (this.currentIndex <= 7) {
                this.currentIndex += 1;
                this.firstPhoto = false;
                if (this.currentIndex === 8) {
                    this.currentIndex = 8;
                    this.lastPhoto = true;
                }
            }
        },
        getPreviousPhoto: function () {
            if (this.currentIndex >= 0) {
                this.currentIndex -= 1;
                this.lastPhoto = false;
                if (this.currentIndex === -1) {
                    this.currentIndex = 0;
                    this.firstPhoto = true;
                }
            }
        },
        updateIndex: function () {
            this.indexBeforeMouseover = this.currentIndex;
            this.currentIndex !== 0 ? this.currentIndex-- : null;
        }
    },

    /*html*/
    template: `
    <h2>
        {{h2Text}}
    </h2>
    <figure class="baby-photo">
        <div id="photo-button-container">
            <input type="button" value="<" @click="getPreviousPhoto()" >
            <img :id="imgID" :src="photos[currentIndex].src" :alt="photos[currentIndex].alt" width="600" height="450">
            <input type="button" value=">" @click="getNextPhoto()" >
        </div>
        <figcaption class="caption">
            {{photos[currentIndex].figcaption}}
        </figcaption>
    </figure>
    `
};

createApp(photoShow).mount("#baby-photo-container");
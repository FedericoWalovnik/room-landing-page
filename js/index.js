const data = [
  {
    img: 'image-hero-1',
    title: 'Discover innovative ways to decorate',
    paragraph:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine formandn function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    img: 'image-hero-2',
    title: 'We are available all across the globe',
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    img: 'image-hero-3',
    title: 'Manufactured with the best materials',
    paragraph:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
];

let index = 0;

const updateInfo = () => {
  title.innerHTML = data[index].title;
  paragraph.innerHTML = data[index].paragraph;
  slideshow.style.backgroundImage = `url('/images/desktop-image-hero-${
    index + 1
  }.jpg')`;
};

const updateIndex = (add) => {
  if (add) {
    if (index <= 1) {
      index++;
    } else {
      index = 0;
    }
  } else {
    if (index > 0) {
      index--;
    } else {
      index = 2;
    }
  }
};

window.addEventListener('load', function () {
  const title = document.getElementById('title');
  const paragraph = document.getElementById('paragraph');
  const slideshow = document.getElementById('slideshow');
  console.log(slideshow);

  const next = document.getElementById('next');
  const previous = document.getElementById('previous');

  next.addEventListener('click', () => {
    updateIndex(true);
    console.log(index);
    updateInfo();
  });

  previous.addEventListener('click', () => {
    updateIndex(false);
    console.log(index);
    updateInfo();
  });
});

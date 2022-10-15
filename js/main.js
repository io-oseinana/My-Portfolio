/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
const btn = document.querySelector('#btn');
const toggler = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav');
const revLogo = document.querySelector('.rev-logo');
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('open');
  revLogo.classList.toggle('active');
  body.classList.toggle('navIsActive');
});

navLink.forEach((btnLink) => {
  btnLink.addEventListener('click', () => {
    toggler.classList.remove('active');
    menu.classList.remove('open');
    revLogo.classList.remove('active');
  });
});

const projectCards = document.querySelector('.projects');
let render = '';

const shareIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/></svg>';
const liveIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_34_3029)"><g clip-path="url(#clip1_34_3029)"><path d="M20.9991 9.46114C20.9991 8.32124 20.6331 7.25043 19.9344 6.31779C20.2006 5.41969 20.2671 4.27979 20.2006 2.96718C20.1673 2.41451 19.7348 2 19.2024 2C18.903 2 16.3743 2.03454 14.9104 3.38169C13.6461 3.1399 12.3152 3.1399 11.0176 3.38169C9.58692 2.03454 7.05826 2 6.72555 2C6.1932 2 5.76067 2.41451 5.7274 2.96718C5.62758 4.27979 5.7274 5.41969 5.99357 6.31779C5.29486 7.28497 4.92887 8.35579 4.92887 9.46114C4.92887 11.8791 6.72555 14.0553 9.45383 15.0915C9.35401 15.2988 9.28747 15.5406 9.22093 15.7824C6.32629 15.4715 4.96215 12.7427 4.8956 12.639C4.6627 12.1209 4.06381 11.9136 3.56473 12.19C3.06566 12.4318 2.86603 13.0535 3.1322 13.5717C3.19875 13.7444 5.02869 17.4404 9.05457 17.8549V20.9637C9.05457 21.5509 9.4871 22 10.0527 22H15.8753C16.4409 22 16.8734 21.5509 16.8734 20.9637V16.8532C16.8734 16.2314 16.7403 15.6442 16.5074 15.1261C19.2024 14.0553 20.9991 11.9136 20.9991 9.46114Z" fill="white"/></g></g><defs><clipPath id="clip0_34_3029"><rect width="18" height="20" fill="white" transform="translate(3 2)"/></clipPath><clipPath id="clip1_34_3029"><rect width="18" height="20" fill="white" transform="translate(3 2)"/></clipPath></defs></svg>';
const popDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

//  using objects to store project details data

const projectDetails = [
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    popTitle: 'Keeping track of hundreds of components',
    popDescription,
    image: '/img/project-img/img-1.jpg',
    popImage: 'img/project-img/Snapshoot-Portfolio-desktop.png',
    technologies: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://io-oseinana.github.io/My-Portfolio/ ',
    sourceLink: 'https://github.com/io-oseinana/My-Portfolio',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    popTitle: 'Keep track of hundreds of components',
    popDescription,
    image: '/img/project-img/img-2.jpg',
    popImage: 'img/project-img/Snapshoot-Portfolio-desktop.png',
    technologies: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://io-oseinana.github.io/My-Portfolio/ ',
    sourceLink: 'https://github.com/io-oseinana/My-Portfolio',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    popTitle: 'Keep track of hundreds of components',
    popDescription,
    image: '/img/project-img/img-3.jpg',
    popImage: 'img/project-img/Snapshoot-Portfolio-desktop.png',
    technologies: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://io-oseinana.github.io/My-Portfolio/ ',
    sourceLink: 'https://github.com/io-oseinana/My-Portfolio',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    popTitle: 'Keep track of hundreds of components',
    popDescription,
    image: '/img/project-img/img-4.jpg',
    popImage: 'img/project-img/Snapshoot-Portfolio-desktop.png',
    technologies: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://io-oseinana.github.io/My-Portfolio/ ',
    sourceLink: 'https://github.com/io-oseinana/My-Portfolio',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    popTitle: 'Keep track of hundreds of components',
    popDescription,
    image: '/img/project-img/img-5.jpg',
    popImage: 'img/project-img/Snapshoot-Portfolio-desktop.png',
    technologies: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://io-oseinana.github.io/My-Portfolio/ ',
    sourceLink: 'https://github.com/io-oseinana/My-Portfolio',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    popTitle: 'Keep track of hundreds of components',
    popDescription,
    image: '/img/project-img/img-6.jpg',
    popImage: 'img/project-img/Snapshoot-Portfolio-desktop.png',
    technologies: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://io-oseinana.github.io/My-Portfolio/ ',
    sourceLink: 'https://github.com/io-oseinana/My-Portfolio',
    icon1: shareIcon,
    icon2: liveIcon,
  },
];

// Redering the project cards to the DOM

projectDetails.forEach((project) => {
  render += `
        <div class="projects-card">
          <img class="image-holder img-1" src =${project.image} />
          <div class="text-container">
            <h3 class="project-header">${project.title}</h3>
            <ul class="project-language">
              <li class="language ruby">${project.technologies[0]}</li>
              <li class="language css">${project.technologies[1]}</li>
              <li class="language js">${project.technologies[2]}</li>
              <li class="language html">${project.technologies[3]}</li>
            </ul >
            <div class="button">
              <button type="button" class="see-project">See Project</button>
            </div>
          </div>
        </div > `;
  projectCards.innerHTML = render;
});

const modal = document.querySelector('.popup-details');
const seeProjectBtn = document.querySelectorAll('.see-project');

//  function to open the modal
const ovarlayBg = document.querySelector('.ovarlay');

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    const Index = Array.from(seeProjectBtn).indexOf(event.target);
    modal.innerHTML = `
    <div class="popup-box">
          <i onclick="closePopup()" id="close" class="bx bx-x close"></i>
            <img src=${projectDetails[Index].popImage} alt="project-img"/>
            <p class="popup-title">${projectDetails[Index].popTitle}</p>
            <div class="iconhold">
              <a href="${projectDetails[Index].liveLink}" class="liveLink link-site">See Live <i>${projectDetails[Index].icon1}</i></a>
              <a href="${projectDetails[Index].sourceLink}" class="sourceLink link-site">See Source <i>${projectDetails[Index].icon2}</i></a>
            </div>
              <ul class="project-language">
                <li class="language hideMe codekit">${projectDetails[Index].technologies[0]}</li>
                <li class="language hideMe github">${projectDetails[Index].technologies[1]}</li>
                <li class="language ruby">${projectDetails[Index].technologies[2]}</li>
                <li class="language css">${projectDetails[Index].technologies[3]}</li>
                <li class="language js">${projectDetails[Index].technologies[4]}</li>
                <li class="language hideMe boot">${projectDetails[Index].technologies[5]}</li>
                <li class="language hideMe terminal">${projectDetails[Index].technologies[6]}</li>
                <li class="language hideMe codepen">${projectDetails[Index].technologies[7]}</li>
              </ul> 
              <p class="popup-text">${projectDetails[Index].popDescription}</p>
          </div> `;
    modal.classList.toggle('active');
    ovarlayBg.classList.toggle('ovalayActivated');
    body.classList.toggle('ovalayActivated');
  });
});

function closePopup() {
  const closeBtn = document.querySelector('#closeBtny');
  body.classList.remove('ovalayActivated');
  ovarlayBg.classList.remove('ovalayActivated');
  modal.classList.remove('active');
}

// eslint-disable-next-line no-undef
closeBtn.addEventListener('click', closePopup);

const form = document.querySelector('#contactMe');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('#errorMsg');

// eslint-disable-next-line no-useless-escape

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ChecklowerCase = () => {
  if (email.value === email.value.toLowerCase()) {
    errorMsg.innerText = '';
    return true;
  }
  errorMsg.style.color = 'red';
  email.style.border = '1px solid red';
  errorMsg.textContent = 'Email must be in lowercase';
  return false;
};

const validateEmail = () => {
  if (!emailRegex.test(email.value)) {
    errorMsg.innerText = 'Please enter a valid email address';
    errorMsg.style = 'color: red';
    email.style.border = '1px solid red';
    return false;
  }
  return true;
};

form.addEventListener('submit', (e) => {
  const valid = ChecklowerCase() && validateEmail();
  if (!valid) {
    e.preventDefault();
    return false;
  }
  return true;
});

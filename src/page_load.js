const pageLoad = () => {
  const element = document.createElement('div');
  const jumbotronContainer = document.createElement('div');
  jumbotronContainer.classList.add('container-fluid');
  jumbotronContainer.classList.add('pb-5');
  element.appendChild(jumbotronContainer);
  const jumbotron = document.createElement('div');
  jumbotron.classList.add('row');
  jumbotron.classList.add('jumbotron');
  jumbotron.classList.add('bg-light');
  jumbotronContainer.appendChild(jumbotron);
  const mainContent = document.createElement('div');
  mainContent.classList.add('col-md-6');
  mainContent.classList.add('main-content');
  mainContent.classList.add('pt-5');
  jumbotron.appendChild(mainContent);
  const textDanger = document.createElement('p');
  textDanger.classList.add('display-6');
  textDanger.classList.add('text-danger');
  textDanger.classList.add('font-weight-bold');
  textDanger.innerHTML = 'We don\'t just serve food.';
  mainContent.appendChild(textDanger);
  const bigText = document.createElement('p');
  bigText.classList.add('display-3');
  bigText.classList.add('font-weight-bold');
  bigText.innerHTML = 'We serve happiness';
  mainContent.appendChild(bigText);
  const imageContent = document.createElement('div');
  imageContent.classList.add('col-md-6');
  jumbotron.appendChild(imageContent);
  const image = document.createElement('img');
  image.classList.add('img-fluid');
  image.setAttribute('src', 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
  imageContent.appendChild(image);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('container');
  infoContainer.classList.add('mb-5');
  element.appendChild(infoContainer);
  const rowInfo = document.createElement('div');
  rowInfo.classList.add('row');
  rowInfo.classList.add('mb-5');
  rowInfo.classList.add('justify-content-center');
  infoContainer.appendChild(rowInfo);
  const infos = [
    [
      'Most popular',
      'Quick Snacks',
    ],
    [
      'Top picked',
      'Veg Dishes',
    ],
    [
      'Our special',
      'Non veg dishes',
    ],
  ];
  for (let i = 0; i < infos.length; i += 1) {
    const shadow = document.createElement('div');
    shadow.classList.add('col-sm-3');
    shadow.classList.add('col-12');
    shadow.classList.add('rounded');
    shadow.classList.add('shadow');
    shadow.classList.add('text-center');
    shadow.classList.add('text-uppercase');
    shadow.classList.add('font-weight-bold');
    shadow.classList.add('p-5');
    shadow.classList.add('m-3');
    rowInfo.appendChild(shadow);
    const small = document.createElement('small');
    const p = document.createElement('p');
    [small.innerHTML, p.innerHTML] = infos[i];
    p.classList.add('mt-2');
    shadow.appendChild(small);
    shadow.appendChild(p);
  }
  const rowTabs = document.createElement('div');
  rowInfo.classList.add('row');
  infoContainer.appendChild(rowTabs);
  const colTabs = document.createElement('div');
  colTabs.classList.add('col-12');
  rowTabs.appendChild(colTabs);
  const nav = document.createElement('nav');
  colTabs.appendChild(nav);
  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');
  navDiv.classList.add('nav-tabs');
  navDiv.classList.add('nav-fill');
  navDiv.setAttribute('id', 'nav-tab');
  navDiv.setAttribute('role', 'tablist');
  nav.appendChild(navDiv);
  const linkMenu = document.createElement('a');
  linkMenu.classList.add('nav-item');
  linkMenu.classList.add('nav-link');
  linkMenu.classList.add('active');
  linkMenu.setAttribute('id', 'nav-home-tab');
  linkMenu.setAttribute('data-toggle', 'tab');
  linkMenu.setAttribute('href', '#nav-home');
  linkMenu.setAttribute('role', 'tab');
  linkMenu.setAttribute('aria-controls', 'nav-home');
  linkMenu.setAttribute('aria-selected', 'true');
  linkMenu.innerHTML = 'Menu';
  navDiv.appendChild(linkMenu);
  const linkContact = document.createElement('a');
  linkContact.classList.add('nav-item');
  linkContact.classList.add('nav-link');
  linkContact.setAttribute('id', 'nav-profile-tab');
  linkContact.setAttribute('data-toggle', 'tab');
  linkContact.setAttribute('href', '#nav-profile');
  linkContact.setAttribute('role', 'tab');
  linkContact.setAttribute('aria-controls', 'nav-profile');
  linkContact.setAttribute('aria-selected', 'false');
  linkContact.innerHTML = 'Contact';
  navDiv.appendChild(linkContact);
  const navTabs = document.createElement('div');
  navTabs.classList.add('tab-content');
  navTabs.setAttribute('id', 'nav-tabContent');
  colTabs.appendChild(navTabs);
  const menuContent = document.createElement('div');
  menuContent.classList.add('tab-pane');
  menuContent.classList.add('fade');
  menuContent.classList.add('show');
  menuContent.classList.add('active');
  menuContent.setAttribute('id', 'nav-home');
  menuContent.setAttribute('role', 'tabpanel');
  menuContent.setAttribute('aria-labelledby', 'nav-home-tab');
  navTabs.appendChild(menuContent);
  const contactContent = document.createElement('div');
  contactContent.classList.add('tab-pane');
  contactContent.classList.add('fade');
  contactContent.setAttribute('id', 'nav-profile');
  contactContent.setAttribute('role', 'tabpanel');
  contactContent.setAttribute('aria-labelledby', 'nav-profile-tab');
  navTabs.appendChild(contactContent);
  return element;
}

export default pageLoad;

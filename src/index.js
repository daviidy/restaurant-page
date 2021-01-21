import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {pageLoad} from './page_load'
import {menuContent} from './menu_content'
import {contactContent} from './contact_content'

const content = document.getElementById('content');
content.appendChild(pageLoad());

const menu = document.getElementById('nav-home');
menu.appendChild(menuContent());

const contact = document.getElementById('nav-profile');
contact.appendChild(contactContent());

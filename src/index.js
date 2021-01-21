import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {pageLoad} from './page_load'

const content = document.getElementById('content');
content.appendChild(pageLoad());

const contactContent = () => {
  const row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('mt-2');
  row.classList.add('p-4');
  const form = document.createElement('form');
  const emailDiv = document.createElement('div');
  emailDiv.classList.add('form-group');
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.innerHTML = 'Email Address';
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Enter email');
  emailInput.setAttribute('id', 'email');
  emailInput.classList.add('form-control');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.innerHTML = 'Submit';
  form.appendChild(emailDiv);
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  form.appendChild(button);
  row.appendChild(form);


  return row;
}

export {contactContent}
